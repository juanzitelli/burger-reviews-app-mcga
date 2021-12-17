import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import React from "react";
import { supabaseClient } from "../../../backend/supabase/client";
import { NavbarLink } from "./Navbar";
interface Props {}

export const UserAvatar = (props: Props) => {
  const router = useRouter();
  const { user } = Auth.useUser();

  if (!user) return <NavbarLink href="/auth/welcome">Sign in</NavbarLink>;

  return (
    <Menu>
      <MenuButton rightIcon={<ChevronDownIcon />}>
        <Flex wrap="wrap" alignItems="center">
          <Avatar name={user?.email} mr={[0, "1rem"]} />
          <Text display={["none", "block"]}>{user?.email}</Text>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={async () => {
            await supabaseClient.auth.signOut();
            router.push("/auth/welcome");
          }}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
