import React, { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export default function Dashboard(){
    
    const [user,setUser]=useState({});

    const getuser=async()=>{
        const token = localStorage.getItem("token");
        const decrpt=jwtDecode(token); //jwt decode
        console.log(decrpt);
    
        axios.get(`http://localhost:4000/appuser/userdetails/`,{
        headers:{
          Authorization : `Bearer ${token}`
        },
        params:{
            email : decrpt.useremail
        }
        }).then(function (response) {
            setUser(response.data && response.data.data);  
            console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    
    useEffect(()=>{
        getuser();
    },[])


    return(
        <div>
            User details
        <div>Name : {user && user.name} </div>    
        <div>email : {user && user.email} </div> 
        <div>Contact : {user && user.contact} </div> 
        </div>
            
    )
}