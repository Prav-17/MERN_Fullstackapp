import React, { useState } from 'react'
import axios from 'axios';
/**
* @author
* @function 
**/

export const ImageUpload = (props) => {
    const [imgs,setImgs] = useState(null);
    const [profilePic,setProfilePic] = useState("");
    const handleImage = (e)=>{
        console.log(e);
        const file = e.target.files[0];
        setImgs(file);        
    }
    const handleUpload =async()=>{
        console.log("upload",imgs);
        if(imgs){
            const fd = new FormData(); // formdata format
            fd.append('image',imgs);
            try{
                const res = await axios.post(
                    'https://api.imgbb.com/1/upload',
                    fd,
                    {
                        headers:{
                            'content-type':'multipart/form-data'
                        },
                        params:{
                            key:'0fad8fff8a7cb367ad2a60dcf50afbe0'
                        }
                }).then((result)=>{
                    console.log(result);    
                    if(result.data.data){
                        setProfilePic(result.data.data.url);
                        //mongodb call --> node api call image url post data send 
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
  return(
    <div>
        <h1>Image upload</h1>
            <input 
                type="file"
                accept='image/*'
                id="imageuploadinput"
                onChange={handleImage}
            />
            <button onClick={()=>handleUpload()}>
                upload
            </button>
            <br/>
            <br/>
            <div>
                <img src={profilePic} alt="no image"/>
            </div>
        </div>
   )
}
