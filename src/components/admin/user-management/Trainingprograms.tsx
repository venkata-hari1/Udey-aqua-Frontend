import { Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import DownloadIcon from '@mui/icons-material/Download';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";

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

 return (
    <Box>{/* main container */}
      <Box className={classes.waterButtonsContainer}>{/* buttons container  */}
      <Box className={classes.leftbuttonscontainer}>  
      <Button variant="contained" className={classes.Freshwaterbutton}>Fresh Water</Button>
      <Button variant="outlined" className={classes.BrackMarinebutton}>Brackish Water</Button>
      <Button variant="outlined" className={classes.BrackMarinebutton}>Marine Water</Button>  
     </Box>
     <Box className={classes.rightbuttonscontainer}>
       <Button variant="contained" className={classes.Freshwaterbutton} endIcon={<DownloadIcon />} >Export</Button>
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
                },
              }}>
              <TableCell padding="checkbox" >
               <Checkbox className={classes.trainingCheckbox} />
               {tdata.id}
                </TableCell>
                <TableCell padding="checkbox" onClick={()=>navigate('user-info')}>{tdata.name}</TableCell>
                <TableCell padding="checkbox">{tdata.email}</TableCell>
                <TableCell padding="checkbox">{tdata.phone}</TableCell>
                <TableCell padding="checkbox">{tdata.address}</TableCell>
                <TableCell padding="checkbox">{tdata.plan}</TableCell>
                <TableCell padding="checkbox">{tdata.culture}</TableCell>
                <TableCell padding="checkbox">{tdata.program}</TableCell>
                <TableCell padding="checkbox">{tdata.availability}</TableCell>
                <TableCell padding="checkbox">{tdata.payment}</TableCell>
                <TableCell padding="checkbox">
                  <VisibilityOutlinedIcon />
                  <DeleteOutlineIcon sx={{color:'red'}}/>
                </TableCell>
              
              </TableRow>
   
            ))}
          </TableBody>
        </Table>
     </TableContainer>

    </Box> /* main container training */
    )
}

export default Trainingprograms