import { Box, Button, Divider,Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {v4 as uuidv4} from "uuid";
import { ErrorMessages, ErrormsgContent, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons, UserendSaveDeleteButtons } from "./UserEndCommonButtons";
import { useState } from "react";
const UserEndMotto = () => {
  
const{classes}=useUserEndwebStyles() 

const[mottobox,setMottobox]=useState([
  {id:uuidv4(),boxname:"Box1",image:''},
  {id:uuidv4(),boxname:"Box2",image:''},
])
 
const addMottobox=()=>{
  const newmottobox={id:uuidv4(),boxname:`Box${mottobox.length+1}`,image:""}
  setMottobox([...mottobox,newmottobox])
}

const onDelete=(id:string)=>{
  const updateBoxes=mottobox.filter((moto)=>
  moto.id!==id);
  setMottobox(updateBoxes)
  console.log("after deletion",updateBoxes)
}

const handleUpload=(id:string,file:File)=>{
  const imageUrl=URL.createObjectURL(file)
  const updateBoxes=mottobox.map((moto)=>
  moto.id===id ? {...moto,image:imageUrl}:moto 
)
setMottobox(updateBoxes)
}

const handleRemoveImage=(id:string)=>{
   const updateBoxes=mottobox.map((moto)=>
    moto.id===id ?{...moto,image:""}:moto
  )
  setMottobox(updateBoxes)
}
  const handleSave=()=>{
   console.log("userend values")
 }   
  return (
   
   <Box>    
   <Box className={classes.useHerocontainer}>
    <Box className={classes.addingButtonBox}>
    <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton}
    onClick={addMottobox}>Add Motto</Button>
   </Box>

  {mottobox.map((moto,index)=>(
     <Box mt={2} key={index}>
   <Stack className={classes.slideAndButtons}>
    <Typography className={classes.MottoBoxText}>{moto.boxname}</Typography>
   <UserendSaveDeleteButtons message={`Are you sure you want to delete ${moto.boxname} in Motto? `}
    onDelete={()=>onDelete(moto.id)}/>
   </Stack>
   
   <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>Image</Typography>

     <Uploadbutton onUpload={(file)=>handleUpload(moto.id,file)}/>   
     {moto.image &&
     <Box className={classes.herouploadImageBox}>
      <img src={moto.image} className={classes.herouploadImage}/>
      <CancelIcon className={classes.cancelImgIcon}
      onClick={()=>handleRemoveImage(moto.id)}/>
     </Box>}
     
     <ErrorMessages />
     
     </Stack>
     <Stack gap={1}>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextFieldManyRows />   
     <ErrormsgContent />
     </Stack>
   </Stack>
   {index!==mottobox.length-1&& <Divider className={classes.heroDivider}/>}
    
   </Box>
  ))}
  <UserEndSaveCancelButtons onSave={handleSave} />
  
</Box>
 </Box>
  )
}

export default UserEndMotto
