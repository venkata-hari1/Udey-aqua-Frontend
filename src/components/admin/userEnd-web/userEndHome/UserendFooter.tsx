import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, TextField, Typography, Button, Dialog, DialogContent, DialogActions, IconButton} from '@mui/material';
import { SaveButton,  CancelButton, EditButton, AddSection} from '../userEnd-Aboutus/AboutUsButtons';
import { useState,  } from 'react';
import DeleteIcon from "../../../../assets/Delete.png"
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import {HelperTextValidate, NameandRoleValidate,validateEmail1,phoneNumberValidation,websiteValidation} from '../../utils/Validations';

type AdvisorProps={
    id:string;
    accordianId:string;
    Section:string;
    title:string;
    onDelete?: () => void;
}
const UserendFooter=({id,accordianId, Section, onDelete, title}:AdvisorProps)=>{
    const {classes} = useAboutusStyles();
    const [role, setRole] = useState<string>('+91');
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [Title, setTitle] = useState<string>('');
    const [links, setLinks] = useState<string>('');
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false) 
    const [socialLinks, setSocialLinks] = useState<{id:number}[]>([{ id: 1, }]);
    const [prevData, setPrevData] = useState<{Title:string,links:string,content:string,name:string,role:string } | null>(null);
    
  
    const titleFlied = NameandRoleValidate(Title);
    const contentFlied = HelperTextValidate(content);
    const emailerror= validateEmail1(name);
    const phoneerror= phoneNumberValidation(role);
    const linkerror= websiteValidation(links);
    const isTextInvalid =  role.length < 3 || role.length > 80 || phoneerror.isError || linkerror.isError || emailerror.isError ||  content.length < 3 || content.length > 200 || Title.length < 3 || Title.length > 80 ;
    const handleAddLink = () => {
      const lastId = socialLinks[socialLinks.length - 1]?.id || 0;
      const newId=lastId+1
      setSocialLinks((prev) => [...prev, { id:newId }]);
    };
    const handleDeleteLink = (id: number) => {
      setSocialLinks((prev) => prev.filter(link => link.id !== id));
    };
    const SaveData = ()=>{
        setPrevData({
        Title,
        name,
        content,links,role
    });
    setIsSaved(true);
    setEdit(false);
    console.log();
    };
    const CancelData = ()=>{
        if (prevData) {
        setTitle(prevData.Title);
        setRole(prevData.role);
        setContent(prevData.content);
        setLinks(prevData.links)
        setName(prevData.name);
        setIsSaved(true);
    } else {
        setTitle('');
        setRole('');
        setContent('');
        setLinks('')
        setName('');
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    
    
    return(
        <>
        <Box sx={{display:"flex", flexDirection:'row', justifyContent:"flex-end",gap:2}} >
          <EditButton error={ Edit} onClick={()=> {setCancel(true);
            setEdit(true)
          }}/>
        </Box>
      <Box className={classes.myuploadandheadingbox} sx={{gap:10}}>
                <Box>
                  <Box sx={{display:'flex',flexDirection:'row',gap:3, marginBottom:2}}>
                    <Typography>Insert Social Media Link</Typography>
                    <AddSection label='Add Social media link' onClick={handleAddLink}/>
                  </Box>
                  {socialLinks.map((link)=>(
                    <Box key={link.id}className={classes.TextFiledBox}>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                      <Typography className={classes.mytext}>Title</Typography>
                    <IconButton onClick={() => handleDeleteLink(link.id)} >
                      <Box component="img"
                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                      />
                    </IconButton>
                    </Box>
                    <TextField className={classes.Linkfield}
                    value={title}
                                    onChange={(e)=>{setTitle(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={titleFlied.message}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: (Title.length >= 3 && Title.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
                      <InsertLinkIcon sx={{color:'#0A4FA4'}}/>
                      <Typography className={classes.mytext}>Insert link</Typography>
                    </Box>
                    <TextField className={classes.Linkfield}
                    value={links}
                                    onChange={(e)=>{setLinks(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={linkerror.error}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: !linkerror.isError ? classes.greyText : classes.helperText
                            }}/>
                  </Box>))
                }
                </Box>
                <Box className={classes.TextFiledBox}>
                        <Typography className={classes.mytext}>
                            Email
                        </Typography>
                        <TextField className={classes.myTextFleid}
                                    value={name}
                                    onChange={(e)=>{setName(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={emailerror.error}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: !emailerror.isError ? classes.greyText : classes.helperText
                            }}/>
                         <Typography className={classes.mytext}>Phone number</Typography>
                                            <TextField className={classes.myTextFleid}
                                    value={role}
                                    onChange={(e)=>{setRole(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={phoneerror.error}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: !phoneerror.isError ? classes.greyText : classes.helperText
                            }}/>
                      <Typography className={classes.mytext}>Location</Typography>
                        <TextField 
                            fullWidth
                            className={classes.myTextFleid}
                            value={content}
                            onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                            helperText={contentFlied.message}
                            disabled={!Edit}
                            FormHelperTextProps={{
                                className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                </Box>
                
            </Box>    
            <Box className={classes.SeveandCancelBox}>
                            <SaveButton error={isSaved || isTextInvalid} onClick={SaveData} />
                            {cancel &&(<CancelButton onClick={CancelData} />)}
                        </Box>
        </>
    )
}
export default UserendFooter;