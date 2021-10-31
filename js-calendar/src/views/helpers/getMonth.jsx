import React from 'react';


function CurrentMonth(){
    let months = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

    let today = new Date();


    let month = today.getMonth();

    for(let i = 0; i < months.length; i++){
        if(month === i){
            // return months[month]

        return(
            <div className="current-month">
                <h1>{months[month]}</h1>
            </div>
        )
    }}
}

export default CurrentMonth; 