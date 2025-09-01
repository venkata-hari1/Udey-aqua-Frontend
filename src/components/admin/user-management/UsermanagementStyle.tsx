import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useUsermanagementStyles = makeStyles()((theme: Theme) => ({
  waterButtonsContainer: {
    display:"flex",
    justifyContent:'space-between',
    padding:5,
    [theme.breakpoints.down('sm')]:{
      gap:theme.spacing(1)
    }
  },
  leftbuttonscontainer:{
    display:'flex',
    gap:theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      width:'100%',
      flexWrap:'nowrap'
    }
  },
  Freshwaterbutton:{
    backgroundColor:theme.palette.primary.dark,
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.contrastText,
    textTransform:'capitalize',
  },
  BrackMarinebutton:{
    textTransform:'capitalize',
    color:theme.palette.primary.dark,
    borderColor:theme.palette.primary.dark
  },

 rightbuttonscontainer:{
    display:'flex',
    gap:theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      width:'100%',
      flexWrap:'wrap'
    }    
  }, 

}));

export default useUsermanagementStyles;