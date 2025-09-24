import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
/* import fishImg from "./../../../../assets/admin/fishImg.jpg"; */
import CancelIcon from "@mui/icons-material/Cancel";
import { v4 as uuidv4 } from "uuid";
import {
  ErrorMessages,
  ErrormsgContent,
  TextFieldManyRows,
  Uploadbutton,
  UserEndSaveCancelButtons,
  UserendSaveDeleteButtons,
} from "./UserEndCommonButtons";
import { useState } from "react";
const UserEndMotto = () => {
  const { classes } = useUserEndwebStyles();

  
  
  const [mottobox, setMottobox] = useState([
    {
      id: uuidv4(),
      boxname: "Box1",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
    },
    {
      id: uuidv4(),
      boxname: "Box2",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
    },
  ]);

const isSaveDisabled=mottobox.some(
    (box) => !box.content || !box.image || !!box.contenterror || !!box.imgerror
  );

  const handleAddMottobox = () => {
    const newmottobox = {
      id: uuidv4(),
      boxname: `Box${mottobox.length + 1}`,
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
    };
    setMottobox([...mottobox, newmottobox]);
  };

  const onDelete = (id: string) => {
    const updateBoxes = mottobox.filter((box) => box.id !== id);
    setMottobox(updateBoxes);
    console.log("after deletion", updateBoxes);
  };

  const handleUpload = (id: string, file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const updateBoxes = mottobox.map((box) =>
      box.id === id ? { ...box, image: imageUrl,imgerror:"" } : box
    );
    setMottobox(updateBoxes);
  };

  const handleRemoveImage = (id: string) => {
    const updateBoxes = mottobox.map((box) =>
      box.id === id ? { ...box, image: "" } : box
    );
    setMottobox(updateBoxes);
  };

  const handleContentchange = (id: string, value: string, error: string) => {
    const updateBoxes = mottobox.map((box) =>
      box.id === id
        ? { ...box, content: value, contenterror: error }
        : box
    );
    setMottobox(updateBoxes);
    console.log("updated slide", value);
  };

  const handleSliceSave = (box: {
    id: string;
    boxname: string;
    image: string;
    content: string;
  }) => {
    console.log(box);
  };

//validation
  const handleImageError = (id: string, msg: string) => {
    setMottobox((prev) =>
      prev.map((box) =>
        box.id === id ? { ...box, imgerror: msg } : box
      )
    );
  };

  const handleSave = () => {
    console.log("userend moto box values");
  };
  return (
    <Box>
      <Box className={classes.useHerocontainer}>
        <Box className={classes.addingButtonBox}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className={classes.AddingButton}
            onClick={handleAddMottobox}
          >
            Add Motto
          </Button>
        </Box>

        {mottobox.map((box, index) => {
          const motoboxSaveDisabled =
            !box.content || !box.image || !!box.contenterror || !!box.imgerror;
        
            return(
            <Box mt={2} key={index}> 
            <Stack className={classes.slideAndButtons}>
              <Typography className={classes.MottoBoxText}>
                {box.boxname}
              </Typography>
              <UserendSaveDeleteButtons
                message={`Are you sure you want to delete ${box.boxname} in Motto? `}
                onDelete={() => onDelete(box.id)}
                sliceSave={() => handleSliceSave(box)}
                disabled={motoboxSaveDisabled}
              />
            </Stack>

            <Stack className={classes.Uploadandheadingbox}>
              <Stack className={classes.UploadImageStack}>
                <Typography className={classes.titleText}>Image</Typography>

                <Uploadbutton type="image"
                  onUpload={(file) => handleUpload(box.id, file)}
                  onError={(msg) => handleImageError(box.id, msg)}
                />
                {box.image && (
                  <Box className={classes.herouploadImageBox}>
                    <img src={box.image} className={classes.herouploadImage} />
                    <CancelIcon
                      className={classes.cancelImgIcon}
                      onClick={() => handleRemoveImage(box.id)}
                    />
                  </Box>
                )}

                <ErrorMessages />
              </Stack>
              <Stack gap={1}>
                <Typography className={classes.titleText}>
                  Heading Content
                </Typography>
                <TextFieldManyRows 
                onChange={(value, error) =>
                        handleContentchange(box.id, value, error)
                    } />
                <ErrormsgContent />
              </Stack>
            </Stack>
            {index !== mottobox.length - 1 && (
              <Divider className={classes.heroDivider} />
            )}
          </Box>
           ) 
          }
        )}
        <UserEndSaveCancelButtons onSave={handleSave} 
        disabled={isSaveDisabled}/>
      </Box>
    </Box>
  );
};

export default UserEndMotto;
