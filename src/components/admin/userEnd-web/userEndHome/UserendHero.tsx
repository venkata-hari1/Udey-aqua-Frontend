import { Box,Divider,Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { UserEndSaveCancelButtons, UserendSaveDeleteButtons,AddingButton, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgTitle } from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

const UserendHero = () => {

const{classes}=useUserEndwebStyles() 
const[heroslide,setHeroslide]=useState([
     {id:uuidv4(),name:"Slide1"},
     {id:uuidv4(),name:"Slide2"},
 ])


const handleAddSlide=()=>{
  const newSlide= {id:uuidv4(),name: `Slide${heroslide.length+1}`}
  const updateSlides=[...heroslide,newSlide]
  setHeroslide(updateSlides)
  console.log("slide adding after",updateSlides )
}

const onDelete=(id:string)=>{
  const updatedslides=heroslide.filter((slide)=>
  slide.id!==id);
  setHeroslide(updatedslides)
  console.log("Slide after deletion",updatedslides)
}

return (
   <Box>    
   <Box className={classes.useHerocontainer}>
   <AddingButton onClick={handleAddSlide}/>
   
   {
    heroslide.map((slide,index)=>(

      <Fragment>
      <Box mt={2}>
     <Stack className={classes.slideAndButtons}>
    <Typography className={classes.titleText}>{slide.name}</Typography>
    <UserendSaveDeleteButtons message={`Are you sure want to delete ${slide.name} ?`}
     onDelete={()=>onDelete(slide.id)}/>
   </Stack>
   <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>Image</Typography>
     <Uploadbutton />   
     <Box className={classes.herouploadImageBox}>
     <img src={fishImg} className={classes.herouploadImage}/>
     <CancelIcon className={classes.cancelImgIcon}/>
     </Box>  
     <ErrorMessages />
     </Stack>
     <Stack gap={1}>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextFieldManyRows />
     <ErrormsgTitle />   
     </Stack>
   </Stack>
   {index!==heroslide.length-1&&<Divider className={classes.heroDivider}/>}
  </Box>
  </Fragment>
    ))
   }

   <UserEndSaveCancelButtons />
 </Box>
 </Box>
  )
}

export default UserendHero
