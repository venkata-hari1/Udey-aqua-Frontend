
import Hero from "../userEnd-Aboutus/Hero"
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box } from "@mui/material";

const UserendWhychoose = () => {
  const { classes } =useAboutusStyles ();
    return(
      <>
      <Box className={classes.WhoWeAreContainer}>
      <Hero id='' accordianId='6' Section='Why chhoose us' title='Home'/>
      </Box>
      </>
    )
}
export default UserendWhychoose
