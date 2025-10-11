import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import {
  EditButton,
  ErrorMessages,
  ErrormsgContent,
  ErrormsgPrice,
  ErrormsgTitle,
  TextFieldManyRows,
  TextFieldSingleRow,
  Uploadbutton,
  UploadPdfButton,
  UserendEditandDeletebuttons,
  UserEndSaveButton,
  UserEndSaveCancelButtons,
  UserendSaveDeleteButtons,
} from "../userEndHome/UserEndCommonButtons";
import fishImg from "./../../../../assets/admin/fishImg.jpg";
import PdfImg from "./../../../../assets/admin/pdf_icon.png";
import CancelIcon from "@mui/icons-material/Cancel";
import { AddBanner, AddSection } from "../userEnd-Aboutus/AboutUsButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addressContentValidation, DescriptionContentValidation } from "../../utils/Validations";

const CultureSeabass = () => {
const { classes } = useUserEndwebStyles();

const [basssection,setbasssection]=useState([
  {id:uuidv4(),
   sectionname:'Sub Section1',
   image:'',
   imgerror:'',
   imgpdf:'',
   imgpdferror:'',
   title:'',
   titleerror:'', 
   content:'',
   contenterror:'',
   isSaved:false,
   isEditable:false,
   isCancelable:false,
  }
])


const handleSection=()=>{
  const newsection={
   id:uuidv4(),
   sectionname:`Sub Section${basssection.length+1}`,
   image:'',
   imgerror:'',
   imgpdf:'',
   imgpdferror:'',
   title:'',
   titleerror:'',
   content:'',
   contenterror:'',
   isSaved:false,
   isEditable:false,
   isCancelable:false,
  }
   setbasssection([...basssection,newsection])
}

const[bassbanner,setBassbanner]=useState([{
   id:uuidv4(),
   bannernname:'Banner',
   image:'',
   imgerror:'',
   imgpdf:'',
   imgpdferror:'',
   title:'',
   titleerror:'',
   content:'',
   contenterror:'',
   price:'',
   priceerror:'',
   content2:'',
   content2error:'', 
   isSaved:false,
}])



const handleBanner=()=>{
  const newBanner={
   id:uuidv4(),
   bannernname:'Banner',
   image:'',
   imgerror:'',
   imgpdf:'',
   imgpdferror:'',
   title:'',
   titleerror:'',
   content:'',
   contenterror:'',
   price:'',
   priceerror:'',
   content2:'',
   content2error:'', 
   isSaved:false, 
  }
   setBassbanner([...bassbanner,newBanner])
}



const handleSectionUpload=(id:string,file:File)=>{
    const imageUrl = URL.createObjectURL(file);
   const updatedSection=basssection.map((section)=>
   section.id===id ? {...section,image:imageUrl,imgerror:'',isSaved:false}:section
   ); 
   setbasssection(updatedSection);
}

const handleSectionImageError=(id:string,msg:string)=>{
  const updatedImgerror=basssection.map((section)=>
  section.id===id ?{...section,imgerror:msg,isSaved:false}:section)
  setbasssection(updatedImgerror)
}
const handleRemoveSectionImage=(id:string)=>{
   const updatedSection = basssection.map((section) =>
      section.id === id ? { ...section, image: "", } : section
    );
    setbasssection(updatedSection);
}

const handleSectionPdfUpload=(id:string,file:File)=>{
    const pdfUrl=URL.createObjectURL(file);
    const updatedSection=basssection.map((section)=>
    section.id===id?{...section,imgpdf:pdfUrl,imgpdferror:'',isSaved:false}:section);
    setbasssection(updatedSection);
}  

const handleSectionPdferror=(id:string,msg:string)=>{
    const updatedSections = basssection.map((section) =>
    section.id === id ? { ...section, imgpdferror: msg, isSaved: false } : section
  );
  setbasssection(updatedSections);
}
const handleRemoveSectionPdf=(id:string)=>{
    const updatedSection = basssection.map((section) =>
      section.id === id ? { ...section, imgpdf: "", } : section
    );
    setbasssection(updatedSection);
}

const handleTitlechange=(id:string,value:string,error:string)=>{
  const updatedSection=basssection.map((section)=>
    section.id==id?{...section,title:value,titleerror:error,isSaved:false}:section
  )
  setbasssection(updatedSection);
}

const handleSectionContentchange=(id:string,value:string,error:string)=>{
  const updatedSection=basssection.map((section)=>
  section.id===id?{...section,content:value,contenterror:error,isSaved:false}:section);
  setbasssection(updatedSection);
}

const[savedSection,setSavedsection]=useState<any[]>([])

const handleSectionSave=(id:string)=>{
   const sectionTosave=basssection.find((section)=>section.id===id);
   if(!sectionTosave)return; 
  
    const sectionObj={
      savedid:sectionTosave?.id,
      savedimg:sectionTosave?.image,
      savedimgpdf:sectionTosave?.imgpdf,
      savedtitle:sectionTosave.title,
      savedcontent:sectionTosave.content
  }
 console.log(sectionObj);
 setSavedsection((prev)=>{
   const existing=prev.filter((item)=>item.savedid!==id);
   return [...existing,sectionObj]
 })
 const updatedSections = basssection.map((section) =>
    section.id === id
      ? {
          ...section,
          image: "",
          imgpdf: "",
          title: "",
          content: "",
          isSaved: true,
          isEditable: false,
          isCancelable: false,
        }
      : section
  );
  setbasssection(updatedSections);
}

const handleSectionEdit = (id: string) => {
  const saved = savedSection.find((item) => item.savedid === id);
  if (!saved) return;

  const updatedSection = basssection.map((section) =>
    section.id === id
      ? {
          ...section,
          image: saved.savedimg,
          imgpdf: saved.savedimgpdf,
          title: saved.savedtitle,
          content: saved.savedcontent,
          isEditable: true,
          isCancelable: true,
          isSaved: false,
        }
      : section
  );
  setbasssection(updatedSection);
};

const handleSectionCancel = (id: string) => {
  const updatedSection = basssection.map((section) =>
    section.id === id
      ? {
          ...section,
          image: "",        // clear image
          imgpdf: "",       // clear pdf
          title: "",        // clear title
          content: "",      // clear content
          isEditable: false, 
          isSaved: true,    // edit button re-enabled
        }
      : section
  );
  setbasssection(updatedSection);
};

  return (
    <Box className={classes.SeaBassContainer}>
      <Stack className={classes.Seabassstack}>
        <AddBanner onClick={handleBanner}/>
        <AddSection onClick={handleSection}/>
        </Stack>
      
       <Box>
        {basssection.map((section,index)=>{
          const isSaveDisabled=
          !section.image || !section.imgpdf || !section.title || !section.content 
          || section.isSaved
          return (
          <>
          <Stack className={classes.newsectionStack} mt={2}>
          <Typography className={classes.MottoBoxText}>{section.sectionname}</Typography>
          {index===0? <EditButton sliceEdit={()=>handleSectionEdit(section.id)}   disabled={!section.isSaved}/> :
           <UserendEditandDeletebuttons sliceEdit={()=>handleSectionEdit(section.id)}
           disabled={!section.isSaved} onDelete={()=>console.log("ondelete")} message=""/> 
          }
          </Stack>
        
            <Box className={classes.sectionSeabassBox} key={index}>
          {/* for lefside box */}
          <Box className={classes.leftsideSectionbox}>
            <Stack className={classes.leftsideSectionbox}>
              <Typography className={classes.titleText}>Image</Typography>
              <Uploadbutton onUpload={(file) =>handleSectionUpload(section.id,file)}
           onError={(msg) => handleSectionImageError(section.id,msg)}/>
              {section.image&&
                <Box className={classes.herouploadImageBox1}>
                <img src={section.image} className={classes.herouploadImage} alt="fish image"/>
                <CancelIcon className={classes.cancelImgIcon} 
                onClick={()=>handleRemoveSectionImage(section.id)}/>
                </Box>
              }

              <ErrorMessages />
            </Stack>
            <Stack className={classes.leftsideSectionbox}>
              <Typography color="black">Upload Pdf</Typography>
              <UploadPdfButton onUpload={(file)=>handleSectionPdfUpload(section.id,file) } 
              onError={(msg)=>handleSectionPdferror(section.id,msg)}/>
              {section.imgpdf &&
              <Box className={classes.herouploadImageBox1}>
                <img src={fishImg} className={classes.herouploadImage} alt="pdf type image"/>
                <CancelIcon className={classes.cancelImgIcon} 
                onClick={()=>handleRemoveSectionPdf(section.id)}/>
                <Button
                  variant="contained"
                  className={classes.pdfButtonbox}
                >
                <img src={PdfImg}  width="40px" height="40px" alt="pdf image"/>
                </Button>
              </Box>
              }
              <ErrorMessages message={section.imgpdferror}/>
            </Stack>
          </Box>

          {/* for  rightside box */}
          <Box>
            <Stack gap={1}>
              <Box>
              <Typography className={classes.titleText}>Title</Typography>
              <TextFieldSingleRow 
               value={section.title}
               onChange={(value, error) =>
               handleTitlechange(section.id, value, error)}
               validationFn={addressContentValidation}
                />
              <ErrormsgTitle message={section.titleerror}/>
              </Box>
              <Box>
              <Typography className={classes.titleText}>Content</Typography>
              <TextFieldManyRows 
              value={section.content}
              onChange={(value, error) =>
                handleSectionContentchange(section.id, value, error)
              }
              validationFn={DescriptionContentValidation}
              />
              <ErrormsgContent message={section.contenterror}/>
             </Box> 
            </Stack>
          </Box>
        </Box>
        

        {section.isEditable? 
        <UserEndSaveCancelButtons onSave={()=>handleSectionSave(section.id)} disabled={isSaveDisabled}
        onCancel={()=>handleSectionCancel(section.id)}/>: 
          <UserEndSaveButton onSave={()=>handleSectionSave(section.id)} disabled={isSaveDisabled}/>}       
       
        <Divider className={classes.heroDivider}/>
        </>
          )
        })}


       </Box> 
      
      
      {/* FOR BANNER PART */}
      {
        bassbanner.map((banner,index)=>{
          return(
            <>
             <Stack className={classes.bannerStacktitle} key={index}>
        <Typography className={classes.MottoBoxText}>{banner.bannernname}</Typography>
        <UserendSaveDeleteButtons message="Are you sure want to delete Banner in Sae Bass?" 
        onDelete={()=>console.log("deleting")}
        sliceSave={() => console.log("deleted")}/>
      
      </Stack>
      <Box>
      
      {/* for Banner image */}
      <Box className={classes.bannerImagebox}>
        
        {/* banner left side */}
        <Box className={classes.bannerImgboxleft}>
          <Stack className={classes.bannerImageStack}>
            <Typography className={classes.titleText}>Image</Typography>
            <Uploadbutton onUpload={() =>console.log("")}/>
            {banner.image&&
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
            }
            
            <ErrorMessages />
          </Stack>
         
        </Box>

      {/* banner rightside start */}
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

      {/* for Banner upload */}
      <Box className={classes.bannerUploadbox}>
        {/* for banner lefside box */}
        <Box className={classes.bannerLeftsidebox}>
          <Stack className={classes.banerLeftsideStack}>
            <Typography className={classes.MottoBoxText}>
              Pdf Section
            </Typography>
            <Typography>Upload Pdf</Typography>
            <Uploadbutton onUpload={() =>console.log("")}/>
              {banner.imgpdf &&
               <Box className={classes.herouploadImageBox1}>
              <img src={banner.imgpdf} className={classes.herouploadImage} />
              <CancelIcon className={classes.cancelImgIcon} />
              <Button
                variant="contained"
                className={classes.pdfButtonbox}>
                <img src={PdfImg} width="40px" height="40px" alt="pdf image1"/>
               </Button>
            </Box>
              }
           
            <ErrorMessages />
          </Stack>
        </Box>
        
        {/* for  banner rightside box */}
        <Box>
          <Stack className={classes.bannerRightsidestack}>
            <Box>
            <Typography className={classes.titleText}>Price</Typography>
            <TextField size="small"
              className={classes.textfiledTestimonialblog}
            />
            <ErrormsgPrice />
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

      <Box className={classes.buttonContainer}>
         <Button className={classes.headerSaveButton}>Update Banner</Button>
         <Button className={classes.headerCancelButton}>Cancel</Button>  
      </Box>
      <Divider className={classes.heroDivider}/>
      </Box>
      </>
          )
        })
      }
      
    </Box>
  );
};

export default CultureSeabass;
