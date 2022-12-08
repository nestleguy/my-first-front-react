import React from "react";
import style from "./style.module.css";
import Greeting from "./greeting";

const LoginPage = () => {
    const name ='Alex'
    return (
        <div>
            <Greeting name={name}/>
            <h1 className={style.heading}>Login page</h1>
            <form action="./src/test/confirmation.php" method="post">
        <label>Username: <input type="text" name="username"></input></label>
        <label>Password: <input type="password" name="userpass"></input></label>
        <input type="submit" value="Submit"></input>
        <input type="radio" name="gender" id="male"></input>
         <label htmlFor="male">Male</label>
         <input type="radio" name="gender" id="female"></input>
         
         <label htmlFor="female">Female</label>
         </form>
        </div>
    );

    };

    export default LoginPage;