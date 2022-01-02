type TValues = string | number | null

/**
 *
 */
export const deepMapSync = (
  data: any,
  callback: (
    value: TValues,
    key: string | number
  ) => TValues | Object | Array<unknown>
): Object => {
  switch (true) {
    case Array.isArray(data): {
      const _data = data as Array<unknown>

      return _data.map((value, index) => {
        return typeof value === 'object'
          ? deepMapSync(value as object, callback)
          : callback(value as TValues, index)
      })
    }

    case typeof data === 'object': {
      let res: Record<string, TValues | Object | Array<unknown>> = {}
      for (const key in data) {
        const _value = data[key]

        if (typeof _value === 'object' || Array.isArray(_value)) {
          res[key] = deepMapSync(_value as Object, callback)
        } else {
          res[key] = callback(_value, key)
        }
      }

      return res
    }

    default: {
      return data
    }
  }
}

/**
 *
 */
export const deepMap = async (
  data: any,
  callback: (
    value: TValues,
    key: string | number
  ) => Promise<TValues | Object | Array<unknown>>
): Promise<Object> => {
  switch (true) {
    case Array.isArray(data): {
      const _data = data as Array<unknown>
      let res = []

      for (const index in _data) {
        const item = _data[index]
        if (typeof item === 'object') {
          const value = await deepMap(item, callback)
          res.push(value)
        } else {
          const value = await callback(item as TValues, index)
          res.push(value)
        }
      }

      return res
    }

    case typeof data === 'object': {
      let res: Record<string, TValues | Object | Array<unknown>> = {}
      for (const key in data) {
        const _value = data[key]

        if (typeof _value === 'object' || Array.isArray(_value)) {
          res[key] = await deepMap(_value as Object, callback)
        } else {
          res[key] = await callback(_value, key)
        }
      }

      return res
    }

    default: {
      return data
    }
  }
}
