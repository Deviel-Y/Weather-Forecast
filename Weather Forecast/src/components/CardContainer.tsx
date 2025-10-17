import { Box, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import type { DirType } from "../useLanguageStore";

interface Props {
 children: ReactNode;
 additionalStyles?: string;
 dir?: DirType;
}

const CardContainer = ({ children, additionalStyles, dir }: Props) => {
 const theme = useTheme();
 return (
  <Box
   sx={{
    background:
     theme.palette.mode === "light"
      ? theme.palette.customeBackground.cardSectionLight
      : theme.palette.customeBackground.cardSectionDark,
   }}
   dir={dir}
   className={`${additionalStyles} rounded-3xl`}
  >
   {children}
  </Box>
 );
};

export default CardContainer;
