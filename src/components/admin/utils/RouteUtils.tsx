//show searchbox
export const showSearchbox=(path:string)=>{
   switch(path){
    case "dashboard":
    //case "userend-web":
    case "userend-home":
    case "userend-aboutus":
    case "userend-culture":
    case "userend-trainingprograms":
    case "userend-technologies":
    case "userend-news&events":
    case "userend-contactus":
     return true
    default:
      return false    
   }
}
//backarrow 
export const shouldShowbackArrow=(path:string)=>{
  switch(path){
    case "admin":
    case "dashboard":  
    case "userend-web":
    case "user-management":
    case "training-registrations":
    case "subscriber":
    case "getin-touch":  
    case "profile":
    case "logout": 
    
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
    case "logout":
    return "#F7FAFC" 
    default:
    return "white" 
  }
}


