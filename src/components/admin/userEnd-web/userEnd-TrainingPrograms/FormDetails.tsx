import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,  TextField, Typography, Stack, Divider } from '@mui/material';
import { AddButton, CancelButton, EditButton, FormData, SaveButton, Calender, RDdata } from '../userEnd-Aboutus/AboutUsButtons';
import { useState,  } from 'react';
import DeleteIcon from "../../../../assets/Delete.png";

interface Item {
  id: number;
  text: string;
  checked: boolean;
}
const FormDetails= ()=>{
    const {classes} =useAboutusStyles();

  {/* Userdetails Fucntions */}
  const [items, setItems] = useState<{ id: number; text: string; checked: boolean }[]>
                                    ([{ id: Date.now(), text: "Name", checked: false }]);
  const [RDitems, setRDItems] = useState<{ id: number; text: string; checked: boolean }[]>
                                    ([{ id: Date.now(), text: "Nizamabad", checked: false }]);
  const [trainingitems, settrainingItems] = useState<{ id: number; text: string; checked: boolean }[]>
                                    ([{ id: Date.now(), text: "Visit", checked: false }]);
  const [technologiesitems, settechnologiesItems] = useState<{ id: number; text: string; checked: boolean }[]>
                                    ([{ id: Date.now(), text: "Recirculatory Aquaculture (RAS)", checked: false }]);

  const handleAdd = (setter: React.Dispatch<React.SetStateAction<Item[]>>) => {
    setter((prev) => [
      ...prev,
      { id: Date.now(), text: "", checked: false },
    ]);
  };

  const handleDelete = (id: number,setter: React.Dispatch<React.SetStateAction<Item[]>>) => {
    setter((prev) => prev.filter((item) => item.id !== id));
  };

  const handleTextChange = (id: number, value: string, setter: React.Dispatch<React.SetStateAction<Item[]>>) => {
    setter((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: value } : item))
    );
  };

  const handleCheckChange = (id: number, setter: React.Dispatch<React.SetStateAction<Item[]>>) => {
    setter((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

    return(
        <>
            <Box className={classes.myHeroContainer}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignContent:'center'}}>
                    <Box>
                         <Typography sx={{fontSize:'20px',fontWeight:600}}> User details</Typography>
                    </Box>
                    <Box className={classes.deleteButtonBox} sx={{gap:2}}>
                        <AddButton onClick={()=>handleAdd(setItems)}/>
                        <EditButton/>
                    </Box>
                </Box>
                <Box sx={{maxWidth:'815px', display:'flex',flexDirection:'column',gap:1}}>
                    {/*User Details */}
                    <Box sx={{display:'flex',flexDirection:'column',gap:1}}>    
                        <Stack spacing={2}>
                            {items.map((item, index) => (
                            <Box key={item.id}>
                                <FormData
                                id={item.id}
                                text={item.text}
                                checked={item.checked}
                                onTextChange={(id,text)=>handleTextChange(id,text,setItems)}
                                //onCheckChange={(id)=>handleCheckChange(id,setItems)}
                                onDelete={(id)=>handleDelete(id,setItems)}
                                />
                                {index < items.length - 1 && <Divider sx={{ my: 1 }} />}
                            </Box>
                            ))}   
                        </Stack> 
                        <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>  
                    </Box>
                    {/*R&D Faculty */}
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:2,}}>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{fontWeight:600,fontSize:'20px'}}>R&D Faculty</Typography>
                                <Box sx={{display:'flex',flexDirection:'row',gap:3, alignItems:'center'}}>
                                    <AddButton onClick={()=>handleAdd(setRDItems)}/>
                                    <Box component="img"
                                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{marginTop:2,width: 'calc(815px - 55px)',minHeight: 150,borderRadius: 1,display: 'flex',flexDirection: 'column',gap: 1,border:'1px solid #0A4FA4'}} >
                            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                            <Stack spacing={2}>
                                {RDitems.map((item) => (
                                <Box key={item.id}>
                                    <RDdata
                                    id={item.id}
                                    text={item.text}
                                    checked={item.checked}
                                    onTextChange={(id,text)=>handleTextChange(id,text,setRDItems)}
                                    //onCheckChange={(id)=>handleCheckChange(id,setRDItems)}
                                    onDelete={(id)=>handleDelete(id,setRDItems)}
                                    />
                                </Box>
                                ))}   
                            </Stack>   
                        </Box>
                    </Box>
                    </Box>
                    <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    {/*Training Course */}  
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:2,}}>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{fontWeight:600,fontSize:'20px'}}>Training Course</Typography>
                                <Box sx={{display:'flex',flexDirection:'row',gap:3, alignItems:'center'}}>
                                    <AddButton onClick={()=>handleAdd(settrainingItems)}/>
                                    <Box component="img"
                                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{marginTop:2,width: 'calc(815px - 55px)',minHeight: 150,borderRadius: 1,display: 'flex',flexDirection: 'column',gap: 1,border:'1px solid #0A4FA4'}} >
                            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                            <Stack spacing={2}>
                                {trainingitems.map((item) => (
                                <Box key={item.id}>
                                    <RDdata
                                    id={item.id}
                                    text={item.text}
                                    checked={item.checked}
                                    onTextChange={(id,text)=>handleTextChange(id,text,settrainingItems)}
                                    onCheckChange={(id)=>handleCheckChange(id,settrainingItems)}
                                    onDelete={(id)=>handleDelete(id,settrainingItems)}
                                    />
                                </Box>
                                ))}   
                            </Stack>   
                        </Box>
                    </Box>
                    </Box>
                    <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    {/* Available Slots */}
                    <Box sx={{maxWidth:'815px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:2}}>
                    <Typography sx={{fontWeight:600,fontSize:'20px'}}>Available Slot</Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:8,marginRight:4}}>
                        < Calender text='From' textColor='grey'/>
                        < Calender text='To' textColor='grey'/>
                    </Box>
                    <Box component="img"
                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px' sx={{display:'flex',justifyContent:'flex-end'}}
                    />
                </Box>
                <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
                    {/*Technologies */}
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:2,}}>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{fontWeight:600,fontSize:'20px'}}> Technologies</Typography>
                                <Box sx={{display:'flex',flexDirection:'row',gap:3, alignItems:'center'}}>
                                    <AddButton onClick={()=>handleAdd(settechnologiesItems)}/>
                                    <Box component="img"
                                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{marginTop:2,width: 'calc(815px - 55px)',minHeight: 150,borderRadius: 1,display: 'flex',flexDirection: 'column',gap: 1,border:'1px solid #0A4FA4'}} >
                            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                            <Stack spacing={2}>
                                {technologiesitems.map((item) => (
                                <Box key={item.id}>
                                    <RDdata
                                    id={item.id}
                                    text={item.text}
                                    checked={item.checked}
                                    onTextChange={(id,text)=>handleTextChange(id,text,settechnologiesItems)}
                                    onCheckChange={(id)=>handleCheckChange(id,settechnologiesItems)}
                                    onDelete={(id)=>handleDelete(id,settechnologiesItems)}
                                    />
                                </Box>
                                ))}   
                            </Stack>   
                        </Box>
                    </Box>
                    </Box>
                    <Box sx={{border:'1px solid #3d3b3ba6', marginTop:2}} ></Box>
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