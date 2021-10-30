import React, {useState} from 'react';


function CurrentMonth(){

    var dt = new Date();
    var month = dt.getMonth();
    var year = dt.getFullYear();
    let daysInMonth = new Date(year, month, 0).getDate();

    return(
        <div>
            Month: {console.log(daysInMonth)}
        </div>
    )
}

export default CurrentMonth; 