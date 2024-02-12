import styles from "./Months.module.scss";
import React from "react";
import { monthsListFull } from "../../data";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";
import { changePanelMode } from "../../features/panelModeState";

export const Months: React.FC = () => {
  const currentDate: Date = useAppSelector(
    (state) => state.dateChanger.currentDate
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.generalInfo}>
        <p
          className={styles.year}
          onClick={() => {
            dispatch(changePanelMode("years"));
          }}
        >
          {currentDate.getFullYear()}
        </p>
      </div>
      <div className={styles.monthsList}>
        {monthsListFull.map((value: string, index: number) => (
          <p
            className={styles.monthsCell}
            key={index}
            onClick={() => {
              dispatch(
                dateChanging(new Date(currentDate.getFullYear(), index, 1))
              );
              dispatch(changePanelMode("days"));
            }}
          >
            {value}
          </p>
        ))}
      </div>
    </>
  );
};
