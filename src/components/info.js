import './Info.css';

const Info = () =>  {

	const onClick = () => {
		
	}
	
	return (
		<div className="infoSection">
			<form>
				<p className = "uNameTitle">Name</p>
				<input type="text" id = "username" name = "uName"/>
				<p>Salary</p>
				<input type="text" id = "salary" name = "uMoney"/>
				<p>Tax</p>
				<input type="text" id = "tax" name = "uTax"/>
				<p>Phone</p>
				<input type="text" id = "phoneBill" name = "uPhone"/>
				<p>Electricity</p>
				<input type="text" id = "electricity" name = "uElec"/>
				<p>Rent</p>
				<input type="text" id = "rent" name = "uRent"/>
				<p>Internet</p>
				<input type="text" id = "internet" name = "uNet"/>
				<p>Insurance</p>
				<input type="text" id = "insurance" name = "uInsure"/>
				<p>Car</p>
				<input type="text" id = "carpay" name = "uCar"/>
				<p>Mortgage</p>
				<input type="text" id = "mortgage" name = "uMort"/>
				<p>Water</p>
				<input type="text" id = "water" name = "uWater"/>
				<p>Subscriptions</p>
				<input type="text" id = "subs" name = "uSub"/>
				<p>Entertainment</p>
				<input type="text" id = "entertainment" name = "uFun"/>
			</form>
			<button type="button" onClick={onClick}>Submit</button>
		</div>
	)
}

export default Info