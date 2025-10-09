import { Box,Stack,Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons,Uploadbutton, ErrorMessages,ErrormsgContent, EditButton, TextFieldSingleRow, ErrorName, TextFieldManyRows, UserEndSaveButton } from "./UserEndCommonButtons";
import { useState } from "react";
import { addressContentValidation, nameValidation, phoneNumberValidation} from "../../utils/Validations";

const UserendGetintouch = () => {
const{classes}=useUserEndwebStyles() 

const[getinSlide,setGetinSlide]=useState({
        title: "Image",
        image: "",
        name: '',
        phone:'',
        msgContent:'',
        imgError:'',
        nameError:'',
        phoneError:'',
        msgContentError:'',
})

const isDisabled= !getinSlide.image || !getinSlide.name || !getinSlide.phone
|| !getinSlide.msgContent || !!getinSlide.imgError || !!getinSlide.nameError
|| !!getinSlide.phoneError || !!getinSlide.msgContentError

const[isEdit,setIsEdit]=useState(false)
 
const handleUpload=(file:File)=>{
  const imageUrl = URL.createObjectURL(file);
  const updatedGetinslide={...getinSlide,image:imageUrl,imgError:''}
  setGetinSlide(updatedGetinslide) 
}
const handleImageError=(msg:string)=>{
  setGetinSlide((prev)=>({...prev,imgError:msg,}))
}

const handleRemoveImage=()=>{
  const updatedImages={...getinSlide,image:""}
  setGetinSlide(updatedImages)
}

const handleNameChange=(value:string,error:string)=>{
  const updateName=({...getinSlide, name:value,nameError:error})
    setGetinSlide(updateName)
}
const handlePhoneChange=(value:string,error:string)=>{
  setGetinSlide({...getinSlide,phone:value,phoneError:error})
}
const handleContentchange=(value:string,error:string)=>{
   const updatedContent={...getinSlide,msgContent:value,msgContentError:error}
    setGetinSlide(updatedContent)
    console.log(updatedContent)
}
const sliceEdit=()=>{
  setIsEdit(true)
 const savedData=localStorage.getItem("getInvalues");
 if(savedData){
  const parsed=JSON.parse(savedData);
  setGetinSlide({...getinSlide,
    name:parsed.name,
    phone:parsed.phone,
    image:parsed.image,
    image:parsed.image,
    msgContent:parsed.msgContent
  })
 }
}

const handleCancel=()=>{
  const updatedvalues={...getinSlide,name:"",phone:"",msgContent:"",image:"",
    nameError:"",
    phoneError:"",msgContentError:"",imgError:""}
  console.log(setGetinSlide(updatedvalues))
  setIsEdit(false)
}

 const handleSave=()=>{
   localStorage.setItem("getInvalues",JSON.stringify(getinSlide));
   setGetinSlide({...getinSlide,name:"",phone:'',msgContent:'',image:""})
   setIsEdit(false)
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
        <Uploadbutton onUpload={(file) =>handleUpload(file)}
          onError={(msg) => handleImageError(msg)}/>   
          {getinSlide.image&& 
          <Box className={classes.herouploadImageBox}>
        <img src={getinSlide.image} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}
        onClick={handleRemoveImage}/>
        </Box> }
        <ErrorMessages message={getinSlide.imgError}/>
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack>
        <Typography className={classes.titleText} >Name</Typography>
        <TextFieldSingleRow onChange={handleNameChange} validationFn={nameValidation}
                 value={getinSlide.name}/>   
        <ErrorName message={getinSlide.nameError}/> 
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Phone</Typography>
        <TextFieldSingleRow onChange={handlePhoneChange} validationFn={phoneNumberValidation}
                 value={getinSlide.phone}/>
        <ErrorName message={getinSlide.phoneError}/>
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Message</Typography>
         <TextFieldManyRows value={getinSlide.msgContent} onChange={(value, error) => handleContentchange(value, error)}
          validationFn={addressContentValidation}/>
         <ErrormsgContent message={getinSlide.msgContentError}/>
        </Stack> 
      </Box>
      </Stack> 
      {isEdit ?<UserEndSaveCancelButtons onSave={handleSave} onCancel={handleCancel}
      disabled={isDisabled}/>:
      <UserEndSaveButton onSave={handleSave} disabled={isDisabled}/>}
        
       </Box> 
       </Box>
  )
}

export default UserendGetintouch
