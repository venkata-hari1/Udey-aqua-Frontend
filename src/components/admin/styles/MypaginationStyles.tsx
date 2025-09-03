import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const usePaginationStyles = makeStyles()((theme: Theme) => ({
 
 usePaginationStyle:{
    
    '& .MuiPaginationItem-root': {
            color: '#949494',        
            borderColor: '#949494',
            marginTop:"30px",
     },
     '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'white',
            color: '#0463EE',
            borderColor: '#0463EE',
     },
    '& .MuiPaginationItem-previousNext': {
            color: theme.palette.primary.dark,
            border:'none'
    },
}

}));

export default usePaginationStyles;