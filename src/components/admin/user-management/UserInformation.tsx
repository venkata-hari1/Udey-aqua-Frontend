import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import useUsermanagementStyles from "./UsermanagementStyle";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const UserInformation = () => {
 
  const {classes}=useUsermanagementStyles()
  
 const userinfodata=[
  {id:1,key:'First Name',value:'Surya'},
  {id:2,key:'Last Name',value:'Pratap'},
  {id:3,key:'Email',value:'Surya@gmail.com'},
  {id:4,key:'Phone Number',value:'+91 8123456789'},
  {id:5,key:'Address',value:'21B, Rash Behari, Ballyguge, Kolkatta,West Bengal 700019'},
  {id:6,key:'Plan',value:'Sea Bass'},
  {id:7,key:'Acquaculture',value:'Pond Farming'},
  {id:8,key:'Selected Program',value:'3 Days'},
  {id:9,key:'Availability',value:'Hyderabad'},
  {id:10,key:'Payment',value:'Rs/ 10,000'},
 ]

  const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("User Information", 14, 22);

  autoTable(doc, {
    startY: 30,
    head: [['Key', 'Value']],
    body: userinfodata.map(item => [item.key, item.value]),
    theme: 'grid',
    styles: { fontSize: 12 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
  });

  doc.save("UserInformation.pdf");
};

  
  
  return (
    <Box>
    <Box display="flex" justifyContent="flex-end">
    <Button className={classes.downLoadreport} 
     variant="outlined" endIcon={<FileDownloadOutlinedIcon /> } onClick={downloadPDF}>Download Report</Button>
    </Box>
    <Card className={classes.userInfoCardcontainer}>
      <CardContent>
        <Typography className={classes.userTitle}>Surya Pratap</Typography>
      {userinfodata.map((userinfo,index)=>(
        <Box className={classes.userInfodata}key={index}>
          <Typography className={classes.keyInfo}>{userinfo.key}</Typography>
         <Typography className={classes.valueInfo}>{userinfo.value}</Typography>
         </Box>
      ))}

      </CardContent>
    </Card>
    </Box>
)
}

export default UserInformation
