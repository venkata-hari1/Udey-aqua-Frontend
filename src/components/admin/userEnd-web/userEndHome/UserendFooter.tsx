import { Box,Stack,Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons,Uploadbutton, ErrorMessages, TextFieldManyRows, ErrormsgContent, ErrorName, TextFieldSingleRow, EditButton } from "./UserEndCommonButtons";
import { useState } from "react";
import { nameValidation, validateEmail } from "../../utils/Validations";


const UserendFooter = () => {

const{classes}=useUserEndwebStyles() 

const[footerslide,setFooterslide]=useState({
        title: "Image",
        image: "",
        name: '',
        email:'',
        address:'',
        imgError:'',
        nameError:'',
        emailError:'',
        addressError:'',
})


const isDisabled= !footerslide.image || !footerslide.email ||!footerslide.address
||!!footerslide.nameError || !!footerslide.imgError || !!footerslide.emailError || !!footerslide.addressError
 
const handleUpload=(file:File)=>{
  const imageUrl = URL.createObjectURL(file);
  const updatedFooterslide={...footerslide,image:imageUrl,imgError:''}
  setFooterslide(updatedFooterslide) 
}

const handleImageError=(msg:string)=>{
  setFooterslide((prev)=>({...prev,imgError:msg,}))
}

const handleRemoveImage=()=>{
  const updatedImages={...footerslide,image:""}
  setFooterslide(updatedImages)
}

const handleContentchange=(value:string,error:string)=>{
    const updatedContent={...footerslide,address:value,addressError:error}
    setFooterslide(updatedContent)
    console.log(updatedContent)
}

const handleNameChange=(value:string,error:string)=>{
    const updateName=({...footerslide, name:value,nameError:error})
    setFooterslide(updateName)
}

const handleEmailChange=(value:string,error:string)=>{
  const updatedEmail=({...footerslide, email:value,emailError:error})
    setFooterslide(updatedEmail)
}

 const handleCancel=()=>{
  const updatedvalues={...footerslide,name:"",email:"",address:"",image:"",nameError:"",
    emailError:"",addressError:"",imgError:""}
  console.log(setFooterslide(updatedvalues))
}

const sliceEdit=()=>{
   const savedData=localStorage.getItem("footerValues");
   if(savedData){
     const parsed=JSON.parse(savedData);
     setFooterslide({
      ...footerslide,
      name:parsed.name,
      email:parsed.email,
      address:parsed.address,
      image:parsed.image
     });
   }
}

const handleSave=()=>{
  setFooterslide({...footerslide,name:'',email:'',address:'',image:''})
  localStorage.setItem("footerValues",JSON.stringify(footerslide)) 
}

return (
    <Box>
       <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
       <EditButton sliceEdit={sliceEdit}/>
       </Box>
       <Stack className={classes.projectsUploadContentbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>Image</Typography>
        <Uploadbutton onUpload={(file) => handleUpload(file)}
          onError={(msg) => handleImageError(msg)}/>   
        <Box className={classes.herouploadImageBox1}>
        {footerslide.image &&
        <Box>
        <img src={footerslide.image} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}
        onClick={handleRemoveImage}/>
        </Box>
        }
        </Box>
        <ErrorMessages message={footerslide.imgError}/>
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack>
        <Typography className={classes.titleText} >Name</Typography>
        <TextFieldSingleRow onChange={handleNameChange} validationFn={nameValidation}
         value={footerslide.name}/>  
         <ErrorName message={footerslide.nameError}/> 
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Email</Typography>
        <TextFieldSingleRow onChange={handleEmailChange} validationFn={validateEmail}
         value={footerslide.email}/>
         <ErrorMessages message={footerslide.emailError}/>
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Address</Typography>
        <TextFieldManyRows value={footerslide.address} onChange={(value, error) => handleContentchange(value, error)}/>
        <ErrormsgContent message={footerslide.addressError}/>
        </Stack> 
      </Box>
      </Stack> 
      <UserEndSaveCancelButtons onSave={handleSave} onCancel={handleCancel} disabled={isDisabled}/> 
       </Box> 
       </Box>
  )
}

export default UserendFooter
