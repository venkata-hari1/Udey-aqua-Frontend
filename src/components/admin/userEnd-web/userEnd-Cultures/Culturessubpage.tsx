import { Box,Button,Divider, Stack, TextField, Typography,} from "@mui/material"
import {EditButton, ErrorMessages, ErrormsgContent, ErrormsgTitle, TextFieldManyRows, TextFieldSingleRow, Uploadbutton, UserendEditandDeletebuttons, UserEndSaveButton, UserEndSaveCancelButtons } from "../userEndHome/UserEndCommonButtons"
import { nameValidation } from "../../utils/Validations"
import useUserEndwebStyles from "../UserendwebStyles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Hero from "../userEnd-Aboutus/Hero";
import { AddSection } from "../userEnd-Aboutus/AboutUsButtons";
import Subsection from '../userEnd-Aboutus/Subsection';
import Badge from "@mui/material/Badge";

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
const [subpages, setSubpages] = useState<{ id:string}[]>([]);
const [counter, setCounter] = useState<number>(1);

const handleAddSubpage = () => {
        const newId = `Sub Section-${counter+1}`; 
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter+1)
};



const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        setCounter(counter-1)
    }; 

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
          {/*<Box sx={{display:'flex', justifyContent:'space-between',mt:2}}>
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
                onCancel={handleCancel} />*/}
        <Hero/>
         <Divider className={classes.heroDivider}/>
         <Box>
        <Box display="flex" justifyContent="end" mt={2} mb={2}>    
        {/*<Button  variant="contained" className={classes.addSubpagebutton} startIcon={<AddIcon />}
        onClick={handleAddsection}>
          Add Section
        </Button>*/}
        <Badge
          badgeContent={counter}
          sx={{
              "& .MuiBadge-badge": {
              backgroundColor: "#0A4FA4",
              color: "#fff", 
              },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}>
            <AddSection onClick={handleAddSubpage}/>
          </Badge> 
        </Box>
        <Subsection id='Sub Section-1' accordianId='custom' Section='Cultures' title='Cultures'/>
       {subpages.map((sub) => (
          <Subsection key={sub.id} id={sub.id} accordianId='custom' Section='Cultures' title='Cultures' onDelete={() => handleDeleteSubpage(sub.id)} />
        ))}
    
           </Box>
           </Box>
    )
}
export default Culturessubpage