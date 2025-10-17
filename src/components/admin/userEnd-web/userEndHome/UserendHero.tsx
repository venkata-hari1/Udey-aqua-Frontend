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
  UserEndSaveButton,
} from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HeadingContentValidation } from "../../utils/Validations";
import Badge from "@mui/material/Badge";
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import Hero from "../userEnd-Aboutus/Hero";

const UserendHero = () => {
  const { classes } = useUserEndwebStyles();
  const { classes:aboutus } = useAboutusStyles();
  {/*
 const[editSlideId,setEditSlideId]=useState<string |null>(null)
  const [heroslide, setHeroslide] = useState([
    {
      id: uuidv4(),
      name: "Slide1",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
       isSaved: false,
    },
    {
      id: uuidv4(),
      name: "Slide2",
      image: "",
      content: "",
      imgerror: "",
      contenterror: "",
       isSaved: false,
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
      isSaved: false,
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
      slide.id === id ? { ...slide, image: imageUrl, imgerror: "",isSaved:false } : slide
    );
    setHeroslide(updateSlides);
  };

  const handleRemoveImage = (id: string) => {
    const updatedslides = heroslide.map((slide) =>
      slide.id === id ? { ...slide, image: "", } : slide
    );
    setHeroslide(updatedslides);
  };

  const handleContentchange = (id: string, value: string, error: string) => {
    const updateSlides = heroslide.map((slide) =>
      slide.id === id
        ? { ...slide, content: value, contenterror: error,isSaved:false }
        : slide
    );
    setHeroslide(updateSlides);
    console.log("updated slide", value);
  };

 

  //validation
  const handleImageError = (id: string, msg: string) => {
    setHeroslide((prev) =>
      prev.map((slide) =>
        slide.id === id ? { ...slide, imgerror: msg,isSaved:false } : slide
      )
    );
  };

  const sliceEdit=(id:string)=>{
    const savedSlide=localStorage.getItem(`heroSlide${id}`) 
    if(savedSlide){
     const parsedSlide=JSON.parse(savedSlide);
      setHeroslide((prev)=>
        prev.map((slide)=>
        slide.id===id ?{...slide,...parsedSlide,isSaved:false}:slide)
       );
   }
   setEditSlideId(id)
  }

  const handleSave = (id:string) => {
    
   const slideTosave= heroslide.find((slide)=>slide.id===id)  
   if(slideTosave){
    localStorage.setItem(`heroSlide${id}`,JSON.stringify(slideTosave))
   }
  setHeroslide((prev)=>
  prev.map((slide)=>
  slide.id===id ? {...slide,isSaved: true,}:slide
  )
);
setEditSlideId(null);
};

const onCancel=(id:string)=>{
    
    const savedSlide = localStorage.getItem(`heroSlide${id}`);
  if (savedSlide) {
    const parsedSlide = JSON.parse(savedSlide);
    setHeroslide((prev) =>
      prev.map((slide) =>
        slide.id === id ? { ...slide, ...parsedSlide, isSaved: true } : slide
      )
    );
  }
  setEditSlideId(null);
}
  return (
    <Box>
      <Box className={classes.useHerocontainer}>
        <AddingButton onClick={handleAddSlide} />
        {heroslide.map((slide, index) => {
          const slideSaveDisabled =
            !slide.content || !slide.image || !!slide.contenterror || !!slide.imgerror
            || slide.isSaved ;

          return (
            <Fragment key={slide.id}>
              <Box mt={2}>
                <Stack className={classes.slideAndButtons}>
                  <Typography className={classes.titleText}>
                    {slide.name}
                  </Typography>
                  {index===0 ? <EditButton sliceEdit={()=>sliceEdit(slide.id)}
                    disabled={!slide.isSaved}/>:
                  <UserendEditandDeletebuttons 
                   message={`Are you sure want to delete ${slide.name} ?`} 
                   onDelete={() => onDelete(slide.id)}
                   sliceEdit={()=>sliceEdit(slide.id)}
                   disabled={!slide.isSaved}/>}
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
                      validationFn={HeadingContentValidation}
                      disabled={slide.isSaved}
                    />
                    {slide.contenterror && (
                      <ErrormsgContent message={slide.contenterror} />
                    )}
                  </Stack>
                </Stack>
                
                {editSlideId==slide.id?
                <UserEndSaveCancelButtons onSave={()=>handleSave(slide.id)} 
                onCancel={()=>onCancel(slide.id)}disabled={slideSaveDisabled}/>:
                <UserEndSaveButton onSave={()=>handleSave(slide.id)}
                 disabled={slideSaveDisabled}/>
                }   

                {index !== heroslide.length - 1 && (
                  <Divider className={classes.heroDivider} />
                )}
              </Box>
            </Fragment>
          );
        })}

        
      </Box>
    </Box>
  );*/}
  const [subpages, setSubpages] = useState<{ id:string}[]>([]);
  const [counter, setCounter] = useState<number>(1);
  const handleAddSubpage = () => {
        const newId = `Slide-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter +1)
    };
    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        setCounter(counter -1)
    };
  return(
        <>
         <Box className={aboutus.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1}}>
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
                    <AddingButton onClick={handleAddSubpage}/>
                </Badge>            
            </Box>
            <Box>
                <Hero id='Slide 1' accordianId='2' Section='Hero' title='Home'/>
            </Box>
            {subpages.map((sub) => (
                <Hero key={sub.id} id={sub.id} accordianId="2" Section='Hero' title='Home' ondelete={() => handleDeleteSubpage(sub.id)} 
                />
            ))}
         </Box>
        </>
    )
};

export default UserendHero;
