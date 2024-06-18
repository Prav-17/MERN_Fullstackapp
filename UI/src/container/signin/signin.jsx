import React from "react";
import { useState,useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import ResponsiveAppBar from "../navbar/navbar";

export default function Signin(){
    
    const [Premium, setPremium] = React.useState('nonpremiumuser');
    const [name,setName]= useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [contact,setContact]=useState();
    const [country,setCountry]=useState();
    const [pincode,setPincode]=useState();

    const submitHandler=()=>{
        console.log(name);
        console.log(email);
        axios.post('http://localhost:4000/appuser/userregister', {
            name:name,
            contact:contact,
            country:country,
            pincode:pincode,
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
    
    
    return(
        <div>
          <ResponsiveAppBar/>
        <h1>Sign up</h1>
        <FormControl>
        <TextField
             required
             id="standard-required"
             label="Name"
             variant="standard"
             onChange={(e)=>{setName(e.target.value)}}
        />
          <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
          onChange={(e)=>{setEmail(e.target.value)}}
        />
         <TextField
          required
          id="standard-required"
          label="Password"
          variant="standard"
          type="password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
         <TextField
          required
          id="standard-required"
          label="Contact"
          variant="standard"
          onChange={(e)=>{setContact(e.target.value)}}
        />
          <TextField
          id="standard-required"
          label="Country"
          variant="standard"
          onChange={(e)=>{setCountry(e.target.value)}}
        />
   
         <TextField
          id="standard-required"
          label="Pincode"
          variant="standard"
          onChange={(e)=>{setPincode(e.target.value)}}
        />  
        
        <FormLabel id="demo-controlled-radio-buttons-group">Do you want premium subscription?</FormLabel>
        <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={Premium}
        onChange={(e)=>{setPremium(e.target.value)}}
        >
       <FormControlLabel value="Premiumuser" control={<Radio />} label="Yes" />
       <FormControlLabel value="nonpremiumuser" control={<Radio />} label="No" />
  </RadioGroup>
        </FormControl>
        <br></br>
        <button className="button-81" role="button" onClick={submitHandler}>Submit</button>
        </div>
    )
}