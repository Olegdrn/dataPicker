import React from "react";
import styles from './DailyTime.module.scss';
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";



export const DailyTime: React.FC = () => {

  const dispatch = useAppDispatch();
 

  return (
  <>
  <div className={styles.container}>

  </div>
  </>
  )

}