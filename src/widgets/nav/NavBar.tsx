import * as React from "react";
import { AppBar, Button, styled } from "@mui/material";

const SyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  borderRadius: 0,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -3,
    width: "100%",
    height: "3px",
    backgroundColor: theme.palette.text.primary,
    transition: "transform 0.3s ease",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
  font: theme.typography.fontFamily,
  fontWeight: "bold",
  letterSpacing: "-0.05em",
}));

const NavBar = (props: { display?: string }) => {
  return (
    <AppBar
      enableColorOnDark
      sx={{
        position: "fixed",
        display: props.display || "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: { xs: 2, sm: 6 },
        padding: 0,
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: {
          xs: `calc(var(--template-frame-height, 0px) + 16px)`,
          sm: `calc(var(--template-frame-height, 0px) + 24px)`,
        },
      }}
    >
      <SyledButton
        href="https://github.com/n0wst4ndup/"
        sx={{
          height: {
            xs: "40px",
            sm: "32px",
          },
          fontSize: {
            xs: "24px",
            sm: "18px",
          },
        }}
      >
        GitHub
      </SyledButton>
      <SyledButton
        href="https://velog.io/@n0wst4ndup/"
        sx={{
          height: {
            xs: "40px",
            sm: "32px",
          },
          fontSize: {
            xs: "24px",
            sm: "18px",
          },
        }}
      >
        Velog
      </SyledButton>
    </AppBar>
  );
};

export default NavBar;
