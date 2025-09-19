import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useProfileStyles from '../profile/ProfileStyles';

type Iprops={
    open:boolean;
    handleclickopen:()=>void;
}
const Deletepopup = ({open,handleclickopen}:Iprops) => {
  const { classes } = useProfileStyles();
  return (
   <Dialog
        open={open}
        onClose={handleclickopen}
       /*  PaperProps={{
        sx:{
         padding:"30px",  
        }}}
        sx={{background:'#8f8f8f80',
        }} */
       className={classes.dialogContainer}
  >
        <DialogTitle sx={{display:'flex',color:'red'}}>
         "Are you sure you want to delete the<br />
          Surya Pratap?"
        </DialogTitle>
        
        <DialogActions sx={{display:'flex', justifyContent:'center',gap:5,padding:'30px 0px'}}>
          <Button variant="outlined" sx={{border:'1px solid red',color:'red',minWidth:160,textTransform:'capitalize'}}onClick={handleclickopen}>cancel</Button>
          <Button variant="contained" sx={{background:'red',minWidth:160,textTransform:'capitalize'}}onClick={handleclickopen} autoFocus>
           Delete
          </Button>
        </DialogActions>
      </Dialog>    
  )
}

export default Deletepopup
