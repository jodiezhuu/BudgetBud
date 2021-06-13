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
                <CircularProgressbar className="expprogressbar"
                value={exp} 
                text={`$${exp}`}
                styles={buildStyles({
                    textColor: '#8E8D8A',
                    pathColor: '#ad9c84',
                })
                }
                />
                <button onClick={() => setExp(
			document.getElementsByClassName("input")[0].value
			- document.getElementsByClassName("input")[1].value
			- document.getElementsByClassName("input")[2].value
			- document.getElementsByClassName("input")[3].value
			- document.getElementsByClassName("input")[4].value
			- document.getElementsByClassName("input")[5].value
			- document.getElementsByClassName("input")[6].value
			- document.getElementsByClassName("input")[7].value
			- document.getElementsByClassName("input")[8].value
		)}>
                        Update Values
                </button> 
            </div>
        </>
    );
}

export default Expenditures
