import { Box, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
 import fishImg from './../../../../assets/admin/userendabout.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { DeleteButton, Uploadbutton, UserEndSaveCancelButtons,ErrorMessages } from "./UserEndCommonButtons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const UserEndAddvideo = () => {
const{classes}=useUserEndwebStyles() 

const[video,setVideo]=useState({
          id: uuidv4(),
          name: "Slide1",
          video: "",
          videoerror: "",
  })

 const handleUpload=(file:File)=>{
  const videoUrl = URL.createObjectURL(file);
  const updatedVideo={...video,video:videoUrl,videoerror:""}
  setVideo(updatedVideo) 
}

const handleVideoError=(msg:string)=>{
  const updatedVideoerror={...video,videoerror:msg}
  setVideo(updatedVideoerror)
}

const handleRemoveVideo=()=>{
  const updatedVideo={...video,video:""}
  setVideo(updatedVideo)
}

const handleSave=()=>{
   console.log("userend values")
 }    
  return (
   <Box>    
   <Box className={classes.useHerocontainer}> 
   <Box mt={2}>
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
       <DeleteButton message="Are you sure want to delete Video?" 
       onDelete={()=>console.log("deleted")}/>
   </Box>
  <Stack className={classes.UploadandAboutbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText}>Video</Typography>
        <Uploadbutton  type="video"
           onUpload={(file) => handleUpload(file)}
           onError={(msg) => handleVideoError(msg)}/>   
          {video.video && (
            <Box className={classes.herouploadImageBox}>
              <img src={fishImg} className={classes.herouploadImage} alt="video preview" />
              <CancelIcon
                className={classes.cancelImgIcon}
                onClick={handleRemoveVideo}
              />
            </Box>
          )}
         <ErrorMessages message={video.videoerror}/>
        </Stack>
      </Stack>
      <UserEndSaveCancelButtons onSave={handleSave} />
  </Box>
  </Box>
    </Box>
  )
}

export default UserEndAddvideo
