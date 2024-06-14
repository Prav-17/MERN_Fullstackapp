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
import {jwtDecode} from 'jwt-decode'
import "./login.css"
import axios from 'axios';

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [productName,setProductName]=useState("");
  const [product,setProduct]=useState("");
  const [stocks,setStocks]=useState("");
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
        // axios.post('http://localhost:5000/student/login', {
        //   name: email,
        //   password: password
        // })
        .then(function (response) {
          console.log(response);
          if(response.data){
            localStorage.setItem("token",response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  const getuser=async()=>{
    try{
    const token = localStorage.getItem("token");
    const decrpt=jwtDecode(token); //jwt decode
    console.log(decrpt);

    axios.get('http://localhost:4000/appuser/userdetails',{
    headers:{
      Authorization : `Bearer ${token}`
    },
    params:{
      email:decrpt.useremail
    }
    
    }).then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
        });
      }catch(err){
        console.error(err);
      }
  }
  
  const getProduct=async()=>{
    try{
    // const token = localStorage.getItem("token");
    // const decrpt=jwtDecode(token); //jwt decode
    // console.log(decrpt);

    axios.get('http://localhost:4000/product/getproduct',{
    // headers:{
    //   Authorization : `Bearer ${token}`
    // },
    params:{
      productname:productName
      //towards backend : frontend var name
    }
    
    }).then(function (response) {
          console.log(response);
          if(response.data.data){
            setProduct(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }catch(err){
        console.error(err);
      }
  }

const deleteproduct= async()=>{
  try{
    axios.post('http://localhost:4000/product/deleteproduct',{
      productname: productName
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
  }catch(err){
    console.error(err);
  }
}

const updateproduct = async()=>{
  try{
    axios.post('http://localhost:4000/product/updatestocks',{
      productname: productName,
      stockavailable:stocks
    }).then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.error(error);
    })
  }catch(err){
    console.error(err);
  }
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
    <br></br>
    <button className="button-81" role="button" onClick={getuser}>Get user</button>
    <button className="button-81" role="button" onClick={getProduct}>Get product</button><br></br>
    <button className="button-81" role="button" onClick={deleteproduct}>Delete Product</button><br></br>
    <button className="button-81" role="button" onClick={updateproduct}>update Product</button><br></br>
    <TextField id="input-with-sx" label="productname" variant="standard" onChange={(e)=>{setProductName(e.target.value)}} /><br></br>
    <TextField id="input-with-sx" label="stocks" variant="standard" onChange={(e)=>{setStocks(e.target.value)}} />
    <br></br>
    <img src={product.image} alt='not yet'/>  
    </div>
);
}


