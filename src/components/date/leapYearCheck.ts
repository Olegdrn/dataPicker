
export function LeapYearCheck(year:number){

  let daysInTheMonths: number[] = [];
  
  if(year%4===0){
    daysInTheMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
  } else {
    daysInTheMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
    }
  return daysInTheMonths;

  }