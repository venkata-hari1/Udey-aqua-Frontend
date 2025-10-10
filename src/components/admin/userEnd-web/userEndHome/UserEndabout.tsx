import { Box, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
/* import fishImg from './../../../../assets/admin/userendabout.jpg' */
import CancelIcon from '@mui/icons-material/Cancel';
import {EditButton, ErrorMessages, ErrormsgContent, TextFieldManyRows, Uploadbutton, UserEndSaveButton, UserEndSaveCancelButtons } from "./UserEndCommonButtons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { HeadingContentValidation } from "../../utils/Validations";
const UserEndabout = () => {

const{classes}=useUserEndwebStyles() 

const [aboutslide, setAboutslide] = useState(
    {
      id: uuidv4(),
      name: "Slide1",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
      isSaved:false,
    })

  const[isEditing,setIsediting]=useState(false)
 const isSaveDisabled=!aboutslide.image || !aboutslide.content || !!aboutslide.contenterror || !!aboutslide.imgerror 
  ||aboutslide.isSaved

 const handleUpload=(file:File)=>{
  const imageUrl = URL.createObjectURL(file);
  const updatedAboutslide={...aboutslide,image:imageUrl,imgerror:"",isSaved:false}
  setAboutslide(updatedAboutslide) 
}

const handleImageError=(msg:string)=>{
  const updatedImgerror={...aboutslide,imgerror:msg,isSaved:false}
  setAboutslide(updatedImgerror)
}

const handleRemoveImage=()=>{
  const updatedImages={...aboutslide,image:""}
  setAboutslide(updatedImages)
}

const handleContentchange=(value:string,error:string)=>{
    const updatedContent={...aboutslide,content:value,contenterror:error,isSaved:false}
    setAboutslide(updatedContent)
    console.log(updatedContent)
}


const handleSave=()=>{
  setAboutslide({...aboutslide,isSaved:true,})
  localStorage.setItem("aboutValues",JSON.stringify(aboutslide)) 
  setIsediting(false)
}

const handleEdit=()=>{
  setIsediting(true)
  const savedData=localStorage.getItem("aboutValues");
  if(savedData){
    const parsed=JSON.parse(savedData);
     setAboutslide({
      ...aboutslide,
      name:parsed.name,
      content:parsed.content,
      image:parsed.image,
      isSaved:false
     });
  }
}

const onCancel=()=>{
  const aboutSavedData=localStorage.getItem(`aboutValues`);
  if (aboutSavedData) {
    const parsedData = JSON.parse(aboutSavedData);
   setAboutslide({...aboutslide,...parsedData,isSaved:true})
   setIsediting(false)
  }
     
}
  
return (
   <Box>    
   <Box className={classes.useHerocontainer}> 
   <Box mt={2}>
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
       <EditButton sliceEdit={handleEdit} disabled={!aboutslide.isSaved}/>
    </Box>
  <Stack className={classes.UploadandAboutbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText}>Image</Typography>
        <Uploadbutton  type="image" 
          onUpload={(file) => handleUpload(file)}
          onError={(msg) => handleImageError(msg)}/> 
         {aboutslide.image&&
         <Box className={classes.herouploadImageBox}>
        <img src={aboutslide.image} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}
        onClick={handleRemoveImage}/>
        </Box>}
        
        <ErrorMessages message={aboutslide.imgerror}/>  
        </Stack>
        <Stack display="flex" justifyContent="flex-start" gap={1}>
        <Typography className={classes.titleText}>Content</Typography>
        <TextFieldManyRows value={aboutslide.content} onChange={(value, error) =>
          handleContentchange(value, error)
                      }
          validationFn={HeadingContentValidation}
          disabled={aboutslide.isSaved} />   
        <ErrormsgContent message={aboutslide.contenterror}/>
        </Stack>
      </Stack>
      {isEditing?<UserEndSaveCancelButtons onSave={handleSave} 
      onCancel={onCancel} disabled={isSaveDisabled}/>: <UserEndSaveButton onSave={handleSave}
      disabled={isSaveDisabled}/>}

  </Box>
  </Box>
    </Box>
  )
}

export default UserEndabout
