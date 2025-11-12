import { Typography, Button, Dialog, DialogContent, DialogActions,} from '@mui/material';


type Iprops={
    open:boolean;
    message:string;
    onClose:()=>void;
    onDelete:()=>void;
}
const UserendDeletepopup = ({open,message,onClose,onDelete}:Iprops) => {
  return (
   <Dialog sx={{display:'flex',flexDirection:'row',justifyContent:'center',}}
    PaperProps={{
                  sx: {width: 500, height: 250,borderRadius: 3,padding: 2,}
                }}
        open={open}
        onClose={onClose}
        fullWidth
   >
      <DialogContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign: 'center'}}>
          <Typography sx={{fontSize:'24px',color:'red',fontWeight:500,wordWrap: 'break-word'}}>{message}</Typography>
      </DialogContent>
        
        <DialogActions sx={{ display: 'flex',justifyContent: 'center' ,gap:5}}>
          <Button variant="outlined" 
                  sx={{ backgroundColor:'#F7FAFC', border:'1px solid red',color:'red',borderRadius:'7px',textTransform:'capitalize',padding:'0px 22px',height:'37px'}}                    
                  onClick={onClose}
          >
            cancel
          </Button>
          <Button variant="contained" 
                  sx={{background:'#FF3326',textTransform:'capitalize', color:'white',padding:"7px 30px",borderRadius:'9px',fontFamily: "Poppins, sans-serif",fontWeight: 500,fontSize: "0.875rem",boxShadow:'none'}}
           onClick={onDelete} autoFocus>
           Delete
          </Button>
        </DialogActions>
      </Dialog>    
  )
}

export default UserendDeletepopup
