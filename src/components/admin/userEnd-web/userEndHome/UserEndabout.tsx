import Hero from "../userEnd-Aboutus/Hero"
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box } from "@mui/material";
const UserEndabout = () => {
  const { classes } =useAboutusStyles ();
    return(
      <>
        <Box className={classes.WhoWeAreContainer}>
          <Hero id='' accordianId='5' Section='About us' title='Home'/>
        </Box>
      </>
    )
}
export default UserEndabout