import React, {useState} from 'react';

var today = new Date();

function CurrentDate(){

    const [date, setDate] = useState(today.getDate());
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getUTCFullYear());

    return(
        <div>
            <ul>
                <li> Current day: {date} </li>
                <li> Current Month: {month} </li>
                <li> Current Year: {year} </li>
            </ul>
        </div>
    )
}


export default CurrentDate;