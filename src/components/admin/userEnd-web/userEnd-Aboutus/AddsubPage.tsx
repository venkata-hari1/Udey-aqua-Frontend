import {useAboutusStyles} from './AboutusStyles';
import { Box, Typography,} from '@mui/material';
import {  ArrowBack } from './AboutUsButtons';
import {  useNavigate } from "react-router-dom";
import TitlePage from './TitlePage';

type AddsubPageprops={
    Section:string
}

const Addsubpage=({Section}:AddsubPageprops)=>{
    const {classes}=useAboutusStyles();
    const navigate=useNavigate();
    return(
        <>
            <Box className={classes.WhoWeAreContainer} sx={{paddingLeft:3}}>
                <Box className={classes.AboutUsHeaderbox}>
                    <Box className={classes.AboutUsArrowAndHeaderBox}>
                        <ArrowBack onClick={() => navigate(-1)} />
                        <Typography className={classes.AboutUsHeader}>{Section}/ Add Subpage</Typography>
                    </Box>
                </Box>
                <TitlePage id='1' accordianId='custom' Section={Section}/>
            </Box>
        </>
    )

}
export default Addsubpage;