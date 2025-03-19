import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useColorScheme, Container } from "@mui/material";
import Error40X from "pages/error/Error40X";
const Animation = React.lazy(() => import("pages/enter/Animation"));
import MainPage from "pages/enter/MainPage";
import Loading from "shared/components/Loading";

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
                      width: "100vw",
                      height: "97vh",
                    }}
                  />
                }
              >
                <Animation handleStateFunction={handleVisited} />
              </React.Suspense>
            )
          }
        />
        <Route path="*" element={<Error40X />} />
      </Routes>
    </Container>
  );
};

export default App;
