import React, {useState} from 'react';


function CurrentMonth(){
    let months = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

    let today = new Date();


    let month = today.getMonth();

    for(let i = 0; i < months.length; i++){
                        if(month === i){
                            // return months[month]

                        return(
                            <div>
                                Month: {months[month]}
                            </div>
                        )
    }}
}

export default CurrentMonth; 