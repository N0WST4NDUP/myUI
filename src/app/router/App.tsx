import * as React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import Error40X from "pages/error/Error40X";
import EnterSite from "pages/enter/EnterSite";
import { useColorScheme } from "@mui/material";
import NavBar from "widgets/nav/NavBar";

const App = () => {
  const { setMode } = useColorScheme();
  const [firstRender, setFirstRender] = React.useState(true);

  React.useEffect(() => {
    setMode("light");

    const timer = setTimeout(() => {
      setFirstRender(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <NavBar display={firstRender ? "none" : "flex"} />
      <Container
        maxWidth="xl"
        sx={{
          my: 2,
        }}
      >
        <Routes>
          <Route path="/" element={<EnterSite />} />
          <Route path="*" element={<Error40X />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
};

export default App;
