import * as React from "react";
import { HexIcon } from "entities/iconFrame/frames";
import { Box, styled } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* 여기는 나중에 리팩토링 해야 할 부분
 * 1. 코드가 너무 길고 반복 됌
 * 2. 이미지가 너무 많아서 로딩이 느림
 * 3. 애니메이션이 썩 유쾌하지 않음
 */
const prefix = "stackIcons/";
const suffix = "-Dark.svg";

const IconRow = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: -16,
}));

const Animation = (parent: { handleStateFunction: () => void }) => {
  const [isMobile] = React.useState(/Mobi/i.test(window.navigator.userAgent));

  return isMobile ? (
    <MobileAnimation handleStateFunction={parent.handleStateFunction} />
  ) : (
    <DefaultAnimation handleStateFunction={parent.handleStateFunction} />
  );
};

// GSAP 쓴 컴포넌트 입니다.
gsap.registerPlugin(useGSAP);

const DefaultAnimation = (grandparent: { handleStateFunction: () => void }) => {
  const imgSize = 100;
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const containerTL = gsap.timeline();
    const iconsTL1 = gsap.timeline();
    const iconsTL2 = gsap.timeline();

    containerTL
      .fromTo(
        container.current,
        {
          scale: 2.5,
        },
        {
          duration: 5.5,
          scale: 1.5,
          delay: 2,
        }
      )
      .to(".icon", {
        duration: 0.2,
        opacity: 0,
        rotateY: 90,
        stagger: { each: 0.1, from: "random", grid: "auto" },
        onComplete: grandparent.handleStateFunction,
      });

    iconsTL1
      .from(".primary", {
        duration: 1.7,
        delay: 0.3,
        opacity: 0,
      })
      .from(".second", {
        delay: 1,
        duration: 1,
        opacity: 0,
        stagger: { each: 0.07, from: "random" },
      })
      .from(".forth", {
        duration: 0.3,
        opacity: 0,
        stagger: { each: 0.05, from: "random" },
      });

    iconsTL2
      .from(".first", {
        delay: 2,
        duration: 1.2,
        opacity: 0,
        stagger: { each: 0.1, from: "random" },
      })
      .from(".third", {
        duration: 0.5,
        opacity: 0,
        stagger: { each: 0.05, from: "random" },
      });
  }, []);

  return (
    <Box
      ref={container}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100svw",
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <IconRow aria-label="first row">
        <HexIcon
          className="StyledComponents forth icon"
          size={imgSize}
          url={prefix + "StyledComponents" + suffix}
        />
        <HexIcon
          className="Vite forth icon"
          size={imgSize}
          url={prefix + "Vite" + suffix}
        />
        <HexIcon
          className="Redux forth icon"
          size={imgSize}
          url={prefix + "Redux" + suffix}
        />
        <HexIcon
          className="Ableton third icon"
          size={imgSize}
          url={prefix + "Ableton" + suffix}
        />
        <HexIcon
          className="Webpack third icon"
          size={imgSize}
          url={prefix + "Webpack" + suffix}
        />
        <HexIcon
          className="Regex third icon"
          size={imgSize}
          url={prefix + "Regex" + suffix}
        />
        <HexIcon
          className="StackOverflow third icon"
          size={imgSize}
          url={prefix + "StackOverflow" + suffix}
        />
        <HexIcon
          className="Flask third icon"
          size={imgSize}
          url={prefix + "Flask" + suffix}
        />
        <HexIcon
          className="Processing forth icon"
          size={imgSize}
          url={prefix + "Processing" + suffix}
        />
        <HexIcon
          className="Workers forth icon"
          size={imgSize}
          url={prefix + "Workers" + suffix}
        />
        <HexIcon
          className="WebAssembly forth icon"
          size={imgSize}
          url={prefix + "WebAssembly" + suffix}
        />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon
          className="Prisma forth icon"
          size={imgSize}
          url={prefix + "Prisma" + suffix}
        />
        <HexIcon
          className="PyTorch forth icon"
          size={imgSize}
          url={prefix + "PyTorch" + suffix}
        />
        <HexIcon
          className="Angular third icon"
          size={imgSize}
          url={prefix + "Angular" + suffix}
        />
        <HexIcon
          className="MySQL second icon"
          size={imgSize}
          url={prefix + "MySQL" + suffix}
        />
        <HexIcon
          className="Photoshop third icon"
          size={imgSize}
          url={prefix + "Photoshop" + suffix}
        />
        <HexIcon
          className="Redis second icon"
          size={imgSize}
          url={prefix + "Redis" + suffix}
        />
        <HexIcon
          className="Powershell third icon"
          size={imgSize}
          url={prefix + "Powershell" + suffix}
        />
        <HexIcon
          className="Nginx third icon"
          size={imgSize}
          url={prefix + "Nginx" + suffix}
        />
        <HexIcon
          className="Plan9 forth icon"
          size={imgSize}
          url={prefix + "Plan9" + suffix}
        />
        <HexIcon
          className="Replit forth icon"
          size={imgSize}
          url={prefix + "Replit" + suffix}
        />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon
          className="Octave forth icon"
          size={imgSize}
          url={prefix + "Octave" + suffix}
        />
        <HexIcon
          className="NeoVim forth icon"
          size={imgSize}
          url={prefix + "NeoVim" + suffix}
        />
        <HexIcon
          className="GoLang third icon"
          size={imgSize}
          url={prefix + "GoLang" + suffix}
        />
        <HexIcon
          className="GithubActions second icon"
          size={imgSize}
          url={prefix + "GithubActions" + suffix}
        />
        <HexIcon
          className="TensorFlow second icon"
          size={imgSize}
          url={prefix + "TensorFlow" + suffix}
        />
        <HexIcon
          className="AWS first icon"
          size={imgSize}
          url={prefix + "AWS" + suffix}
        />
        <HexIcon
          className="Markdown second icon"
          size={imgSize}
          url={prefix + "Markdown" + suffix}
        />
        <HexIcon
          className="Cloudflare second icon"
          size={imgSize}
          url={prefix + "Cloudflare" + suffix}
        />
        <HexIcon
          className="RaspberryPi third icon"
          size={imgSize}
          url={prefix + "RaspberryPi" + suffix}
        />
        <HexIcon
          className="NuxtJS forth icon"
          size={imgSize}
          url={prefix + "NuxtJS" + suffix}
        />
        <HexIcon
          className="Netlify forth icon"
          size={imgSize}
          url={prefix + "Netlify" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon
          className="Pug forth icon"
          size={imgSize}
          url={prefix + "Pug" + suffix}
        />
        <HexIcon
          className="HTML second icon"
          size={imgSize}
          url={prefix + "HTML" + suffix}
        />
        <HexIcon
          className="VueJS second icon"
          size={imgSize}
          url={prefix + "VueJS" + suffix}
        />
        <HexIcon
          className="Python first icon"
          size={imgSize}
          url={prefix + "Python" + suffix}
        />
        <HexIcon
          className="React first icon"
          size={imgSize}
          url={prefix + "React" + suffix}
        />
        <HexIcon
          className="Docker first icon"
          size={imgSize}
          url={prefix + "Docker" + suffix}
        />
        <HexIcon
          className="NodeJS second icon"
          size={imgSize}
          url={prefix + "NodeJS" + suffix}
        />
        <HexIcon
          className="Eclipse second icon"
          size={imgSize}
          url={prefix + "Eclipse" + suffix}
        />
        <HexIcon
          className="V second icon"
          size={imgSize}
          url={prefix + "V" + suffix}
        />
        <HexIcon
          className="QT forth icon"
          size={imgSize}
          url={prefix + "QT" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon
          className="SolidJS forth icon"
          size={imgSize}
          url={prefix + "SolidJS" + suffix}
        />
        <HexIcon
          className="Remix third icon"
          size={imgSize}
          url={prefix + "Remix" + suffix}
        />
        <HexIcon
          className="Idea second icon"
          size={imgSize}
          url={prefix + "Idea" + suffix}
        />
        <HexIcon
          className="Gradle second icon"
          size={imgSize}
          url={prefix + "Gradle" + suffix}
        />
        <HexIcon
          className="DevTo first icon"
          size={imgSize}
          url={prefix + "DevTo" + suffix}
        />
        <HexIcon
          className="Java primary icon"
          size={imgSize}
          url={prefix + "Java" + suffix}
        />
        <HexIcon
          className="Spring first icon"
          size={imgSize}
          url={prefix + "Spring" + suffix}
        />
        <HexIcon
          className="MaterialUI second icon"
          size={imgSize}
          url={prefix + "MaterialUI" + suffix}
        />
        <HexIcon
          className="Prometheus third icon"
          size={imgSize}
          url={prefix + "Prometheus" + suffix}
        />
        <HexIcon
          className="Sketchup forth icon"
          size={imgSize}
          url={prefix + "Sketchup" + suffix}
        />
        <HexIcon
          className="Mastodon forth icon"
          size={imgSize}
          url={prefix + "Mastodon" + suffix}
        />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon
          className="IPFS forth icon"
          size={imgSize}
          url={prefix + "IPFS" + suffix}
        />
        <HexIcon
          className="NextJS third icon"
          size={imgSize}
          url={prefix + "NextJS" + suffix}
        />
        <HexIcon
          className="Figma second icon"
          size={imgSize}
          url={prefix + "Figma" + suffix}
        />
        <HexIcon
          className="TypeScript first icon"
          size={imgSize}
          url={prefix + "TypeScript" + suffix}
        />
        <HexIcon
          className="Maven first icon"
          size={imgSize}
          url={prefix + "Maven" + suffix}
        />
        <HexIcon
          className="Github first icon"
          size={imgSize}
          url={prefix + "Github" + suffix}
        />
        <HexIcon
          className="Jenkins first icon"
          size={imgSize}
          url={prefix + "Jenkins" + suffix}
        />
        <HexIcon
          className="Grafana second icon"
          size={imgSize}
          url={prefix + "Grafana" + suffix}
        />
        <HexIcon
          className="JavaScript third icon"
          size={imgSize}
          url={prefix + "JavaScript" + suffix}
        />
        <HexIcon
          className="Illustrator forth icon"
          size={imgSize}
          url={prefix + "Illustrator" + suffix}
        />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon
          className="Haxe forth icon"
          size={imgSize}
          url={prefix + "Haxe" + suffix}
        />
        <HexIcon
          className="Twitter forth icon"
          size={imgSize}
          url={prefix + "Twitter" + suffix}
        />
        <HexIcon
          className="JQuery third icon"
          size={imgSize}
          url={prefix + "JQuery" + suffix}
        />
        <HexIcon
          className="PostgreSQL second icon"
          size={imgSize}
          url={prefix + "PostgreSQL" + suffix}
        />
        <HexIcon
          className="Linux first icon"
          size={imgSize}
          url={prefix + "Linux" + suffix}
        />
        <HexIcon
          className="CPP second icon"
          size={imgSize}
          url={prefix + "CPP" + suffix}
        />
        <HexIcon
          className="Kubernetes first icon"
          size={imgSize}
          url={prefix + "Kubernetes" + suffix}
        />
        <HexIcon
          className="RabbitMQ second icon"
          size={imgSize}
          url={prefix + "RabbitMQ" + suffix}
        />
        <HexIcon
          className="PlanetScale third icon"
          size={imgSize}
          url={prefix + "PlanetScale" + suffix}
        />
        <HexIcon
          className="Lit third icon"
          size={imgSize}
          url={prefix + "Lit" + suffix}
        />
        <HexIcon
          className="Jest forth icon"
          size={imgSize}
          url={prefix + "Jest" + suffix}
        />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon
          className="Instagram forth icon"
          size={imgSize}
          url={prefix + "Instagram" + suffix}
        />
        <HexIcon
          className="MongoDB third icon"
          size={imgSize}
          url={prefix + "MongoDB" + suffix}
        />
        <HexIcon
          className="SVG third icon"
          size={imgSize}
          url={prefix + "SVG" + suffix}
        />
        <HexIcon
          className="Premiere second icon"
          size={imgSize}
          url={prefix + "Premiere" + suffix}
        />
        <HexIcon
          className="VSCode second icon"
          size={imgSize}
          url={prefix + "VSCode" + suffix}
        />
        <HexIcon
          className="Kotlin second icon"
          size={imgSize}
          url={prefix + "Kotlin" + suffix}
        />
        <HexIcon
          className="PHP third icon"
          size={imgSize}
          url={prefix + "PHP" + suffix}
        />
        <HexIcon
          className="GCP third icon"
          size={imgSize}
          url={prefix + "GCP" + suffix}
        />
        <HexIcon
          className="Heroku forth icon"
          size={imgSize}
          url={prefix + "Heroku" + suffix}
        />
        <HexIcon
          className="Zig forth icon"
          size={imgSize}
          url={prefix + "Zig" + suffix}
        />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon
          className="Matlab forth icon"
          size={imgSize}
          url={prefix + "Matlab" + suffix}
        />
        <HexIcon
          className="Ktor forth icon"
          size={imgSize}
          url={prefix + "Ktor" + suffix}
        />
        <HexIcon
          className="LinkedIn forth icon"
          size={imgSize}
          url={prefix + "LinkedIn" + suffix}
        />
        <HexIcon
          className="Postman third icon"
          size={imgSize}
          url={prefix + "Postman" + suffix}
        />
        <HexIcon
          className="R third icon"
          size={imgSize}
          url={prefix + "R" + suffix}
        />
        <HexIcon
          className="Unity third icon"
          size={imgSize}
          url={prefix + "Unity" + suffix}
        />
        <HexIcon
          className="CoffeeScript third icon"
          size={imgSize}
          url={prefix + "CoffeeScript" + suffix}
        />
        <HexIcon
          className="Discord third icon"
          size={imgSize}
          url={prefix + "Discord" + suffix}
        />
        <HexIcon
          className="TailwindCSS forth icon"
          size={imgSize}
          url={prefix + "TailwindCSS" + suffix}
        />
        <HexIcon
          className="StyledComponents forth icon"
          size={imgSize}
          url={prefix + "StyledComponents" + suffix}
        />
        <HexIcon
          className="Wordpress forth icon"
          size={imgSize}
          url={prefix + "Wordpress" + suffix}
        />
      </IconRow>
    </Box>
  );
};

const MobileAnimation = (grandparent: { handleStateFunction: () => void }) => {
  const imgSize = 100;
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const containerTL = gsap.timeline();
    const iconsTL1 = gsap.timeline();
    const iconsTL2 = gsap.timeline();

    containerTL
      .fromTo(
        container.current,
        {
          scale: 2,
        },
        {
          duration: 5,
          scale: 1.2,
          delay: 2,
        }
      )
      .to(".icon", {
        duration: 0.3,
        opacity: 0,
        rotateY: 90,
        stagger: { each: 0.05, from: "center", grid: "auto" },
        onComplete: grandparent.handleStateFunction,
      });

    iconsTL1
      .from(".primary", {
        duration: 1.7,
        delay: 0.3,
        opacity: 0,
      })
      .from(".second", {
        delay: 1,
        duration: 1.3,
        opacity: 0,
        stagger: { each: 0.1, from: "random" },
      });

    iconsTL2
      .from(".first", {
        delay: 2,
        duration: 1.5,
        opacity: 0,
        stagger: { each: 0.1, from: "random" },
      })
      .from(".third", {
        duration: 1,
        opacity: 0,
        stagger: { each: 0.1, from: "random" },
      });
  }, []);

  return (
    <Box
      ref={container}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <IconRow aria-label="first row">
        <HexIcon
          className="Ableton third icon"
          size={imgSize}
          url={prefix + "Ableton" + suffix}
        />
        <HexIcon
          className="Webpack third icon"
          size={imgSize}
          url={prefix + "Webpack" + suffix}
        />
        <HexIcon
          className="Regex third icon"
          size={imgSize}
          url={prefix + "Regex" + suffix}
        />
        <HexIcon
          className="StackOverflow third icon"
          size={imgSize}
          url={prefix + "StackOverflow" + suffix}
        />
        <HexIcon
          className="Flask third icon"
          size={imgSize}
          url={prefix + "Flask" + suffix}
        />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon
          className="Angular third icon"
          size={imgSize}
          url={prefix + "Angular" + suffix}
        />
        <HexIcon
          className="MySQL second icon"
          size={imgSize}
          url={prefix + "MySQL" + suffix}
        />
        <HexIcon
          className="Photoshop third icon"
          size={imgSize}
          url={prefix + "Photoshop" + suffix}
        />
        <HexIcon
          className="Redis second icon"
          size={imgSize}
          url={prefix + "Redis" + suffix}
        />
        <HexIcon
          className="Powershell third icon"
          size={imgSize}
          url={prefix + "Powershell" + suffix}
        />
        <HexIcon
          className="Nginx third icon"
          size={imgSize}
          url={prefix + "Nginx" + suffix}
        />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon
          className="GithubActions second icon"
          size={imgSize}
          url={prefix + "GithubActions" + suffix}
        />
        <HexIcon
          className="TensorFlow second icon"
          size={imgSize}
          url={prefix + "TensorFlow" + suffix}
        />
        <HexIcon
          className="AWS first icon"
          size={imgSize}
          url={prefix + "AWS" + suffix}
        />
        <HexIcon
          className="Markdown second icon"
          size={imgSize}
          url={prefix + "Markdown" + suffix}
        />
        <HexIcon
          className="Cloudflare second icon"
          size={imgSize}
          url={prefix + "Cloudflare" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon
          className="VueJS second icon"
          size={imgSize}
          url={prefix + "VueJS" + suffix}
        />
        <HexIcon
          className="Python first icon"
          size={imgSize}
          url={prefix + "Python" + suffix}
        />
        <HexIcon
          className="React first icon"
          size={imgSize}
          url={prefix + "React" + suffix}
        />
        <HexIcon
          className="Docker first icon"
          size={imgSize}
          url={prefix + "Docker" + suffix}
        />
        <HexIcon
          className="NodeJS second icon"
          size={imgSize}
          url={prefix + "NodeJS" + suffix}
        />
        <HexIcon
          className="Eclipse second icon"
          size={imgSize}
          url={prefix + "Eclipse" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon
          className="Gradle second icon"
          size={imgSize}
          url={prefix + "Gradle" + suffix}
        />
        <HexIcon
          className="DevTo first icon"
          size={imgSize}
          url={prefix + "DevTo" + suffix}
        />
        <HexIcon
          className="Java primary icon"
          size={imgSize}
          url={prefix + "Java" + suffix}
        />
        <HexIcon
          className="Spring first icon"
          size={imgSize}
          url={prefix + "Spring" + suffix}
        />
        <HexIcon
          className="MaterialUI second icon"
          size={imgSize}
          url={prefix + "MaterialUI" + suffix}
        />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon
          className="Figma second icon"
          size={imgSize}
          url={prefix + "Figma" + suffix}
        />
        <HexIcon
          className="TypeScript first icon"
          size={imgSize}
          url={prefix + "TypeScript" + suffix}
        />
        <HexIcon
          className="Maven first icon"
          size={imgSize}
          url={prefix + "Maven" + suffix}
        />
        <HexIcon
          className="Github first icon"
          size={imgSize}
          url={prefix + "Github" + suffix}
        />
        <HexIcon
          className="Jenkins first icon"
          size={imgSize}
          url={prefix + "Jenkins" + suffix}
        />
        <HexIcon
          className="Grafana second icon"
          size={imgSize}
          url={prefix + "Grafana" + suffix}
        />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon
          className="PostgreSQL second icon"
          size={imgSize}
          url={prefix + "PostgreSQL" + suffix}
        />
        <HexIcon
          className="Linux first icon"
          size={imgSize}
          url={prefix + "Linux" + suffix}
        />
        <HexIcon
          className="CPP second icon"
          size={imgSize}
          url={prefix + "CPP" + suffix}
        />
        <HexIcon
          className="Kubernetes first icon"
          size={imgSize}
          url={prefix + "Kubernetes" + suffix}
        />
        <HexIcon
          className="RabbitMQ second icon"
          size={imgSize}
          url={prefix + "RabbitMQ" + suffix}
        />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon
          className="SVG third icon"
          size={imgSize}
          url={prefix + "SVG" + suffix}
        />
        <HexIcon
          className="Premiere second icon"
          size={imgSize}
          url={prefix + "Premiere" + suffix}
        />
        <HexIcon
          className="VSCode second icon"
          size={imgSize}
          url={prefix + "VSCode" + suffix}
        />
        <HexIcon
          className="Kotlin second icon"
          size={imgSize}
          url={prefix + "Kotlin" + suffix}
        />
        <HexIcon
          className="PHP third icon"
          size={imgSize}
          url={prefix + "PHP" + suffix}
        />
        <HexIcon
          className="GCP third icon"
          size={imgSize}
          url={prefix + "GCP" + suffix}
        />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon
          className="Postman third icon"
          size={imgSize}
          url={prefix + "Postman" + suffix}
        />
        <HexIcon
          className="R third icon"
          size={imgSize}
          url={prefix + "R" + suffix}
        />
        <HexIcon
          className="Unity third icon"
          size={imgSize}
          url={prefix + "Unity" + suffix}
        />
        <HexIcon
          className="CoffeeScript third icon"
          size={imgSize}
          url={prefix + "CoffeeScript" + suffix}
        />
        <HexIcon
          className="Discord third icon"
          size={imgSize}
          url={prefix + "Discord" + suffix}
        />
      </IconRow>
    </Box>
  );
};

export default Animation;
