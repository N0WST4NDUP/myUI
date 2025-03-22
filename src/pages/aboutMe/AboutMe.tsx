import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const AboutMe = (props: { sx?: object }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "1800px",
        backgroundColor: theme.palette.background.default,
        borderTop: `3px solid ${theme.palette.divider}`,
        padding: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        ...props.sx,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "24px",
            sm: "40px",
          },
        }}
      >
        About Me
      </Typography>
      <Box sx={{ border: "1px solid red" }}></Box>
    </Box>
  );
};

export default AboutMe;
