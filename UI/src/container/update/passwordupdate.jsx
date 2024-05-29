import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';


export default function Changepassword(){
    const [oldpass,setOldpass]=useState();
    const [newPassword,setnewPassword]=useState();
    const [email,setEmail]=useState();
    
    const submitHandler=async()=>{
        const token = localStorage.getItem("token");
        axios.post('http://localhost:4000/appuser/changepassword', {
            email: email,
            oldpass: oldpass,
            newPassword: newPassword

          },{
            headers:{
              Authorization : `Bearer ${token}`
              }
          })
          .then(function(response){
            console.log(response);
          }) .catch(function (error) {
            console.log(error);
          });
    }


    return(
        <div>
            <Box>
            <TextField id="UserEmail" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField id="Old Password" label="Old password" variant="outlined" onChange={(e)=>{setOldpass(e.target.value)}}/>
            <TextField id="New Password" label="New Password" variant="outlined" onChange={(e)=>{setnewPassword(e.target.value)}}/>
            <button className="button-81" role="button" onClick={submitHandler}>Submit</button>
            </Box>
        </div>
    )
}