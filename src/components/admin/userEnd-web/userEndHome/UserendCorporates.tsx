import { Box, Divider, Stack, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import CancelIcon from "@mui/icons-material/Cancel";
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import {
  ErrorMessages,
  Uploadbutton,
  UserEndSaveCancelButtons,
} from "./UserEndCommonButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditButton } from "../userEnd-Aboutus/AboutUsButtons";

interface CorporateLogo {
  id: string;
  name: string;
  image: string;
  imgerror: string;
}

const UserendCorporates = () => {
  const { classes } = useUserEndwebStyles();
  const { classes:aboutus } = useAboutusStyles();
  const [corporates, setCorporates] = useState<CorporateLogo[]>([]);

 
 
  const handleUpload = (files: File[]) => {
    const newLogos = files.map((file) => ({
      id: uuidv4(),
      name: "Corporate Logo",
      image: URL.createObjectURL(file),
      imgerror: "",
    }));
    setCorporates((prev) => [...prev, ...newLogos]);
  };

  const handleImageError = (msg: string, id?: string) => {
    if (!id) return;
    setCorporates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, imgerror: msg } : c))
    );
  };

  const handleRemoveImage = (id: string) => {
    setCorporates((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSave = () => {
    
  };

  const sliceEdit=()=>{

  }

  return (
    <Box>
      <Stack className={classes.corporateStack1}>
        <Typography className={classes.titleText}>Logos</Typography>
        <EditButton onClick={sliceEdit}/>
      </Stack>

      <Box className={classes.corporateImageBox}>
        <Uploadbutton
          multiple
          onUpload={handleUpload}
          onError={(msg, id) => handleImageError(msg, id)}
        />
         <Stack
          direction="row"
          spacing={2} 
          className={classes.CorporateuploadImageStack}
          sx={{ flexWrap: "wrap" }} 
        >
          {corporates.map((corp, index) => (
             
             <Box key={corp.id} sx={{ display: "flex", alignItems: "center" , gap:2}}>
               <Box>
                <Typography className={classes.titleText}>{index + 1}</Typography>
                <Box className={aboutus.ImagespicBox} sx={{position:'relative'}}>
                  <img src={corp.image} className={classes.herouploadImage} />
                  <CancelIcon sx={{color:'#F7FAFC'}}
                    className={classes.corporateImgCancelIcon}
                    onClick={() => handleRemoveImage(corp.id)}
                  />
                </Box>
                <ErrorMessages message={corp.imgerror} />
              </Box>
             
              {index !== corporates.length - 1 && (
                <Divider orientation="vertical" flexItem sx={{ border: "1px solid blue" }} />
              )}
            </Box>
          ))}
        </Stack>

        <UserEndSaveCancelButtons onSave={handleSave}/>
      </Box>
    </Box>
  );
};

export default UserendCorporates;
