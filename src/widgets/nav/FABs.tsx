import * as React from "react";
import { Box, IconButton, styled, Tooltip } from "@mui/material";
import { Email, KeyboardArrowDown, Textsms } from "@mui/icons-material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// GSAP 쓴 컴포넌트 입니다.
gsap.registerPlugin(useGSAP);

const FAB = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  ":hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FABs = (props: { className?: string }) => {
  const [open, setOpen] = React.useState(true);

  useGSAP(() => {
    gsap.to(".dropdown", {
      duration: 0.5,
      rotation: open ? 0 : 180,
    });
    gsap.to(".fab", {
      duration: 0.2,
      y: open ? 0 : 48,
      opacity: open ? 1 : 0,
      display: open ? "flex" : "none",
      stagger: {
        from: open ? "end" : "start",
        each: 0.15,
      },
    });
  }, [open]);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Box
      className={props.className}
      sx={{
        position: "fixed",
        zIndex: 1,
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
        <KeyboardArrowDown />
      </FAB>
    </Box>
  );
};

export default FABs;
