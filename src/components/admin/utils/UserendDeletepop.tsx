import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

type Iprops={
    open:boolean;
    message:string;
    onClose:()=>void;
    onDelete:()=>void;
}
const UserendDeletepopup = ({open,message,onClose,onDelete}:Iprops) => {
  return (
   <Dialog
        open={open}
        onClose={onClose}
   >
        <DialogTitle sx={{display:'flex',color:'red'}}>
         {message}
        </DialogTitle>
        
        <DialogActions sx={{display:'flex', justifyContent:'center',gap:5,padding:'40px 40px'}}>
          <Button variant="outlined" sx={{border:'1px solid red',color:'red',minWidth:160,textTransform:'capitalize'}}
          onClick={onClose}>
            cancel
          </Button>
          <Button variant="contained" sx={{background:'red',minWidth:160,textTransform:'capitalize'}}
           onClick={onDelete} autoFocus>
           Delete
          </Button>
        </DialogActions>
      </Dialog>    
  )
}

export default UserendDeletepopup
