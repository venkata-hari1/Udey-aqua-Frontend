//import * as React from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";


export const validateEmail = (email: string): string => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
           
    if(email.length===0){
      return "Email cannot be empty";
    }
    if(email.startsWith(".") || email.endsWith(".")){
      return "Email cannot start or end with '.'";
    }
    if(!emailRegex.test(email)){
      return "Enter a valid email ID";
    }
    else{
        return ""
    }
 };


//validation email for userend

export const validateEmail1 = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  let error = "";

  if (email.length === 0) {
    error = "";
  } else if (email.startsWith(".") || email.endsWith(".")) {
    error = "Email cannot start or end with '.'";
  } else if (!emailRegex.test(email)) {
    error = "Enter a valid email ID";
  }

  return {
    error,
    isError: !!error,
  };
};

export const TitleValidate = (text: string): {  message: string } => {
  if (text.length === 0) {
    return {  message: "" }; 
  } else if (text.length < 3) {
    return {
      message: `* Must contain at least 3 characters. Remaining Characters ${text.length}/100`,
    };
  } else if (text.length > 100) {
    return {  message: "* Character Limit Exceeded" };
  } else {
    return {message: `* Remaining Characters ${text.length}/100` }; 
  }
};
export const PriceValidate = (text: string): { message: string; isError:boolean } => {
  const trimmedText = text.trim();

  if (trimmedText.length === 0) {
    return { message: "", isError:false };
  }

  if (!/^\d+$/.test(trimmedText)) {
    return { message: "* Must be Numbers, Remove Alphabets", isError:true };
  }

  if (trimmedText.length < 2) {
    return {
      message: `* Must contain at least 2 characters. Remaining Characters ${trimmedText.length}/12`,
      isError:true
    };
  }

  if (trimmedText.length > 12) {
    return { message: "* Character Limit Exceeded",isError:true };
  }

  return {
    message: `* Remaining Characters ${trimmedText.length}/12`,
    isError:false
  };
};
export const PlanContentValidate = (text: string): {  message: string } => {
  if (text.length === 0) {
    return {  message: "" }; 
  } else if (text.length < 3) {
    return {
      message: `* Must contain at least 3 characters. Remaining Characters ${text.length}/2000`,
    };
  } else if (text.length > 2000) {
    return {  message: "* Character Limit Exceeded" };
  } else {
    return {message: `* Remaining Characters ${text.length}/2000` }; 
  }
};
export const validatePassword = (pword: any):string => {
  
  if (pword.length ===0){
    return "* Password is Required";
  }
  else if (pword.length< 8){
    return "* Must Contain atleast 8 Characters";
  }
  else if (!/[A-Z]/.test(pword)) {
  return "* Password must contain at least one uppercase letter";
}else if (!/[a-z]/.test(pword)) {
  return "* Password must contain at least one lowercase letter";
}
   else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pword) ) {
     return "* Must Contain atleast one Special Character and No Spaces ";
}else if ( /\s/.test(pword)){
  return "* Password doesn't contain Spaces"
}
else if (!/\d/.test(pword)) {
return "* Must contain at least one number";
}
else{
  return '';
}
};

export const validatePdfFile = (file: File): string | null => {
  // Check file size <= 10MB
  if (file.size > 15 * 1024 * 1024) {
    return "PDF must be 15MB or less";
  }

  // Check MIME type
  if (file.type !== "application/pdf") {
    return "Invalid format. Only PDF files are allowed";
  }

  return null; // No error
};

export const confirmValidatePassword = (
cfmpwd: string,
pword: string
): string => {

if (cfmpwd.length === 0) {
  return "Confirm password can not be empty";
} 
else if (cfmpwd.length < 8) {
  return "Password must be at least 8 characters"; 
} 
else if (!/[A-Z]/.test(cfmpwd)) {
  return "* Password must contain at least one uppercase letter";
} 
else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(cfmpwd)) {
  return "* Must contain at least one special character";
} 
else if (!/\d/.test(cfmpwd)) {
  return "* Must contain at least one number";
} 
else if (cfmpwd !== pword) {
  return "Passwords do not match";
} 
else {
  return "";
}
};

