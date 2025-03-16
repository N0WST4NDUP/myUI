import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "app/config/themePrimitive";

// A custom theme for this app
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
    cssVarPrefix: "template",
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
  typography,
  shadows,
  shape,
});

export default theme;
