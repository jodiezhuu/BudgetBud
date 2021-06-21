import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Expenditure.css'
import Info from "./Info.js"

const Expenditures = () => {
    const [exp, setExp] = useState(0);    
    return (
        <>
            <div className="expenditures">
                <h1 className='exptitle'>Total Expenditure</h1>
                <h2 className='expcaption'>Here, you can see your expenditures for the month.</h2>

                <h2 className="expcaption">Recommended amount for entertainment: {0.15*exp}</h2>
                <h2 className="expcaption">Recommended amount for clothes: {0.05*exp}</h2>
                <h2 className="expcaption">Recommended amount for medical savings: {0.20*exp}</h2>
                <h2 className="expcaption">Recommended amount for emergancy fund: {0.20*exp}</h2>
                <h2 className="expcaption">Recommended amount for other spending: {0.40*exp}</h2>

                <button className = "buttonCenter" onClick={() => setExp(

			(document.getElementsByClassName("input")[0].value 
			- document.getElementsByClassName("input")[1].value
			- document.getElementsByClassName("input")[2].value
			- document.getElementsByClassName("input")[3].value
			- document.getElementsByClassName("input")[4].value
			- document.getElementsByClassName("input")[5].value
			- document.getElementsByClassName("input")[6].value
			- document.getElementsByClassName("input")[7].value
			- document.getElementsByClassName("input")[8].value)*3/4 
		)}>
                        Update Values
                </button> 
            </div>
        </>
    );
}

export default Expenditures
