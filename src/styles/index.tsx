import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./theme";
import global from "./global";

interface PropType {
  children: React.ReactNode;
}

const ThemeStyle = ({children}: PropType) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeStyle;
