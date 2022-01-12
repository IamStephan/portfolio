import { proxy, useSnapshot } from 'valtio'

interface IStore {
  isOpen: boolean
}

const store = proxy<IStore>({
  isOpen: false,
})

export const openMobileMenu = () => (store.isOpen = true)
export const closeMobileMenu = () => (store.isOpen = false)
export const toggleMobileMenu = () => (store.isOpen = !store.isOpen)

export const useMobileMenu = () => useSnapshot(store)

export default store
