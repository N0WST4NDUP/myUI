import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useColorScheme, Container } from "@mui/material";
import Error40X from "pages/error/Error40X";
const Animation = React.lazy(() => import("pages/enter/Animation"));
import Loading from "shared/components/Loading";
import MainPage from "pages/main/MainPage";
import AboutMe from "pages/aboutMe/AboutMe";

const App = () => {
  const { setMode } = useColorScheme();
  const [hasVisited, setHasVisited] = React.useState(
    () => sessionStorage.getItem("hasVisited") === "true"
  );

  React.useEffect(() => {
    setMode("light");
  }, []);

  function handleVisited() {
    setHasVisited(true);
    sessionStorage.setItem("hasVisited", "true");
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 2,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            hasVisited ? (
              <MainPage />
            ) : (
              <React.Suspense
                fallback={
                  <Loading
                    sx={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100svw",
                      height: "97svh",
                    }}
                  />
                }
              >
                <Animation handleStateFunction={handleVisited} />
              </React.Suspense>
            )
          }
        />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<Error40X />} />
      </Routes>
    </Container>
  );
};

export default App;
