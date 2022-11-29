import React, { useState, useEffect } from "react";
import Second from "./Second";

function First(props){
    const [title, setTitle] = useState('First');
    const saveInnerDataHandler = (enteredInnerData) =>{
        setTitle(enteredInnerData);
    }

    const[passwords, setPasswords] = useState([]);
    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/passwords`)
          .then((response) => response.json())
          .then((actualData) => setPasswords(actualData));

        fetch(`http://localhost:3000/users`)
          .then((response) => response.json())
          .then((actualData) => setUsers(actualData));
      }, []);


    return(
        <div>
            <h1>{title}</h1>
            <table>
                <tr>
                    <th>pass</th>
                    <th>crypt</th>
                </tr>
                {passwords.map((data, key) => {
                    return (
                    <tr>
                        <td>{data.pass}</td>
                        <td>{data.crypt}</td>
                    </tr>
                    );
                })}
                {users.map((data, key) => {
                    return (
                    <div>
                        {data.name + " " + data.surname}
                    </div>
                    );
                })}
            </table>
            <Second onSaveInnerData = {saveInnerDataHandler} />
        </div>
    );
}

export default First;