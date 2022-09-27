import "@emotion/react";
import theme from "./theme";

type ThemeType = typeof theme;

declare module "@emotion/react" {
  interface Theme extends ThemeType {}
}
