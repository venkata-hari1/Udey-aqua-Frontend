export const validateEmail = (email: string): string => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
       
    if(email.length===0){
      return "Email cannot be empty";
    }
    if(!emailRegex.test(email)){
      return "Enter a valid email ID";
    }else{
        return ""
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


export const nameValidation=(name:any):string=>{
  if(name.length===0){
    return "*Name cant be empty"
  }
  if(name.length>80){
    return "*Max 80 charecters required";
  }
  return "";
}


export const phoneNumbervalidation=(phone:any):string=>{
  
  if(phone.length===0){
    return "Phone number cannot be empty"
  }else if(/[^0-9]/.test(phone)){
    return "*Only numbers are allowed"
   }else if(phone.length!==10){
    return "Phone number must be exactly 10 digits"
  }
  else{
    return ""
  }
}

export const addressContentValidation=(content:any)=>{
 
  const addressRegexp=/^[\w\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{1,200}$/;
  
  if(content.length===0){
    return "Address field should not be empty"
  }else if(!addressRegexp.test(content)){
    return "Maximum 200 characters allowed and valid characters only"
  }else{
    return ""
  }
}
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