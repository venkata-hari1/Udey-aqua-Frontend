{/*import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import {
  ErrorMessages,
  ErrormsgContent,
  ErrormsgPrice,
  ErrormsgTitle,
  Uploadbutton,
  UserEndSaveCancelButtons,
  UserendSaveDeleteButtons,
} from "../userEndHome/UserEndCommonButtons";
import fishImg from "./../../../../assets/admin/fishImg.jpg";
import PdfImg from "./../../../../assets/admin/pdf_icon.png";
import CancelIcon from "@mui/icons-material/Cancel";

const CultureTelipia = () => {
  const { classes } = useUserEndwebStyles();

 const handleSave=()=>{
  console.log("saving")
 } 
  return (
    <Box className={classes.SeaBassContainer}>
      <Stack className={classes.Seabassstack}>
        <Button
          variant="contained"
          className={classes.addSubpagebutton}
          startIcon={<AddIcon />}
        >
          Add Banner
        </Button>
        <Button
          variant="contained"
          className={classes.addSubpagebutton}
          startIcon={<AddIcon />}
        >
          Add Section
        </Button>
      </Stack>
      
      {/* 2nd section *
     
       <Box>
        <Stack className={classes.newsectionStack}>
          <Typography className={classes.MottoBoxText}>Sub Section1</Typography>
          <UserendSaveDeleteButtons message="Are you sure want to delete Sub section1 in Pear Spot?" 
          onDelete={()=>console.log("deleting")}
           sliceSave={() => console.log("")}/>
        </Stack>
        <Box className={classes.sectionSeabassBox} >
          {/* for lefside box *
          <Box className={classes.leftsideSectionbox}>
            <Stack className={classes.leftsideSectionbox}>
              <Typography className={classes.titleText}>Image</Typography>
              <Uploadbutton onUpload={() =>console.log("")}/>
              <Box className={classes.herouploadImageBox1}>
                <img src={fishImg} className={classes.herouploadImage} alt="fish image"/>
                <CancelIcon className={classes.cancelImgIcon} />
                <Button
                  variant="contained"
                  className={classes.pdfButtonbox}
                >
                  <AddIcon />
                </Button>
              </Box>
              <ErrorMessages />
            </Stack>
            <Stack className={classes.leftsideSectionbox}>
              <Typography color="black">Upload Pdf</Typography>
              <Uploadbutton onUpload={() =>console.log("")}/>
              <Box className={classes.herouploadImageBox1}>
                <img src={fishImg} className={classes.herouploadImage} />
                <CancelIcon className={classes.cancelImgIcon} />
                <Button
                  variant="contained"
                  className={classes.pdfButtonbox}
                >
                  {/* <AddIcon /> *
                  <img src={PdfImg}  width="40px" height="40px" alt="pdf image"/>
                </Button>
              </Box>
              <ErrorMessages />
            </Stack>
          </Box>

          {/* for  rightside box *
          <Box>
            <Stack gap={1}>
              <Box>
              <Typography className={classes.titleText}>Title</Typography>
              <TextField
                size="small"
                className={classes.textfiledTestimonialblog}
              />
              <ErrormsgTitle />
              </Box>
               <Box>
              <Typography className={classes.titleText}>Content</Typography>
              <TextField
                className={classes.heroTextfiled}
                fullWidth
                multiline
                minRows={10}
              />
              <ErrormsgContent />
              </Box>
            </Stack>
          </Box>
        </Box>
        <Divider className={classes.heroDivider}/>
       </Box>
       <UserEndSaveCancelButtons onSave={handleSave}/>
      
      
      {/* FOR BANNER PART *

      <Stack className={classes.bannerStacktitle}>
        <Typography className={classes.MottoBoxText}>Banner</Typography>
        <UserendSaveDeleteButtons message="Are you sure want to delete Banner in Pear spot?" 
        onDelete={()=>console.log("deleting")}
         sliceSave={() => console.log("")}/>
      </Stack>
      <Box>
      
      {/* for Banner image *
      <Box className={classes.bannerImagebox}>
        
        {/* banner left side *
        <Box className={classes.bannerImgboxleft}>
          <Stack className={classes.bannerImageStack}>
            <Typography className={classes.titleText}>Image</Typography>
            <Uploadbutton onUpload={() =>console.log("")}/>
            <Box className={classes.herouploadImageBox1}>
              <img src={fishImg} className={classes.herouploadImage} />
              <CancelIcon className={classes.cancelImgIcon} />
              <Button
                variant="contained"
                className={classes.pdfButtonbox}
              >
                <AddIcon />
              </Button>
            </Box>
            <ErrorMessages />
          </Stack>
        </Box>

      {/* banner rightside start *
        <Box>
          <Stack direction="column" gap={1}>
            <Box>
            <Typography className={classes.titleText}>Title</Typography>
            <TextField
              size="small"
              className={classes.textfiledTestimonialblog}
            />
            <ErrormsgTitle />
            </Box>
            <Box> 
            <Typography className={classes.titleText}>Content</Typography>
            <TextField
              className={classes.heroTextfiled}
              fullWidth
              multiline
              minRows={3}
            />
            <ErrormsgContent />
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* for Banner upload *
      <Box className={classes.bannerUploadbox}>
        {/* for banner lefside box *
        <Box className={classes.bannerLeftsidebox}>
          <Stack className={classes.banerLeftsideStack}>
            <Typography className={classes.MottoBoxText}>
              Pdf Section
            </Typography>
            <Typography>Upload Pdf</Typography>
            <Uploadbutton onUpload={() =>console.log("")}/>
            <Box className={classes.herouploadImageBox1}>
              <img src={fishImg} className={classes.herouploadImage} />
              <CancelIcon className={classes.cancelImgIcon} />
              <Button
                variant="contained"
                className={classes.pdfButtonbox}
              >
                <img src={PdfImg} width="40px" height="40px" alt="pdf image1"/>
              </Button>
            </Box>
            <ErrorMessages />
          </Stack>
        </Box>

        {/* for  banner rightside box *
        <Box>
          <Stack className={classes.bannerRightsidestack}>
            <Box>
            <Typography className={classes.titleText}>Price</Typography>
            <TextField size="small"
              className={classes.textfiledTestimonialblog}
            />
            <ErrormsgPrice />
            </Box>

            <Typography className={classes.titleText}>Content</Typography>
            <TextField
              className={classes.heroTextfiled}
              fullWidth
              multiline
              minRows={3}
            />
            <ErrormsgContent />
          </Stack>
        </Box>
      </Box>

      <Box className={classes.buttonContainer}>
         <Button className={classes.headerSaveButton}>Update Banner</Button>
         <Button className={classes.headerCancelButton}>Cancel</Button>  
      </Box>
      </Box>
    </Box>
  );
};

export default CultureTelipia;*/}
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, } from '@mui/material';
import { AddBanner, AddSection, } from '../userEnd-Aboutus/AboutUsButtons';
import SubSection from '../userEnd-Technologies/subSection';
import { useState,  } from 'react';
import Banner from '../userEnd-Technologies/Banner';
import Hero from '../userEnd-Aboutus/Hero';
import  Badge  from "@mui/material/Badge";


