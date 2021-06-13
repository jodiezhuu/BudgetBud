import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Expenditure.css'

const Expenditures = () => {
    
    const percentage = 12;
    return (
        <>
            <div className="expenditures">
                <h1 className='exptitle'>Total Expenditure</h1>
                <h2 className='expcaption'>Here, you can see your expenditures for the month.</h2>
                <CircularProgressbar className="expprogressbar"
                value={percentage} 
                text={`${percentage}%`}
                styles={buildStyles({
                    textColor: '#8E8D8A',
                    pathColor: '#ad9c84',
                })
                }
                />
                {/* Overlapping progress bar*/}
                <CircularProgressbarWithChildren
                    value={80}
                    styles={buildStyles({
                    pathColor: "#f00",
                    trailColor: "#eee",
                    })}
                >
                    {/* Foreground path */}
                    <CircularProgressbar
                    value={70}
                    styles={buildStyles({
                        trailColor: "transparent",
                    })}
                    />
                </CircularProgressbarWithChildren>
            </div>
        </>
    );
}

export default Expenditures
