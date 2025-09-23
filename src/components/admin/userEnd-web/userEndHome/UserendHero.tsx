import { Box,Divider,Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
/* import fishImg from './../../../../assets/admin/fishImg.jpg'*/
import CancelIcon from '@mui/icons-material/Cancel';
import { UserEndSaveCancelButtons, UserendSaveDeleteButtons,AddingButton, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgTitle } from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

const UserendHero = () => {

const{classes}=useUserEndwebStyles() 
const[heroslide,setHeroslide]=useState([
     {id:uuidv4(),name:"Slide1",image:'',content:''},
     {id:uuidv4(),name:"Slide2",image:'',content:''},
 ])
 
 const isDisable=heroslide.some((slide)=>!slide.content ||!slide.image);

const handleAddSlide=()=>{
  const newSlide= {id:uuidv4(),name: `Slide${heroslide.length+1}`,image:'',content:''}
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


const handleUpload=(id:string,file:File)=>{
  const imageUrl=URL.createObjectURL(file)
  const updateSlides=heroslide.map((slide)=>
    slide.id===id ?{...slide,image:imageUrl} : slide
  );  
  setHeroslide(updateSlides)
}

const handleRemoveImage=(id:string)=>{
  const updatedslides=heroslide.map((slide)=>
    slide.id===id ?{...slide,image:""}:slide
);
setHeroslide(updatedslides)
}

const handleContentchange=(id:string,value:string)=>{
    const updateSlides=heroslide.map((slide)=>
    slide.id===id?{...slide,content:value}:slide
  )
  setHeroslide(updateSlides)
  console.log("updated slide", value)
}

const handleSliceSave=(slide:{id:string,name:string,image:string,content:string})=>{
  console.log(slide)
}

 const handleSave=()=>{
   console.log("userend hero values")
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
     onDelete={()=>onDelete(slide.id)} 
     disabled={isDisable}
     sliceSave={()=>handleSliceSave(slide)}/>
   </Stack>
   <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>Image</Typography>
     
     <Uploadbutton onUpload={(file)=>handleUpload(slide.id,file)}/>   
     
     {slide.image &&
     <Box className={classes.herouploadImageBox}>
     <img src={slide.image} className={classes.herouploadImage}/> 
     <CancelIcon className={classes.cancelImgIcon}
     onClick={()=>handleRemoveImage(slide.id)}/>
     </Box>}
       
     <ErrorMessages />
     </Stack>
     <Stack gap={1}>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextFieldManyRows onChange={(value)=>handleContentchange(slide.id,value)}/>
     <ErrormsgTitle />   
     </Stack>
   </Stack>
   {index!==heroslide.length-1&&<Divider className={classes.heroDivider}/>}
  </Box>
  </Fragment>
    ))
   }

   <UserEndSaveCancelButtons onSave={handleSave} />
 </Box>
 </Box>
  )
}

export default UserendHero
