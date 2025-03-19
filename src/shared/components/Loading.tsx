import * as React from "react";
import { Box, SvgIcon, useTheme } from "@mui/material";

const Loading = (props: { sx?: object }) => {
  const theme = useTheme();
  const stroke = theme.palette.text.primary;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <SvgIcon
        sx={{
          width: "100%",
          height: 100,
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 200 100"
        >
          <circle
            className="line lee circle"
            cx="52"
            cy="50"
            r="25"
            stroke={stroke}
            strokeWidth={5}
            fill="transparent"
          />
          <polygon
            className="line jae triangle"
            points="79,25 104,70 129,25"
            stroke={stroke}
            strokeWidth={5}
            fill="transparent"
          />
          <polygon
            className="line seo triangle"
            points="119,72 144,27 169,72"
            stroke={stroke}
            strokeWidth={5}
            fill="transparent"
          />
        </svg>
      </SvgIcon>
    </Box>
  );
};

export default Loading;
