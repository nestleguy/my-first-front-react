import React, {Fragment} from "react";
import {TextField,Button,Typography} from "@mui/material"

const LoginPage = (props: any) => {
    const {setPassword, setEmail} = props
    return (
        
        <>
            <Typography variant="h3" fontFamily='Popins' textAlign='center'>Hello Гігачад</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center'>Enter email and password</Typography>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Enter your email" onClick={(event: any) => setEmail(event.target.value)} />
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="enter your password" onClick={(event: any) => setPassword(event.target.value)}/>
            <Button type="submit" sx={{fontFamily: 'popins', marginTop: 2,marginBottom: 2, width: '40%'}} variant="contained">Login</Button>
            <Typography variant="body1" sx= {{fontFamily: 'popins'}}>You have account? <span className="incitingtext"> Registration</span></Typography>

            {/* <form action="./src/test/confirmation.php" method="post">
        <label>Username: <input type="text" name="username"></input></label>
        <label>Password: <input type="password" name="userpass"></input></label>
        <input type="submit" value="Submit"></input>
        <input type="radio" name="gender" id="male"></input>
         <label htmlFor="male">Male</label>
         <input type="radio" name="gender" id="female"></input>
         
         <label htmlFor="female">Female</label>
         </form> */}
        </>
    );

    };

    export default LoginPage;