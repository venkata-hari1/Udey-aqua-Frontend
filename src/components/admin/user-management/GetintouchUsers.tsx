import { Box, Button,Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useUsermanagementStyles from "./UsermanagementStyle"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import Delete_Img from '../../../assets/admin/delete_icon.png'
import MyPagination from "../utils/MyPagination";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import { sortByKey } from '../utils/filter';
import type { SortOrder } from '../utils/filter';
import { useState } from "react";


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
 {id:2,name:'Nalamothu Ramya',phone:'91-8123203040',message:'Hi,i want to know about fish farming  programs. Please share the upcoming schedule and enrollment process',
  date:'12/07/2025 10:00 AM',  
 },
 {id:3,name:'Vijay nayar',phone:'91-8123203040',message:'Hi, I’d like to learn more about your aquaculture training programs. Please share the upcoming schedule and enrollment process',
  date:'12/07/2025 10:00 AM',  
 },
]
const {classes}=useUsermanagementStyles()

const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Get in Touch Users", 14, 22);

    

    const tableData = getinuserdata.map(user => [
      user.id,
      user.name,
      user.phone,
      user.message,
      user.date,
       
    ]);

    autoTable(doc, {
      startY: 30,
      head: [getinUserheading.map(h => h.label)],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      styles: { fontSize: 10 },
    });

    doc.save("GetinTouchUsers.pdf");
  };

   const [tableData, setTableData] = useState(getinuserdata);
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
       <Button variant="contained" className={classes.GetinuserExport} endIcon={<FileDownloadOutlinedIcon />}  onClick={exportPDF} >Export</Button>
       <Button variant="outlined" className={classes.GetinuserFilter} onClick={toggleSort} >  Filters {sortOrder === 'asc' ? '▲' : '▼'} </Button>
  </Box>
   <TableContainer component={Paper}>
       <Table sx={{width:'100%'}} size="medium">
          <TableHead >
          <TableRow sx={{border: "1px solid #0A4FA4",
          }}>
            {getinUserheading.map((heading)=>(
                <TableCell key={heading.id} align="left"
                padding="normal"
                sx={{color:'#0A4FA4',
                borderBottom:'1px solid #0A4FA4'}}>{heading.label}</TableCell>
             ))}
          </TableRow>
          </TableHead>
            <TableBody>
            {tableData.map(tdata=>(
              <TableRow key={tdata.id} className={classes.tablebodyRow}>
              <TableCell padding="checkbox" align="left" >
               <Checkbox className={classes.trainingCheckbox}/>
               {tdata.id}
                </TableCell>
                <TableCell >{tdata.name}</TableCell>
                <TableCell >{tdata.phone}</TableCell>
                <TableCell className={classes.tabelCellAdress}>{tdata.message}</TableCell>
                <TableCell >{tdata.date}</TableCell>
                <TableCell >
                  <img src={Delete_Img} style={{width:"30px",height:"30px",paddingLeft:'10px' }}/>
                  {/* <DeleteOutlineIcon sx={{color:'red'}}/> */}
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

export default GetintouchUsers
