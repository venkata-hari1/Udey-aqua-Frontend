import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
//import { CancelButton, EditButton, SaveButton, UploadButton} from './AboutUsButtons';
//import { useState, useEffect } from 'react';
//import { HelperTextValidate } from './validations';
import Hero from '../userEnd-Aboutus/Hero';

type HeroProps={
    id?:string;
    accordianId?:string;
    Section:string
}

 const SuccessStories=({id,accordianId,Section}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    return(
        <>
            <Box className={classes.whoWeareHeaderbox}>
                <Hero id={id} accordianId={accordianId} Section={Section}/>
            </Box>

        </>
    )
 }
 export default SuccessStories