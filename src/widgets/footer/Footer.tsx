import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SitemarkIcon from "shared/components/SitemarkIcon";
import Socials from "features/socials/Socials";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://github.com/n0wst4ndup/myUI">
        N0WST4NDUP
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <SitemarkIcon />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                More
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ justifyContent: "left", color: "text.secondary" }}
                children={<Socials sx={{ alignSelf: "center" }} />}
              />
            </Box>
          </Box>

          {/* 프로필 바로가기 */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Profile
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              1
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              2
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              3
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              4
            </Link>
          </Box>
          {/* 프로젝트 바로가기 */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Projects
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              1
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              2
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              3
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              4
            </Link>
          </Box>
          {/* 기술 스택 바로가기 */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Tech stacks
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              1
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              2
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              3
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              4
            </Link>
          </Box>
        </Box>

        {/* 저작권 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Copyright />
          </div>

          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            Powered by MUI v6
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
