import * as React from "react";
import Enter from "pages/enter/Enter";
const AboutMe = React.lazy(() => import("pages/aboutMe/AboutMe"));

const MainPage = () => {
  const [canScroll, setCanScroll] = React.useState(false);

  function setScroll() {
    setCanScroll(true);
  }

  return (
    <>
      <Enter handleStateFunction={setScroll} />
      <React.Suspense children={canScroll ? <AboutMe sx={{}} /> : null} />
    </>
  );
};

export default MainPage;
