import { Box, Button,Divider,Stack,  Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgTitle, ErrormsgContent, TextFieldSingleRow, UserendEditandDeletebuttons, EditButton, UserEndSaveButton } from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DescriptionContentValidation, HeadingContentValidation } from "../../utils/Validations";

const UserendPricing = () => {
  
  const{classes}=useUserEndwebStyles() 
  
  const [pricedata,setPricedata]=useState([
    {id:uuidv4(),
     priceId:1,
     title:'Image',
     image:'',
     imgerror:'',
     heading:'',
     headingerror:'',
     description:'',
     descriptionerror:'',
    }
  ])
const[editSlideId,setEditSlideId]=useState<string |null>(null)
 
 const handleaddPrice=()=>{
   const lastPriceId = pricedata.length > 0 ? pricedata[pricedata.length - 1].priceId : 0; 
  
  const newprice={id:uuidv4(),
     priceId:lastPriceId+1,
     title:'Image',
     image:'',
     imgerror:'',
     heading:'',
     headingerror:'',
     description:'',
     descriptionerror:'',
   }

   setPricedata([...pricedata,newprice])
 }
 
const handleUpload = (id: string, file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const updateSlides = pricedata.map((price) =>
      price.id === id ? { ...price, image: imageUrl, imgerror: "" } : price
    );
    setPricedata(updateSlides);
  };

const handleRemoveImage = (id: string) => {
    const updatedslides = pricedata.map((price) =>
      price.id === id ? { ...price, image: "" } : price
    );
    setPricedata(updatedslides);
  };  
 const handleSave=(id:string)=>{
    const priceTosave= pricedata.find((price)=>price.id===id)  
   if(priceTosave){
    localStorage.setItem(`priceSlide${id}`,JSON.stringify(priceTosave))
   }
  setPricedata((prev)=>
  prev.map((price)=>
  price.id===id ? {...price,image:'',imgerror:'',content:'',heading:'',description:''}:price
  )
);
setEditSlideId(null)
}    

 const handleCancel=(id:string)=>{
     setPricedata((prev)=>
    prev.map((price)=>
    price.id===id ?{...price,image:'',imgerror:'',content:'',contenterror:'',heading:'',description:''}:price)
    )
    setEditSlideId(null)
 }

 const handleHeadingChange=(
      id: string,
      value: string,
     error: string = ""
 )=>{
  setPricedata((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, heading: value, headingerror: error } : p
      )
    );

 }

 const handleDescription=(id: string,value: string,error: string)=>{
     setPricedata((prev)=>
    prev.map((p)=>
    p.id===id ?{...p,description:value,descriptionerror:error}:p))
}

const handleSliceEdit=(id:string)=>{
   const savedSlide=localStorage.getItem(`priceSlide${id}`) 
    if(savedSlide){
     const parsedSlide=JSON.parse(savedSlide);
      setPricedata((prev)=>
        prev.map((slide)=>
        slide.id===id ?{...slide,...parsedSlide}:slide)
       );
   }
   setEditSlideId(id);
}
const handleSliceDelete=(id:string)=>{
  const updatedslides = pricedata.filter((slide) => slide.id !== id);
    setPricedata(updatedslides);
    console.log("Slide after deletion", updatedslides);
}
return (
   <Box>
       <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}
       onClick={handleaddPrice}>Add Pricing</Button>
      </Box>

      {pricedata.map((price,index)=>{
      const isDisabled= !price.image || !price.heading || !price.description
      || !!price.headingerror || !!price.imgerror || !!price.descriptionerror
      return <Fragment>
      <Box className={classes.userEnddelete} >
       {index===0 ? <EditButton sliceEdit={() => handleSliceEdit(price.id) }/>:
       <UserendEditandDeletebuttons message={`Are you want to delete ${price.id}?`}
       onDelete={() => handleSliceDelete(price.id)}
       sliceEdit={() => handleSliceEdit(price.id) }/>}
        
      
       
      </Box>
       <Typography className={classes.titleText}>{price.priceId}</Typography>      
       <Stack className={classes.projectsUploadContentbox}>

        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>Image</Typography>
        <Uploadbutton type="image"
                      onUpload={(file) => handleUpload(price.id, file)}/>   
        {price.image && 
        <Box className={classes.herouploadImageBox}>
        <img src={price.image} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}
        onClick={() => handleRemoveImage(price.id)}/>
        </Box>}
         <ErrorMessages />
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack gap={1}>
        <Typography className={classes.titleText} >Heading</Typography>
        
        <TextFieldSingleRow value={price.heading} 
          validationFn={HeadingContentValidation}
          onChange={(value,error)=>handleHeadingChange(price.id,value,error)}/>  
        {price.headingerror&&
        <ErrormsgTitle message={price.headingerror}/>}
        </Stack>
        <Stack gap={1}>
        <Typography className={classes.titleText}>Description</Typography>
        <TextFieldManyRows 
        value={price.description}
        validationFn={DescriptionContentValidation}
        onChange={(value,error)=>handleDescription(price.id,value,error)}/>
        <ErrormsgContent message={price.descriptionerror}/>
        </Stack>
        </Box>
      </Stack> 
      {editSlideId===price.id ? <UserEndSaveCancelButtons onSave={()=>handleSave(price.id)} 
                onCancel={()=>handleCancel(price.id)}
                disabled={isDisabled}/>: <UserEndSaveButton onSave={()=>handleSave(price.id)}
                disabled={isDisabled} />}
      
       {index!==pricedata.length-1&& <Divider sx={{border:'1px groove #6a8fbdff',mb:1,mt:2}}/>}      
       </Fragment>
})}
      </Box> 
       </Box>
  
  )
}

export default UserendPricing
