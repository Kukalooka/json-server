import React, { useState } from "react";
import Third from "./Third";

function Second(props){
    const saveInnerDataHandler = (enteredInnerData) =>{
        props.onSaveInnerData(enteredInnerData);
    }

    return(
        <div>
            <h1>Second</h1>
            <Third onSaveInnerData = {saveInnerDataHandler} />
        </div>
    );
}

export default Second;