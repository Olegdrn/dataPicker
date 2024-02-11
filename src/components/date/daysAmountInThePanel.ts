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

  TheWeekDayOfTheFirstMonthsDay === 0 ? firstDayInThePanel= (new Date(year, month-1,
    amountDaysInTheMonths[month-1]).getDate() + TheWeekDayOfTheFirstMonthsDay - 5):
    firstDayInThePanel = (new Date(year, month-1,
      amountDaysInTheMonths[month-1]).getDate() - TheWeekDayOfTheFirstMonthsDay+2);


  const lastDayInThePanel: number = new Date(year, 
    month+1, 7 - TheWeekDayOfTheLastMonthsDay)
    .getDate();

 for (let index:number = amountDaysInTheMonths[month-1]; 
  index >=  firstDayInThePanel; 
  index--
  ) {
    daysAmountInThePreviousMonths.unshift(index);
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