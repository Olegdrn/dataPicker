export function DecreaseMonths(currentDate: Date): Date {
  if (currentDate.getMonth() === 0) {
    const year: number = currentDate.getFullYear();
    return new Date(year - 1, 11, 15);
  } else {
    const months: number = currentDate.getMonth();
    const year: number = currentDate.getFullYear();
    return new Date(year, months - 1, 15);
  }
}
