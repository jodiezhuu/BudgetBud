import './Info.css';
import React from "react";
import { useForm } from "react-hook-form";

const Info = () =>  {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("budgetBud.Salary"));
  
    return (
      <form className='infoSection'
	  onSubmit={handleSubmit(onSubmit)}>

        <p className='form'>Salary</p>
        <input className='input'
		{...register("budgetBud.Salary", {
            required: true,
            pattern: /^(0|[1-9][0-9]*)$/i
        })} />
        {errors.Salary?.type === "required" && <span>Oops! You forgot to enter your salary.</span>}
        {errors.Salary?.type === "pattern" && <span>Make sure your salary is to the nearest dollar!</span>}

        <p className='form'>Tax</p>
        <input className='input' {...register("budgetBud.Tax")} />

        <p className='form'>Phone</p>
        <input className='input' {...register("budgetBud.Phone")} />

        <p className='form'>Utilities</p>
        <input className='input' {...register("budgetBud.Utilities")} />

        <p className='form'>Rent</p>
        <input className='input' {...register("budgetBud.Rent")} />

        <p className='form'>Insurance</p>
        <input className='input' {...register("budgetBud.Insurance")} />

        <p className='form'>Car</p>
        <input className='input' {...register("budgetBud.Car")} />

        <p className='form'>Mortgage</p>
        <input className='input' {...register("budgetBud.Mortgage")} />

        <p className='form'>Food</p>
        <input className='input' {...register("budgetBud.Food")} />
	<div><br/><br/><br/><br/><br/></div>
      </form>
    );
}

export default Info
