import { Box,Stack,Typography} from "@mui/material"
import { EditButton, ErrorMessages, TextFieldManyRows, Uploadbutton,UserEndCancelButton,UserendUpdatedheader, } from "../userEndHome/UserEndCommonButtons"
import useUserEndwebStyles from "../UserendwebStyles"
import CancelIcon from '@mui/icons-material/Cancel';
import { addressContentValidation,} from "../../utils/Validations";
import { useState } from "react";

const CulturesImage = () => {

const {classes}=useUserEndwebStyles()
const[cultureimages,setCultureimages]=useState({
  sectionname:'HeaderSection',
  image:'',
  imgerror:'',
  subtitle:'',
  subtitleerror:'',
  isSaved:false,
});

const[isEditing,setIsediting]=useState(false);

const isSaveDisabled=
!cultureimages.image || 
!cultureimages.subtitle || 
!!cultureimages.imgerror || 
!!cultureimages.subtitleerror ||
  cultureimages.isSaved


const[savedData,setSaveddata]=useState({
  culimage:'',
  culsubtitle:''
})

 const handleUpload=(file:File)=>{
  const imageUrl = URL.createObjectURL(file);
  const updatedAboutslide={...cultureimages,image:imageUrl,imgerror:"",isSaved:false}
  setCultureimages(updatedAboutslide) 
} 

const handleImageError=(msg:string)=>{
  const updatedImgerror={...cultureimages,imgerror:msg,isSaved:false}
  setCultureimages(updatedImgerror)
}

const handleRemoveImage=()=>{
  const updatedImages={...cultureimages,image:"",isSaved:false}
  setCultureimages(updatedImages)
}

const handleContentchange=(value:string,error:string)=>{
    const updatedContent={...cultureimages,subtitle:value,subtitleerror:error,isSaved:false}
    setCultureimages(updatedContent)
    console.log(updatedContent)
}
const handleSave=()=>{
   const culimagevalues={
    culimage:cultureimages.image,
    culsubtitle:cultureimages.subtitle,
};
setSaveddata(culimagevalues);
  setCultureimages({...cultureimages,image:'',imgerror:'',subtitle:'',isSaved:true})
   setIsediting(false);
  console.log(culimagevalues)
}

const sliceEdit=()=>{
 setCultureimages((prev)=>(
  {...prev,
    image:savedData.culimage,
    subtitle:savedData.culsubtitle,
    isSaved:false}
 )) 
 setIsediting(true) 
}

const handleCancel=()=>{
  setIsediting(false)
  setCultureimages((prev)=>(
    {...prev,image:'',subtitle:''}
  ))
}

  return (
    <Box>
     <Box sx={{display:'flex', justifyContent:'space-between'}}>
      <Typography className={classes.MottoBoxText}>{cultureimages.sectionname}</Typography>
       <EditButton sliceEdit={()=>sliceEdit()}
        disabled={!cultureimages.isSaved || isEditing}/>
      
     </Box>
      <Box className={classes.cultureheroBox2}>  
      <Stack  className={classes.UploadImageStack}>
          <Typography className={classes.titleText}>Image</Typography>
          <Uploadbutton onUpload={(file) =>handleUpload(file)}
           onError={(msg) => handleImageError(msg)}/>
          {cultureimages.image &&
            <Box className={classes.herouploadImageBox1}>
            <img src={cultureimages.image} className={classes.herouploadImage}/>
            <CancelIcon className={classes.cancelImgIcon} 
            onClick={handleRemoveImage}/>
          </Box>
          }
         {cultureimages.imgerror&& <ErrorMessages message={cultureimages.imgerror}/>}
        
     </Stack>

     <Box>
      <Typography className={classes.titleText}>SubTitle</Typography>
      <TextFieldManyRows value={cultureimages.subtitle} 
      onChange={(value, error) =>
                handleContentchange(value, error)}
                validationFn={addressContentValidation}/>
                  <ErrorMessages message={cultureimages.subtitleerror}/>        
     </Box>
     </Box>
     <Box className={classes.buttonContainer}>
       <UserendUpdatedheader
          onSave={handleSave}
          disabled={isSaveDisabled && !isEditing}
        />
      {isEditing && <UserEndCancelButton onCancel={handleCancel} />}       
     </Box>
     </Box>
  )
}

export default CulturesImage
