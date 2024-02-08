export function IncreaseMonths(currentDate:Date): Date {
  const year:number = currentDate.getFullYear();
  const months:number = currentDate.getMonth();

  if(currentDate.getMonth() === 11){
    return new Date(year+1, 0, 10)
  } else {
    return new Date(year, months+1, 10)
  }

}