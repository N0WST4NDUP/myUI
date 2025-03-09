import * as React from "react";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledNode = styled(Box)(({ theme }) => ({
  width: "32px",
  height: "32px",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  borderRadius: "50%",
  backgroundSize: "cover",
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "1px",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

export function TechNode(props: { sx?: object }): React.ReactElement {
  return <StyledNode sx={props.sx} />;
}

export function TechCard(): React.ReactElement {
  return <StyledCard></StyledCard>;
}
