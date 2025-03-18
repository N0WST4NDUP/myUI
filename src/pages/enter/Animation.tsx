import * as React from "react";
import { HexIcon } from "entities/iconFrame/frames";
import { Box, styled } from "@mui/material";

/** 여기는 나중에 리팩토링 해야 할 부분
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

  return isMobile ? <MobileAnimation /> : <Box>Desktop</Box>;
};

const MobileAnimation = () => {
  const imgSize = 100;

  return (
    <Box
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
        <HexIcon size={imgSize} url={prefix + "ableton" + suffix} />
        <HexIcon size={imgSize} url={prefix + "webpack" + suffix} />
        <HexIcon size={imgSize} url={prefix + "regex" + suffix} />
        <HexIcon size={imgSize} url={prefix + "stackoverflow" + suffix} />
        <HexIcon size={imgSize} url={prefix + "flask" + suffix} />
      </IconRow>
      <IconRow aria-label="second row">
        <HexIcon size={imgSize} url={prefix + "angular" + suffix} />
        <HexIcon size={imgSize} url={prefix + "mysql" + suffix} />
        <HexIcon size={imgSize} url={prefix + "photoshop" + suffix} />
        <HexIcon size={imgSize} url={prefix + "redis" + suffix} />
        <HexIcon size={imgSize} url={prefix + "powershell" + suffix} />
        <HexIcon size={imgSize} url={prefix + "nginx" + suffix} />
      </IconRow>
      <IconRow aria-label="third row">
        <HexIcon size={imgSize} url={prefix + "githubactions" + suffix} />
        <HexIcon size={imgSize} url={prefix + "tensorflow" + suffix} />
        <HexIcon size={imgSize} url={prefix + "aws" + suffix} />
        <HexIcon size={imgSize} url={prefix + "markdown" + suffix} />
        <HexIcon size={imgSize} url={prefix + "cloudflare" + suffix} />
      </IconRow>
      <IconRow aria-label="fourth row">
        <HexIcon size={imgSize} url={prefix + "vuejs" + suffix} />
        <HexIcon size={imgSize} url={prefix + "python" + suffix} />
        <HexIcon size={imgSize} url={prefix + "react" + suffix} />
        <HexIcon size={imgSize} url={prefix + "docker" + suffix} />
        <HexIcon size={imgSize} url={prefix + "nodejs" + suffix} />
        <HexIcon size={imgSize} url={prefix + "eclipse" + suffix} />
      </IconRow>
      <IconRow aria-label="fifth row">
        <HexIcon size={imgSize} url={prefix + "gradle" + suffix} />
        <HexIcon size={imgSize} url={prefix + "devto" + suffix} />
        <HexIcon size={imgSize} url={prefix + "java" + suffix} />
        <HexIcon size={imgSize} url={prefix + "spring" + suffix} />
        <HexIcon size={imgSize} url={prefix + "materialui" + suffix} />
      </IconRow>
      <IconRow aria-label="sixth row">
        <HexIcon size={imgSize} url={prefix + "figma" + suffix} />
        <HexIcon size={imgSize} url={prefix + "typescript" + suffix} />
        <HexIcon size={imgSize} url={prefix + "maven" + suffix} />
        <HexIcon size={imgSize} url={prefix + "github" + suffix} />
        <HexIcon size={imgSize} url={prefix + "jenkins" + suffix} />
        <HexIcon size={imgSize} url={prefix + "grafana" + suffix} />
      </IconRow>
      <IconRow aria-label="seventh row">
        <HexIcon size={imgSize} url={prefix + "postgresql" + suffix} />
        <HexIcon size={imgSize} url={prefix + "linux" + suffix} />
        <HexIcon size={imgSize} url={prefix + "cpp" + suffix} />
        <HexIcon size={imgSize} url={prefix + "kubernetes" + suffix} />
        <HexIcon size={imgSize} url={prefix + "rabbitmq" + suffix} />
      </IconRow>
      <IconRow aria-label="eighth row">
        <HexIcon size={imgSize} url={prefix + "svg" + suffix} />
        <HexIcon size={imgSize} url={prefix + "premiere" + suffix} />
        <HexIcon size={imgSize} url={prefix + "vscode" + suffix} />
        <HexIcon size={imgSize} url={prefix + "kotlin" + suffix} />
        <HexIcon size={imgSize} url={prefix + "php" + suffix} />
        <HexIcon size={imgSize} url={prefix + "gcp" + suffix} />
      </IconRow>
      <IconRow aria-label="ninth row">
        <HexIcon size={imgSize} url={prefix + "postman" + suffix} />
        <HexIcon size={imgSize} url={prefix + "R" + suffix} />
        <HexIcon size={imgSize} url={prefix + "unity" + suffix} />
        <HexIcon size={imgSize} url={prefix + "coffeescript" + suffix} />
        <HexIcon size={imgSize} url={prefix + "discord" + suffix} />
      </IconRow>
    </Box>
  );
};

export default Animation;
