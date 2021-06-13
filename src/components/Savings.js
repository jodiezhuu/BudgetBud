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
            text={`$${save/5}`} 
            styles={buildStyles({
                textColor: "#8E8D8A",
                pathColor: '#e98074',
                trailColor: '#EAE7DC',
            })  

        }   
            />  
        <button onClick={() => setSave(document.getElementsByClassName("input")[1].value)}>
                Update Values
         </button>
                </div>
        </> 
    );  
}

export default Savings
