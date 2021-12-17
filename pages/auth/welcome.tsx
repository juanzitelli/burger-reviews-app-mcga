import React from "react";
import { Auth } from "@supabase/ui";
import { supabaseClient } from "../../backend/supabase/client";
interface Props {}

const WelcomeAuthPage = (props: Props) => {
  return (
    <>
      <Auth
        supabaseClient={supabaseClient}
        redirectTo="/reviews"
        providers={["github"]}
      />
    </>
  );
};

export default WelcomeAuthPage;
