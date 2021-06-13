import './Info.css';
import React from "react";
import { useForm } from "react-hook-form";

const Info = () =>  {

	var iName = "";
	var iMoney = "";
	var iTax = "";
	var iPhone = "";
	var iElec = "";
	var iRent = "";
	var iNet = "";
	var iInsure = "";
	var iCar = "";
	var iMort = "";
	var iWater = "";
	var iSub = "";
	var iFun = "";

	const onClick = () => {
		iName = document.getElementById("username").value;
		iMoney = document.getElementById("salary").value;
		iTax = document.getElementById("tax").value;
		iPhone = document.getElementById("phoneBill").value;
		iElec = document.getElementById("electricity").value;
		iRent = document.getElementById("rent").value;
		iNet = document.getElementById("internet").value;
		iInsure = document.getElementById("insurance").value;
		iCar = document.getElementById("carpay").value;
		iMort = document.getElementById("mortgage").value;
		iWater = document.getElementById("water").value;
		iSub = document.getElementById("subs").value;
		iFun = document.getElementById("entertainment").value;

	}
	
	return (
		<div className="infoSection">
			<form className='form'>
				<p>Name</p>
				<input className='input' type="text" id = "username" name = "uName"/>
				<p>Salary</p>
				<input className='input' type="text" id = "salary" name = "uMoney"/>
				<p>Tax</p>
				<input className='input' type="text" id = "tax" name = "uTax"/>
				<p>Phone</p>
				<input className='input' type="text" id = "phoneBill" name = "uPhone"/>
				<p>Electricity</p>
				<input className='input' type="text" id = "electricity" name = "uElec"/>
				<p>Rent</p>
				<input className='input' type="text" id = "rent" name = "uRent"/>
				<p>Internet</p>
				<input className='input' type="text" id = "internet" name = "uNet"/>
				<p>Insurance</p>
				<input className='input' type="text" id = "insurance" name = "uInsure"/>
				<p>Car</p>
				<input className='input' type="text" id = "carpay" name = "uCar"/>
				<p>Mortgage</p>
				<input className='input' type="text" id = "mortgage" name = "uMort"/>
				<p>Water</p>
				<input className='input' type="text" id = "water" name = "uWater"/>
				<p>Subscriptions</p>
				<input className='input' type="text" id = "subs" name = "uSub"/>
				<p>Entertainment</p>
				<input className='input' type="text" id = "entertainment" name = "uFun"/>
			</form>
			<button type="button" onClick={onClick}>Submit</button>
		</div>
	)

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
