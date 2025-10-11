import { Box, Stack, Typography } from "@mui/material";
import {
  EditButton,
  ErrorMessages,
  TextFieldManyRows,
  Uploadbutton,
  UserEndCancelButton,
  UserEndSaveButton,
} from "../userEndHome/UserEndCommonButtons";
import useUserEndwebStyles from "../UserendwebStyles";
import CancelIcon from "@mui/icons-material/Cancel";
import { addressContentValidation } from "../../utils/Validations";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CultureHero = () => {
  const { classes } = useUserEndwebStyles();

  const [heroslide, setHeroslide] = useState({
    id: uuidv4(),
    image: "",
    imgerror: "",
    subtitle: "",
    subtitleerror: "",
    isSaved: false,
  });

  const [savedData, setSavedData] = useState({
    heroimg: "",
    herocontent: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const allValid =
    !!heroslide.image &&
    !!heroslide.subtitle &&
    !heroslide.imgerror &&
    !heroslide.subtitleerror;

  
  const handleUpload = (file: File) => {
    const imgUrl = URL.createObjectURL(file);
    setHeroslide((prev) => ({
      ...prev,
      image: imgUrl,
      imgerror: "",
      isSaved: false,
    }));
  };

  const handleRemoveImage = () => {
    setHeroslide((prev) => ({ ...prev, image: "", isSaved: false }));
    
  };

  const handleImageError = (msg: string) => {
    setHeroslide((prev) => ({ ...prev, imgerror: msg, isSaved: false }));
  };

  const handleContentchange = (value: string, error?: string) => {
    setHeroslide((prev) => ({
      ...prev,
      subtitle: value,
      subtitleerror: typeof error === "string" ? error : prev.subtitleerror,
      isSaved: false,
    }));
  };

  const handleSave = () => {
    const herovalues = {
      heroimg: heroslide.image,
      herocontent: heroslide.subtitle,
    };

    setSavedData(herovalues);
    setHeroslide((prev) => ({
      ...prev,
      image: herovalues.heroimg,
      subtitle: herovalues.herocontent,
      imgerror: "",
      subtitleerror: "",
      isSaved: true,
    }));

    setIsEditing(false);
  };

  const sliceEdit = () => {
    setHeroslide((prev) => ({
      ...prev,
      image: savedData.heroimg,
      subtitle: savedData.herocontent,
      imgerror: "",
      subtitleerror: "",
      isSaved: false,
    }));
    setIsEditing(true);
  };

  const handleCancel = () => {
    setHeroslide((prev) => ({
      ...prev,
      image: savedData.heroimg,
      subtitle: savedData.herocontent,
      imgerror: "",
      subtitleerror: "",
      isSaved: true,
    }));
    setIsEditing(false);
  };

  const saveDisabled = isEditing ? !allValid : !allValid || heroslide.isSaved;

  return (
    <Box>
      {/* Edit Button */}
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <EditButton sliceEdit={sliceEdit} disabled={!heroslide.isSaved || isEditing} />
      </Box>

      <Box className={classes.cultureheroBox2}>
        {/* Image Upload */}
        <Stack className={classes.UploadImageStack}>
          <Typography className={classes.titleText}>Image</Typography>

          <Uploadbutton
            onUpload={handleUpload}
            onError={handleImageError}
            disabled={heroslide.isSaved && !isEditing} // ✅ Disable upload unless editing
          />

          {heroslide.image && (
            <Box className={classes.herouploadImageBox1}>
              <img src={heroslide.image} className={classes.herouploadImage} alt="hero" />
             {!heroslide.isSaved&& <CancelIcon className={classes.cancelImgIcon} onClick={handleRemoveImage} />}
             </Box>
          )}

          {heroslide.imgerror && <ErrorMessages message={heroslide.imgerror} />}
        </Stack>

        {/* Subtitle */}
        <Box>
          <Typography className={classes.titleText}>SubTitle</Typography>
          <TextFieldManyRows
            value={heroslide.subtitle}
            onChange={(value: string, error?: string) => handleContentchange(value, error)}
            validationFn={addressContentValidation}
            disabled={!isEditing && heroslide.isSaved} // ✅ Disable when saved and not editing
          />
          <ErrorMessages message={heroslide.subtitleerror} />
        </Box>
      </Box>

      {/* Save / Cancel Buttons */}
      <Box className={classes.buttonContainer}>
        {isEditing ? (
          <>
            <UserEndSaveButton onSave={handleSave} disabled={saveDisabled} />
            <UserEndCancelButton onCancel={handleCancel} />
          </>
        ) : (
          <UserEndSaveButton onSave={handleSave} disabled={saveDisabled} />
        )}
      </Box>
    </Box>
  );
};

export default CultureHero;
