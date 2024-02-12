import styles from './Years.module.scss';
import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";
import {changePanelMode} from "../../features/panelModeState";
import { GetYearsList } from "../../lib/getYearsList";

export const Years: React.FC = () => {

  const currentDate: Date = useAppSelector((state)=> state.dateChanger.currentDate);
  const dispatch = useAppDispatch();

  return (
    <>
          <div className={styles.generalInfo}>
              <p className={styles.year} onClick={()=>dispatch(changePanelMode('years'))}>
                {currentDate.getFullYear()}
              </p>
          </div>
          <div className={styles.monthsList}>
              {GetYearsList(currentDate).map((value:number, index:number)=>
              <p className={styles.monthsCell} key={index} onClick={()=>{
                dispatch(dateChanging(new Date(value, 0, 1)))
                dispatch(changePanelMode('months'));
              }}>
                {value}
               </p>
              )}
          </div>
     </>
  )

}