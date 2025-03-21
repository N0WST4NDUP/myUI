import * as React from "react";
import { Box, useTheme } from "@mui/material";

const AboutMe = () => {
  const theme = useTheme();
  return <Box sx={{ backgroundColor: theme.palette.background.paper }}></Box>;
};

export default AboutMe;
