import { extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  ...withDefaultColorScheme({
    colorScheme: "teal",
  }),
});

export default theme;
