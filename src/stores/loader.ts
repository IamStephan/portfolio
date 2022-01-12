import { proxy, useSnapshot } from 'valtio'

interface IStore {
  isLoading: boolean
}

const store = proxy<IStore>({
  isLoading: true,
})

export const useLoaderStore = () => useSnapshot(store)

export default store
