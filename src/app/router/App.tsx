import * as React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import Error40X from "pages/error/Error40X";
import EnterSite from "pages/enter/EnterSite";

const App: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 2,
        border: "1px solid red",
      }}
    >
      <Routes>
        <Route path="/" element={<EnterSite />} />
        <Route path="*" element={<Error40X />} />
      </Routes>
    </Container>
  );
};

export default App;
