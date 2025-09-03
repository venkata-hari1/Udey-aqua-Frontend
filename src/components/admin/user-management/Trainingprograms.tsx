import { Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Delete_Img from '../../../assets/admin/delete_icon.png'
import { useNavigate } from "react-router-dom";
import MyPagination from "../utils/MyPagination";
import { useState } from "react";
import Deletepopup from "../utils/Deletepopup";

const Trainingprograms = () => {
  
  const {classes}=useUsermanagementStyles()
  const navigate=useNavigate()

  const tableheading=[
    {id:1,label:'S.No'},
    {id:2,label:'Name'},
    {id:3,label:'Email'},
    {id:4,label:'Phone'},
    {id:5,label:'Adress'},
    {id:6,label:'Plan'},
    {id:7,label:'Aqua Culture'},
    {id:8,label:'Selected Program'},
    {id:8,label:'Availability'},
    {id:9,label:'Payment'},
    {id:10,label:'Action'},
  ]

 const tablebodydata=[
    {id:1,name:'Surya pratap',email:'surya5@gmail.com',phone:'91+ 8123456789',address:'21B, Rash Behari, Ballygunge, Kolkata, West Bengal 700019',
     plan:'3 Days',culture:'Nizamabad,Sea Bass,RAS',program:'Fresh Water',availability:'From 12-07-2025 To 12-07-2025',
     payment:'Rs/ 10,000'
    },
    {id:2,name:'Surya pratap',email:'surya5@gmail.com',phone:'91+ 8123456789',address:'21B, Rash Behari, Ballygunge, Kolkata, West Bengal 700019',
     plan:'3 Days',culture:'Nizamabad,Sea Bass,RAS',program:'Fresh Water',availability:'From 12-07-2025 To 12-07-2025',
     payment:'Rs/ 10,000'
    },
    {id:3,name:'Surya pratap',email:'surya5@gmail.com',phone:'91+ 8123456789',address:'21B, Rash Behari, Ballygunge, Kolkata, West Bengal 700019',
     plan:'3 Days',culture:'Nizamabad,Sea Bass,RAS',program:'Fresh Water',availability:'From 12-07-2025 To 12-07-2025',
     payment:'Rs/ 10,000'
    },
    {id:4,name:'Surya pratap',email:'surya5@gmail.com',phone:'91+ 8123456789',address:'21B, Rash Behari, Ballygunge, Kolkata, West Bengal 700019',
     plan:'3 Days',culture:'Nizamabad,Sea Bass,RAS',program:'Fresh Water',availability:'From 12-07-2025 To 12-07-2025',
     payment:'Rs/ 10,000'
    },
       {id:5,name:'Surya pratap',email:'surya5@gmail.com',phone:'91+ 8123456789',address:'21B, Rash Behari, Ballygunge, Kolkata, West Bengal 700019',
     plan:'3 Days',culture:'Nizamabad,Sea Bass,RAS',program:'Fresh Water',availability:'From 12-07-2025 To 12-07-2025',
     payment:'Rs/ 10,000'
    },
    {id:6,name:'Surya pratap',email:'surya5@gmail.com',phone:'91+ 8123456789',address:'21B, Rash Behari, Ballygunge, Kolkata, West Bengal 700019',
     plan:'3 Days',culture:'Nizamabad,Sea Bass,RAS',program:'Fresh Water',availability:'From 12-07-2025 To 12-07-2025',
     payment:'Rs/ 10,000'
    },
  ]

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
   setOpen((prev)=>!prev)
  };

return (
    <Box>{/* main container */}
      <Box className={classes.waterButtonsContainer}>{/* buttons container  */}
      <Box className={classes.leftbuttonscontainer}>  
      <Button variant="contained" className={classes.Freshwaterbutton}>Fresh Water</Button>
      <Button variant="outlined" className={classes.BrackMarinebutton}>Brackish Water</Button>
      <Button variant="outlined" className={classes.BrackMarinebutton}>Marine Water</Button>  
     </Box>
     <Box className={classes.rightbuttonscontainer}>
       <Button variant="contained" className={classes.Freshwaterbutton} endIcon={<FileDownloadOutlinedIcon />} >Export</Button>
       <Button variant="outlined" className={classes.BrackMarinebutton} endIcon={<FilterListIcon />}>Filters</Button>
     </Box>
     </Box>{/* buttons container end */}
     <TableContainer component={Paper}>
       <Table sx={{width:'100%'}} size="medium">
          <TableHead >
          <TableRow sx={{border: "1px solid #0A4FA4",
          }}>
             {tableheading.map((heading)=>(
                <TableCell key={heading.id}align="left"
                sx={{color:'#0A4FA4',
                borderBottom:'1px solid #0A4FA4'}}>{heading.label}</TableCell>
             ))}
            </TableRow>
          </TableHead>
            <TableBody>
            {tablebodydata.map(tdata=>(
              <TableRow key={tdata.id} sx={{
               borderTop:'1px solid #0A4FA4',
               border: "1px solid #0463EE29",   
                "& td": {
                  borderBottom: "none",
                  fontSize: "13px",
                },
              }}>
              <TableCell padding="checkbox" >
               <Checkbox className={classes.trainingCheckbox} />
               {tdata.id}
                </TableCell>
                <TableCell sx={{cursor:'pointer'}}
                 onClick={()=>navigate('user-info')}>{tdata.name}</TableCell>
                <TableCell>{tdata.email}</TableCell>
                <TableCell>{tdata.phone}</TableCell>
                <TableCell>{tdata.address}</TableCell>
                <TableCell>{tdata.plan}</TableCell>
                <TableCell>{tdata.culture}</TableCell>
                <TableCell>{tdata.program}</TableCell>
                <TableCell>{tdata.availability}</TableCell>
                <TableCell>{tdata.payment}</TableCell>
                <TableCell>
                  <Box sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                  <VisibilityOutlinedIcon sx={{fontSize:"20px",cursor:'pointer'}}/>
                  <img src={Delete_Img} style={{width:"24px",height:"25px",paddingTop:'3px',cursor:'pointer' }}
                  onClick={handleClickOpen}/>
                  </Box>
                  {open&&<Deletepopup open={open} handleclickopen={handleClickOpen}/>}
                </TableCell>
              
              </TableRow>
   
            ))}
          </TableBody>
        </Table>
     </TableContainer>
    <MyPagination />

    </Box> /* main container training */
    )
}

export default Trainingprograms