import React, {useState} from 'react'

import CurrentDate from './helpers/getDate';

import CurrentMonth from './helpers/getMonth';


function Calendar(){
    return(
        <div className="month-component">
            <CurrentMonth />   
            <CurrentDate />
        </div>
    )
}

export default Calendar;