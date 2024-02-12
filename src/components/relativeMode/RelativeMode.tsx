import styles from "./RelativeMode.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";
import { GetRelativeResult } from "../../lib/relativeCalculations";
import { changeDateMode } from "../../features/dateMode";

export const RelativeMode: React.FC = () => {
  const [operationType, setOperationType] = useState<string>("Seconds ago");
  const [value, setValue] = useState<number>(0);

  const currentDate: Date = useAppSelector(
    (state) => state.dateChanger.currentDate
  );
  const dispatch = useAppDispatch();

  const currentRelativeDate: Date = GetRelativeResult(
    currentDate,
    operationType,
    value
  );

  console.log(value);

  return (
    <div className={styles.relativeModeContainer}>
      <input
        type="number"
        onChange={(e) => {
          setValue(() => +e.target.value);
          dispatch(dateChanging(currentRelativeDate));
        }}
      />
      <select
        name="operation"
        value={operationType}
        className={styles.selection}
        onChange={(e) => {
          setOperationType(() => e.target.value);
        }}
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
  );
};
