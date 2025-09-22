import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Typography,} from '@mui/material';
import {  ArrowBack } from './AboutUsButtons';
import {  useNavigate } from "react-router-dom";
import TitlePage from './TitlePage';

const Addsubpage=()=>{
    const {classes}=useUserEndwebStyles();
    const navigate=useNavigate();
    return(
        <>
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AboutUsHeaderbox}>
                    <Box className={classes.AboutUsArrowAndHeaderBox}>
                        <ArrowBack onClick={() => navigate(-1)} />
                        <Typography className={classes.AboutUsHeader}>About Us/ Add Subpage</Typography>
                    </Box>
                </Box>
                <TitlePage id='1' accordianId='custom'/>
            </Box>
        </>
    )

}
export default Addsubpage;