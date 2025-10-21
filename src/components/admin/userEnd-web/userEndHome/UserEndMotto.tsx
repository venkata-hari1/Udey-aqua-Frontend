import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import Hero from "../userEnd-Aboutus/Hero";
import { useState,} from 'react';
import Badge from "@mui/material/Badge";
const UserEndMotto = () => {
  const { classes } = useUserEndwebStyles();
  const { classes:aboutus } =useAboutusStyles ();
  const [subpages, setSubpages] = useState<{ id:string}[]>([]);
  const [counter, setCounter] = useState<number>(1);
  const handleAddSubpage = () => {
  const newId = `Box-${counter+1}`; // unique id
    setSubpages((prev) => [...prev, { id: newId }]);
    setCounter(counter +1)
  };
  const handleDeleteSubpage = (subId: string) => {
    setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    setCounter(counter -1)
  };
  return (
    <>
    <Box className={aboutus.WhoWeAreContainer}>
      <Box className={classes.addingButtonBox}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className={classes.AddingButton}
            onClick={handleAddSubpage}
          >
            Add Motto
          </Button>
        </Box>
        <Box>
          <Hero id='1' accordianId='4' Section='Out motto' title='Home'/>
        </Box>
        {subpages.map((sub) => (
          <Hero key={sub.id} id={sub.id}  accordianId='4' Section='Out motto' title='Home' ondelete={() => handleDeleteSubpage(sub.id)} />
        ))}
      </Box>
    </>
  )
};
export default UserEndMotto;