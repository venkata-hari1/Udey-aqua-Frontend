import { Box, Button,Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import Delete_Img from '../../../assets/admin/delete_icon.png'
import MyPagination from "../utils/MyPagination";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

 const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Subscribers List", 14, 22);


    const tableData = subscriptiondata.map(item => [
      item.sno,
      item.email,
      item.subscriptiontype,
      item.date,
    ]);

    autoTable(doc, {
      startY: 30,
      head: [subscribeheading.slice(0, 4).map(h => h.label)], 
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      styles: { fontSize: 10 },
    });

    doc.save("Subscribers.pdf");
  };
  return (
   <Box>
       <Box className={classes.rightbuttonsGetinUser}>
            <Button variant="contained" className={classes.GetinuserExport} endIcon={<FileDownloadOutlinedIcon />} onClick={exportPDF} >Export</Button>
            <Button variant="outlined" className={classes.GetinuserFilter} endIcon={<FilterListIcon />}>Filters</Button>
       </Box>
    <TableContainer component={Paper}>
           <Table sx={{width:'100%'}} size="medium">
              <TableHead>
              <TableRow sx={{border: "1px solid #0A4FA4",
              }}>
                 {subscribeheading.map((subheading)=>(
                    <TableCell key={subheading.id} 
                     align="left"
                     sx={{color:'#0A4FA4',
                     borderBottom:'1px solid #0A4FA4'}}>{subheading.label}</TableCell>
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
                      fontSize: "13px",  
                      },
                  }}>
                  <TableCell padding="checkbox" >
                   <Checkbox className={classes.trainingCheckbox}/>
                   {tdata.sno}
                    </TableCell >
                    <TableCell>{tdata.email}</TableCell>
                    <TableCell align="left">{tdata.subscriptiontype}</TableCell>
                    <TableCell >{tdata.date}</TableCell>
                    <TableCell>
                      <img src={Delete_Img} style={{width:"30px",height:"30px" }}/>
                     </TableCell>
                  
                  </TableRow>
       
                ))}
              </TableBody>
            </Table>
         </TableContainer>
        <MyPagination />
   </Box>
  )
}

export default Subscriber
