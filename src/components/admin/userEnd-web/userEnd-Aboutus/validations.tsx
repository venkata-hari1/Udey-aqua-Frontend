/*export const  HelperTextValidate=(text:string):{Error:boolean,message:string}=>{
    if (text.length >= 1 && text.length <= 3){
        return{ Error:false, message: `* Must Contain atleast 3 Characters and Remaining Characters ${text.length}/200`};
    }
    else if( text.length>200){
        return{ Error:true,message:'* Character Limit Exceeded'};
    }
    else if(text.length>=3 && text.length<=200){
        return{ Error:false, message: `*  Remaining Characters ${text.length}/200`};
    }
    else if (text.length==0){
        return{Error:false,message:''};
    }
    return{Error:false,message:''};
}
*/
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
      message: `* Must contain at least 3 characters. Remaining Characters ${text.length}/80`,
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
