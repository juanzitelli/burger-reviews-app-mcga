import type { NextPage } from "next";
import { Auth } from "@supabase/ui";

const Home: NextPage = () => {
  const { user } = Auth.useUser();

  return (
    <div>
      <pre>{JSON.stringify(user?.email, null, 2)}</pre>
    </div>
  );
};

export default Home;
