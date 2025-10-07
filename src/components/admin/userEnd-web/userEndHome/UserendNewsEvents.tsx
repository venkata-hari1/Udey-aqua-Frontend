import { Box, Button, Divider, FormControl, MenuItem, Select, Stack,  TextField,  Typography  } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { EditButton, ErrorMessages, ErrormsgContent, ErrormsgTitle, TextFieldManyRows, TextFieldSingleRow, Uploadbutton, UserendEditandDeletebuttons, UserEndSaveButton, UserEndSaveCancelButtons} from "./UserEndCommonButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DescriptionContentValidation, HeadingContentValidation } from "../../utils/Validations";


const UserendNewsEvents = () => {

const{classes}=useUserEndwebStyles()
const [newsData,setNewsdata]=useState([
  {
    id:uuidv4(),
    blog:'',
    name:'Image',
    image:'',
    date:'',
    heading:'',
    description:'',
    imgerror:'',
    headingerror:'',
    descripterror:'',
  }
])  
const[editNewsId,setEditNewsId]=useState<string |null>(null)
  const handleAddblog=()=>{
    const newBlog={ 
    id:uuidv4(),
    blog:'',
    name:"Image",
    image:'',
    date:'',
    heading:'',
    description:'',
    imgerror:'',
    headingerror:'',
    descripterror:'',
    }
   setNewsdata([...newsData,newBlog])  
  }

const handleChange=(id:string,field:string,value:string)=>{
    console.log(field)
    setNewsdata( (prev)=>
    prev.map((news)=>
    news.id===id ? {...news,[field]:value}:news
  )
)
}

 const handleDelete=(id:string)=>{
  const updatedblog=newsData.filter((news)=>
  news.id!==id);
 setNewsdata(updatedblog);
  
} 

const handleEdit=(id:string)=>{
 const savedSlide=localStorage.getItem(`Newsblog${id}`) 
    if(savedSlide){
     const parsedSlide=JSON.parse(savedSlide);
      setNewsdata((prev)=>
        prev.map((news)=>
        news.id===id ?{...news,...parsedSlide}:news)
       );
   }
 setEditNewsId(id) 
}
const handleSave=(id:string)=>{
  const slideTosave= newsData.find((news)=>news.id===id)  
   if(slideTosave){
    localStorage.setItem(`Newsblog${id}`,JSON.stringify(slideTosave))
   }
  setNewsdata((prev)=>
  prev.map((news)=>
  news.id===id ? {...news,image:'',date:'',heading:'',description:'',
    imgerror:'',headingerror:'',descripterror:''}:news
  )
);
setEditNewsId(null) 
}

const handleCancel=(id:string)=>{
    setNewsdata((prev)=>
    prev.map((news)=>
    news.id===id ?{...news,image:'',date:'',heading:'',description:'',
    imgerror:'',headingerror:'',descripterror:''}:news)
    );
    setEditNewsId(null) 
}

const handleUpload=(id:string,file:File)=>{
  const imageUrl = URL.createObjectURL(file);
    const updateSlides = newsData.map((news) =>
      news.id === id ? { ...news, image: imageUrl, imgerror: "" } : news
    );
    setNewsdata(updateSlides);
}

const handleRemoveImage = (id: string) => {
    const updatedslides = newsData.map((news) =>
      news.id === id ? { ...news, image: "" } : news
    );
    setNewsdata(updatedslides);
};

 const handleImageError=(id:string,msg:string)=>{
   setNewsdata((prev) =>
      prev.map((news) =>
        news.id === id ? { ...news, imgerror: msg } : news
      )
    );
 } 
const handleHeadingChange=(id:string,value:string,error:string)=>{
  const updatednews=newsData.map((prev)=>
  prev.id===id?{...prev,heading:value,headingerror:error}:prev);
   setNewsdata(updatednews);
}
const handleDescription=(id:string,value:string,error:string)=>{
   const updatednews=newsData.map((prev)=>
   prev.id===id ? {...prev,description:value,descripterror:error}:prev)
   setNewsdata(updatednews)
}

return (
     <Box>
      <Box className={classes.useHerocontainer}>
       <Box className={classes.addingButtonBox}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton}
       onClick={handleAddblog}>Add Blog</Button>
      </Box>
    {newsData.map((news,index)=>{
      const isDisabled=!news.image || !news.date ||
      !news.heading || !news.description || !!news.imgerror ||
      !!news.headingerror || !!news.descripterror
     return (
        <>
        <Box className={classes.FormNewsblogBox} >
        <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px',mt:2}}}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={news.blog}
          /* label="Curage Culture" */
          className={classes.dropDownSelectBlog}
          onChange={(e)=>handleChange(news.id,'blog',e.target.value)}>
        <MenuItem value="Blog1">Blog1</MenuItem>
        <MenuItem value="Blog2">Blog2</MenuItem>
      </Select>
      </FormControl>
     <Box className={classes.dateTextfieldbox} >   
     <TextField 
      type="date" 
      size="small" 
      value={news.date}
      className={classes.dateTextfield}
      onChange={(e)=>handleChange(news.id,"date",e.target.value)}/>
     {index===0 ?<EditButton sliceEdit={()=>handleEdit(news.id)}/> :
     <UserendEditandDeletebuttons message={`Are you sure want to delete ${news.id} in News `}
     sliceEdit={()=>handleEdit(news.id)}
     onDelete={()=>handleDelete(news.id)}/>}
    </Box>
  </Box>

    <Stack className={classes.Uploadandheadingbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={1} ml={1}>{news.name}</Typography>
        <Uploadbutton 
        onUpload={(file) => handleUpload(news.id, file)}
          onError={(msg) => handleImageError(news.id, msg)}
           />   
        {news.image &&
        <Box className={classes.herouploadImageBox}>
        <img src={news.image} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}
        onClick={()=>handleRemoveImage(news.id)}/>
        </Box> }
        {news.imgerror && <ErrorMessages message={news.imgerror}/>}
        
      </Stack>
        <Stack>
        <Box className={classes.testimonialTextbox}>
        <Stack direction="column" gap={1}>
        <Typography className={classes.titleText}>Heading</Typography>
        <TextFieldSingleRow 
        value={news.heading} 
        validationFn={HeadingContentValidation}
        onChange={(value,error)=>handleHeadingChange(news.id,value,error)}/>
        {news.headingerror && <ErrormsgTitle message={news.headingerror}/>}
      </Stack>
      </Box>
      <Stack gap={1} mt={2}>
        <Typography className={classes.titleText}>Description</Typography>
        <TextFieldManyRows 
          value={news.description}
          onChange={(value, error) =>
          handleDescription(news.id, value, error)}
          validationFn={DescriptionContentValidation} />
        {news.descripterror && <ErrormsgContent message={news.descripterror}/>}
        </Stack>
        </Stack>
    </Stack>
    {editNewsId===news.id ?<UserEndSaveCancelButtons onSave={()=>handleSave(news.id)} 
      onCancel={()=>handleCancel(news.id)} disabled={isDisabled}/>:
     <UserEndSaveButton onSave={()=>handleSave(news.id)} disabled={isDisabled}/>}

    <Divider className={classes.heroDivider}/>
    
  </>
  )
    })}
    
  </Box>
    </Box>
  )
}

export default UserendNewsEvents
