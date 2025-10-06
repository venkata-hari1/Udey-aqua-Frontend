import { Box, Divider, Stack, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  UserEndSaveCancelButtons,
  AddingButton,
  Uploadbutton,
  TextFieldManyRows,
  ErrorMessages,
  ErrormsgContent,
  UserendEditandDeletebuttons,
  EditButton,
} from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserendHero = () => {
  const { classes } = useUserEndwebStyles();
  const [heroslide, setHeroslide] = useState([
    {
      id: uuidv4(),
      name: "Slide1",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
    },
    {
      id: uuidv4(),
      name: "Slide2",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
    },
  ]);

 
const handleAddSlide = () => {
    const newSlide = {
      id: uuidv4(),
      name: `Slide${heroslide.length + 1}`,
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
    };
    const updateSlides = [...heroslide, newSlide];
    setHeroslide(updateSlides);
    console.log("slide adding after", updateSlides);
  };

  const onDelete = (id: string) => {
    const updatedslides = heroslide.filter((slide) => slide.id !== id);
    setHeroslide(updatedslides);
    console.log("Slide after deletion", updatedslides);
  };

  const handleUpload = (id: string, file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const updateSlides = heroslide.map((slide) =>
      slide.id === id ? { ...slide, image: imageUrl, imgerror: "" } : slide
    );
    setHeroslide(updateSlides);
  };

  const handleRemoveImage = (id: string) => {
    const updatedslides = heroslide.map((slide) =>
      slide.id === id ? { ...slide, image: "" } : slide
    );
    setHeroslide(updatedslides);
  };

  const handleContentchange = (id: string, value: string, error: string) => {
    const updateSlides = heroslide.map((slide) =>
      slide.id === id
        ? { ...slide, content: value, contenterror: error }
        : slide
    );
    setHeroslide(updateSlides);
    console.log("updated slide", value);
  };

 

  //validation
  const handleImageError = (id: string, msg: string) => {
    setHeroslide((prev) =>
      prev.map((slide) =>
        slide.id === id ? { ...slide, imgerror: msg } : slide
      )
    );
  };

  const sliceEdit=(id:string)=>{
    const savedSlide=localStorage.getItem(`heroSlide${id}`) 
    if(savedSlide){
      const parsedSlide=JSON.parse(savedSlide);
      setHeroslide((prev)=>
        prev.map((slide)=>
        slide.id===id ?{...slide,...parsedSlide}:slide)
       )
   }
  }

  const handleSave = (id:string) => {
   const slideTosave= heroslide.find((slide)=>slide.id===id)  
   if(slideTosave){
    localStorage.setItem(`heroSlide${id}`,JSON.stringify(slideTosave))
   }
  setHeroslide((prev)=>
  prev.map((slide)=>
  slide.id===id ? {...slide,image:'',imgerror:'',content:''}:slide
  )
);
};

const onCancel=(id:string)=>{
    setHeroslide((prev)=>
    prev.map((slide)=>
    slide.id===id ?{...slide,image:'',imgerror:'',content:'',contenterror:''}:slide)
    )
}
  return (
    <Box>
      <Box className={classes.useHerocontainer}>
        <AddingButton onClick={handleAddSlide} />
        {heroslide.map((slide, index) => {
          const slideSaveDisabled =
            !slide.content || !slide.image || !!slide.contenterror || !!slide.imgerror;

          return (
            <Fragment key={slide.id}>
              <Box mt={2}>
                <Stack className={classes.slideAndButtons}>
                  <Typography className={classes.titleText}>
                    {slide.name}
                  </Typography>
                  {index===0 ? <EditButton sliceEdit={()=>sliceEdit(slide.id)}/>:
                  <UserendEditandDeletebuttons 
                   message={`Are you sure want to delete ${slide.name} ?`} 
                   onDelete={() => onDelete(slide.id)}
                   sliceEdit={()=>sliceEdit(slide.id)}/>}
                  </Stack>
                <Stack className={classes.Uploadandheadingbox}>
                  <Stack className={classes.UploadImageStack}>
                    <Typography className={classes.titleText}>Image</Typography>

                    <Uploadbutton type="image"
                      onUpload={(file) => handleUpload(slide.id, file)}
                      onError={(msg) => handleImageError(slide.id, msg)}
                    />

                    {slide.image && (
                      <Box className={classes.herouploadImageBox}>
                        <img
                          src={slide.image}
                          className={classes.herouploadImage}
                        />
                        <CancelIcon
                          className={classes.cancelImgIcon}
                          onClick={() => handleRemoveImage(slide.id)}
                        />
                      </Box>
                    )}
                    {slide.imgerror && (
                      <ErrorMessages message={slide.imgerror} />
                    )}
                  </Stack>
                  <Stack gap={1}>
                    <Typography className={classes.titleText}>
                      Heading Content
                    </Typography>
                    <TextFieldManyRows
                    value={slide.content}
                      onChange={(value, error) =>
                        handleContentchange(slide.id, value, error)
                      }
                    />
                    {slide.contenterror && (
                      <ErrormsgContent message={slide.contenterror} />
                    )}
                  </Stack>
                </Stack>
                <UserEndSaveCancelButtons onSave={()=>handleSave(slide.id)} 
                onCancel={()=>onCancel(slide.id)}disabled={slideSaveDisabled}/>
                {index !== heroslide.length - 1 && (
                  <Divider className={classes.heroDivider} />
                )}
              </Box>
            </Fragment>
          );
        })}

        
      </Box>
    </Box>
  );
};

export default UserendHero;
