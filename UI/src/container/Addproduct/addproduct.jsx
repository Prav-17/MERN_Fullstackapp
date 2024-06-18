import React from "react";
import { useState,useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import Grid from '@mui/material/Grid'; // or '@material-ui/core/Grid' for v4
import Card from '@mui/material/Card'; // or '@material-ui/core/Card' for v4
import Button from '@mui/material/Button'; // or '@material-ui/core/Button' for v4
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import ResponsiveAppBar from "../navbar/navbar";

export default function Addproduct(){
    
    const [productname,setProductname]= useState();
    const [password,setPassword]=useState();
    const [productprice,setProductprice]=useState();
    const [productmanufacturer,setProductmanufacturer]=useState();
    const [stockavailable,setStockavailable]=useState();
    const [image,setImage]=useState(null);
    const [productImg,setProductImg]=useState("");
    const [category,setCategory]=useState();
    const [showupload,setShowupload]=useState(true);
    
    const handleImage = (e)=>{
        console.log(e);
        const file = e.target.files[0];
        setImage(file);        
    }

    const handleUpload =async()=>{
        console.log(image);
        setShowupload(false);
        if(image){
            const imgfd= new FormData();
            imgfd.append('image',image);
            try{
                const res = await axios.post( 'https://api.imgbb.com/1/upload',imgfd,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    },
                    params:{
                        key:'0fad8fff8a7cb367ad2a60dcf50afbe0'
                    }
                }).then((result)=>{
                   console.log(result);
                   if(result.data.data){
                    console.log(result.data.data.url);
                    setProductImg(result.data.data.url);
                    setShowupload(true);
                   }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }catch(err){
                console.log(err);
            }

        }
    }

    const submitHandler=()=>{
        try{
        console.log(productname);
        console.log(productprice);
        console.log(productmanufacturer);
        console.log(stockavailable);
        console.log(category);
        console.log(productImg);

        axios.post('http://localhost:4000/product/addproduct', {
            productname:productname,
            productprice:productprice,
            productmanufacturer:productmanufacturer,
            stockavailable:stockavailable,
            image: productImg,
            // password: password, yet to be auth
            category: category
          })
          .then(function (response) {
            console.log(response);
            toast.success('Product Uploaded', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          })
          .catch(function (error) {
            console.log(error);
          });}
          catch(err){
            console.log(err);
          }
    }
    
    
    return(
        <div>
          <ResponsiveAppBar/>
            <h1>Sign up</h1>
        <FormControl>
        <TextField
             required
             id="standard-required"
             label="Product Name"
             variant="standard"
             onChange={(e)=>{setProductname(e.target.value)}}
        />
          <TextField
          required
          id="standard-required"
          label="Product Price"
          variant="standard"
          onChange={(e)=>{setProductprice(e.target.value)}}
        />
         <TextField
          required
          id="standard-required"
          label="Product Manufacturer"
          variant="standard"
          onChange={(e)=>{setProductmanufacturer(e.target.value)}}
        />
         <TextField
          id="standard-required"
          label="Stock Available"
          variant="standard"
          type="number"
          onChange={(e)=>{setStockavailable(e.target.value)}}
        />
          <TextField
          required
          id="standard-required"
          label="Category"
          variant="standard"
          onChange={(e)=>{setCategory(e.target.value)}}
        />
   
         {/* <TextField
          id="standard-required"
          label="Password"
          variant="standard"
          onChange={(e)=>{setPassword(e.target.value)}} // yet to be auth
        />   */}
        <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            width="200px"
            src={productImg}
          />
        </Grid>
        <div htmlFor="contained-button-file">
        <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleImage}
            />

            {showupload ? (<Button variant="contained" component="span" onClick={()=>handleUpload()}>
            Upload
          </Button>):( <CircularProgress />) }  
         
        </div>
      </Grid>
        
        </FormControl>
        <br></br>
        
        { showupload? ( <button className="button-81" role="button" onClick={submitHandler}>Submit</button>):(  <CircularProgress />)}
       
      
        </div>
    )
}