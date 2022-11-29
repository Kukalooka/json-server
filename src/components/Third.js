import React, { useState } from "react";
import Fourth from "./Fourth";

function Third(props){
    const saveInnerDataHandler = (enteredInnerData) =>{
        props.onSaveInnerData(enteredInnerData);
    }

    return(
        <div>
            <h1>Third</h1>
            <Fourth onSaveInnerData = {saveInnerDataHandler} />
        </div>
    );
}

export default Third;