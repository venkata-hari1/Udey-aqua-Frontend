//show searchbox
export const showSearchbox=(path:string)=>{
   switch(path){
    case "profile":
    case "user-info":
    case "userend-web":
     return false
    default:
      return true    
   }
}
//backarrow 
export const shouldShowbackArrow=(path:string)=>{
  switch(path){
    case "admin":
    case "dashboard":  
    case "user-management":
    case "userend-web":
    return false
    default:
      return true   
  }
}

//for background
export const hasGrayBackground=(path:string)=>{
  switch(path){
    case "profile":
    case "userend-web":
    return "#F7FAFC" 
    default:
    return "white" 
  }
}


