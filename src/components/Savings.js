import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Savings.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Savings = () => {

    const percentage = 66;
    return (
        <>
		<div className='savings'>
            <h1 className='title'>Your Savings</h1>
            <h2 className='caption'>This graph shows your recommended amount to spend this month!</h2>
            <CircularProgressbar className='progresscirclesav' 
            value={percentage} 
            text={`${percentage}%`} 
            styles={buildStyles({
                textColor: "#8E8D8A",
                pathColor: '#e98074',
                trailColor: '#EAE7DC',
            })

        }
            />
		</div>
        </>
    );
}

export default Savings
