import * as React from "react";
import { Box, Typography } from "@mui/material";
import Error40X_SVG from "features/error/Error40X_SVG";

export default function Error40X() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        mr: { xs: 2, md: 12 },
      }}
    >
      {/* 우주인 컴포넌트 */}
      <Box>
        <Error40X_SVG />
      </Box>
      {/* 에러 메시지 */}
      <Box>
        <Typography variant="h1" sx={{ mt: -2, fontSize: "6rem" }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          UH OH! You're lost.
        </Typography>
        <Typography variant="inherit">
          The page you are looking for does not exist. <br />
          How you got here is a mystery. <br />
          But you can click the navigation below to go anywhere!
        </Typography>
      </Box>
    </Box>
  );
}
