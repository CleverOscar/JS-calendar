import React, {useState} from 'react'

import CurrentDate from './helpers/getDate';


function Calendar(){
    return(
        <div>
            Calendar Component 

            <CurrentDate />
        </div>
    )
}

export default Calendar;