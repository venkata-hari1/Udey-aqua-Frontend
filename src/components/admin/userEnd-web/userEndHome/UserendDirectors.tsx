import { Box, Button,Divider,FormControl,MenuItem,Select,Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons, Uploadbutton, ErrorMessages, ErrormsgTitle, UserendEditandDeletebuttons, EditButton, TextFieldSingleRow, UserEndSaveButton } from "./UserEndCommonButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { nameValidation } from "../../utils/Validations";

const UserendDirectors = () => {

const{classes}=useUserEndwebStyles() 
    
const [directerslist,setDirectorslist]=useState([
  {id:uuidv4(),directorname:'',titie:'Image',image:'',
    name:'',role:'',place:'', imgerror:'',nameerror:'',roleerror:'',placeerror:''
  }
]) 

const [advisorslist,setAdvisorslist]=useState([{
  id:uuidv4(),advisorname:'',titie:'Image',image:'',
    name:'',role:'',place:'', imgerror:'',nameerror:'',roleerror:'',placeerror:''
}])


const [isEditMode, setIsEditMode] = useState(false);

const handleAddDirectors=()=>{
  const newdirector= {id:uuidv4(),directorname:'',titie:'Image',image:'',
    name:'',role:'',place:'', imgerror:'',nameerror:'',roleerror:'',placeerror:''}
 setDirectorslist([...directerslist,newdirector])
}

const handleAddAdvisor=()=>{
   const newAdvisor={id:uuidv4(),advisorname:'',titie:'Image',image:'',
    name:'',role:'',place:'', imgerror:'',nameerror:'',roleerror:'',placeerror:''}
  setAdvisorslist([...advisorslist,newAdvisor])  
}

const onDeleteDirector=(id:string)=>{
   const updateddirectors= directerslist.filter((director)=>
   director.id!==id);
   setDirectorslist(updateddirectors);
}

const onDeleteAdvisor=(id:string)=>{
  const updatedAdvisors=advisorslist.filter((advisor)=>advisor.id!==id);
  setAdvisorslist(updatedAdvisors);
}

const onDirectorsUpload=(id:string,file:File)=>{
  const imgUrl=URL.createObjectURL(file);
  const updateddirectors=directerslist.map((director)=>
  director.id===id ?{...director,image:imgUrl,imgeerror:''}:director);
  setDirectorslist(updateddirectors)
}

const onRemoveDirectorimg=(id:string)=>{
  const updatedImages=directerslist.map((director)=>
   director.id===id ?{...director,image:"",imgerror:''}:director
);
 setDirectorslist(updatedImages); 
}

const handleImageError=(id:string,msg:string)=>{
  setDirectorslist((prev)=>
  prev.map((dirimg)=>
  dirimg.id===id ?{...dirimg,imgerror:msg}:dirimg ))
}
      

const directorNameChange=(id:string,value:string,error:string)=>{
  const updatedname=directerslist.map((prev)=>
  prev.id===id?{...prev,name:value,nameerror:error}:prev);
   setDirectorslist(updatedname);
}
const directorRoleChange=(id:string,value:string,error:string)=>{
  const updatedrole=directerslist.map((prev)=>
  prev.id===id?{...prev,role:value,roleerror:error}:prev);
   setDirectorslist(updatedrole);
}
const directorPlaceChange=(id:string,value:string,error:string)=>{
  const updatedplace=directerslist.map((prev)=>
  prev.id===id?{...prev,place:value,placeerror:error}:prev);
   setDirectorslist(updatedplace);
}

//advisors
const onAdvisorsUpload=(id:string,file:File)=>{
  const imgUrl=URL.createObjectURL(file);
  const updatedadvisors=advisorslist.map((advisor)=>
  advisor.id===id ?{...advisor,image:imgUrl,imgeerror:''}:advisor);
  setAdvisorslist(updatedadvisors)
}

const handleAdvImageError=(id:string,msg:string)=>{
  setAdvisorslist((prev) =>
      prev.map((advisor) =>
        advisor.id === id ? { ...advisor, imgerror: msg } : advisor
      )
    )
 }

const handeleRemoveAdvisorImg=(id:string)=>{
  const updatedImage = advisorslist.map((advisor) =>
      advisor.id === id ? { ...advisor, image: "" } : advisor
    );
    setAdvisorslist(updatedImage);
}

const advisorNameChange=(id:string,value:string,error:string)=>{
   const updatedname=advisorslist.map((prev)=>
   prev.id===id?{...prev,name:value,nameerror:error}:prev);
   setAdvisorslist(updatedname);
}

const advisorRoleChange=(id:string,value:string,error:string)=>{
  const updatedrole=advisorslist.map((prev)=>
   prev.id===id?{...prev,role:value,roleerror:error}:prev);
   setAdvisorslist(updatedrole);
}

const advisorPlaceChange=(id:string,value:string,error:string)=>{
  const updatedplace=advisorslist.map((prev)=>
   prev.id===id?{...prev,place:value,placeerror:error}:prev);
   setAdvisorslist(updatedplace);
}

const handleSave=()=>{
   console.log(directerslist,advisorslist)
   localStorage.setItem("DirectorsData",JSON.stringify(directerslist));
   localStorage.setItem("AdvisorsData",JSON.stringify(advisorslist));
   
   const clearedDirectors=directerslist.map((d)=>({
      ...d, image:'',name:'',role:'',place:'',imgerror:'',nameerror:'',roleerror:'',placeerror:''
   }))
  const clearedAdvisors = advisorslist.map((a) => ({
    ...a,
    image:'',name:'',role:'',place:'',
    imgerror: "",
    nameerror: "",
    roleerror: "",
    placeerror: "",
  }));
  setDirectorslist(clearedDirectors);
  setAdvisorslist(clearedAdvisors);
   setIsEditMode(false);
}

const handleCancel=()=>{
   setDirectorslist((prev) =>
    prev.map((d) => ({
      ...d,image: "",name: "",role: "",place: "",imgerror: "",
      nameerror: "",roleerror: "",placeerror: "",
    }))
  );

    setAdvisorslist((prev) =>
    prev.map((a) => ({
      ...a,
      image: "",
      name: "",
      role: "",
      place: "",
      imgerror: "",
      nameerror: "",
      roleerror: "",
      placeerror: "",
    }))
  );
  setIsEditMode(false);
}

const isSaveEnabled=()=>{
  const directorsValid = directerslist.every(
    (d) => d.name.trim() && d.role.trim() && d.place.trim() && d.image
  );
  const advisorsValid = advisorslist.every(
    (a) => a.name.trim() && a.role.trim() && a.place.trim() && a.image
  );
  return directorsValid && advisorsValid;
}

const handleDirectorEdit=(id:string)=>{
  const savedDirectors=JSON.parse(localStorage.getItem("Directorsdata") || "[]");
  const directorToEdit=savedDirectors.find((d:any)=>d.id==id);
  if(directorToEdit){
    setDirectorslist([directorToEdit]);
     setIsEditMode(true);
  } 
 }

const handleAdvisorEdit=(id:string)=>{
  const savedAdvisors = JSON.parse(localStorage.getItem("AdvisorsData") || "[]");
   const advisorToEdit = savedAdvisors.find((a: any) => a.id === id);
  if(advisorToEdit){
    setAdvisorslist([advisorToEdit]);
    setIsEditMode(true);
  }
  
}
return (
   <Box>
       <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}
       onClick={handleAddDirectors}>Add Directors</Button>
      </Box>
      {directerslist.map((director,index)=>{
        return (
         <>
         <Box className={classes.FormCurageBox} key={director.id}>
        <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px'} }}>
        <Select
         labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={director.directorname}
        className={classes.dropDownSelect}
        onChange={(e)=> {
          const newName=e.target.value;
          setDirectorslist((prev)=>
          prev.map((d)=>
          d.id===director.id ? {...d,directorname:newName}:d))
        }}>
        <MenuItem value="Director1">Director1</MenuItem>
        <MenuItem value="Director2">Director2</MenuItem>
       </Select>
       </FormControl>
       {index===0 ? <EditButton sliceEdit={()=>handleDirectorEdit(director.id)}/> :
       <UserendEditandDeletebuttons message={`Are you sure want to delete Director?`}
       onDelete={()=>onDeleteDirector(director.id)} 
       sliceEdit={()=>handleDirectorEdit(director.id)}
        /> }
      </Box>
      <Stack className={classes.projectsUploadContentbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>{director.titie}</Typography>
        <Uploadbutton onUpload={(file) => onDirectorsUpload(director.id,file)}
          onError={(msg) => handleImageError(director.id, msg)}/>   
        {director.image &&
        <Box className={classes.herouploadImageBox}>
        <img src={director.image} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}
        onClick={()=>onRemoveDirectorimg(director.id)}/>
        </Box>}
        {director.imgerror &&<ErrorMessages message={director.imgerror}/> }
       </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack>
       <Typography className={classes.titleText} >Name</Typography>
        <TextFieldSingleRow validationFn={nameValidation} 
         value={director.name}
         onChange={(value,error)=>directorNameChange(director.id,value,error)}/>
        <ErrormsgTitle message={director.nameerror}/>
        </Stack>
        <Stack>
        <Typography className={classes.titleText} >Role</Typography>
        <TextFieldSingleRow value={director.role}
         validationFn={nameValidation}
         onChange={(value,error)=>directorRoleChange(director.id,value,error)}
        />
         <ErrormsgTitle message={director.roleerror}/>
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Place</Typography>
        <TextFieldSingleRow value={director.place} 
         validationFn={nameValidation}
         onChange={(value,error)=>directorPlaceChange(director.id,value,error)}
         />
         <ErrormsgTitle message={director.placeerror}/>
        </Stack> 
      </Box>
      </Stack> 
      <Divider sx={{border:'1px solid #0A4FA4',mt:2,mb:2}}/>
        </>
        )
    })}
      </Box> 

     {/* for advisors */}
      <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}
        onClick={handleAddAdvisor}>Add Advisors</Button>
       </Box>
      {advisorslist.map((advisor,index)=>{
       return (
       <>
       <Box className={classes.FormCurageBox} key={advisor.id}>
       <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px'} }}>
        <Select
         labelId="demo-simple-select-label"
        id="demo-simple-select"
        /* label="Curage Culture" */
        value={advisor.advisorname}
        className={classes.dropDownSelect}
         onChange={(e) => {
         const newName = e.target.value;
          setAdvisorslist((prev) =>
            prev.map((a) =>
              a.id === advisor.id ? { ...a, advisorname: newName } : a
            )
          );
        }}>
       <MenuItem value="Advisor1">Advisor1</MenuItem>
        <MenuItem value="Advisor2">Advisor2</MenuItem>
       </Select>
     </FormControl>
      {index===0 ? <EditButton sliceEdit={()=>handleAdvisorEdit(advisor.id)}/>:
       <UserendEditandDeletebuttons message={`Are you sure want to delete Advisor?`}
       onDelete={()=>onDeleteAdvisor(advisor.id)}
       sliceEdit={()=>handleAdvisorEdit(advisor.id)}/> }
      </Box>
      <Stack className={classes.projectsUploadContentbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>Image</Typography>
        <Uploadbutton onUpload={(file) => onAdvisorsUpload(advisor.id,file)}
          onError={(msg) => handleAdvImageError(advisor.id, msg)}
          />
         {advisor.image &&
         <Box className={classes.herouploadImageBox}>
         <img src={advisor.image} className={classes.herouploadImage}/>
         <CancelIcon className={classes.cancelImgIcon}
          onClick={()=>handeleRemoveAdvisorImg(advisor.id)}/>
         </Box>
        }    
        
        {advisor.imgerror && <ErrorMessages message={advisor.imgerror}/>}
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack>
        <Typography className={classes.titleText} >Name</Typography>
        <TextFieldSingleRow value={advisor.name}
         validationFn={nameValidation}
         onChange={(value,error)=>advisorNameChange(advisor.id,value,error)}/>   
         {advisor.nameerror && <ErrormsgTitle message={advisor.nameerror}/>}
         </Stack>
         <Stack>
        <Typography className={classes.titleText}>Role</Typography>
        <TextFieldSingleRow value={advisor.role}
         validationFn={nameValidation}
         onChange={(value,error)=>advisorRoleChange(advisor.id,value,error)}/>
         {advisor.roleerror &&  <ErrormsgTitle message={advisor.roleerror}/>}
         </Stack>
        <Stack>
        <Typography className={classes.titleText} >Place</Typography>
        <TextFieldSingleRow 
        value={advisor.place}
         validationFn={nameValidation}
        onChange={(value,error)=>advisorPlaceChange(advisor.id,value,error)}/>
        {advisor.placeerror&& <ErrormsgTitle message={advisor.placeerror}/>} 
        </Stack> 
      </Box>
      </Stack>
      <Divider sx={{border:'1px solid #0A4FA4',mt:2,mb:2}}/>
      </>
       )
      })}
      {isEditMode ? <UserEndSaveCancelButtons onSave={handleSave} 
      onCancel={handleCancel}/>:
      <UserEndSaveButton onSave={handleSave}
       disabled={!isSaveEnabled()}  /> 
      }
      
       
      </Box>
      </Box>
  )
}

export default UserendDirectors
