// transform.ts
export function transform(value: number): number {
  if (value === undefined) {
    return 0;
  }
  if (value === null) {
    return 0;
  }
  if (value < 0) {
    return -1;
  }
  if (value === 0) {
    return 0;
  }
  return 1;
}
