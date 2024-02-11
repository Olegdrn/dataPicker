import React from "react";
import styles from './DailyTime.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";
import { timeList } from "../date/getLocalTime";



export const DailyTime: React.FC = () => {

  const currentDate: Date = useAppSelector((state)=> state.dateChanger.currentDate);
  
  const days:number = currentDate.getDate();
  const months:number = currentDate.getMonth();
  const year:number = currentDate.getFullYear();


  const dispatch = useAppDispatch();

  const setDailyTime: (value:string)=> void = (value)=>{
    const hours:number = +value.slice(0,2);
    const mins:number = +value.slice(3,5);
    dispatch(dateChanging(new Date(year,months,days,hours,mins,0)))
  }

 
  return (
  <>
    <div className={styles.dailyTime}>
      {timeList().map((value:string, index:number)=>
        <p key={index} className={styles.dailyTimeCell} onClick={
          ()=> {setDailyTime(value)}
        }>
          {value}
        </p>
      )}
    </div>
  </>
  )

}