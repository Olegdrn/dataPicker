import React from "react";
import styles from './Calendar.module.scss';
import { useAppSelector } from "../../hooks/redux";
import { Months } from "../monthsMode/Months"; 
import { Years } from '../yearsMode/Years';
import { Days } from '../daysMode/Days';



export const Calendar: React.FC = () => {

  const currentDate: Date = useAppSelector((state)=> state.dateChanger.currentDate);
  const panelMode: string = useAppSelector((state)=> state.modeChanger.panelMode);
  const panelPosition: string = useAppSelector((state)=> state.positionChanger.side);

  return (
  <>
    <div className={styles.container}>
        <div className={panelPosition==='left'? styles.left : styles.right}></div>
        <div className={styles.header}>
          <button className={styles.headerButton}>Absolute</button>
          <button className={styles.headerButton}>Relative</button>
          <button className={styles.headerButton}>Now</button>
        </div>
        {panelMode === 'days'&&(
          <Days/>
        )}
        {panelMode === 'months'&& (
          <Months/>
        )}
        {panelMode === 'years'&& (
          <Years/>
        )}
        

        {panelPosition==='left' &&(
          <div className={styles.dataInformation}>
            <button className={styles.startButton}>
              Start date
            </button>
            <input type="text" className={styles.informationInput} 
              value={currentDate.toString().slice(0,24)}
            />
          </div>)
        }

        {panelPosition==='right'&&(
          <div className={styles.dataInformation}>
            <button className={styles.startButton}>
              End date
            </button>
            <input type="text" className={styles.informationInput} 
            value={currentDate.toString().slice(0,24)}
            />
         </div>
          )
        }  
    </div>
  </>
  )

}
