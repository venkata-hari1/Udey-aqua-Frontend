import { Box,Button,Divider, Stack, TextField, Typography,} from "@mui/material"
import {EditButton, ErrorMessages, ErrormsgContent, ErrormsgTitle, TextFieldManyRows, TextFieldSingleRow, Uploadbutton, UserendEditandDeletebuttons, UserEndSaveButton, UserEndSaveCancelButtons } from "../userEndHome/UserEndCommonButtons"
import { nameValidation } from "../../utils/Validations"
import useUserEndwebStyles from "../UserendwebStyles"
import CancelIcon from '@mui/icons-material/Cancel';
import fishImg from './../../../../assets/admin/fishImg.jpg';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface CulturessubpageProps {
  title: string;
  setTitle: (value: string) => void;
}
const Culturessubpage=({  setTitle }: CulturessubpageProps)=>{

const{classes}=useUserEndwebStyles()
{/*const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value); // update the title in parent state
  };
*/}


const handleEdit=()=>{
}

const[subpage,]=useState(
  { 
    id:uuidv4(),
    title:'',
    titleerror:''
  }
)
const [subsection,setSubsection]=useState([{
  id:uuidv4(),
  sectionname:`Subsection1`,
  name:'Image',
  image: "",
  sectiontitle:'',
  content: "",
  imgerror: "",
  contenterror: "",
}])

const handleAddsection=()=>{
  const newsection={id:uuidv4(),
  sectionname:`Subsection${subsection.length+1}`,
  name:'Image',
  image: "",
  sectiontitle:'',
  content: "",
  imgerror: "",
  contenterror: "", }

  setSubsection([...subsection,newsection])
 }



const onDelete=(id:string)=>{
 const updatedsection=subsection.filter((sub)=>sub.id!==id)
 setSubsection(updatedsection) 
}

const handleSave=()=>{
}
const handleCancel=()=>{
}

{/*const navigate=useNavigate()
const subPagetitlechange=(value:string,error:string)=>{
   setSubpage({ ...subpage, title: value, titleerror: error });
}*/}

const subpageSave=()=>{
  const cullturetitle={
    titlename:subpage.title
}
console.log(cullturetitle)
}
return(
        <Box p={3}>
         <Box className={classes.Subpagetitlecontainer} mt={3}>
         <Typography>
           Title
          </Typography>
         <Box>
         <TextFieldSingleRow onChange={(value) => setTitle(value)} validationFn={nameValidation}/>  
         <ErrorMessages message={subpage.titleerror}/>
         </Box>
         </Box>
         
        <Divider className={classes.heroDivider}/>
         {/* 2nd section */}
          <Box sx={{display:'flex', justifyContent:'space-between',mt:2}}>
            <Typography className={classes.MottoBoxText}>Hero Section</Typography>
            <EditButton sliceEdit={()=>handleEdit()}/>
         </Box>
         <Box className={classes.cultureheroBox2}>  
               <Stack display="flex" gap={2} justifyContent="space-between">
                   <Typography className={classes.titleText}>Image</Typography>
                   <Uploadbutton onUpload={() =>console.log("")}/>
                   <Box className={classes.herouploadImageBox1}>
                     <img src={fishImg} className={classes.herouploadImage} alt="fish image"/>
                     <CancelIcon className={classes.cancelImgIcon}/>
                     </Box>
                 <ErrorMessages />
              </Stack>
         
              <Box>
               <Typography className={classes.titleText}>SubTitle</Typography>
               <TextFieldManyRows onChange={() =>console.log()}
                 validationFn={nameValidation}/>
              </Box>
         </Box>
         <UserEndSaveCancelButtons onSave={handleSave} 
                onCancel={handleCancel} />
         <Divider className={classes.heroDivider}/>
         <Box>
        <Box display="flex" justifyContent="end" mt={2} mb={2}>    
        <Button  variant="contained" className={classes.addSubpagebutton} startIcon={<AddIcon />}
        onClick={handleAddsection}>
          Add Section
        </Button>
        </Box>
        {subsection.map((sub,index)=>{
          return (
            <>
            <Box mt={2}>
            <Stack className={classes.newsectionStack} key={index}>
            <Typography className={classes.MottoBoxText}>{sub.sectionname}</Typography>
            {index===0 ? <EditButton sliceEdit={()=>console.log("edit")}/>:
             <UserendEditandDeletebuttons 
             sliceEdit={()=>console.log("edit")}
             message={`Are you sure want to delete ${sub.name} ?`} 
             onDelete={() => onDelete(sub.id)}/> 
             }
            </Stack>
            <Box className={classes.sectionSeabassBox} >
                   {/* for lefside box */}
                   <Box className={classes.leftsideSectionbox}>
                     <Stack className={classes.leftsideSectionbox}>
                       <Typography className={classes.titleText}>{sub.name}</Typography>
                       <Uploadbutton onUpload={() =>console.log("")}/>
                       <Box className={classes.herouploadImageBox1}>
                         <img src={fishImg} className={classes.herouploadImage} alt="fish image"/>
                         <CancelIcon className={classes.cancelImgIcon} />
                       </Box>
                       <Typography className={classes.errorUpload}>
                         *Please upload the sponsor logo in landscape format (Preferred
                         size: 300px width × 100px height)
                         <Typography className={classes.errorUpload}>
                           Image Must be 5 MB
                         </Typography>
                       </Typography>
                     </Stack>
                    </Box>
         
                   {/* for  rightside box */}
                   <Box>
                     <Stack gap={1}>
                       <Box>
                       <Typography className={classes.titleText}>Title</Typography>
                       <TextField
                         size="small"
                         className={classes.textfiledTestimonialblog}
                       />
                       <ErrormsgTitle />
                       </Box>
                       <Box>
                       <Typography className={classes.titleText}>Content</Typography>
                       <TextField
                         className={classes.heroTextfiled}
                         fullWidth
                         multiline
                         minRows={4}
                       />
                       <ErrormsgContent />
                      </Box> 
                     </Stack>
                   </Box>
            </Box>
              <UserEndSaveCancelButtons onSave={handleSave} 
                onCancel={handleCancel} />
          <Divider className={classes.heroDivider}/>
          <UserEndSaveButton onSave={subpageSave}/>
          </Box>
            </>
          )
        })}
    
           </Box>
           </Box>
    )
}
export default Culturessubpage