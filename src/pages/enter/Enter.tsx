import * as React from "react";
import NavBar from "widgets/nav/NavBar";
import FABs from "widgets/nav/FABs";
import Slogan from "shared/components/Slogan";
import MyDoubleArrow from "shared/components/MyDoubleArrow";
import { Box, Typography, useTheme } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Enter = (props: { handleStateFunction?: () => void }) => {
  const theme = useTheme();
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".title", {
      duration: 0.7,
      opacity: 0,
      rotateY: 90,
      stagger: 0.05,
    }).to(".title", {
      duration: 0.5,
      opacity: 0,
      onComplete: props.handleStateFunction,
    });

    tl.from(".myName", {
      duration: 1,
      y: -8,
      opacity: 0,
    }).from(
      ".myRole",
      {
        duration: 1,
        y: 12,
        opacity: 0,
      },
      "<"
    );

    tl.from(".myPhoto", {
      duration: 1,
      opacity: 0,
    })
      .from(
        ".mySlogans",
        {
          duration: 2,
          opacity: 0,
        },
        "<"
      )
      .from(
        ".nav",
        {
          duration: 1,
          y: 4,
          opacity: 0,
        },
        "<"
      )
      .from(
        ".fabs",
        {
          duration: 1,
          x: 4,
          opacity: 0,
        },
        "<"
      );
  }, []);

  return (
    <>
      <Title />
      <NavBar className="nav" />
      <FABs className="fabs" />
      <Box
        className="myPhoto"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "100%", sm: 450 },
            height: 450,
            bottom: 0,
          }}
        >
          <img
            src="/myPhoto.png"
            alt="myPhoto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom",
              marginLeft: -12,
              filter: `drop-shadow(0 2px 4px ${theme.palette.primary.dark})`,
            }}
          />
        </Box>
        <MyDoubleArrow
          sx={{ position: "absolute", bottom: 0, color: "white" }}
        />
      </Box>
    </>
  );
};

const Title = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "none",
        zIndex: -1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <Typography className="title" variant="h2">
        H
      </Typography>
      <Typography className="title" variant="h2">
        e
      </Typography>
      <Typography className="title" variant="h2">
        l
      </Typography>
      <Typography className="title" variant="h2">
        l
      </Typography>
      <Typography className="title" variant="h2">
        o,
      </Typography>
      <Typography className="title" variant="h2">
        &nbsp;W
      </Typography>
      <Typography className="title" variant="h2">
        o
      </Typography>
      <Typography className="title" variant="h2">
        r
      </Typography>
      <Typography className="title" variant="h2">
        l
      </Typography>
      <Typography className="title" variant="h2">
        d!
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 108, sm: 96 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          className="myRole"
          variant="h1"
          sx={{
            color: theme.palette.background.paper,
            fontSize: { xs: "50px", sm: "72px" },
          }}
        >
          Full-Stack Dev
        </Typography>
        <Typography
          className="myName"
          variant="subtitle1"
          sx={{
            mt: { xs: -3.5, sm: -5 },
            fontSize: { xs: "24px", sm: "36px" },
          }}
        >
          풀스택 개발자 <b>이재서</b>입니다.
        </Typography>
        <Slogan sx={{ mt: { xs: "10%", sm: 3 } }} />
      </Box>
    </Box>
  );
};

export default Enter;
