
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Savings = () => {

    const percentage = 66;
    return (
        <>
		<div style={{ width: 200, height: 200 }}>
            <h1>Your Savings</h1>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
		</div>
        </>
    );
}

export default Savings
