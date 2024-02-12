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
    dispatch(dateChanging(new Date(data.exampleRequired)));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.dataInformation}>
        <button
          type="submit"
          className={styles.startButton}
          // disabled={!isValid}
        >
          {position === "left" ? "Start date" : "End date"}
        </button>
        <input
          type="text"
          placeholder={currentDate.toString().slice(0, 24)}
          className={styles.informationInput}
          // value={currentDate.toString().slice(0, 24)}
          {...register("exampleRequired", {
            required: "Expected format MMM D, YYYY @ HH:mm:ss",
          })}
        />
      </div>
      {errors.exampleRequired && (
        <span className={styles.error}>{errors.exampleRequired.message}</span>
      )}
    </form>
  );
};
