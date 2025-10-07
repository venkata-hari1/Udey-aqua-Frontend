import { Box, Button, Divider, Stack,  TextField,  Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import {UserEndSaveCancelButtons, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgTitle, ErrormsgContent, EditButton, UserendEditandDeletebuttons, UserEndSaveButton } from "./UserEndCommonButtons";
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DescriptionContentValidation, nameValidation, } from "../../utils/Validations";

const UserendTestimonials = () => {
  
 const{classes}=useUserEndwebStyles()
 const[testimonial,setTestimonial]=useState([
  {id:uuidv4(),title:"Testimonal1",name:'',image:'',occupation:'',content:'',nameerror:'',
    imgerror:'',occupationerror:'',contenterror:'',isSaved:false,
  }
 ])
const[editSlideId,setEditSlideId]=useState<string |null>(null)
 const handleAddTestimonial=()=>{
    
   const newTestimonial={id:uuidv4(),
     title: `Testimonial ${testimonial.length+1}`,
     name:'',image:'',occupation:'',content:'',nameerror:'',
    imgerror:'',occupationerror:'',contenterror:'',isSaved:false,
   };
   setTestimonial([...testimonial,newTestimonial]);
 }
 
 
 const onDelete=(id:string)=>{
    const updateTestimonial=testimonial.filter((test)=>
    test.id!==id);
    setTestimonial(updateTestimonial)
 }

 const handleUpload=(id:string,file:File)=>{
    const imageUrl=URL.createObjectURL(file);
    const updateTestimonial=testimonial.map((test)=>
    test.id===id ? {...test,image:imageUrl,imgerror:''}:test
  );
  setTestimonial(updateTestimonial);
 }

 const handleRemoveImage=(id:string)=>{
   const updatedImages=testimonial.map((test)=>
    test.id===id ?{...test,image:''}:test);
   setTestimonial(updatedImages)
 }

 const handleContentchange=(id:string,value: string, error: string)=>{
   const updateTestimonial = testimonial.map((test) =>
      test.id === id
        ? { ...test, content: value, contenterror: error }
        : test
    );
    setTestimonial(updateTestimonial);
    
 }
 const handleSave=(id:string)=>{
     const testimonialTosave= testimonial.find((test)=>test.id===id)  
   if(testimonialTosave){
    localStorage.setItem(`testimonialValues${id}`,JSON.stringify(testimonialTosave))
   }
  setTestimonial((prev)=>
  prev.map((test)=>
  test.id===id ? {...test,image:'',imgerror:'',name:'',occupation:'',content:'',isSaved:true,}:test
  )
);
setEditSlideId(null)
}

const sliceEdit=(id:string)=>{
   const savedTestimonial=localStorage.getItem(`testimonialValues${id}`) 
    if(savedTestimonial){
      const parsedTest=JSON.parse(savedTestimonial);
      setTestimonial((prev)=>
        prev.map((test)=>
        test.id===id ?{...test,...parsedTest}:test)
       )
   }
   setEditSlideId(id)
 }

const handleCancel=(id:string)=>{
  setTestimonial((prev)=>
    prev.map((test)=>
    test.id===id ?{...test,image:'',imgerror:'',name:'',occupation:'',content:'',
      contenterror:''}:test)
    )
    setEditSlideId(null)
}

const changeNameHandler=(id:string,value:string)=>{
    const {error}=nameValidation(value);
    const updateTestimonial=testimonial.map((test)=>
    test.id===id ? {...test,name:value,nameerror:error}:test);
    setTestimonial(updateTestimonial)
}

const occupationHandler=(id:string,value:string)=>{
  const {error}=nameValidation(value);
    const updateTestimonial=testimonial.map((test)=>
    test.id===id ? {...test,occupation:value,occupationerror:error}:test);
    setTestimonial(updateTestimonial)
}

const handleImageError=(id: string, msg: string)=>{
  setTestimonial((prev) =>
      prev.map((test) =>
        test.id === id ? { ...test, imgerror: msg } : test
      )
    );
}
return (
 <Box>
 <Box className={classes.useHerocontainer}>
  <Box className={classes.addingButtonBox}>
    <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton}
    onClick={handleAddTestimonial}>Add Testimonial</Button>
   </Box>

{ testimonial.map((test,index)=>{
  const slideSaveDisabled=!test.name || !test.image || 
  !test.content ||!test.occupation || !!test.imgerror || !!test.contenterror ||
  !!test.occupationerror

 return (
  <Fragment key={test.id}>
  
  <Box sx={{display:'flex',justifyContent:'end',mt:2}}>
  {index===0 ?
  <EditButton sliceEdit={()=>sliceEdit(test.id)}
  disabled={!test.isSaved}/>:
  <UserendEditandDeletebuttons message={`Are you sure wnant to delete ${test.name}`}
  onDelete={()=>onDelete(test.id)}
  sliceEdit={() =>sliceEdit(test.id)}
  disabled={!test.isSaved}/>}
</Box>

  <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>{test.title}</Typography>
     <Uploadbutton type="image" 
                   onUpload={(file) => handleUpload(test.id, file)}
                   onError={(msg) => handleImageError(test.id, msg)}/>   
     {test.image&&<Box className={classes.herouploadImageBox} >
     <Avatar src={test.image} />
     <CancelIcon className={classes.avtcancelImgIcon}
     onClick={() => handleRemoveImage(test.id)}/>
     </Box>}
       
    {test.imgerror && (
      <ErrorMessages message={test.imgerror} />
    )}
     </Stack>
     <Stack>
     <Box className={classes.testimonialTextbox}>
     <Stack direction="column" gap={1}>
      <Typography className={classes.titleText}> Name</Typography>
      <TextField size="small" className={classes.textfiledTestimonial} 
       value={test.name}onChange={(e)=>changeNameHandler(test.id,e.target.value)}
       error={!!test.nameerror} helperText={test.nameerror}/>
      <ErrormsgTitle />
     </Stack>
     <Stack direction="column" gap={1}>
       <Typography className={classes.titleText}> Occupation</Typography>
      <TextField size="small" className={classes.textfiledTestimonial}
      value={test.occupation} onChange={(e)=>occupationHandler(test.id,e.target.value)}
      error={!!test.occupationerror} helperText={test.occupationerror}/> 
      <ErrormsgTitle />
     </Stack>
      </Box>
     <Typography className={classes.titleText}>Content</Typography>
     <TextFieldManyRows 
      value={test.content}
                      onChange={(value, error) =>
                        handleContentchange(test.id, value, error)
                      } 
                      validationFn={DescriptionContentValidation}/>  
     <ErrormsgContent message={test.contenterror}/>
     </Stack>
   </Stack>
   {editSlideId===test.id? 
   <UserEndSaveCancelButtons onSave={()=>handleSave(test.id)} 
        onCancel={()=>handleCancel(test.id)} disabled={slideSaveDisabled} /> :
        <UserEndSaveButton onSave={()=>handleSave(test.id)} 
        disabled={slideSaveDisabled}/>}
       
     {index!==testimonial.length-1&& <Divider sx={{border:'1px solid #0A4FA4',mt:2}}/>}
   </Fragment>
 )
})
}
</Box>
 </Box>
 )
}

export default UserendTestimonials
