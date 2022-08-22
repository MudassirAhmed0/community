export function timeFormat(value: number): string {
  return value > 12 ? `${value - 12}:00PM` : `${value}:00AM`;
}
