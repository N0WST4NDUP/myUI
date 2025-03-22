import * as React from "react";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MyDoubleArrow = (props: { className?: string; sx?: object }) => {
  const [isMobile] = React.useState(/Mobi/i.test(window.navigator.userAgent));
  const ref = React.useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      duration: 0.5,
      y: -8,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <KeyboardDoubleArrowDown
      className={props.className}
      ref={ref}
      sx={{
        fontSize: "3rem",
        transform: isMobile ? "rotate(180deg)" : "rotate(0deg)",
        ...props.sx,
      }}
    />
  );
};

export default MyDoubleArrow;
