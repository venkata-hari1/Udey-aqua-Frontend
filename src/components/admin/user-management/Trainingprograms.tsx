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
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import { sortByKey } from '../utils/filter';
import type { SortOrder } from '../utils/filter';





const Trainingprograms = () => {
  
  const {classes}=useUsermanagementStyles()
  const navigate=useNavigate()
  const [activePage, setActivePage] = useState("Fresh Water");
  const [open, setOpen] = useState(false);
  


const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

const toggleSort = () => {
  const newOrder: SortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  const sortedData = sortByKey(tableData, 'id', newOrder);
  setTableData(sortedData);
  setSortOrder(newOrder);
};

  const tableheading=[
    {id:1,label:'S.No'},
    {id:2,label:'Name'},
    {id:3,label:'Email'},
    {id:4,label:'Phone Number'},
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

const [tableData, setTableData] = useState(tablebodydata);

const handleClickOpen = () => {
   setOpen((prev)=>!prev)
  };


  const exportPDF = () => {
  const  doc = new jsPDF('l', 'pt', 'a4'); 
 

  const headers = tableheading .filter(h => h.label !== 'Action') 
    .map(h => h.label);
  const rows = tablebodydata.map(row => [
    row.id,
    row.name,
    row.email,
    row.phone,
    row.address,
    row.plan,
    row.culture,
    activePage,
    row.availability,
    row.payment,
  ]);

autoTable(doc, {
  head: [headers],
  body: rows,
  startY: 40,
  pageBreak: 'auto',
  styles: {
    fontSize: 8,
    cellPadding: 4,
    overflow: 'linebreak', 
    valign: 'middle',
  },
  headStyles: {
    fillColor: [50, 130, 200],
    textColor: 255,
    halign: 'center',
  },
  columnStyles: {
    4: { cellWidth: 'wrap' }, 
    6: { cellWidth: 'wrap' }, 
  },
  tableWidth: 'auto', 
});



  doc.save("TrainingPrograms.pdf");
};


return (
    <Box>{/* main container */}
      <Box className={classes.waterButtonsContainer}>{/* buttons container  */}
      <Box className={classes.leftbuttonscontainer}>  
      <Button variant={activePage === "Fresh Water" ? "contained" : "outlined"} 
            className={classes.Freshwaterbutton}
            onClick={() => setActivePage("Fresh Water")} >Fresh Water</Button>
      <Button  variant={activePage === "Brackish Water" ? "contained" : "outlined"} 
            className={classes.BrackMarinebutton}
            onClick={() => setActivePage("Brackish Water")} >Brackish Water</Button>
      <Button  variant={activePage === "Marine Water" ? "contained" : "outlined"} 
            className={classes.BrackMarinebutton}
            onClick={() => setActivePage("Marine Water")} >Marine Water</Button>  
     </Box>
     <Box className={classes.rightbuttonscontainer}>
       <Button variant="contained" className={classes.Freshwaterbutton} endIcon={<FileDownloadOutlinedIcon />}  onClick={exportPDF}>Export</Button>
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
                className={classes.tabelHeadingCell}
                >{heading.label}</TableCell>
             ))}
            </TableRow>
          </TableHead>
            <TableBody>
            {tableData.map(tdata=>(
              <TableRow key={tdata.id} 
              className={classes.tablebodyRow}
              >
              <TableCell padding="checkbox" >
               <Checkbox className={classes.trainingCheckbox} />
               {tdata.id}
                </TableCell>
                <TableCell className={classes.trainingTablecellName}
                 onClick={()=>navigate('user-info')}>{tdata.name}</TableCell>
                <TableCell>{tdata.email}</TableCell>
                <TableCell>{tdata.phone}</TableCell>
                <TableCell className={classes.tabelCellAdress}>{tdata.address}</TableCell>
                <TableCell>{tdata.plan}</TableCell>
                <TableCell>{tdata.culture}</TableCell>
                  <TableCell>{activePage}</TableCell>
                <TableCell sx={{ whiteSpace: "none",
    wordBreak: "break-word",
    maxWidth: 100,}}>{tdata.availability}</TableCell>
                <TableCell>{tdata.payment}</TableCell>
                <TableCell>
                  <Box sx={{display:'flex', justifyContent:'center',alignItems:'center',gap:'8px'}}>
                  <VisibilityOutlinedIcon sx={{fontSize:"20px",cursor:'pointer'} } onClick={() => navigate("user-info", { state: { user: tdata } })}/>
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