import React, {useState} from 'react';


function CurrentDate(){

    
    let today = new Date();

    const [date] = useState(today.getDate());
    const [month] = useState(today.getMonth() + 1);
    const [year] = useState(today.getUTCFullYear());


    return(
        <div>
            <p> 
                {month} / {date} / {year}
            </p>
        </div>
    )
}


export default CurrentDate;