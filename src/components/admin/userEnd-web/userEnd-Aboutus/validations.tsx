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
