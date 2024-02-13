import React, { useState } from "react";
import { DaysAmountInThePanel } from "../../lib/daysAmountInThePanel";
import { DecreaseMonths } from "../../lib/decreaseMonths";
import { IncreaseMonths } from "../../lib/increaseMonths";
import { monthsListFull, daysWeekShort } from "../../data";
import styles from "./Days.module.scss";
import vectorLeft from "../../assets/img/VectorLeft.svg";
import vectorRight from "../../assets/img/VectorRight.svg";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";
import { changePanelMode } from "../../features/panelModeState";
import { DailyTime } from "../dailyTime/DailyTime";

export const Days: React.FC = () => {
  const currentDate: Date = useAppSelector(
    (state) => state.dateChanger.currentDate
  );
  const dispatch = useAppDispatch();

  const putDaysInPrevious = (value: number) => {
    dispatch(
      dateChanging(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, value)
      )
    );
  };
  const putDaysInCurrent = (value: number) => {
    dispatch(
      dateChanging(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), value)
      )
    );
  };

  const putDaysInNext = (value: number) => {
    dispatch(
      dateChanging(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, value)
      )
    );
  };

  // const [cls, setCls] = useState('dayCell');

  let {
    daysAmountInThePreviousMonths,
    daysAmountInTheCurrentMonths,
    daysAmountInTheNextMonths,
  } = DaysAmountInThePanel(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <>
      <div className={styles.flex}>
        <div className={styles.daysTable}>
          <div className={styles.generalInfo}>
            <div
              className={styles.direction}
              onClick={() => {
                dispatch(dateChanging(DecreaseMonths(currentDate)));
              }}
            >
              <img src={vectorLeft} alt="none" />
            </div>
            <div className={styles.monthsYearInfo}>
              <h4
                className={styles.months}
                onClick={() => {
                  dispatch(changePanelMode("months"));
                }}
              >
                {monthsListFull[currentDate.getMonth()]}
              </h4>
              <p
                className={styles.year}
                onClick={() => {
                  dispatch(changePanelMode("years"));
                }}
              >
                {currentDate.getFullYear()}
              </p>
            </div>
            <div
              className={styles.direction}
              onClick={() => {
                dispatch(dateChanging(IncreaseMonths(currentDate)));
              }}
            >
              <img src={vectorRight} alt="none" />
            </div>
          </div>
          <div className={styles.weekDays}>
            {daysWeekShort.map((value: string, index: number) => (
              <p key={index}>{value}</p>
            ))}
          </div>
          <div className={styles.calendar}>
            {daysAmountInThePreviousMonths.map(
              (value: number, index: number) => (
                <p
                  className={styles.dayCellBefAft}
                  key={index}
                  onClick={() => {
                    putDaysInPrevious(value);
                  }}
                >
                  {value}
                </p>
              )
            )}
            {daysAmountInTheCurrentMonths.map(
              (value: number, index: number) => (
                <p
                  className={
                    currentDate.getDate() === index + 1
                      ? styles.dayCellClicked
                      : styles.dayCell
                  }
                  key={index}
                  onClick={() => {
                    putDaysInCurrent(value);
                  }}
                >
                  {value}
                </p>
              )
            )}
            {daysAmountInTheNextMonths.map((value: number, index: number) => (
              <p
                className={styles.dayCellBefAft}
                key={index}
                onClick={() => {
                  putDaysInNext(value);
                }}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <DailyTime />
      </div>
    </>
  );
};
