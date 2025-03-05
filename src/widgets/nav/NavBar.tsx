import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColorModeIconDropdown from "shared/theme/ColorModeIconDropdown";
import Sitemark from "shared/components/SitemarkIcon";
import NavBtn from "features/nav/NavBtn";
import { Stack } from "@mui/material";
import Socials from "features/socials/Socials";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* 데스크톱 */}
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Sitemark />
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: 1 }}>
              <NavBtn to="/profile" text="Profile" />
              <NavBtn to="/projects" text="Projects" />
              <NavBtn to="/stacks" text="Tech Stacks" />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <ColorModeIconDropdown />
          </Box>

          {/* 모바일 */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Stack
                  spacing={1}
                  useFlexGap
                  sx={{
                    my: 1,
                    color: "text.secondary",
                  }}
                >
                  <NavBtn
                    to="/profile"
                    text="Profile"
                    size="medium"
                    sx={{
                      width: "100%",
                      fontWeight: "bold",
                    }}
                    onClick={toggleDrawer(false)}
                  />
                  <NavBtn
                    to="/projects"
                    text="Project"
                    size="medium"
                    sx={{
                      width: "100%",
                      fontWeight: "bold",
                    }}
                    onClick={toggleDrawer(false)}
                  />
                  <NavBtn
                    to="/stacks"
                    text="Tech Stacks"
                    size="medium"
                    sx={{
                      width: "100%",
                      fontWeight: "bold",
                    }}
                    onClick={toggleDrawer(false)}
                  />
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Stack
                  direction="row"
                  spacing={2}
                  useFlexGap
                  sx={{
                    justifyContent: "right",
                    color: "text.secondary",
                  }}
                  children={
                    <Socials
                      sx={{
                        alignSelf: "center",
                        border: "0px",
                      }}
                    />
                  }
                />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
