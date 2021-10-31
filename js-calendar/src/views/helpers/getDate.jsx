import React, {useState} from 'react';


function CurrentDate(){

    
    let today = new Date();

    const [date] = useState(today.getDate());
    const [month] = useState(today.getMonth() + 1);
    const [year] = useState(today.getUTCFullYear());


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