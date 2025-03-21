import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const slogans = [
  <>
    끊임 없이 <b>도전</b>하는
  </>,
  <>
    하루하루 <b>성장</b>하는
  </>,
  <>
    <b>함께</b>하고 싶은
  </>,
  <>
    매일매일 <b>꾸준히</b>
  </>,
  <>
    <b>배려</b>와 <b>존중</b>
  </>,
];

gsap.registerPlugin(useGSAP);

const Slogan = (props: { sx?: object }) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(".mySlogan", {
      delay: 2.2,
      duration: 0.4,
      opacity: 0,
      rotateX: "90",
      onComplete: increaseIndex,
    }).to(".mySlogan", {
      duration: 0.4,
      opacity: 1,
      rotateX: "0",
    });
  }, [index]);

  function increaseIndex() {
    setIndex((prev) => (prev === slogans.length - 1 ? 0 : prev + 1));
  }

  return (
    <Box
      className="mySlogans"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <FormatQuote fontSize="large" sx={{ transform: "rotate(180deg)" }} />
      <Box
        sx={{
          width: { xs: "100%", sm: 300 },
          bgcolor: theme.palette.background.paper,
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          perspective: "1000px",
        }}
      >
        <Typography
          className="mySlogan"
          variant="subtitle2"
          children={slogans[index]}
        />
      </Box>
      <FormatQuote fontSize="large" />
    </Box>
  );
};

export default Slogan;
