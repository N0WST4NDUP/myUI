import { Box, styled, SvgIcon } from "@mui/material";

type framesProps = {
  url: string;
  size: number;
  className?: string;
  sx?: object;
  ref?: object;
};

const HexFrame = styled("polygon")(({ theme }) => ({
  stroke: theme.palette.primary.main,
  strokeWidth: "5",
}));

const Triangle = styled("polygon")(({ theme }) => ({
  fill: theme.palette.background.default,
}));

export const HexIcon = (props: framesProps) => {
  return (
    <Box className={props.className}>
      <SvgIcon
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: props.size,
          width: props.size,
          ...props.sx,
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <defs>
            <clipPath id="hexClip">
              <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
            </clipPath>
          </defs>
          <image
            href={props.url}
            x="5"
            y="5"
            width="90"
            height="90"
            clipPath="url(#hexClip)"
          />
          <HexFrame
            points="50,3 93,25 93,75 50,97 7,75 7,25"
            fill="url(#imgPattern)"
          />
          <Triangle points="7,25 50,3 50,50" opacity={0.25} />
          <Triangle points="50,3 93,25 50,50" opacity={0.3} />
          <Triangle points="93,25 93,75 50,50" opacity={0.17} />
          <Triangle points="93,75 50,97 50,50" opacity={0.2} />
          <Triangle points="50,97 7,75 50,50" opacity={0.25} />
          <Triangle points="7,75 7,25 50,50" opacity={0.2} />
          <circle cx="50" cy="50" r="20" fill="white" opacity={0.03} />
        </svg>
      </SvgIcon>
    </Box>
  );
};
