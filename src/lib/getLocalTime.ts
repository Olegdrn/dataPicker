export function timeList(): string[] {
  const timeArray: string[] = [];

  for (let i = 0; i <= 23; i++) {
    for (let j = 0; j < 60; j += 30) {
      const currentDay: Date = new Date(2000, 1, 1, i, j);
      timeArray.push(currentDay.toTimeString().slice(0, 5));
    }
  }

  return timeArray;
}
