export function IncreaseMonths(currentDate:Date): Date {
  if(currentDate.getMonth() === 11){
    const year:number = currentDate.getFullYear();
    return new Date(year+1, 0, 10)
  } else {
    const months:number = currentDate.getMonth();
    const year:number = currentDate.getFullYear();
    return new Date(year, months+1, 10)
  }

}