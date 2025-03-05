import { GitHub, Instagram } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

interface SocialsProps {
  sx: object;
}

export default function Socials({ sx }: SocialsProps) {
  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        size="small"
        href="https://github.com/n0wst4ndup"
        aria-label="GitHub"
        sx={sx}
      >
        <GitHub />
      </IconButton>

      <IconButton
        color="inherit"
        size="small"
        href="https://instagram.com/now_standup"
        aria-label="Instagram"
        sx={sx}
      >
        <Instagram />
      </IconButton>
    </React.Fragment>
  );
}
