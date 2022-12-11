import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import LoginPage from './login';
import Registrpage from './registration';
import "./style.scss";
import {Box} from '@mui/material'
import { initInputToken } from 'antd/es/input/style';

const AuthRootComponent = () => {

    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    const handlSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log(email)
    } 
    

    const Location = useLocation()

    return (
        <div className='root'>
            <form className="form" onSubmit={handlSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth='auto'
                    margin='auto'
                    padding={5} 
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >              
        {Location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : Location.pathname === '/registration' ? <Registrpage /> : null}
                </Box>
            </form>
        </div>

    )
}

export default AuthRootComponent;