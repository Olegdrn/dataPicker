import React from "react";
import { DaysAmountInThePanel } from "../date/daysAmountInThePanel";
import { DecreaseMonths} from "../date/decreaseMonths";
import { IncreaseMonths} from "../date/increaseMonths";
import {monthsListFull,daysWeekShort } from "../../data";
import styles from './Calendar.module.scss';
import vectorLeft from "../../assets/img/VectorLeft.svg";
import vectorRight from "../../assets/img/VectorRight.svg";
import { GetYearsList } from "../date/getYearsList";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";
import {changePanelMode} from "../../features/panelModeState";


export const Calendar: React.FC = () => {
  const currentDate: Date = useAppSelector((state)=> state.dateChanger.currentDate);
  const panelMode: string = useAppSelector((state)=> state.modeChanger.panelMode);
  const dispatch = useAppDispatch();

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
    dispatch(dateChanging(DecreaseMonths(currentDate)));
  }

  function increaseMonths(): void {
    dispatch(dateChanging(IncreaseMonths(currentDate)));
  }

  function changeModeToMonths(): void {
    dispatch(changePanelMode('months'));
  }

  function changeModeToYears(): void {
    dispatch(changePanelMode('years'));
  }

  function changeModeToDays(): void {
    dispatch(changePanelMode('days'));
  }


  return (
  <>
  <div className={styles.container}>
    {panelMode === 'days'&&(
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

    {panelMode === 'months'&& (
      <>
      <div className={styles.generalInfo}>
        <p className={styles.year} onClick={changeModeToYears}>
          {currentDate.getFullYear()}
        </p>
      </div>
      <div className={styles.monthsList}>
        {monthsListFull.map((value:string, index:number)=>
        <p className={styles.monthsCell} key={index}
          onClick={()=>{
            dispatch(dateChanging(new Date(currentDate.getFullYear(), index, 1)))
            changeModeToDays();
          }}>
            {value}
        </p>
        )}
      </div>
      </>
    )}
    {panelMode === 'years'&& (
          <>
            <div className={styles.generalInfo}>
              <p className={styles.year} onClick={changeModeToYears}>
                {currentDate.getFullYear()}
              </p>
            </div>
            <div className={styles.monthsList}>
              {GetYearsList(currentDate).map((value:number, index:number)=>
              <p className={styles.monthsCell} key={index} onClick={()=>{
                dispatch(dateChanging(new Date(value, 0, 1)))
                changeModeToMonths();
              }}>
                {value}
               </p>
              )}
            </div>
          </>
    )}
  </div>
  </>
  )

}