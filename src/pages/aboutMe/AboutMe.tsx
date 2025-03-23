import * as React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { PersonSearch } from "@mui/icons-material";

const hashtags: string[] = ["#따듯한로봇", "#팀메이커", "#인간물음표"];

const AboutMe = (props: { sx?: object }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100lvh",
        backgroundColor: theme.palette.background.default,
        borderTop: `3px solid ${theme.palette.divider}`,
        padding: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, sm: 4 },
        }}
      >
        <Box sx={{ width: { xs: "50%", sm: 250 } }}>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Smiling%20Eyes.png"
            alt="Grinning Face with Smiling Eyes"
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "low", gap: { xs: 1, sm: 2 } }}
        >
          {hashtags.map((hashtag, index) => (
            <Typography key={index} variant="body1">
              {hashtag}
            </Typography>
          ))}
        </Box>
        <Button variant="contained" size="large" startIcon={<PersonSearch />}>
          Details
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          gap: { xs: 1, sm: 2 },
          paddingInline: { xs: 0, sm: 12 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: 4,
            fontSize: {
              xs: "24px",
              sm: "32px",
            },
          }}
        >
          Interview
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 200,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: 200,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutMe;
