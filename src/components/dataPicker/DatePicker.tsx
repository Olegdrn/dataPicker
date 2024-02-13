import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../../types";
import styles from "./DataPicker.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dateChanging } from "../../features/dateState";

export const DataPicker: React.FC = () => {
  const currentDate: Date = useAppSelector(
    (state) => state.dateChanger.currentDate
  );
  const position: string = useAppSelector(
    (state) => state.positionChanger.side
  );
  const mode: string = useAppSelector(
    (state) => state.dateModeChanger.DateMode
  );

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const year: string = data.exampleRequired.slice(0, 10);
    const time: string = data.exampleRequired.slice(11, 20).replace(/-/g, ":");
    const full: string = `${year}T${time}`;
    console.log(full);
    dispatch(dateChanging(new Date(full)));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.dataInformation}>
        <button type="submit" className={styles.startButton}>
          {position === "left" ? "Start date" : "End date"}
        </button>
        <input
          type="text"
          placeholder={currentDate.toString().slice(0, 24)}
          className={styles.informationInput}
          {...register("exampleRequired", {
            pattern: /^\d{4}-\d{2}-\d{2}\s?@\s?\d{2}-\d{2}-\d{2}/,
          })}
        />
      </div>
      {errors.exampleRequired?.type === "pattern" && (
        <span className={styles.error}>
          Expected format "YYYY-MM-DD @ HH-MM-SS"
        </span>
      )}
    </form>
  );
};
