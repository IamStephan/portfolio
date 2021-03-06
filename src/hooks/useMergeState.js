import { useCallback, useState } from 'react'

export const useMergeState = (initialState) => {
  const [state, set] = useState(initialState)

  const setMergeState = useCallback((patch) => {
    set((prev) => Object.assign({}, prev, typeof path === 'function' ? patch(prev) : patch))
  }, [set])

  const resetState = useCallback(() => {
    set(initialState)
  }, [set])

  return [state, setMergeState, resetState]
}