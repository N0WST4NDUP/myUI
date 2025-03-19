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
const suffix = "-Dark.SVG";

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
          scale: 2,
        },
        {
          duration: 5,
          scale: 1.2,
          delay: 2,
        }
      )
      .to(container.current, {
        duration: 0.5,
        scale: 3,
        opacity: 0,
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
          className="StyledComponents forth"
          size={imgSize}
          url={prefix + "StyledComponents" + suffix}
        />
        <HexIcon
          className="Vite forth"
          size={imgSize}
          url={prefix + "Vite" + suffix}
        />
        <HexIcon
          className="Redux forth"
          size={imgSize}
          url={prefix + "Redux" + suffix}
        />
        <HexIcon
          className="Ableton third"
          size={imgSize}
          url={prefix + "Ableton" + suffix}
        />
        <HexIcon
          className="Webpack third"
          size={imgSize}
          url={prefix + "Webpack" + suffix}
        />
        <HexIcon
          className="Regex third"
          size={imgSize}
          url={prefix + "Regex" + suffix}
        />
        <HexIcon
          className="StackOverflow third"
          size={imgSize}
          url={prefix + "StackOverflow" + suffix}
        />
        <HexIcon
          className="Flask third"
          size={imgSize}
          url={prefix + "Flask" + suffix}
        />
        <HexIcon
          className="Processing forth"
          size={imgSize}
          url={prefix + "Processing" + suffix}
        />
        <HexIcon
          className="Workers forth"
          size={imgSize}
          url={prefix + "Workers" + suffix}
        />
        <HexIcon
          className="WebAssembly forth"
          size={imgSize}
          url={prefix + "WebAssembly" + suffix}
        />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon
          className="Prisma forth"
          size={imgSize}
          url={prefix + "Prisma" + suffix}
        />
        <HexIcon
          className="PyTorch forth"
          size={imgSize}
          url={prefix + "PyTorch" + suffix}
        />
        <HexIcon
          className="Angular third"
          size={imgSize}
          url={prefix + "Angular" + suffix}
        />
        <HexIcon
          className="MySQL second"
          size={imgSize}
          url={prefix + "MySQL" + suffix}
        />
        <HexIcon
          className="Photoshop third"
          size={imgSize}
          url={prefix + "Photoshop" + suffix}
        />
        <HexIcon
          className="Redis second"
          size={imgSize}
          url={prefix + "Redis" + suffix}
        />
        <HexIcon
          className="Powershell third"
          size={imgSize}
          url={prefix + "Powershell" + suffix}
        />
        <HexIcon
          className="Nginx third"
          size={imgSize}
          url={prefix + "Nginx" + suffix}
        />
        <HexIcon
          className="Plan9 forth"
          size={imgSize}
          url={prefix + "Plan9" + suffix}
        />
        <HexIcon
          className="Replit forth"
          size={imgSize}
          url={prefix + "Replit" + suffix}
        />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon
          className="Octave forth"
          size={imgSize}
          url={prefix + "Octave" + suffix}
        />
        <HexIcon
          className="NeoVim forth"
          size={imgSize}
          url={prefix + "NeoVim" + suffix}
        />
        <HexIcon
          className="GoLang third"
          size={imgSize}
          url={prefix + "GoLang" + suffix}
        />
        <HexIcon
          className="GithubActions second"
          size={imgSize}
          url={prefix + "GithubActions" + suffix}
        />
        <HexIcon
          className="TensorFlow second"
          size={imgSize}
          url={prefix + "TensorFlow" + suffix}
        />
        <HexIcon
          className="AWS first"
          size={imgSize}
          url={prefix + "AWS" + suffix}
        />
        <HexIcon
          className="Markdown second"
          size={imgSize}
          url={prefix + "Markdown" + suffix}
        />
        <HexIcon
          className="Cloudflare second"
          size={imgSize}
          url={prefix + "Cloudflare" + suffix}
        />
        <HexIcon
          className="RaspberryPi third"
          size={imgSize}
          url={prefix + "RaspberryPi" + suffix}
        />
        <HexIcon
          className="NuxtJS forth"
          size={imgSize}
          url={prefix + "NuxtJS" + suffix}
        />
        <HexIcon
          className="Netlify forth"
          size={imgSize}
          url={prefix + "Netlify" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon
          className="Pug forth"
          size={imgSize}
          url={prefix + "Pug" + suffix}
        />
        <HexIcon
          className="HTML second"
          size={imgSize}
          url={prefix + "HTML" + suffix}
        />
        <HexIcon
          className="VueJS second"
          size={imgSize}
          url={prefix + "VueJS" + suffix}
        />
        <HexIcon
          className="Python first"
          size={imgSize}
          url={prefix + "Python" + suffix}
        />
        <HexIcon
          className="React first"
          size={imgSize}
          url={prefix + "React" + suffix}
        />
        <HexIcon
          className="Docker first"
          size={imgSize}
          url={prefix + "Docker" + suffix}
        />
        <HexIcon
          className="NodeJS second"
          size={imgSize}
          url={prefix + "NodeJS" + suffix}
        />
        <HexIcon
          className="Eclipse second"
          size={imgSize}
          url={prefix + "Eclipse" + suffix}
        />
        <HexIcon
          className="V second"
          size={imgSize}
          url={prefix + "V" + suffix}
        />
        <HexIcon
          className="QT forth"
          size={imgSize}
          url={prefix + "QT" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon
          className="SolidJS forth"
          size={imgSize}
          url={prefix + "SolidJS" + suffix}
        />
        <HexIcon
          className="Remix third"
          size={imgSize}
          url={prefix + "Remix" + suffix}
        />
        <HexIcon
          className="Idea second"
          size={imgSize}
          url={prefix + "Idea" + suffix}
        />
        <HexIcon
          className="Gradle second"
          size={imgSize}
          url={prefix + "Gradle" + suffix}
        />
        <HexIcon
          className="DevTo first"
          size={imgSize}
          url={prefix + "DevTo" + suffix}
        />
        <HexIcon
          className="Java primary"
          size={imgSize}
          url={prefix + "Java" + suffix}
        />
        <HexIcon
          className="Spring first"
          size={imgSize}
          url={prefix + "Spring" + suffix}
        />
        <HexIcon
          className="MaterialUI second"
          size={imgSize}
          url={prefix + "MaterialUI" + suffix}
        />
        <HexIcon
          className="Prometheus third"
          size={imgSize}
          url={prefix + "Prometheus" + suffix}
        />
        <HexIcon
          className="Sketchup forth"
          size={imgSize}
          url={prefix + "Sketchup" + suffix}
        />
        <HexIcon
          className="Mastodon forth"
          size={imgSize}
          url={prefix + "Mastodon" + suffix}
        />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon
          className="IPFS forth"
          size={imgSize}
          url={prefix + "IPFS" + suffix}
        />
        <HexIcon
          className="NextJS third"
          size={imgSize}
          url={prefix + "NextJS" + suffix}
        />
        <HexIcon
          className="Figma second"
          size={imgSize}
          url={prefix + "Figma" + suffix}
        />
        <HexIcon
          className="TypeScript first"
          size={imgSize}
          url={prefix + "TypeScript" + suffix}
        />
        <HexIcon
          className="Maven first"
          size={imgSize}
          url={prefix + "Maven" + suffix}
        />
        <HexIcon
          className="Github first"
          size={imgSize}
          url={prefix + "Github" + suffix}
        />
        <HexIcon
          className="Jenkins first"
          size={imgSize}
          url={prefix + "Jenkins" + suffix}
        />
        <HexIcon
          className="Grafana second"
          size={imgSize}
          url={prefix + "Grafana" + suffix}
        />
        <HexIcon
          className="JavaScript third"
          size={imgSize}
          url={prefix + "JavaScript" + suffix}
        />
        <HexIcon
          className="Illustrator forth"
          size={imgSize}
          url={prefix + "Illustrator" + suffix}
        />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon
          className="Haxe forth"
          size={imgSize}
          url={prefix + "Haxe" + suffix}
        />
        <HexIcon
          className="Twitter forth"
          size={imgSize}
          url={prefix + "Twitter" + suffix}
        />
        <HexIcon
          className="JQuery third"
          size={imgSize}
          url={prefix + "JQuery" + suffix}
        />
        <HexIcon
          className="PostgreSQL second"
          size={imgSize}
          url={prefix + "PostgreSQL" + suffix}
        />
        <HexIcon
          className="Linux first"
          size={imgSize}
          url={prefix + "Linux" + suffix}
        />
        <HexIcon
          className="CPP second"
          size={imgSize}
          url={prefix + "CPP" + suffix}
        />
        <HexIcon
          className="Kubernetes first"
          size={imgSize}
          url={prefix + "Kubernetes" + suffix}
        />
        <HexIcon
          className="RabbitMQ second"
          size={imgSize}
          url={prefix + "RabbitMQ" + suffix}
        />
        <HexIcon
          className="PlanetScale third"
          size={imgSize}
          url={prefix + "PlanetScale" + suffix}
        />
        <HexIcon
          className="Lit third"
          size={imgSize}
          url={prefix + "Lit" + suffix}
        />
        <HexIcon
          className="Jest forth"
          size={imgSize}
          url={prefix + "Jest" + suffix}
        />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon
          className="Instagram forth"
          size={imgSize}
          url={prefix + "Instagram" + suffix}
        />
        <HexIcon
          className="MongoDB third"
          size={imgSize}
          url={prefix + "MongoDB" + suffix}
        />
        <HexIcon
          className="SVG third"
          size={imgSize}
          url={prefix + "SVG" + suffix}
        />
        <HexIcon
          className="Premiere second"
          size={imgSize}
          url={prefix + "Premiere" + suffix}
        />
        <HexIcon
          className="VSCode second"
          size={imgSize}
          url={prefix + "VSCode" + suffix}
        />
        <HexIcon
          className="Kotlin second"
          size={imgSize}
          url={prefix + "Kotlin" + suffix}
        />
        <HexIcon
          className="PHP third"
          size={imgSize}
          url={prefix + "PHP" + suffix}
        />
        <HexIcon
          className="GCP third"
          size={imgSize}
          url={prefix + "GCP" + suffix}
        />
        <HexIcon
          className="Heroku forth"
          size={imgSize}
          url={prefix + "Heroku" + suffix}
        />
        <HexIcon
          className="Zig forth"
          size={imgSize}
          url={prefix + "Zig" + suffix}
        />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon
          className="Matlab forth"
          size={imgSize}
          url={prefix + "Matlab" + suffix}
        />
        <HexIcon
          className="Ktor forth"
          size={imgSize}
          url={prefix + "Ktor" + suffix}
        />
        <HexIcon
          className="LinkedIn forth"
          size={imgSize}
          url={prefix + "LinkedIn" + suffix}
        />
        <HexIcon
          className="Postman third"
          size={imgSize}
          url={prefix + "Postman" + suffix}
        />
        <HexIcon
          className="R third"
          size={imgSize}
          url={prefix + "R" + suffix}
        />
        <HexIcon
          className="Unity third"
          size={imgSize}
          url={prefix + "Unity" + suffix}
        />
        <HexIcon
          className="CoffeeScript third"
          size={imgSize}
          url={prefix + "CoffeeScript" + suffix}
        />
        <HexIcon
          className="Discord third"
          size={imgSize}
          url={prefix + "Discord" + suffix}
        />
        <HexIcon
          className="TailwindCSS forth"
          size={imgSize}
          url={prefix + "TailwindCSS" + suffix}
        />
        <HexIcon
          className="StyledComponents forth"
          size={imgSize}
          url={prefix + "StyledComponents" + suffix}
        />
        <HexIcon
          className="Wordpress forth"
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
          duration: 4.5,
          scale: 1.1,
          delay: 2,
        }
      )
      .to(container.current, {
        duration: 0.5,
        scale: 3,
        opacity: 0,
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
          className="Ableton third"
          size={imgSize}
          url={prefix + "Ableton" + suffix}
        />
        <HexIcon
          className="Webpack third"
          size={imgSize}
          url={prefix + "Webpack" + suffix}
        />
        <HexIcon
          className="Regex third"
          size={imgSize}
          url={prefix + "Regex" + suffix}
        />
        <HexIcon
          className="StackOverflow third"
          size={imgSize}
          url={prefix + "StackOverflow" + suffix}
        />
        <HexIcon
          className="Flask third"
          size={imgSize}
          url={prefix + "Flask" + suffix}
        />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon
          className="Angular third"
          size={imgSize}
          url={prefix + "Angular" + suffix}
        />
        <HexIcon
          className="MySQL second"
          size={imgSize}
          url={prefix + "MySQL" + suffix}
        />
        <HexIcon
          className="Photoshop third"
          size={imgSize}
          url={prefix + "Photoshop" + suffix}
        />
        <HexIcon
          className="Redis second"
          size={imgSize}
          url={prefix + "Redis" + suffix}
        />
        <HexIcon
          className="Powershell third"
          size={imgSize}
          url={prefix + "Powershell" + suffix}
        />
        <HexIcon
          className="Nginx third"
          size={imgSize}
          url={prefix + "Nginx" + suffix}
        />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon
          className="GithubActions second"
          size={imgSize}
          url={prefix + "GithubActions" + suffix}
        />
        <HexIcon
          className="TensorFlow second"
          size={imgSize}
          url={prefix + "TensorFlow" + suffix}
        />
        <HexIcon
          className="AWS first"
          size={imgSize}
          url={prefix + "AWS" + suffix}
        />
        <HexIcon
          className="Markdown second"
          size={imgSize}
          url={prefix + "Markdown" + suffix}
        />
        <HexIcon
          className="Cloudflare second"
          size={imgSize}
          url={prefix + "Cloudflare" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon
          className="VueJS second"
          size={imgSize}
          url={prefix + "VueJS" + suffix}
        />
        <HexIcon
          className="Python first"
          size={imgSize}
          url={prefix + "Python" + suffix}
        />
        <HexIcon
          className="React first"
          size={imgSize}
          url={prefix + "React" + suffix}
        />
        <HexIcon
          className="Docker first"
          size={imgSize}
          url={prefix + "Docker" + suffix}
        />
        <HexIcon
          className="NodeJS second"
          size={imgSize}
          url={prefix + "NodeJS" + suffix}
        />
        <HexIcon
          className="Eclipse second"
          size={imgSize}
          url={prefix + "Eclipse" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon
          className="Gradle second"
          size={imgSize}
          url={prefix + "Gradle" + suffix}
        />
        <HexIcon
          className="DevTo first"
          size={imgSize}
          url={prefix + "DevTo" + suffix}
        />
        <HexIcon
          className="Java primary"
          size={imgSize}
          url={prefix + "Java" + suffix}
        />
        <HexIcon
          className="Spring first"
          size={imgSize}
          url={prefix + "Spring" + suffix}
        />
        <HexIcon
          className="MaterialUI second"
          size={imgSize}
          url={prefix + "MaterialUI" + suffix}
        />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon
          className="Figma second"
          size={imgSize}
          url={prefix + "Figma" + suffix}
        />
        <HexIcon
          className="TypeScript first"
          size={imgSize}
          url={prefix + "TypeScript" + suffix}
        />
        <HexIcon
          className="Maven first"
          size={imgSize}
          url={prefix + "Maven" + suffix}
        />
        <HexIcon
          className="Github first"
          size={imgSize}
          url={prefix + "Github" + suffix}
        />
        <HexIcon
          className="Jenkins first"
          size={imgSize}
          url={prefix + "Jenkins" + suffix}
        />
        <HexIcon
          className="Grafana second"
          size={imgSize}
          url={prefix + "Grafana" + suffix}
        />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon
          className="PostgreSQL second"
          size={imgSize}
          url={prefix + "PostgreSQL" + suffix}
        />
        <HexIcon
          className="Linux first"
          size={imgSize}
          url={prefix + "Linux" + suffix}
        />
        <HexIcon
          className="CPP second"
          size={imgSize}
          url={prefix + "CPP" + suffix}
        />
        <HexIcon
          className="Kubernetes first"
          size={imgSize}
          url={prefix + "Kubernetes" + suffix}
        />
        <HexIcon
          className="RabbitMQ second"
          size={imgSize}
          url={prefix + "RabbitMQ" + suffix}
        />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon
          className="SVG third"
          size={imgSize}
          url={prefix + "SVG" + suffix}
        />
        <HexIcon
          className="Premiere second"
          size={imgSize}
          url={prefix + "Premiere" + suffix}
        />
        <HexIcon
          className="VSCode second"
          size={imgSize}
          url={prefix + "VSCode" + suffix}
        />
        <HexIcon
          className="Kotlin second"
          size={imgSize}
          url={prefix + "Kotlin" + suffix}
        />
        <HexIcon
          className="PHP third"
          size={imgSize}
          url={prefix + "PHP" + suffix}
        />
        <HexIcon
          className="GCP third"
          size={imgSize}
          url={prefix + "GCP" + suffix}
        />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon
          className="Postman third"
          size={imgSize}
          url={prefix + "Postman" + suffix}
        />
        <HexIcon
          className="R third"
          size={imgSize}
          url={prefix + "R" + suffix}
        />
        <HexIcon
          className="Unity third"
          size={imgSize}
          url={prefix + "Unity" + suffix}
        />
        <HexIcon
          className="CoffeeScript third"
          size={imgSize}
          url={prefix + "CoffeeScript" + suffix}
        />
        <HexIcon
          className="Discord third"
          size={imgSize}
          url={prefix + "Discord" + suffix}
        />
      </IconRow>
    </Box>
  );
};

export default Animation;
