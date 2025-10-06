import {useUserEndwebStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Typography,} from '@mui/material';
import {  ArrowBack } from '../userEnd-Aboutus/AboutUsButtons';
import {  useNavigate } from "react-router-dom";
import TitlePage from '../userEnd-Aboutus/TitlePage';

const AquaAddSub=()=>{
    const {classes}=useUserEndwebStyles();
    const navigate=useNavigate();
    return(
        <>
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AboutUsHeaderbox}>
                    <Box className={classes.AboutUsArrowAndHeaderBox}>
                        <ArrowBack onClick={() => navigate(-1)} />
                        <Typography className={classes.AboutUsHeader}>AquacultureType/ Add Subpage</Typography>
                    </Box>
                </Box>
                <TitlePage id='1' accordianId='custom' Section='AquacultureType'/>
            </Box>
        </>
    )

}
export default AquaAddSub;