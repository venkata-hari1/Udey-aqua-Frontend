import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePaginationStyles from '../styles/MypaginationStyles'

const MyPagination = () => {
 const{classes}=usePaginationStyles()

  return (
    <Stack spacing={2} sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <Pagination className={classes.usePaginationStyle}count={10} variant="outlined" shape="rounded" size='medium' />
    </Stack>
   )
}

export default MyPagination
