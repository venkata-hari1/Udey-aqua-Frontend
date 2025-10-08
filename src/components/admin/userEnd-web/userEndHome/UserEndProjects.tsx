import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  UserendEditandDeletebuttons,
  UserEndSaveCancelButtons,
  Uploadbutton,
  TextFieldManyRows,
  ErrorMessages,
  ErrormsgContent,
  ErrormsgTitle,
  TextFieldSingleRow,
} from "./UserEndCommonButtons";
import { Fragment } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HeadingContentValidation } from "../../utils/Validations";

const UserEndProjects = () => {
  const { classes } = useUserEndwebStyles();

  const [projects, setProjects] = useState([
    {
      id: uuidv4(),
      type: "Cage Culture",
      image: "",
      heading: "",
      description: "",
      imgerror: "",
      headingerror: "",
      descriptionerror: "",
    },
  ]);

  
  const handleAddProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        id: uuidv4(),
        type: "Cage Culture",
        image: "",
        heading: "",
        description: "",
        imgerror: "",
        headingerror: "",
        descriptionerror: "",
      },
    ]);
  };

  
  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  
  const handleUpload = (id: string, file: File) => {
    const url = URL.createObjectURL(file);
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, image: url, imgerror: "" } : p
      )
    );
  };

  const handleRemoveImage = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, image: "" } : p))
    );
  };

  const handleChange = (
    id: string,
    field: string,
    value: string,
    error: string = ""
  ) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [field]: value, [`${field}error`]: error } : p
      )
    );
  };

  const handleSave = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      localStorage.setItem(`ProjectValues_${id}`, JSON.stringify(project));
    }
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, image: "", heading: "", description: "" }
          : p
      )
    );
  };


  const handleCancel = (id: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              image: "",
              heading: "",
              description: "",
              imgerror: "",
              headingerror: "",
              descriptionerror: "",
            }
          : p
      )
    );
  };

  const handleEdit = (id: string) => {
    const saved = localStorage.getItem(`ProjectValues_${id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...parsed } : p))
      );
    }
  };

 
  return (
    <Box>
      <Box className={classes.useHerocontainer}>
        {/* Add project button */}
        <Box display="flex" justifyContent="end" mb={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className={classes.heroSave}
            onClick={handleAddProject}
          >
            Add Project
          </Button>
        </Box>

        {projects.map((proj, index) => {
          const saveDisabled =
            !proj.heading ||
            !proj.description ||
            !proj.image ||
            !!proj.imgerror ||
            !!proj.headingerror ||
            !!proj.descriptionerror;

          return (
            <Fragment key={proj.id}>
              <Box className={classes.FormCurageBox}>
                {/* Dropdown for culture type */}
                <FormControl
                  size="small"
                  sx={{ minWidth: { md: "170px", xs: "120px" } }}
                >
                  <Select
                    value={proj.type}
                    onChange={(e) =>
                      handleChange(proj.id, "type", e.target.value)
                    }
                    className={classes.dropDownSelect}
                  >
                    <MenuItem value="Cage Culture">Cage Culture</MenuItem>
                    <MenuItem value="Acqua Culture">Acqua Culture</MenuItem>
                  </Select>
                </FormControl>
                <UserendEditandDeletebuttons
                    message={`Are you sure want to delete this project ${projects.length} in Our project?`}
                    onDelete={() => handleDelete(proj.id)}
                    sliceEdit={() => handleEdit(proj.id)}
                />
                </Box>

              {/* Upload + Heading + Description */}
              <Stack className={classes.projectsUploadContentbox}>
                {/* Image upload */}
                <Stack className={classes.UploadImageStack}>
                  <Typography className={classes.titleText} mt={2}>
                    Image
                  </Typography>
                  <Uploadbutton
                    type="image"
                    onUpload={(file) => handleUpload(proj.id, file)}
                    onError={(msg) =>
                      handleChange(proj.id, "imgerror", "", msg)
                    }
                  />
                  {proj.image && (
                    <Box className={classes.herouploadImageBox}>
                      <img
                        src={proj.image}
                        className={classes.herouploadImage}
                      />
                      <CancelIcon
                        className={classes.cancelImgIcon}
                        onClick={() => handleRemoveImage(proj.id)}
                      />
                    </Box>
                  )}
                  {proj.imgerror && <ErrorMessages message={proj.imgerror} />}
                </Stack>

                {/* Heading & Description */}
                <Box className={classes.headingDescbox}>
                  <Stack gap={1}>
                    <Typography className={classes.titleText}>Heading</Typography>
                    <TextFieldSingleRow value={proj.heading} 
                    onChange={(val,error)=>handleChange(proj.id,"heading",val,error)}
                    validationFn={HeadingContentValidation}/>
                    
                    {/* <TextField
                      className={classes.heroTextfiled}
                      fullWidth
                      size="small"
                      value={proj.heading}
                      onChange={(e) =>
                        handleChange(proj.id, "heading", e.target.value)
                      }
                    /> */}
                    {proj.headingerror && (
                      <ErrormsgTitle message={proj.headingerror} />
                    )}
                  </Stack>

                  <Stack gap={1}>
                    <Typography className={classes.titleText}>
                      Description
                    </Typography>
                    <TextFieldManyRows
                      value={proj.description}
                      onChange={(value, error) =>
                        handleChange(proj.id, "description", value, error)
                      }
                    />
                    {proj.descriptionerror && (
                      <ErrormsgContent message={proj.descriptionerror} />
                    )}
                  </Stack>
                </Box>
              </Stack>

              {/* Save / Cancel buttons */}
              <UserEndSaveCancelButtons
                onSave={() => handleSave(proj.id)}
                onCancel={() => handleCancel(proj.id)}
                disabled={saveDisabled}
              />

              {index !== projects.length - 1 && (
                <Divider className={classes.heroDivider} />
              )}
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default UserEndProjects;
