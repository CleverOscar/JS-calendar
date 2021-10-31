import React, {useState} from 'react'

import CurrentDate from './helpers/getDate';

import CurrentMonth from './helpers/getMonth';


function Calendar(){
    return(
        <div>
            Calendar Component 
            <CurrentDate />

            <CurrentMonth />
        </div>
    )
}

export default Calendar;