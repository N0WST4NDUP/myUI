import * as React from "react";
import { Box, IconButton, styled, Tooltip } from "@mui/material";
import { Email, KeyboardArrowUp, Textsms } from "@mui/icons-material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// GSAP 쓴 컴포넌트 입니다.
gsap.registerPlugin(useGSAP);

const FAB = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  // boxShadow: theme.palette.baseShadow,
}));

const FABs = () => {
  const [open, setOpen] = React.useState(true);

  useGSAP(() => {
    gsap.to(".dropdown", {
      duration: 0.5,
      rotation: "+=180",
    });
    gsap.to(".fab", {
      duration: 0.3,
      y: open ? 0 : 32,
      opacity: open ? 1 : 0,
      display: open ? "flex" : "none",
    });
  }, [open]);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Box
      sx={{
        position: "fixed",
        right: 18,
        bottom: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "right",
        alignItems: "end",
        gap: { xs: 2, sm: 1 },
      }}
    >
      <Tooltip
        className="fab"
        aria-label="email"
        title="n0wst4ndup@gmail.com"
        placement="left"
        arrow
      >
        <FAB size="large">
          <Email />
        </FAB>
      </Tooltip>
      <Tooltip
        className="fab"
        aria-label="email"
        title="Feedback"
        placement="left"
        arrow
      >
        <FAB size="large">
          <Textsms />
        </FAB>
      </Tooltip>
      <FAB className="dropdown" onClick={handleClick} size="large">
        <KeyboardArrowUp />
      </FAB>
    </Box>
  );
};

export default FABs;
