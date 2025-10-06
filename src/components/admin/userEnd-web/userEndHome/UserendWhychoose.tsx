import { Box,Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/userendabout.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { EditButton, ErrorMessages, ErrormsgContent, TextFieldManyRows,Uploadbutton,UserEndSaveCancelButtons } from "./UserEndCommonButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserendWhychoose = () => {

const{classes}=useUserEndwebStyles() 
const[chooseSlide,setChooseslide]=useState({
   
        id: uuidv4(),
        name: "Slide1",
        image: "",
        content: "",
        imgerror: "",
        contenterror: "",
      }
    )

const isSaveDisabled=!chooseSlide.image || !chooseSlide.content || !!chooseSlide.contenterror || !!chooseSlide.imgerror  

 const handleUpload=(file:File)=>{
  const imageUrl = URL.createObjectURL(file);
  const updatedAboutslide={...chooseSlide,image:imageUrl,imgerror:""}
  setChooseslide(updatedAboutslide) 
}
const handleImageError=(msg:string)=>{
  const updatedImgerror={...chooseSlide,imgerror:msg}
  setChooseslide(updatedImgerror)
}

const handleRemoveImage=()=>{
  const updatedImages={...chooseSlide,image:""}
  setChooseslide(updatedImages)
}

const handleContentchange=(value:string,error:string)=>{
    const updatedContent={...chooseSlide,content:value,contenterror:error}
    setChooseslide(updatedContent)
    console.log(updatedContent)
}

const handleSave=()=>{
  setChooseslide({...chooseSlide,name:'',image:'',content:'',})
  localStorage.setItem("chooseValues",JSON.stringify(chooseSlide)) 
}   

 const handleEdit=()=>{
  const savedData=localStorage.getItem("chooseValues");
  if(savedData){
    const parsed=JSON.parse(savedData);
     setChooseslide({
      ...chooseSlide,
      name:parsed.name,
      content:parsed.content,
      image:parsed.image
     });   
 }
}

const onCancel=()=>{
  setChooseslide({...chooseSlide,image:"",content:"",contenterror:"",imgerror:""})
}
return (
   <Box>    
      <Box className={classes.useHerocontainer}> 
      <Box mt={2}>
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <EditButton sliceEdit={handleEdit}/>
      </Box>
     <Stack className={classes.UploadandAboutbox}>
           <Stack className={classes.UploadImageStack}>
           <Typography className={classes.titleText}>Image</Typography>
           <Uploadbutton  type="image"
           onUpload={(file) => handleUpload(file)}
           onError={(msg) => handleImageError(msg)}/>

           {chooseSlide.image && <Box className={classes.herouploadImageBox}>
           <img src={fishImg} className={classes.herouploadImage}/>
           <CancelIcon className={classes.cancelImgIcon}
           onClick={handleRemoveImage}/>
           </Box>}
           <ErrorMessages message={chooseSlide.imgerror}/>
          </Stack>
           <Stack display="flex" justifyContent="flex-start" gap={1}>
           <Typography className={classes.titleText}>Content</Typography>
           <TextFieldManyRows 
           value={chooseSlide.content}onChange={(value, error) =>
                        handleContentchange(value, error)
                      }/>
           <ErrormsgContent message={chooseSlide.contenterror}/>
           </Stack>
         </Stack>
        <UserEndSaveCancelButtons onSave={handleSave} disabled={isSaveDisabled}
        onCancel={onCancel}/>
     </Box>
     </Box>
       </Box>
  )
}

export default UserendWhychoose
