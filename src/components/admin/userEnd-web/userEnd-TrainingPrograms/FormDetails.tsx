import {useUserEndwebStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,  Checkbox, TextField, Typography,IconButton, Popper, Paper, ClickAwayListener,} from '@mui/material';
import { AddButton, CancelButton, EditButton, FormData, SaveButton, } from '../userEnd-Aboutus/AboutUsButtons';
import { useState,  } from 'react';

import DeleteIcon from "../../../../assets/Delete.png";
import EditIcon from "../../../../assets/Edit.png";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FormDetails= ()=>{
    const {classes} =useUserEndwebStyles();

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return(
        <>
            <Box className={classes.myHeroContainer}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignContent:'center'}}>
                    <Box>
                         <Typography sx={{fontSize:'20px',fontWeight:600}}> User details</Typography>
                    </Box>
                    <Box className={classes.deleteButtonBox} sx={{gap:2}}>
                        <AddButton/>
                        <EditButton/>
                    </Box>
                </Box>
                <Box sx={{maxWidth:'815px', display:'flex',flexDirection:'column',gap:1}}>
                    {/*User Details */}
                    <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                        <FormData title='Name'/>
                        <Box sx={{border:'1px solid #e0d8d8b4', marginTop:1}} ></Box>
                        <FormData title='Email'/>
                        <Box sx={{border:'1px solid #e0d8d8b4', marginTop:1}} ></Box>
                        <FormData title='Phone'/>
                        <Box sx={{border:'1px solid #e0d8d8b4', marginTop:1}} ></Box>
                        <FormData title='Adress'/>
                        <Box sx={{border:'1px solid #e0d8d8b4', marginTop:1}} ></Box>
                        <FormData title='District'/>
                        <Box sx={{border:'1px solid #e0d8d8b4', marginTop:1}} ></Box>
                        <FormData title='State'/>
                        <Box sx={{border:'1px solid #e0d8d8b4', marginTop:1}} ></Box>
                        <FormData title='pincode'/>
                        <Box sx={{border:'1px solid #3d3b3ba6', marginTop:1}} ></Box>
                    </Box>
                    {/*R&D Faculty */}
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:2,}}>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{fontWeight:600,fontSize:'20px'}}>R&D Faculty</Typography>
                                <Box sx={{display:'flex',flexDirection:'row',gap:3, alignItems:'center'}}>
                                    <AddButton/>
                                    <Box component="img"
                                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{marginTop:2,width: 'calc(815px - 55px)',minHeight: 150,borderRadius: 1,display: 'flex',flexDirection: 'column',gap: 1,border:'1px solid #0A4FA4'}} >
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Nizamabad</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Armoor</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Mulapolam </Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Armoor</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    {/*Training Course */}  
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:2,borderColor:'#0A4FA4'}}>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{fontWeight:600,fontSize:'20px'}}>Training Course</Typography>
                                <Box sx={{display:'flex',flexDirection:'row',gap:3, alignItems:'center'}}>
                                    <AddButton/>
                                    <Box component="img"
                                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{marginTop:2,width: 'calc(815px - 55px)',minHeight: 150,border:'1px solid #0A4FA4',borderRadius: 1,display: 'flex',flexDirection: 'column',gap: 1,}} >
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Visit</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>1 Day</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>3 Days </Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>7 Days</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                        </Box>
                        <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    </Box>
                    {/* Available Slots */}
                    <Box sx={{maxWidth:'815px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:2}}>
                    <Typography sx={{fontWeight:600,fontSize:'20px'}}>Available Slot</Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:8,marginRight:4}}>
                    <Box sx={{border:'1px solid #0A4FA4',width:'200px',height:'50px',borderRadius:'4px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box
                                sx={{
                                border: "1px solid #0A4FA4",
                                width: "250px",
                                height: "50px",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                px: 1,
                                }}
                            >
                                {/* Left side: Calendar icon + text */}
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <IconButton onClick={handleClick} sx={{ color: "#0A4FA4" }}>
                                    <CalendarTodayIcon />
                                </IconButton>
                                <Typography sx={{ color: "grey" }}>From</Typography>
                                </Box>

                                {/* Right side: ExpandMore icon */}
                                <IconButton onClick={handleClick} sx={{ color: "#0A4FA4" }}>
                                <ExpandMoreIcon />
                                </IconButton>

                                {/* Popper: Calendar dropdown */}
                                <ClickAwayListener onClickAway={handleClose}>

                                <Popper
                                open={open}
                                anchorEl={anchorEl}
                                placement="bottom-start"
                               
                                >
                                <Paper sx={{ p: 1 }}>
                                    <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    />
                                </Paper>
                                </Popper>
                                </ClickAwayListener>
                            </Box>

                        </LocalizationProvider>
                        

                    </Box>
                    <Box sx={{border:'1px solid #0A4FA4',width:'200px',height:'50px',borderRadius:'4px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box
                                sx={{
                                border: "1px solid #0A4FA4",
                                width: "250px",
                                height: "50px",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                px: 1,
                                }}
                            >
                                {/* Left side: Calendar icon + text */}
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <IconButton onClick={handleClick} sx={{ color: "#0A4FA4" }}>
                                    <CalendarTodayIcon />
                                </IconButton>
                                <Typography sx={{ color: "grey" }}>To</Typography>
                                </Box>

                                {/* Right side: ExpandMore icon */}
                                <IconButton onClick={handleClick} sx={{ color: "#0A4FA4" }}>
                                <ExpandMoreIcon />
                                </IconButton>

                                {/* Popper: Calendar dropdown */}
                                <ClickAwayListener onClickAway={handleClose}>

                                <Popper
                                open={open}
                                anchorEl={anchorEl}
                                placement="bottom-start"
                               
                                >
                                <Paper sx={{ p: 1 }}>
                                    <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    />
                                </Paper>
                                </Popper>
                                </ClickAwayListener>
                            </Box>

                        </LocalizationProvider>
                        

                    </Box>
                    </Box>
                    <Box component="img"
                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px' sx={{display:'flex',justifyContent:'flex-end'}}
                    />
                </Box>
                <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    {/*Technologies */}
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:2,}}>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{fontWeight:600,fontSize:'20px'}}>Technologies</Typography>
                                <Box sx={{display:'flex',flexDirection:'row',gap:3, alignItems:'center'}}>
                                    <AddButton/>
                                    <Box component="img"
                                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{marginTop:2,width: 'calc(815px - 55px)',minHeight: 150,border:'1px solid #0A4FA4',borderRadius: 1,display: 'flex',flexDirection: 'column',gap: 1,}} >
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Recirculatory Aquaculture (RAS)</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Circulatory Aquaculture (CAS)</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Poly Pond Culture </Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Bioflock</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                                    <Checkbox sx={{color:'#0A4FA4'}}/>
                                    <Typography sx={{fontWeight:600,fontSize:'16px'}}>Cage Culture</Typography>
                                </Box>
                                <Box component="img"
                                    src={EditIcon} alt="Editicon" width='19px' height='19px'
                                />
                            </Box>
                        </Box>
                        <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    </Box>
                    {/* Terms and Conditions */}
                    <Box sx={{display:'flex',flexDirection:'row', gap:2,marginLeft:2}}>
                        <Box sx={{width:'190px'}}>
                            <Typography sx={{fontWeight:600,fontSize:'20px'}}>Terms & Conditions</Typography>
                        </Box>
                        <Box >
                            <TextField multiline minRows={5} sx={{width:'calc(815px - 265px)',border:'1px solid #0A4FA4',borderRadius:'4px'}}/>
                        </Box>
                        
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox} >
                    <SaveButton />
                    <CancelButton />
                </Box>
                

            </Box>
        </>
    )
}
export default FormDetails;