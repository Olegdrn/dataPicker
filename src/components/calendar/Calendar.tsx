import React, { useState } from "react";
import { DaysAmountInThePanel } from "../date/daysAmountInThePanel";
import { DecreaseMonths} from "../date/decreaseMonths";
import { IncreaseMonths} from "../date/increaseMonths";
import {monthsListFull,daysWeekShort } from "../../data";
import styles from './Calendar.module.scss';
import vectorLeft from "../../assets/img/VectorLeft.svg";
import vectorRight from "../../assets/img/VectorRight.svg";

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tableType, settableType] = useState<'days'| 'months' | 'years'>('days');

  let {
    daysAmountInThePreviousMonths,
    daysAmountInTheCurrentMonths,
    daysAmountInTheNextMonths} = DaysAmountInThePanel(
      currentDate
        .getFullYear(),
      currentDate
        .getMonth()
    );
  
  function decreaseMonths(): void {
    setCurrentDate(DecreaseMonths(currentDate));
  }

  function increaseMonths(): void {
    setCurrentDate(IncreaseMonths(currentDate));
  }

  function changeModeToMonths(): void {
    settableType('months');
  }

  function changeModeToYears(): void {
    settableType('years');
  }




  return (
  <>
  <div className={styles.container}>
    {tableType === 'days'&&(
      <>
        <div className={styles.generalInfo}>
          <div className={styles.direction} onClick={decreaseMonths}>
            <img src={vectorLeft} alt="none"/>
          </div>
          <div className={styles.monthsYearInfo}>
            <h4 className={styles.months} onClick={changeModeToMonths} >
              {monthsListFull[currentDate.getMonth()]}
            </h4>
            <p className={styles.year} onClick={changeModeToYears}>
              {currentDate.getFullYear()}
            </p>
          </div>
          <div className={styles.direction} onClick={increaseMonths}>
            <img src={vectorRight} alt="none"/>
          </div>
        </div>
        <div className={styles.weekDays}>
          {daysWeekShort.map((value:string, index:number)=>
           <p key={index}>{value}</p>
          )}
        </div>
        <div className={styles.calendar}>
          {daysAmountInThePreviousMonths.map((value:number, index:number)=>
          <p className={styles.dayCellBefAft} key={index}>{value}</p>
          )}
          {daysAmountInTheCurrentMonths.map((value:number, index:number)=>
          <p className={styles.dayCell} key={index}>{value}</p>
          )}
          {daysAmountInTheNextMonths.map((value:number, index:number)=>
          <p className={styles.dayCellBefAft} key={index}>{value}</p>
          )}
        </div>
        <input type="text" />
      </>
    )}

    {tableType === 'months'&& (
      <div className={styles.monthsList}>
        {monthsListFull.map((value:string, index:number)=>
        <p className={styles.monthsCell} key={index}>{value}</p>
        )}
      </div>
      )}
    {tableType === 'years'&& (
      <div></div>
      )}
  </div>
  </>
  )

}