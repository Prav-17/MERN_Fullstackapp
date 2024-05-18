import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import "./login.css"
import axios from 'axios';

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const submitHandler=async()=>{
        console.log(email);
        console.log(password);
        axios.post('http://localhost:4000/appuser/userlogin', {
          email: email,
          password: password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  
  return (
    <div>
    <FormControl variant="standard">
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Email" variant="standard" onChange={(e)=>{setEmail(e.target.value)}} />   
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>{setPassword(e.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
      
      
      
      
      {/* <TextField id="input-with-sx" label="Password" variant="standard"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            } onChange={(e)=>{setPassword(e.target.value)}} />  */}
    </Box>
    </FormControl>
    <br></br>
    {/* <img src={'https://i.ibb.co/QkNBy3b/eren-attack-on-titan-final-season-part-3-4k-wallpaper-uhdpaper-com-917-1-j.jpg'} style={{width:"200px"}}></img> */}
    <button className="button-81" role="button" onClick={submitHandler}>Submit</button>
    </div>
);
}


