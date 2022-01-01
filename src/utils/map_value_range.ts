export const mapValueRange = (
  value: number,
  r1: [number, number],
  r2: [number, number]
) => {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0]
}
