import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Stack, Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import { useAboutusStyles } from '../userEnd-Aboutus/AboutusStyles';
import { EditButton, SaveButton, CancelButton, DeleteButton } from '../userEnd-Aboutus/AboutUsButtons';
import { TitleValidate, addressContentValidation, phoneNumberValidation, websiteValidation } from '../../utils/Validations';


interface ContactInfoProps {
    id: string;
    onDelete?: () => void;
    onAddAddress?: () => void;
}

const Address = ({ id, onDelete, }: ContactInfoProps) => {
    const { classes } = useAboutusStyles();

    const [title,settitle]=useState<string>('');
    const [phone,setphone]=useState<string>('+91');
    const [address,setAdress]=useState<string>('');
    const [website,setWebsite]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<{ title: string; address: string;website:string ; phone:string} | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const titleError=TitleValidate(title).message;
    const adresserror =addressContentValidation(address).error;
    const phoneerror= phoneNumberValidation(phone);
    const websiteerror = websiteValidation(website)

    const isTextInvalid =  title.length < 3 || title.length > 200 ||  address.length < 3 || address.length > 200 ||  website.length < 3 || website.length > 200; 


     const handleDeleteClick = () => {
        setOpenDialog(true);
    };

    const handleCancel = () => {
        setOpenDialog(false);
    };

    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };
    const SaveData = ()=>{
        setPrevData({
        title,
        phone,
        website,
        address
    });
    setIsSaved(true);
    setEdit(false);
    setCancel(false)
    console.log(`titel:${title}, phone:${phone},website:${website}`);
};

    const CancelData = ()=>{
        if (prevData) {
        settitle(prevData.title);
        setphone(prevData.phone);
        setAdress(prevData.address)
        setWebsite(prevData.website)
        setIsSaved(true);
    } else {
        settitle('');
        setAdress('');
        setphone('');
        setWebsite('');
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    return (
        <>
            <Box >
                {/* Edit and Delete buttons */}
                <Typography className={classes.HeaderText}>{id}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '30px', paddingRight: '40px' }}>
                    <EditButton error={!prevData} onClick={()=> {setCancel(true);
                            setEdit(true)
                        }}/>
                    {onDelete && <DeleteButton  onClick={handleDeleteClick}/>}
                </Box>

                {/* Form Fields with Increased Width */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 3,
                    maxWidth: '900px', 
                    marginBottom: '30px'
                }}>
                    {/* Title Field */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography className={classes.mytext} sx={{ width: '120px', flexShrink: 0 }}>Title</Typography>
                        <TextField
                            value={title}
                            onChange={(e)=>{settitle(e.target.value);
                                             setIsSaved(false)}}
                            helperText={titleError}
                            FormHelperTextProps={{
                                className: (title.length >= 3 && title.length < 200) ? classes.greyText : classes.helperText
                            }}
                            className={classes.myTextFleid}
                            disabled={!Edit}
                            
                            sx={{ width: '100%' }}
                            
                        />
                    </Box>

                    {/* Address Field */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
                        <Typography className={classes.mytext} sx={{ width: '120px', flexShrink: 0, marginTop: '14px' }}>Address</Typography>
                        <TextField
                            multiline
                            rows={4}
                            value={address}
                            onChange={(e)=>{setAdress(e.target.value);
                                            setIsSaved(false)}}
                            helperText={adresserror}
                            className={classes.myTextFleid}
                           FormHelperTextProps={{
                                className: (address.length >= 3 && address.length < 200) ? classes.greyText : classes.helperText
                            }}
                            disabled={!Edit}
                            sx={{ width: '100%' }}
                            
                        />
                    </Box>

                    {/* Phone Field */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography className={classes.mytext} sx={{ width: '120px', flexShrink: 0 }}>Phone</Typography>
                        <TextField
                            value={phone}
                            defaultValue={+91}
                            onChange={(e)=>{setphone(e.target.value);
                                            setIsSaved(false)}}
                            helperText={phoneerror.error}
                            className={classes.myTextFleid}
                            FormHelperTextProps={{
                                className: (!phoneerror.isError) ? classes.greyText : classes.helperText
                            }}
                            disabled={!Edit}
                            sx={{ width: '100%' }}
                            
                        />
                    </Box>

                    {/* Website Link Field */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography className={classes.mytext} sx={{ width: '120px', flexShrink: 0 }}>Website URL</Typography>
                        <TextField
                            value={website}
                            onChange={(e)=>{setWebsite(e.target.value);
                                            setIsSaved(false)}}
                            disabled={!Edit}
                            helperText={websiteerror.error}
                            className={classes.myTextFleid}
                            
                        />
                    </Box>
                </Box>

                {/* Save and Cancel Buttons - Centered */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '15px',
                    marginTop: '20px'
                }}>
                    <SaveButton error={isTextInvalid && phoneerror.isError || isSaved || websiteerror.isError} onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData} />)}
                </Box>

                {/* Delete Confirmation Dialog */}
                
            </Box>
             <Dialog open={openDialog} fullWidth onClose={handleCancel} className={classes.DialoagBox} PaperProps={{
                                                sx: {
                                                width: 500,       
                                                height: 250,      
                                                borderRadius: 3,   
                                                padding: 2,        
                                                },
                                            }}>
                            <DialogContent className={classes.DialogContent}>
                                <Typography sx={{fontSize:'24px',color:'red',fontWeight:500,wordWrap: 'break-word'}}>Are you sure you want to delete this {id}?</Typography>
                            </DialogContent>
                            <DialogActions sx={{ 
                                            display: 'flex', 
                                            justifyContent: 'center'  
                                        }}>
                                <Button onClick={handleCancel} className={classes.deleteButton}>
                                    Cancel
                                </Button>
                                <Button onClick={handleConfirmDelete} className={classes.CancelButton}>
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
        </>
    );
};

export default Address;
