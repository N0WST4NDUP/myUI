import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

interface NavBtnProps {
  to: string;
  text: string;
  size?: "small" | "medium" | "large";
  sx?: object;
  onClick?: () => void;
}

export default function NavBtn({ to, text, size, sx, onClick }: NavBtnProps) {
  return (
    <Button
      variant="text"
      color="info"
      size={size || "small"}
      component={RouterLink}
      to={to}
      sx={sx}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
