import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useUserEndwebStyles = makeStyles()((theme: Theme) => ({
  userEndButtonsContainer: {
   display:'grid',
   gridTemplateColumns:"repeat(3, 1fr)",
   justifyContent:'center',
   alignItems:'center',
   columnGap:2,
   rowGap:50,
   marginTop:40,
   [theme.breakpoints.down('md')]:{
     gridTemplateColumns:"repeat(1,1fr)",
     columnGap:4,
     rowGap:30,
  }
  },
  userEndButton: {
    justifySelf: "center",
    width: "auto",
    minWidth: "220px",
    border:"1px solid #0A4FA4",
    color:'#0A4FA4',
    textTransform:'capitalize',
    fontSize:16,
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
      gap:4,
    }
  },

  Activebutton:{
    backgroundColor: "#0A4FA4",
    color: "#fff !important",
    border: "1px solid #0A4FA4",
  }
   
}));

export default useUserEndwebStyles;