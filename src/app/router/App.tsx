import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "shared/theme/AppTheme";
import NavBar from "widgets/nav/NavBar";
import MainContent from "pages/main/MainContent";
import Latest from "pages/latest/Latest";
import Footer from "widgets/footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "pages/main/MainPage";
import Error40X from "pages/error/Error40X";

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <NavBar />

      <Container
        maxWidth="xl"
        sx={{
          my: 12,
          gap: 4,
          border: "1px solid red",
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/error/*" element={<Error40X />} />
          <Route path="/profile/*" element={<MainContent />} />
          <Route path="/projects/*" element={<Latest />} />
        </Routes>
      </Container>

      <Footer />
    </AppTheme>
  );
}
