import { Box, Button,Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import DownloadIcon from '@mui/icons-material/Download';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const GetintouchUsers = () => {

const getinUserheading=[
 {id:1,label:'S.No'},
 {id:2,label:'Name'},
 {id:3,label:'Phone Number'},
 {id:4,label:'Message'},
 {id:5,label:'Submitted Date & Time'},
 {id:6,label:'Action'} 
]

const getinuserdata=[
 {id:1,name:'Surya Pratap',phone:'91-8123203040',message:'Hi, I’d like to learn more about your aquaculture training programs. Please share the upcoming schedule and enrollment process',
  date:'12/07/2025 10:00 AM',  
 },
 {id:2,name:'Surya Pratap',phone:'91-8123203040',message:'Hi, I’d like to learn more about your aquaculture training programs. Please share the upcoming schedule and enrollment process',
  date:'12/07/2025 10:00 AM',  
 },
 {id:3,name:'Surya Pratap',phone:'91-8123203040',message:'Hi, I’d like to learn more about your aquaculture training programs. Please share the upcoming schedule and enrollment process',
  date:'12/07/2025 10:00 AM',  
 },
]
const {classes}=useUsermanagementStyles()

  return (
  <Box>
  <Box className={classes.rightbuttonsGetinUser}>
       <Button variant="contained" className={classes.GetinuserExport} endIcon={<DownloadIcon />} >Export</Button>
       <Button variant="outlined" className={classes.GetinuserFilter} endIcon={<FilterListIcon />}>Filters</Button>
  </Box>
   <TableContainer component={Paper}>
       <Table sx={{width:'100%'}} size="medium">
          <TableHead >
          <TableRow sx={{border: "1px solid #0A4FA4",
          }}>
             {getinUserheading.map((heading)=>(
                <TableCell key={heading.id}align="left"
                sx={{color:'#0A4FA4',
                borderBottom:'1px solid #0A4FA4'}}>{heading.label}</TableCell>
             ))}
            </TableRow>
          </TableHead>
            <TableBody>
            {getinuserdata.map(tdata=>(
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
                <TableCell padding="checkbox" >{tdata.name}</TableCell>
                <TableCell padding="checkbox">{tdata.phone}</TableCell>
                <TableCell padding="checkbox">{tdata.message}</TableCell>
                <TableCell padding="checkbox">{tdata.date}</TableCell>
                <TableCell padding="checkbox">
                  <DeleteOutlineIcon sx={{color:'red'}}/>
                </TableCell>
              
              </TableRow>
   
            ))}
          </TableBody>
        </Table>
     </TableContainer>

  </Box>

  )
}

export default GetintouchUsers
