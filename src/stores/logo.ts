import { proxy, useSnapshot } from 'valtio'

export type TLogoPos = 'in-loader' | 'in-header'

interface IStore {
  logoPos: TLogoPos
}

const store = proxy<IStore>({
  logoPos: 'in-loader',
})

export const setLogoPos = (pos: TLogoPos) => (store.logoPos = pos)

export const useLogoStore = () => useSnapshot(store)

export default store
