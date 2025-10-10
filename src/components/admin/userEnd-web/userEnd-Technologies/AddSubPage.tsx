import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Typography,} from '@mui/material';
import {  ArrowBack } from '../userEnd-Aboutus/AboutUsButtons';
import {  useNavigate } from "react-router-dom";
import TitlePage from '../userEnd-Aboutus/TitlePage';

const AddSubPage=()=>{
    const {classes}=useAboutusStyles();
    const navigate=useNavigate();
    return(
        <>
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AboutUsHeaderbox}>
                    <Box className={classes.AboutUsArrowAndHeaderBox}>
                        <ArrowBack onClick={() => navigate(-1)} />
                        <Typography className={classes.AboutUsHeader}>Technologies/ Add Subpage</Typography>
                    </Box>
                </Box>
                <TitlePage id='1' accordianId='custom' Section='Technologies'/>
            </Box>
        </>
    )

}
export default AddSubPage;