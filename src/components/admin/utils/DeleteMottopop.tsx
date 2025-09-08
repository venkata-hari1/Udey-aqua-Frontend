import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

type Iprops={
    open:boolean;
    handleclickopen:()=>void;
}
const DeleteMottopop = ({open,handleclickopen}:Iprops) => {
  return (
   <Dialog
        open={open}
        onClose={handleclickopen}
     >
        <DialogTitle sx={{display:'flex',color:'red'}}>
         "Are you sure you want to delete the <br/>
          Box1 in motto?"
        </DialogTitle>
        
        <DialogActions sx={{display:'flex', justifyContent:'center',gap:5,padding:'40px 40px'}}>
          <Button variant="outlined" sx={{border:'1px solid red',color:'red',minWidth:160,textTransform:'capitalize'}}onClick={handleclickopen}>cancel</Button>
          <Button variant="contained" sx={{background:'red',minWidth:160,textTransform:'capitalize'}}onClick={handleclickopen} autoFocus>
           Delete
          </Button>
        </DialogActions>
      </Dialog>    
  )
}

export default DeleteMottopop
