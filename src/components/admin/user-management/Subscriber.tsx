import { Box, Button,Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import FilterListIcon from '@mui/icons-material/FilterList';
import Delete_Img from '../../../assets/admin/delete_icon.png'
import MyPagination from "../utils/MyPagination";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { sortByKey } from '../utils/Filter';
import type { SortOrder } from '../utils/Filter';
import { useState } from "react";

const Subscriber = () => {

  const subscribeheading=[
    {id:1,label:'S.No'},
    {id:1,label:'Email'},
    {id:1,label:'Subscription Type'},
    {id:1,label:'Date subscribed'},
    {id:1,label:'Action'},
  ]
  const subscriptiondata=[
    {id:1,email:'Praveen@gmail.com',subscriptiontype:'Blog Update',date:'12/07/2025'},
    {id:2,email:'SuryaPrathap@gmail.com',subscriptiontype:'Blog Update',date:'03/09/2025'},
    {id:3,email:'Arjunsai11@gmail.com',subscriptiontype:'Pdf Update',date:'09/01/2025'},
  ]
const {classes}=useUsermanagementStyles()

 const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Subscribers List", 14, 22);


    const tableData = subscriptiondata.map(item => [
      item.id,
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


  const [tableData, setTableData] = useState(subscriptiondata);
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    
    const toggleSort = () => {
      const newOrder: SortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      const sortedData = sortByKey(tableData, 'id', newOrder);
      setTableData(sortedData);
      setSortOrder(newOrder);
    };

  return (
   <Box>
       <Box className={classes.rightbuttonsGetinUser}>
            <Button variant="contained" className={classes.GetinuserExport} endIcon={<FileDownloadOutlinedIcon />} onClick={exportPDF} >Export</Button>
            <Button variant="outlined" className={classes.GetinuserFilter}   onClick={toggleSort} >  Filters {sortOrder === 'asc' ? '▲' : '▼'}</Button>    
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
                {tableData.map(tdata=>(
                  <TableRow key={tdata.id} sx={{
                    
                    borderTop:'1px solid #0A4FA4',
                   border: "1px solid #0463EE29",   
                    "& td": {
                      borderBottom: "none",
                      fontSize: "13px",  
                      },
                  }}>
                  <TableCell padding="checkbox" >
                   <Checkbox className={classes.trainingCheckbox}/>
                   {tdata.id}
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
