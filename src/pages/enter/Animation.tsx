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
const prefix = "/stackIcons/";
const suffix = "-dark.svg";

const IconRow = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: -16,
}));

const Animation = () => {
  const [isMobile] = React.useState(/Mobi/i.test(window.navigator.userAgent));

  return isMobile ? <MobileAnimation /> : <DefaultAnimation />;
};

// GSAP 쓴 컴포넌트 입니다.
gsap.registerPlugin(useGSAP);

const DefaultAnimation = () => {
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
          scale: 1.2,
          delay: 2,
        }
      )
      .to(container.current, {
        duration: 0.5,
        scale: 3,
        opacity: 0,
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
        duration: 1.3,
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
          className="vite forth"
          size={imgSize}
          url={prefix + "vite" + suffix}
        />
        <HexIcon
          className="redux forth"
          size={imgSize}
          url={prefix + "redux" + suffix}
        />
        <HexIcon
          className="ableton third"
          size={imgSize}
          url={prefix + "ableton" + suffix}
        />
        <HexIcon
          className="webpack third"
          size={imgSize}
          url={prefix + "webpack" + suffix}
        />
        <HexIcon
          className="regex third"
          size={imgSize}
          url={prefix + "regex" + suffix}
        />
        <HexIcon
          className="stackoverflow third"
          size={imgSize}
          url={prefix + "stackoverflow" + suffix}
        />
        <HexIcon
          className="flask third"
          size={imgSize}
          url={prefix + "flask" + suffix}
        />
        <HexIcon
          className="processing forth"
          size={imgSize}
          url={prefix + "processing" + suffix}
        />
        <HexIcon
          className="workers forth"
          size={imgSize}
          url={prefix + "workers" + suffix}
        />
        <HexIcon
          className="WebAssembly forth"
          size={imgSize}
          url={prefix + "WebAssembly" + suffix}
        />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon
          className="prisma forth"
          size={imgSize}
          url={prefix + "prisma" + suffix}
        />
        <HexIcon
          className="pytorch forth"
          size={imgSize}
          url={prefix + "pytorch" + suffix}
        />
        <HexIcon
          className="angular third"
          size={imgSize}
          url={prefix + "angular" + suffix}
        />
        <HexIcon
          className="mysql second"
          size={imgSize}
          url={prefix + "mysql" + suffix}
        />
        <HexIcon
          className="photoshop third"
          size={imgSize}
          url={prefix + "photoshop" + suffix}
        />
        <HexIcon
          className="redis second"
          size={imgSize}
          url={prefix + "redis" + suffix}
        />
        <HexIcon
          className="powershell third"
          size={imgSize}
          url={prefix + "powershell" + suffix}
        />
        <HexIcon
          className="nginx third"
          size={imgSize}
          url={prefix + "nginx" + suffix}
        />
        <HexIcon
          className="plan9 forth"
          size={imgSize}
          url={prefix + "plan9" + suffix}
        />
        <HexIcon
          className="replit forth"
          size={imgSize}
          url={prefix + "replit" + suffix}
        />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon
          className="octave forth"
          size={imgSize}
          url={prefix + "octave" + suffix}
        />
        <HexIcon
          className="neovim forth"
          size={imgSize}
          url={prefix + "neovim" + suffix}
        />
        <HexIcon
          className="golang third"
          size={imgSize}
          url={prefix + "golang" + suffix}
        />
        <HexIcon
          className="githubactions second"
          size={imgSize}
          url={prefix + "githubactions" + suffix}
        />
        <HexIcon
          className="tensorflow second"
          size={imgSize}
          url={prefix + "tensorflow" + suffix}
        />
        <HexIcon
          className="aws first"
          size={imgSize}
          url={prefix + "aws" + suffix}
        />
        <HexIcon
          className="markdown second"
          size={imgSize}
          url={prefix + "markdown" + suffix}
        />
        <HexIcon
          className="cloudflare second"
          size={imgSize}
          url={prefix + "cloudflare" + suffix}
        />
        <HexIcon
          className="raspberrypi third"
          size={imgSize}
          url={prefix + "raspberrypi" + suffix}
        />
        <HexIcon
          className="nuxtjs forth"
          size={imgSize}
          url={prefix + "nuxtjs" + suffix}
        />
        <HexIcon
          className="netlify forth"
          size={imgSize}
          url={prefix + "netlify" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon
          className="pug forth"
          size={imgSize}
          url={prefix + "pug" + suffix}
        />
        <HexIcon
          className="html second"
          size={imgSize}
          url={prefix + "html" + suffix}
        />
        <HexIcon
          className="vuejs second"
          size={imgSize}
          url={prefix + "vuejs" + suffix}
        />
        <HexIcon
          className="python first"
          size={imgSize}
          url={prefix + "python" + suffix}
        />
        <HexIcon
          className="react first"
          size={imgSize}
          url={prefix + "react" + suffix}
        />
        <HexIcon
          className="docker first"
          size={imgSize}
          url={prefix + "docker" + suffix}
        />
        <HexIcon
          className="nodejs second"
          size={imgSize}
          url={prefix + "nodejs" + suffix}
        />
        <HexIcon
          className="eclipse second"
          size={imgSize}
          url={prefix + "eclipse" + suffix}
        />
        <HexIcon
          className="v second"
          size={imgSize}
          url={prefix + "v" + suffix}
        />
        <HexIcon
          className="qt forth"
          size={imgSize}
          url={prefix + "qt" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon
          className="solidjs forth"
          size={imgSize}
          url={prefix + "solidjs" + suffix}
        />
        <HexIcon
          className="remix third"
          size={imgSize}
          url={prefix + "remix" + suffix}
        />
        <HexIcon
          className="idea second"
          size={imgSize}
          url={prefix + "idea" + suffix}
        />
        <HexIcon
          className="gradle second"
          size={imgSize}
          url={prefix + "gradle" + suffix}
        />
        <HexIcon
          className="devto first"
          size={imgSize}
          url={prefix + "devto" + suffix}
        />
        <HexIcon
          className="java primary"
          size={imgSize}
          url={prefix + "java" + suffix}
        />
        <HexIcon
          className="spring first"
          size={imgSize}
          url={prefix + "spring" + suffix}
        />
        <HexIcon
          className="materialui second"
          size={imgSize}
          url={prefix + "materialui" + suffix}
        />
        <HexIcon
          className="Prometheus third"
          size={imgSize}
          url={prefix + "Prometheus" + suffix}
        />
        <HexIcon
          className="sketchup forth"
          size={imgSize}
          url={prefix + "sketchup" + suffix}
        />
        <HexIcon
          className="mastodon forth"
          size={imgSize}
          url={prefix + "mastodon" + suffix}
        />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon
          className="ipfs forth"
          size={imgSize}
          url={prefix + "ipfs" + suffix}
        />
        <HexIcon
          className="nextjs third"
          size={imgSize}
          url={prefix + "nextjs" + suffix}
        />
        <HexIcon
          className="figma second"
          size={imgSize}
          url={prefix + "figma" + suffix}
        />
        <HexIcon
          className="typescript first"
          size={imgSize}
          url={prefix + "typescript" + suffix}
        />
        <HexIcon
          className="maven first"
          size={imgSize}
          url={prefix + "maven" + suffix}
        />
        <HexIcon
          className="github first"
          size={imgSize}
          url={prefix + "github" + suffix}
        />
        <HexIcon
          className="jenkins first"
          size={imgSize}
          url={prefix + "jenkins" + suffix}
        />
        <HexIcon
          className="grafana second"
          size={imgSize}
          url={prefix + "grafana" + suffix}
        />
        <HexIcon
          className="javascript third"
          size={imgSize}
          url={prefix + "javascript" + suffix}
        />
        <HexIcon
          className="Illustrator forth"
          size={imgSize}
          url={prefix + "Illustrator" + suffix}
        />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon
          className="haxe forth"
          size={imgSize}
          url={prefix + "haxe" + suffix}
        />
        <HexIcon
          className="twitter forth"
          size={imgSize}
          url={prefix + "twitter" + suffix}
        />
        <HexIcon
          className="jquery third"
          size={imgSize}
          url={prefix + "jquery" + suffix}
        />
        <HexIcon
          className="postgresql second"
          size={imgSize}
          url={prefix + "postgresql" + suffix}
        />
        <HexIcon
          className="linux first"
          size={imgSize}
          url={prefix + "linux" + suffix}
        />
        <HexIcon
          className="cpp second"
          size={imgSize}
          url={prefix + "cpp" + suffix}
        />
        <HexIcon
          className="kubernetes first"
          size={imgSize}
          url={prefix + "kubernetes" + suffix}
        />
        <HexIcon
          className="rabbitmq second"
          size={imgSize}
          url={prefix + "rabbitmq" + suffix}
        />
        <HexIcon
          className="planetscale third"
          size={imgSize}
          url={prefix + "planetscale" + suffix}
        />
        <HexIcon
          className="lit third"
          size={imgSize}
          url={prefix + "lit" + suffix}
        />
        <HexIcon
          className="jest forth"
          size={imgSize}
          url={prefix + "jest" + suffix}
        />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon
          className="instagram forth"
          size={imgSize}
          url={prefix + "instagram" + suffix}
        />
        <HexIcon
          className="mongodb third"
          size={imgSize}
          url={prefix + "mongodb" + suffix}
        />
        <HexIcon
          className="svg third"
          size={imgSize}
          url={prefix + "svg" + suffix}
        />
        <HexIcon
          className="premiere second"
          size={imgSize}
          url={prefix + "premiere" + suffix}
        />
        <HexIcon
          className="vscode second"
          size={imgSize}
          url={prefix + "vscode" + suffix}
        />
        <HexIcon
          className="kotlin second"
          size={imgSize}
          url={prefix + "kotlin" + suffix}
        />
        <HexIcon
          className="php third"
          size={imgSize}
          url={prefix + "php" + suffix}
        />
        <HexIcon
          className="gcp third"
          size={imgSize}
          url={prefix + "gcp" + suffix}
        />
        <HexIcon
          className="Heroku forth"
          size={imgSize}
          url={prefix + "Heroku" + suffix}
        />
        <HexIcon
          className="zig forth"
          size={imgSize}
          url={prefix + "zig" + suffix}
        />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon
          className="matlab forth"
          size={imgSize}
          url={prefix + "matlab" + suffix}
        />
        <HexIcon
          className="ktor forth"
          size={imgSize}
          url={prefix + "ktor" + suffix}
        />
        <HexIcon
          className="linkedin forth"
          size={imgSize}
          url={prefix + "linkedin" + suffix}
        />
        <HexIcon
          className="postman third"
          size={imgSize}
          url={prefix + "postman" + suffix}
        />
        <HexIcon
          className="R third"
          size={imgSize}
          url={prefix + "R" + suffix}
        />
        <HexIcon
          className="unity third"
          size={imgSize}
          url={prefix + "unity" + suffix}
        />
        <HexIcon
          className="coffeescript third"
          size={imgSize}
          url={prefix + "coffeescript" + suffix}
        />
        <HexIcon
          className="discord third"
          size={imgSize}
          url={prefix + "discord" + suffix}
        />
        <HexIcon
          className="tailwindcss forth"
          size={imgSize}
          url={prefix + "tailwindcss" + suffix}
        />
        <HexIcon
          className="styledcomponents forth"
          size={imgSize}
          url={prefix + "styledcomponents" + suffix}
        />
        <HexIcon
          className="wordpress forth"
          size={imgSize}
          url={prefix + "wordpress" + suffix}
        />
      </IconRow>
    </Box>
  );
};

const MobileAnimation = () => {
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
          className="ableton third"
          size={imgSize}
          url={prefix + "ableton" + suffix}
        />
        <HexIcon
          className="webpack third"
          size={imgSize}
          url={prefix + "webpack" + suffix}
        />
        <HexIcon
          className="regex third"
          size={imgSize}
          url={prefix + "regex" + suffix}
        />
        <HexIcon
          className="stackoverflow third"
          size={imgSize}
          url={prefix + "stackoverflow" + suffix}
        />
        <HexIcon
          className="flask third"
          size={imgSize}
          url={prefix + "flask" + suffix}
        />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon
          className="angular third"
          size={imgSize}
          url={prefix + "angular" + suffix}
        />
        <HexIcon
          className="mysql second"
          size={imgSize}
          url={prefix + "mysql" + suffix}
        />
        <HexIcon
          className="photoshop third"
          size={imgSize}
          url={prefix + "photoshop" + suffix}
        />
        <HexIcon
          className="redis second"
          size={imgSize}
          url={prefix + "redis" + suffix}
        />
        <HexIcon
          className="powershell third"
          size={imgSize}
          url={prefix + "powershell" + suffix}
        />
        <HexIcon
          className="nginx third"
          size={imgSize}
          url={prefix + "nginx" + suffix}
        />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon
          className="githubactions second"
          size={imgSize}
          url={prefix + "githubactions" + suffix}
        />
        <HexIcon
          className="tensorflow second"
          size={imgSize}
          url={prefix + "tensorflow" + suffix}
        />
        <HexIcon
          className="aws first"
          size={imgSize}
          url={prefix + "aws" + suffix}
        />
        <HexIcon
          className="markdown second"
          size={imgSize}
          url={prefix + "markdown" + suffix}
        />
        <HexIcon
          className="cloudflare second"
          size={imgSize}
          url={prefix + "cloudflare" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon
          className="vuejs second"
          size={imgSize}
          url={prefix + "vuejs" + suffix}
        />
        <HexIcon
          className="python first"
          size={imgSize}
          url={prefix + "python" + suffix}
        />
        <HexIcon
          className="react first"
          size={imgSize}
          url={prefix + "react" + suffix}
        />
        <HexIcon
          className="docker first"
          size={imgSize}
          url={prefix + "docker" + suffix}
        />
        <HexIcon
          className="nodejs second"
          size={imgSize}
          url={prefix + "nodejs" + suffix}
        />
        <HexIcon
          className="eclipse second"
          size={imgSize}
          url={prefix + "eclipse" + suffix}
        />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon
          className="gradle second"
          size={imgSize}
          url={prefix + "gradle" + suffix}
        />
        <HexIcon
          className="devto first"
          size={imgSize}
          url={prefix + "devto" + suffix}
        />
        <HexIcon
          className="java primary"
          size={imgSize}
          url={prefix + "java" + suffix}
        />
        <HexIcon
          className="spring first"
          size={imgSize}
          url={prefix + "spring" + suffix}
        />
        <HexIcon
          className="materialui second"
          size={imgSize}
          url={prefix + "materialui" + suffix}
        />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon
          className="figma second"
          size={imgSize}
          url={prefix + "figma" + suffix}
        />
        <HexIcon
          className="typescript first"
          size={imgSize}
          url={prefix + "typescript" + suffix}
        />
        <HexIcon
          className="maven first"
          size={imgSize}
          url={prefix + "maven" + suffix}
        />
        <HexIcon
          className="github first"
          size={imgSize}
          url={prefix + "github" + suffix}
        />
        <HexIcon
          className="jenkins first"
          size={imgSize}
          url={prefix + "jenkins" + suffix}
        />
        <HexIcon
          className="grafana second"
          size={imgSize}
          url={prefix + "grafana" + suffix}
        />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon
          className="postgresql second"
          size={imgSize}
          url={prefix + "postgresql" + suffix}
        />
        <HexIcon
          className="linux first"
          size={imgSize}
          url={prefix + "linux" + suffix}
        />
        <HexIcon
          className="cpp second"
          size={imgSize}
          url={prefix + "cpp" + suffix}
        />
        <HexIcon
          className="kubernetes first"
          size={imgSize}
          url={prefix + "kubernetes" + suffix}
        />
        <HexIcon
          className="rabbitmq second"
          size={imgSize}
          url={prefix + "rabbitmq" + suffix}
        />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon
          className="svg third"
          size={imgSize}
          url={prefix + "svg" + suffix}
        />
        <HexIcon
          className="premiere second"
          size={imgSize}
          url={prefix + "premiere" + suffix}
        />
        <HexIcon
          className="vscode second"
          size={imgSize}
          url={prefix + "vscode" + suffix}
        />
        <HexIcon
          className="kotlin second"
          size={imgSize}
          url={prefix + "kotlin" + suffix}
        />
        <HexIcon
          className="php third"
          size={imgSize}
          url={prefix + "php" + suffix}
        />
        <HexIcon
          className="gcp third"
          size={imgSize}
          url={prefix + "gcp" + suffix}
        />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon
          className="postman third"
          size={imgSize}
          url={prefix + "postman" + suffix}
        />
        <HexIcon
          className="R third"
          size={imgSize}
          url={prefix + "R" + suffix}
        />
        <HexIcon
          className="unity third"
          size={imgSize}
          url={prefix + "unity" + suffix}
        />
        <HexIcon
          className="coffeescript third"
          size={imgSize}
          url={prefix + "coffeescript" + suffix}
        />
        <HexIcon
          className="discord third"
          size={imgSize}
          url={prefix + "discord" + suffix}
        />
      </IconRow>
    </Box>
  );
};

export default Animation;
