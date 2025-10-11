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
    error = "Email cannot be empty";
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
export const PriceValidate = (text: string): { message: string } => {
  const trimmedText = text.trim();

  if (trimmedText.length === 0) {
    return { message: "" };
  }

  if (!/^\d+$/.test(trimmedText)) {
    return { message: "* Must be Numbers" };
  }

  if (trimmedText.length < 2) {
    return {
      message: `* Must contain at least 2 characters. Remaining Characters ${trimmedText.length}/12`,
    };
  }

  if (trimmedText.length > 12) {
    return { message: "* Character Limit Exceeded" };
  }

  return {
    message: `* Remaining Characters ${trimmedText.length}/12`,
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
}
  else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pword)) {
     return "* Must Contain atleast one Special Character ";
}
else if (!/\d/.test(pword)) {
return "* Must contain at least one number";
}
else{
  return '';
}
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
  return "Password and Confirm password are not matching";
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
      error: "* Phone number cannot be empty",
      isError: true,
    };
  } else if (/[^0-9]/.test(phone)) {
    return {
      error: "* Only numbers are allowed",
      isError: true,
    };
  } else if (phone.length !== requiredLength) {
    return {
      error: `* Phone number must be exactly ${requiredLength} digits. Entered: ${phone.length}/${requiredLength}`,
      isError: true,
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

  if (content.length === 0 || content.length < minChars) {
    return {
      error: `* Must contain at least ${minChars} character(s). Remaining Characters ${content.length}/${maxChars}`,
      isError: true,
    };
  } else if (!addressRegexp.test(content)) {
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





//descriptive content
interface decValidationResult {
  error: string;
  isError: boolean;
}

export const DescriptionContentValidation = (content: string): decValidationResult => {
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
   return null; 
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


//pdf validation

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