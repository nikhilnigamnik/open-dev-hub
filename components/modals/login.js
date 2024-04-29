"use client";

import * as React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import useLoginModal from "@/zustand/useLoginModal";
import { Button } from "../ui/button";
import { signIn, useSession } from "next-auth/react";
import useUserStore from "@/zustand/useUserStore";

const Login = React.memo(() => {
  const { openLogin, closeLogin, isLogin } = useLoginModal();
  const { setUser } = useUserStore();
  const session = useSession();

  console.log("login rendered");

  React.useEffect(() => {
    setUser(session);
    if (session.status === "authenticated") {
      closeLogin();
    }
  }, [session.status]);
  return (
    <Drawer
      open={isLogin}
      onOpenChange={(setIsOpen) => (setIsOpen ? openLogin() : closeLogin())}
    >
      <DrawerContent>
        <div className="flex flex-col space-y-4 text-white px-4 py-8 md:px-16 text-center">
          <span className="text-sm font-medium ">
            Login to add your project
          </span>
          <div className="mt-2 flex flex-col justify-center items-center gap-3">
            <Button onClick={() => signIn("google")}>Google</Button>
            <Button onClick={() => signIn("github")}>GitHub</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
});

export default Login;
