import './Info.css';
import React from "react";
import { useForm } from "react-hook-form";

const Info = () =>  {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("budgetBud.Salary"));
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>
        <input {...register("budgetBud.Name")} />

        <p>Salary</p>
        <input {...register("budgetBud.Salary", {
            required: true,
            pattern: /^(0|[1-9][0-9]*)$/i
        })} />
        {errors.Salary?.type === "required" && <span>Oops! You forgot to enter your salary.</span>}
        {errors.Salary?.type === "pattern" && <span>Make sure your salary is to the nearest dollar!</span>}

        <p>Tax</p>
        <input {...register("budgetBud.Tax")} />

        <p>Phone</p>
        <input {...register("budgetBud.Phone")} />

        <p>Electricity</p>
        <input {...register("budgetBud.Electricity")} />

        <p>Rent</p>
        <input {...register("budgetBud.Rent")} />

        <p>Insurance</p>
        <input {...register("budgetBud.Insurance")} />

        <p>Car</p>
        <input {...register("budgetBud.Car")} />

        <p>Mortgage</p>
        <input {...register("budgetBud.Mortgage")} />

        <p>Water Bill</p>
        <input {...register("budgetBud.WaterBill")} />

        <p>Subscriptions</p>
        <input {...register("budgetBud.Subscriptions")} />

        <p>Entertainment</p>
        <input {...register("budgetBud.Entertainment")} />

        <input type="submit" />
      </form>
    );
}

export default Info
