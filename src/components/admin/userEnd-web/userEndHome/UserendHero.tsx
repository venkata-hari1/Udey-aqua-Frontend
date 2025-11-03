import { Box } from "@mui/material";
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import Hero from "../userEnd-Aboutus/Hero";

const UserendHero = () => {
  const { classes:aboutus } = useAboutusStyles();
  return(
        <>
         <Box className={aboutus.WhoWeAreContainer}>
            <Hero id='' accordianId='2' Section='Hero' title='Home'/>
         </Box>
        </>
    )
};
export default UserendHero;
