import { extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  ...withDefaultColorScheme({
    colorScheme: "teal",
  }),
});
export default theme;
