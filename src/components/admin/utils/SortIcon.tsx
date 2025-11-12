import  { SvgIcon} from "@mui/material";
import type { SvgIconProps } from "@mui/material";



export const SortAscIcon = (props:SvgIconProps)=>{
    return(
        <SvgIcon {...props} viewBox="0 0 24 24">
            <line x1="10" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        </SvgIcon>
    )
}

export const SortDesIcon = (props:SvgIconProps)=>{
    return(
        <SvgIcon {...props} viewBox="0 0 24 24">
             <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
             <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
             <line x1="11" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  
        </SvgIcon>
    )
}
