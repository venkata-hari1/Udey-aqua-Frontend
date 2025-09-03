import { Box, Divider} from '@mui/material'
import bannerImage from '../../../assets/admin/banner.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useAdmindbStyles from '../styles/AdmindbStyles';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import MovingIcon from '@mui/icons-material/Moving';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';


const Admindb = () => {

const {classes}=useAdmindbStyles()
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));


const chartdata=[
  {month:'Jan',value:'40'},
  {month:'Feb',value:'28'},
  {month:'Mar',value:'35'},
  {month:'Apr',value:'50'},
  {month:'May',value:'32'},
  {month:'Jun',value:'48'},
  {month:'Jul',value:'50'},
  {month:'Aug',value:'36'},
  {month:'Sep',value:'38'},
  {month:'Oct',value:'50'},
  {month:'Nov',value:'28'},
  {month:'Dec',value:'34'},
]
const carddata=[
  {id:1,icon:<GroupsIcon sx={{color:"#0A4FA4",fontSize:"30px"}}/>,count:2500,label:'Total Subscribers'},
  {id:2,icon:<PersonAddIcon sx={{color:"#0A4FA4",fontSize:"30px"}}/>,count:530,label:'Training Program Registered'}
]

const trainingprogram=[
  {id:1,day:'Today',members:'Total Members Joined',membercount:20},
  {id:2,day:'Yesterday',members:'Total Members Joined',membercount:7},
  {id:1,day:'10/07/2025',members:'Total Members Joined',membercount:10},
]
return (
    <Box>
    <Box>
     <img src={bannerImage} width="100%"/>   
     {/* cards */}
     <Box className={classes.cardOuterBox}>
      {carddata.map((card)=>(
      
      <Card className={classes.topCardcontainer}>
      <CardContent>
        <Box className={classes.topCardcontentBox}>
         {card.icon}
        <Box>
        <Typography className={classes.topCardcount} variant='h4'>{card.count}</Typography>
        <Typography className={classes.topCardlabel}>{card.label}</Typography>  
        </Box>
        </Box>
      </CardContent>
     </Card>
      ))}
     </Box>
     {/* cards end */}
    </Box>
    {/* graph */}
    <Box className={classes.graphContainerBox}>
     <Card className={classes.graphCardContainer}>
      <CardContent>
        <Typography variant='h6' className={classes.cardContentTitle}>
         Training Program Registrations
        </Typography>
        <Box sx={{ marginLeft: isMobile ? "-35px": 0 }}>
       <ResponsiveContainer width="100%" height={200}>
           <BarChart data={chartdata} barSize={isMobile?15:20} >
            <XAxis dataKey="month" axisLine={false} tickLine={false} fontFamily='Inter' fontSize={12}/>
            <YAxis axisLine={false} tickLine={false} fontFamily='Inter' fontSize={12}/>
            <Tooltip />
            <Bar dataKey="value" fill="#1565C0" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>        
        </Box>
      </CardContent>
     </Card> 
    
     <Card className={classes.rightCardContainer}>
       <Typography className={classes.rightCardtitle} >Training Program Register</Typography>
    
    {trainingprogram.map((training,index)=>(
    <CardContent key={index}>
    <Typography textAlign="end">{training.day}</Typography>
    <Box display="flex" gap={2}>
    <MovingIcon sx={{color:'#0A4FA4'}}/>
    <Typography>{training.members} &nbsp; -</Typography>
    <Typography component="span" color='#0A4FA4' fontWeight="600">{training.membercount}</Typography>
    </Box>
    {index!==trainingprogram.length-1&& 
    <Divider sx={{border:'1px solid #0463EE'}}/>
    }
    
    </CardContent>
    ))}
    
    </Card> 
     
    </Box>
    </Box>
  )
}

export default Admindb
