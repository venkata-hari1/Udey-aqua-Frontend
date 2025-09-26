import { Box, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
/* import fishImg from './../../../../assets/admin/userendabout.jpg' */
import CancelIcon from '@mui/icons-material/Cancel';
import { DeleteButton, ErrorMessages, ErrormsgContent, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons } from "./UserEndCommonButtons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

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
    })

 const isSaveDisabled=!aboutslide.image || !aboutslide.content || !!aboutslide.contenterror || !!aboutslide.imgerror  

 const handleUpload=(file:File)=>{
  const imageUrl = URL.createObjectURL(file);
  const updatedAboutslide={...aboutslide,image:imageUrl,imgerror:""}
  setAboutslide(updatedAboutslide) 
}

const handleImageError=(msg:string)=>{
  const updatedImgerror={...aboutslide,imgerror:msg}
  setAboutslide(updatedImgerror)
}

const handleRemoveImage=()=>{
  const updatedImages={...aboutslide,image:""}
  setAboutslide(updatedImages)
}

const handleContentchange=(value:string,error:string)=>{
    const updatedContent={...aboutslide,content:value,contenterror:error}
    setAboutslide(updatedContent)
    console.log(updatedContent)
}

const onDelete=()=>{
  setAboutslide({...aboutslide,image:""}) 
}
const handleSave=()=>{
   console.log(aboutslide)
}
      return (
   <Box>    
   <Box className={classes.useHerocontainer}> 
   <Box mt={2}>
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
       <DeleteButton message="Are you sure want to delte the image?" 
       onDelete={onDelete}/>
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
        <TextFieldManyRows onChange={(value, error) =>
                        handleContentchange(value, error)
                      }/>   
        <ErrormsgContent message={aboutslide.contenterror}/>
        </Stack>
      </Stack>
      <UserEndSaveCancelButtons onSave={handleSave} disabled={isSaveDisabled}/>
  </Box>
  </Box>
    </Box>
  )
}

export default UserEndabout