//name validation
interface ValidationResult {
  error: string;
  isError: boolean;
}
export const nameValidation = (name: string): ValidationResult => {
  const maxChars = 80;
  const minChars = 3;

  if (name.length === 0 || name.length < minChars) {
    return {
      error: `* Must contain at least ${minChars} characters. Remaining Characters ${name.length}/${maxChars}`,
      isError: true,
    };
  } else if (name.length > maxChars) {
    return {
      error: `* Character limit exceeded. Remaining Characters ${name.length}/${maxChars}`,
      isError: true,
    };
  } else {
    return {
      error: "",
      isError: false,
    };
  }
};


export const occupationValidation=(occupation:any):string=>{
  if(occupation.length===0){
    return "*Occupation cant be empty"
  }
  if(occupation.length>80){
    return "*Max 80 charecters required";
  }
  return "";
}

//phone number validation
interface ValidationResult {
  error: string;
  isError: boolean;
}

export const phoneNumberValidation = (phone: string): ValidationResult => {
  const requiredLength = 10;

  if (phone.length === 0) {
    return {
      error: "",
      isError: true,
    };
  } if (phone === '+91'){
    return {
      error: "",
      isError: true,
    };
  }
   else if (!/^(\+91)[6-9]\d{4}\d{5}$/.test(phone)) {
    return {
      error: "* Enter a valid Indian phone number",
      isError: true,
    };
  } else if (phone.length <= requiredLength) {
    return {
      error: `* Phone number must be 10 digits. Entered: ${phone.length}/${requiredLength}`,
      isError: false,
    };
  } else {
    return {
      error: "",
      isError: false,
    };
  }
};

//address validation
interface ValidationResult {
  error: string;
  isError: boolean;
}

