import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Savings.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Info from "./Info.js"
const Savings = () => {
   console.log(document.getElementsByClassName("input")[1])
    const [save, setSave] = useState(0);    
        return (
        <>  
                <div className='savings'>
            <h1 className='title'>Your Savings</h1>
            <h2 className='caption'>This graph shows your recommended amount to save this month!</h2>
            <CircularProgressbar className='progresscirclesav' 
            value={save} 
            text={`$${save}`} 
            styles={buildStyles({
                textColor: "#8E8D8A",
                pathColor: '#e98074',
                trailColor: '#EAE7DC',
            })  

        }   
            />  
        <button className = 'savingsUpdateButton' onClick={() => setSave(
		(document.getElementsByClassName("input")[0].value
                        - document.getElementsByClassName("input")[1].value
                        - document.getElementsByClassName("input")[2].value
                        - document.getElementsByClassName("input")[3].value
                        - document.getElementsByClassName("input")[4].value
                        - document.getElementsByClassName("input")[5].value
                        - document.getElementsByClassName("input")[6].value
                        - document.getElementsByClassName("input")[7].value
                        - document.getElementsByClassName("input")[8].value)/4



	)}>
                Update Values
         </button>
                </div>
        </> 
    );  
}

export default Savings