const CultureTelipia=()=>{
    const {classes} = useAboutusStyles();
    const [counter, setCounter] = useState<number>(1);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [banner, setBanner] = useState<{id:string}[]>([]);
    const [bannercount, setBannerCount] = useState<number>(0);
    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter+1)
    };

    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        setCounter(counter-1)
    }; 
    const handleAddBanner = () => {
        const newId = ` Banner-${bannercount+1}`; // unique id
        setBanner((prev) => [...prev, { id: newId }]);
        setBannerCount(bannercount+1)
    };

    const handleDeleteBanner = (subId: string) => {
        setBanner((prev) => prev.filter((sub) => sub.id !== subId));
        setBannerCount(counter-1)
    }; 
    return(
        <>
     
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox} sx={{gap:3}}>
                    <Badge
                                                        badgeContent={bannercount}
                                                            sx={{
                                                                "& .MuiBadge-badge": {
                                                                backgroundColor: "#0A4FA4",
                                                                color: "#fff", 
                                                                },
                                                            }}
                                    
                                                            anchorOrigin={{
                                                                vertical: "top",
                                                                horizontal: "right",
                                                            }}
                                                    >
                                                    <AddBanner onClick={handleAddBanner}/>
                                                    </Badge>
                                    <Badge
                                                        badgeContent={counter}
                                                            sx={{
                                                                "& .MuiBadge-badge": {
                                                                backgroundColor: "#0A4FA4",
                                                                color: "#fff", 
                                                                },
                                                            }}
                                    
                                                            anchorOrigin={{
                                                                vertical: "top",
                                                                horizontal: "right",
                                                            }}
                                                    >
                                                    <AddSection onClick={handleAddSubpage}/>
                                                    </Badge>
                    
                    
                </Box>
                
                <SubSection id='Sub Section-1' accordianId='7' Section='CultureTelipia'/>
                {subpages.map((sub) => (
                    <SubSection key={sub.id} id={sub.id} accordianId='7' Section='CultureTelipia' onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}
                {banner.map((sub)=>(
                    <Banner key={sub.id} id={sub.id} accordianId='7' Section='CultureTelipia' onDelete={() => handleDeleteBanner(sub.id)}/>
                ))}
            </Box>
        </>
    )
}
export default CultureTelipia;
