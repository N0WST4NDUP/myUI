import * as React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import Error40X from "pages/error/Error40X";
import EnterSite from "pages/enter/EnterSite";
import { useColorScheme } from "@mui/material";
import Animation from "pages/enter/Animation";

const App = () => {
  const { setMode } = useColorScheme();

  React.useEffect(() => {
    setMode("light");
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 2,
      }}
    >
      <Routes>
        <Route path="/" element={<EnterSite />} />
        <Route path="/anime" element={<Animation />} />
        <Route path="*" element={<Error40X />} />
      </Routes>
    </Container>
  );
};

export default App;
