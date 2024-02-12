import styles from './RelativeMode.module.scss';
import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { relativeValue, relativeOperation } from "../../features/relativeState";
import {dateChanging} from "../../features/dateState";
import { GetRelativeResult } from '../../lib/relativeCalculations';

export const RelativeMode: React.FC = () => {


  const value:number = useAppSelector(state=> state.relativeDataChanger.value)
  const operationType:string = useAppSelector(state=> state.relativeDataChanger.operation)
  const currentDate: Date = useAppSelector((state)=> state.dateChanger.currentDate);
  const dispatch = useAppDispatch();

  const currentRelativeDate:Date = GetRelativeResult(currentDate, operationType, value);



  return (
    <div className= {styles.relativeModeContainer}>

      <input type="number" onChange={e=>{
        dispatch(relativeValue(+(e.target.value)))
        dispatch(dateChanging(currentRelativeDate))
      }}
      />
      <select name="operation"  value={operationType}
        className={styles.selection} 
        onChange={e=>{
          dispatch(relativeOperation(e.target.value))
        }
      }
      >
        <option value="Seconds ago">Seconds ago</option>
        <option value="Minutes ago">Minutes ago</option>
        <option value="Hours ago">Hours ago</option>
        <option value="Days ago">Days ago</option>
        <option value="Seconds From now">Seconds From now</option>
        <option value="Minutes From now">Minutes From now</option>
        <option value="Hours From now">Hours From now</option>
        <option value="Days From now">Days From now</option>
      </select>

    </div>
  )

}
