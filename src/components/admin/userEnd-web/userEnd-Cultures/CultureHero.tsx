import { Box,Stack,Typography} from "@mui/material"
import { EditButton, ErrorMessages, TextFieldManyRows, Uploadbutton, UserEndSaveButton, UserEndSaveCancelButtons } from "../userEndHome/UserEndCommonButtons"
import useUserEndwebStyles from "../UserendwebStyles"

import CancelIcon from '@mui/icons-material/Cancel';
import { addressContentValidation,} from "../../utils/Validations";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CultureHero = () => {
const {classes}=useUserEndwebStyles()

const[heroslide,setHeroslide]=useState(
  {id:uuidv4(),name:'Image',image:'',imgerror:'',subtitle:'',subtitleerror:'',isSaved:false}
)
const[isEditing,setIsediting]=useState(false)

const[savedData,setSaveddata]=useState({
  heroimg:'',
  herocontent:''
})
const isSaveDisabled= !heroslide.image || !heroslide.subtitle || !!heroslide.subtitleerror

const handleUpload=(file:File)=>{
  const imgUrl=URL.createObjectURL(file);
 setHeroslide({...heroslide,image:imgUrl})
}
const handleRemoveImage=()=>{
  setHeroslide({...heroslide,image:""})
}
const handleImageError=(msg:string)=>{
  setHeroslide({...heroslide,imgerror:msg,})
}
const handleContentchange=(value:string,error:string)=>{
  setHeroslide({...heroslide,subtitle:value,subtitleerror:error})
}



const handleSave=()=>{
    const herovalues={
    heroimg:heroslide.image,
    herocontent:heroslide.subtitle,
};
  setSaveddata(herovalues);
  setHeroslide({...heroslide,image:'',imgerror:'',subtitle:'',isSaved:true})
  setIsediting(false)
  console.log(herovalues)
}

const sliceEdit=()=>{
 setHeroslide((prev)=>(
  {...prev,image:savedData.heroimg,subtitle:savedData.herocontent}
 )) 
 setIsediting(true) 
}
const handleCancel=()=>{
  setHeroslide((prev)=>(
    {...prev,image:'',subtitle:'',}
  ))
}

  return (
    <Box>
     <Box sx={{display:'flex', justifyContent:'end'}}>
      <EditButton sliceEdit={()=>sliceEdit()} disabled={!heroslide.isSaved || isEditing}
        />
     </Box>
     <Box className={classes.cultureheroBox2}>  
      <Stack  className={classes.UploadImageStack}>
          <Typography className={classes.titleText}>Image</Typography>
          <Uploadbutton onUpload={(file) =>handleUpload(file)}
           onError={(msg) => handleImageError(msg)}/>
          {heroslide.image &&
          <Box className={classes.herouploadImageBox1}>
            <img src={heroslide.image} className={classes.herouploadImage} alt="fish image"/>
            <CancelIcon className={classes.cancelImgIcon}
            onClick={handleRemoveImage}/>
          </Box>
          }
          {heroslide.imgerror&& <ErrorMessages message={heroslide.imgerror}/>}
          
     </Stack>

     <Box>
      <Typography className={classes.titleText}>SubTitle</Typography>
      <TextFieldManyRows value={heroslide.subtitle}
      onChange={(value, error) =>
          handleContentchange(value, error)}
          validationFn={addressContentValidation}/>
          <ErrorMessages message={heroslide.subtitleerror}/>
     </Box>
     </Box>  
     {isEditing?<UserEndSaveCancelButtons onSave={handleSave} disabled={isSaveDisabled}
     onCancel={handleCancel}/>:
     <UserEndSaveButton onSave={handleSave} disabled={isSaveDisabled}/>}
 </Box>
)
}

export default CultureHero