import React, {Fragment} from "react";
import {TextField,Button,Typography} from "@mui/material"


const Registrpage = () => {
    return (
        <>
        <Typography variant="h2" fontFamily='Popins' textAlign='center'>Registration</Typography>
        <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center'>Enter info to create account</Typography>
        <TextField fullWidth={true} margin='normal' label="name" variant="outlined" placeholder="enter your name"/>
        <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Enter your email" />
        <TextField fullWidth={true} margin='normal' label="nickname" variant="outlined" placeholder="enter your nickname"/>
        <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="enter your password"/>
        <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="enter again your password"/>
        <Button sx={{fontFamily: 'popins', marginTop: 2,marginBottom: 2, width: '40%'}} variant="contained">Registration</Button>
        <Typography variant="body1" sx= {{fontFamily: 'popins'}}>You have account? <span className="incitingtext">login</span></Typography>
        </>
    );
}

export default Registrpage;