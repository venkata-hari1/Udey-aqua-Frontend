import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import {
  DeleteButton,
  ErrorMessages,
  Uploadbutton,
  UserEndSaveCancelButtons,
} from "./UserEndCommonButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface CorporateLogo {
  id: string;
  name: string;
  image: string;
  imgerror: string;
}

const UserendCorporates = () => {
  const { classes } = useUserEndwebStyles();
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
    console.log("userend values", corporates);
  };

  return (
    <Box>
      <Stack className={classes.corporateStack1}>
        <Typography className={classes.titleText}>Logos</Typography>
        <DeleteButton
          message="Are you sure you want to delete Logo?"
          onDelete={() => console.log("deleted")}
        />
      </Stack>

      <Box className={classes.corporateImageBox}>
        <Uploadbutton
          multiple
          onUpload={handleUpload}
          onError={(msg, id) => handleImageError(msg, id)}
        />

        {/* Horizontal flex container for images */}
        <Stack
          direction="row"
          spacing={2} // gap between images
          className={classes.CorporateuploadImageStack}
          sx={{ flexWrap: "wrap" }} // wrap to next line if too many
        >
          {corporates.map((corp, index) => (
            <Box key={corp.id} sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography className={classes.titleText}>{index + 1}</Typography>
                <Box className={classes.herouploadImageBox}>
                  <img src={corp.image} className={classes.herouploadImage} />
                  <CancelIcon
                    className={classes.corporateImgCancelIcon}
                    onClick={() => handleRemoveImage(corp.id)}
                  />
                </Box>
                <ErrorMessages message={corp.imgerror} />
              </Box>
              {/* Divider except for the last image */}
              {index !== corporates.length - 1 && (
                <Divider orientation="vertical" flexItem sx={{ border: "1px solid blue" }} />
              )}
            </Box>
          ))}

          {/* Only one Add button at the end */}
          <Button variant="contained" className={classes.corporatePlusbutton}
          sx={{ alignSelf: "end",height:60, width:80 }}>
            <AddIcon />
          </Button>
        </Stack>

        <UserEndSaveCancelButtons onSave={handleSave} />
      </Box>
    </Box>
  );
};

export default UserendCorporates;
