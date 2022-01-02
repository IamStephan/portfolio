import objectHash from 'object-hash'

export const objectBasedHash = (data: Object, length: number = 8): string => {
  const hash = objectHash(data)
  return hash.substr(0, length)
}
