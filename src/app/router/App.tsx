import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "shared/theme/AppTheme";
import NavBar from "widgets/nav/NavBar";
import MainContent from "pages/main/MainContent";
import Latest from "pages/latest/Latest";
import Footer from "widgets/footer/Footer";
import { Route, Routes } from "react-router-dom";

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <NavBar />

      <Container
        maxWidth="lg"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 16,
          gap: 4,
          border: "1px solid red",
        }}
      >
        <Routes>
          <Route path="/profile" element={<MainContent />} />
          <Route path="/projects" element={<Latest />} />
        </Routes>
      </Container>

      <Footer />
    </AppTheme>
  );
}
