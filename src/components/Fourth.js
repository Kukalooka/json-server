import React, { useState } from "react";

function Fourth(props){
    const onChangeHandler = (e) => {
        e.preventDefault();
        props.onSaveInnerData(e.target.tekst.value);
    }
    return (
    <div>
        <form onSubmit={onChangeHandler}>
            <input type="text" name="tekst"/>
            <input type="submit" value="Save" />
        </form>
    </div>   
    );
}

export default Fourth;