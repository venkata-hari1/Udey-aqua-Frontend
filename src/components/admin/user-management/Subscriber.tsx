import { Box, Button,Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import DownloadIcon from '@mui/icons-material/Download';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Subscriber = () => {

  const subscribeheading=[
    {id:1,label:'S.No'},
    {id:1,label:'Email'},
    {id:1,label:'Subscription Type'},
    {id:1,label:'Date subscribed'},
    {id:1,label:'Action'},
  ]
  const subscriptiondata=[
    {sno:1,email:'SuryaPrathap@gmail.com',subscriptiontype:'Blog Update',date:'12/07/2025'},
    {sno:2,email:'SuryaPrathap@gmail.com',subscriptiontype:'Blog Update',date:'12/07/2025'},
    {sno:3,email:'SuryaPrathap@gmail.com',subscriptiontype:'Blog Update',date:'12/07/2025'},
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
              <TableHead>
              <TableRow sx={{border: "1px solid #0A4FA4",
              }}>
                 {subscribeheading.map((heading)=>(
                    <TableCell key={heading.id}align="left"
                    sx={{color:'#0A4FA4',
                    borderBottom:'1px solid #0A4FA4'}}>{heading.label}</TableCell>
                 ))}
                </TableRow>
              </TableHead>
                <TableBody>
                {subscriptiondata.map(tdata=>(
                  <TableRow key={tdata.sno} sx={{
                   borderTop:'1px solid #0A4FA4',
                   border: "1px solid #0463EE29",   
                    "& td": {
                      borderBottom: "none", 
                      paddingLeft:'10px',
                    },
                  }}>
                  <TableCell padding="checkbox" >
                   <Checkbox className={classes.trainingCheckbox}/>
                   {tdata.sno}
                    </TableCell>
                    <TableCell padding="checkbox" >{tdata.email}</TableCell>
                    <TableCell padding="checkbox">{tdata.subscriptiontype}</TableCell>
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

export default Subscriber
