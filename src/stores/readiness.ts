// import moduleName from 'valtio'

import fontsStore, { waitForFont } from './fonts'
import logoStore from './logo'
import loaderStore from './loader'

// Prevent flash animations
const MinWaitingTime = 500
const FontTimeout = 1500

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const initialize = async () => {
  const promises = [
    sleep(MinWaitingTime),
    waitForFont([{ family: 'Rubik' }], FontTimeout),
  ]

  // Wait for all promises to settle regardless of state
  await Promise.allSettled(promises)

  loaderStore.isLoading = false
  logoStore.logoPos = 'in-header'
  fontsStore.isFontsLoaded = true
}
