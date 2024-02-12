import { useForm, SubmitHandler } from "react-hook-form";
import {Inputs} from "../../../types";


export const DataPicker: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { 
      errors,
      isValid
     },
  } = useForm<Inputs>({
      mode:"onBlur"
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset();
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("example", { required: "This field is required" })} />
      {errors.example && <span>{errors.example.message}</span>}
      
      <input {...register("exampleRequired", { required: "This field is required" })} />
      {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>}

      <input type="submit" value={"send"} disabled={!isValid}/>
    </form>
  )

}