export const addressContentValidation = (content: string): ValidationResult => {
  const maxChars = 200;
  const minChars = 3; // or set your desired minimum

  const addressRegexp = /^[\w\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{0,200}$/;
   if (content.length === 0) {
    return {  error: "", isError: false }; }
  if ( content.length <= minChars) {
    return {
      error: `* Must contain at least ${minChars} character(s). Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  } else if (!addressRegexp.test(content)) {
    return {
      error: `* Maximum ${maxChars} characters allowed and valid characters only`,
      isError: true,
    };
  }else if (content.length > 3) {
    return {
      error: `*  Remaining Characters ${content.length}/100`,
      isError: false
    };
  }
   else if (content.length > maxChars) {
    return {
      error: `* Character limit exceeded. Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  }
   else {
    return {
      error: "",
      isError: false,
    };
  }
};



//descriptive content
interface ValidationResult {
  error: string;
  isError: boolean;
}

export const DescriptionContentValidation = (content: string): ValidationResult => {
  const maxChars = 2000;
  const minChars = 3; // or set your desired minimum

  const contentRegexp = /^[\w\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{0,2000}$/;

  if (content.length === 0 || content.length < minChars) {
    return {
      error: `* Must contain at least ${minChars} character(s). Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  } else if (!contentRegexp.test(content)) {
    return {
      error: `* Maximum ${maxChars} characters allowed and valid characters only`,
      isError: true,
    };
  } else if (content.length > maxChars) {
    return {
      error: `* Character limit exceeded. Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  } else {
    return {
      error: "",
      isError: false,
    };
  }
};

export const validateImageFile=(file:File)=>{
   //check file size <=5mb
   if(file.size>5*1024*1024){
    return "Image must be 5MB or less";
   } 
   if(!file.type.startsWith("image/")){
    return "Invalid format.Only images are allowed";
   }
   return null; //no error
}

export const validateImageDimensions=(file:File):Promise<string |null>=>{
 return new Promise((resolve)=>{
   const img=new Image();
   img.src=URL.createObjectURL(file);
   img.onload=()=>{
      if(img.width<300 || img.height<100){
        resolve("Please upload the image in landscape format (Preferred size: 300px × 100px"
       );
      }else{
        resolve(null);
      }
    };
   img.onerror=()=>resolve("Unable to read image dimensions");
 })
}

export const validateVideo=(file:File)=>{
 if(!file){
  return "Please upload video";
 }
const allowFormats=["video/mp4","video/quicktime"];
if(!allowFormats.includes(file.type)){
  return "Recommended formats: MP4, MOV.";
}

const maxSizinMB=5;
if(file.size>maxSizinMB*1024*1024){
  return "video must be lessthan 5MB"
}
return null;
}

export const HeadingContentValidation = (content: string) => {
  const maxChars = 100;
  const minChars = 3;

  if (content.length === 0 || content.length < minChars) {
    return {
      error: `* Must contain at least ${minChars} characters. Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  } else if (content.length > maxChars) {
    return {
      error: `* Character limit exceeded. Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  } else {
    return {
      error: "",
      isError: false,
    };
  }
};


//FileValidation

const validate = (file:File):string | null=>{
        const maxSize=5 *1024*1024;
        const types=['image/jpeg', 'image/png'];;
        if (file.size > maxSize){
            return ('** File Must be Less Than 5MB');

        };
        if (!types.includes(file.type)){
            return ("** File must be PNG, JPEG format");
        };
       return null;
    };


export const HandleFileChange = (
  event: ChangeEvent<HTMLInputElement>,
  setFile:Dispatch<SetStateAction<File[]>>,
  setError:Dispatch<SetStateAction<string>>,
  setIsSaved:Dispatch<SetStateAction<boolean>>,
  setImage:Dispatch<SetStateAction<string[]>>,

) => {

      const files = event.target.files;
        setError('');
        setIsSaved(false);
    
        if (files && files.length > 0) {
            const selectedFiles: File[] = Array.from(files);
          
            selectedFiles.forEach(file => {
                const errorMsg = validate(file);
                
                if (errorMsg) {
                    setError(errorMsg);
                    return;
                }
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imgs = new Image();
                    imgs.onload = () => {
                        if (imgs.width <= 300 || imgs.height <= 100) {
                            setError('** File must be in landscape format (min 300x100)');
                            return; 
                        }
                        setFile(prev => [...prev, file]);
                        setImage(prev => [...prev, e.target?.result as string]);
                    };
                    imgs.src = e.target?.result as string;
                };
                reader.readAsDataURL(file);
                
            });
        }
    
        event.target.value = '';
}
//new handle file
export const newHandleFileChange = (
  event: ChangeEvent<HTMLInputElement>,
  setFile:Dispatch<SetStateAction<File|null>>,
  setError:Dispatch<SetStateAction<string>>,
  setIsSaved:Dispatch<SetStateAction<boolean>>,
) => {

      const files = event.target.files;
        setError('');
        setIsSaved(false);
    
        if (files && files.length > 0) {
            const selectedFiles: File[] = Array.from(files);
          
            selectedFiles.forEach(file => {
                const errorMsg = validate(file);
                
                if (errorMsg) {
                    setError(errorMsg);
                    return;
                }
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imgs = new Image();
                    imgs.onload = () => {
                        if (imgs.width <= 300 || imgs.height <= 100) {
                            setError('** File must be in landscape format (min 300x100)');
                            setFile(null)
                            return; 
                        }
                        else{
                          setFile(file);
                        }
                    };
                    imgs.src = e.target?.result as string;
                };
                reader.readAsDataURL(file);
                
            });
        }
    
        event.target.value = '';
}


export const HandlePDFChange = (
  event: ChangeEvent<HTMLInputElement>,
  setPdfFile: Dispatch<SetStateAction<File[]>>,
  setPdfError: Dispatch<SetStateAction<string>>,
  setIsPdfSaved: Dispatch<SetStateAction<boolean>>,
  setPdf: Dispatch<SetStateAction<string[]>>
) => {
  const files = event.target.files;


  setPdfError("");
  setIsPdfSaved(false);

  if (files && files.length > 0) {
    const selectedFiles: File[] = Array.from(files);

    selectedFiles.forEach((file) => {
      const isPDF =file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
      if (! isPDF) {
        setPdfError("Only PDF files are allowed.");
        return;
      }
      const maxSizeMB = 5;
      if (file.size > maxSizeMB * 1024 * 1024) {
        setPdfError(`File size must be less than ${maxSizeMB} MB.`);
        return;
      }
      const fileURL = URL.createObjectURL(file);
      setPdfFile((prev) => [...prev, file]);
      setPdf((prev) => [...prev, fileURL]);
    });
  }
  event.target.value = "";
};

export const newHandlePDFChange = (
  event: ChangeEvent<HTMLInputElement>,
  setPdfFile: Dispatch<SetStateAction<File|null>>,
  setPdfError: Dispatch<SetStateAction<string>>,
  setIsPdfSaved: Dispatch<SetStateAction<boolean>>,
  setpdf:Dispatch<SetStateAction<string>>
) => {
  const files = event.target.files;


  setPdfError("");
  setIsPdfSaved(false);

  if (files && files.length > 0) {
    const selectedFiles: File[] = Array.from(files);

    selectedFiles.forEach((file) => {
      const isPDF =file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
      if (! isPDF) {
        setPdfError("Only PDF files are allowed.");
        return;
      }
      const maxSizeMB = 5;
      if (file.size > maxSizeMB * 1024 * 1024) {
        setPdfError(`File size must be less than ${maxSizeMB} MB.`);
        return;
      }
      const fileURL = URL.createObjectURL(file);
      setpdf(fileURL)
      setPdfFile(file);
    });
  }
  event.target.value = "";
};


export const HelperTextValidate = (text: string): {  message: string } => {
  if (text.length === 0) {
    return {  message: "" }; 
  } else if (text.length < 3) {
    return {
      message: `* Must contain at least 3 characters. Remaining Characters ${text.length}/200`,
    };
  } else if (text.length > 200) {
    return {  message: "* Character Limit Exceeded" };
  } else {
    return {message: `* Remaining Characters ${text.length}/200` }; 
  }
};

export const NameandRoleValidate = (text: string): {  message: string } => {
  if (text.length === 0) {
    return {  message: "" }; 
  } else if (text.length < 3) {
    return {
      message: `* Must contain at least 3 characters. Remaining Characters ${text.length}/30`,
    };
  } else if (text.length > 80) {
    return {  message: "* Character Limit Exceeded" };
  } else {
    return {message: `* Remaining Characters ${text.length}/80` }; 
  }
};

export const YearValidate = (text: string): {  message: string } => {
  if (text.length === 0) {
    return {  message: "" }; 
  } if(!/[^0-9]/.test(text)){
    return {message:'* Must be Numbers'};
  }  if (text.length < 2) {
    return {
      message: `* Must contain at least 2 characters. Remaining Characters ${text.length}/4`,
    };
  }  if (text.length > 4) {
    return {  message: "* Character Limit Exceeded" };
  } 
  else {
    return {message: `* Remaining Characters ${text.length}/4` }; 
  }
};

interface WebsiteResult {
  error: string;
  isError: boolean;
}
export const websiteValidation = (url: string): WebsiteResult => {
  const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
  const yotutbe=/^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})(?:[&\S]*)?$/
  if (url.length ==0){
    return {error:'',isError:true}
  }if (! regex.test(url)){
    return {error:'* Website must be in ( http: or https: or www. )', isError:true};
  }
  else{
    return {error:'',isError:false};
  }
};
interface WebsiteResult {
  error: string;
  isError: boolean;
}
export const YoutubeValidation = (url: string): WebsiteResult => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})(?:[&\S]*)?$/;
  
  if (url.length ==0){
    return {error:'',isError:true}
  }if (! regex.test(url)){
    return {error:'* Must be an Youttube link', isError:true};
  }
  else{
    return {error:'',isError:false};
  }
};

export const PlanContentValidation =(text: string) =>{
  const Text = text.replace(/<[^>]*>/g, '');
  if (Text.length === 0) {
    return {  message: "" }; 
  } else if (Text.length < 3) {
    return {
      message: `* Must contain at least 3 characters. Remaining Characters ${Text.length}/200`,
    };
  } else if (Text.length > 200) {
    return {  message: "* Character Limit Exceeded" };
  } else {
    return {message: `* Remaining Characters ${Text.length}/200` }; 
  }
}