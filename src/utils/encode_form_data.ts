import { GenericObject } from '@/types/misc'

export const encodeFormData = (data: GenericObject) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
