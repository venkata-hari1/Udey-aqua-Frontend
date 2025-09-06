type Pwdobj={
  pwdValue:string,
  confirmpwdValue:string
}
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailResult = emailRegex.test(email);
    return emailResult;
  };

 export const validatePassword = ({pwdValue,confirmpwdValue}:Pwdobj) => {
  
  const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?])[A-Za-z\d@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?]{6,}$/;
   
  const errors:string[]=[]
  if(!passwordRegex.test(pwdValue)){
    errors.push("Password must be at least 6 characters, include a number, a letter, and a special character.")
  }
  if(confirmpwdValue!==pwdValue){
    errors.push("Password do not match")
  }
  return{
      isValid:errors.length===0,
      errors:errors
  }
  
};