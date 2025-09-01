import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useUserEndwebStyles = makeStyles()((theme: Theme) => ({
  userEndwebTitle: {
    color: theme.palette.primary.main, 
  },
}));

export default useUserEndwebStyles;