import * as React from "react";
import FABs from "widgets/nav/FABs";
import NavBar from "widgets/nav/NavBar";

const EnterSite = () => {
  const [firstRender, setFirstRender] = React.useState(true);

  React.useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <React.Fragment>
      <NavBar display={firstRender ? "none" : "flex"} />
      <FABs />
    </React.Fragment>
  );
};

export default EnterSite;
