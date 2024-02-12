
import { LeapYearCheck } from "./leapYearCheck";

interface Panel {
  daysAmountInThePreviousMonths: number[];
  daysAmountInTheCurrentMonths: number[];
  daysAmountInTheNextMonths: number[];
}

export function DaysAmountInThePanel(year:number, month:number):Panel {

  const daysAmountInTheCurrentMonths: number[] = [];
  const daysAmountInThePreviousMonths: number[] = [];
  const daysAmountInTheNextMonths: number[] = [];

  const amountDaysInTheMonths: number[] = LeapYearCheck(year);

  const firstDayInTheCurrentMonths:Date =new Date(year, month,1);

  const lastDayInTheCurrentMonths:Date = new Date(year, month,amountDaysInTheMonths[month]);

  

  const TheWeekDayOfTheFirstMonthsDay:number = firstDayInTheCurrentMonths.getDay();

  const TheWeekDayOfTheLastMonthsDay:number = lastDayInTheCurrentMonths.getDay();

  let firstDayInThePanel: number;

  if (month === 0 && TheWeekDayOfTheFirstMonthsDay === 0){
    firstDayInThePanel= (new Date(year-1, 11,
      amountDaysInTheMonths[11]).getDate() + TheWeekDayOfTheFirstMonthsDay - 5)
      console.log(firstDayInThePanel)
  } else if(TheWeekDayOfTheFirstMonthsDay === 0) {
    firstDayInThePanel= (new Date(year, month-1,
      amountDaysInTheMonths[month-1]).getDate() + TheWeekDayOfTheFirstMonthsDay - 5)
  } else if (month === 0) {
    firstDayInThePanel = (new Date(year-1, 11,
      amountDaysInTheMonths[11]).getDate() - TheWeekDayOfTheFirstMonthsDay+2);
  } else {
    firstDayInThePanel = (new Date(year, month-1,
      amountDaysInTheMonths[month-1]).getDate() - TheWeekDayOfTheFirstMonthsDay+2);
  }


  const lastDayInThePanel: number = new Date(year, 
    month+1, 7 - TheWeekDayOfTheLastMonthsDay)
    .getDate();

  if (month === 0) {
    for (let index:number = amountDaysInTheMonths[11]; 
      index >=  firstDayInThePanel; 
      index--
      ) {
        daysAmountInThePreviousMonths.unshift(index);
     }
  } else {
    for (let index:number = amountDaysInTheMonths[month-1]; 
      index >=  firstDayInThePanel; 
      index--
      ) {
        daysAmountInThePreviousMonths.unshift(index);
     }
  }

 for (let index:number = 1; index <= amountDaysInTheMonths[month]; index++) {
  daysAmountInTheCurrentMonths.push(index);
 }

 for (let index:number = 1; index <= lastDayInThePanel; index++) {
  daysAmountInTheNextMonths.push(index);
 }

 const panel: Panel = {
  daysAmountInThePreviousMonths: daysAmountInThePreviousMonths, 
  daysAmountInTheCurrentMonths: daysAmountInTheCurrentMonths, 
  daysAmountInTheNextMonths: daysAmountInTheNextMonths, 
 }

  return panel;
}