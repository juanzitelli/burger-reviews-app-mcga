import { ChakraProvider } from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import { AppProps } from "next/app";
import Head from "next/head";
import { supabaseClient } from "../backend/supabase/client";
import { DefaultLayout } from "../components/modules/ui/layouts/DefaultLayout";
import theme from "../themes/default";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth.UserContextProvider supabaseClient={supabaseClient}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>{pageProps.title || "Burger Reviews"}</title>
          <meta name="description" content="Burger reviews app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </Auth.UserContextProvider>
  );
};

export default App;
