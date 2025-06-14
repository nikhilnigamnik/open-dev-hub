import { useModal } from "@/providers/modal-provider";
import React, { useCallback } from "react";
import { Drawer, DrawerContent } from "../ui/drawer";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const Login = () => {
  const { isLoginOpen, openLoginModal, closeLoginModal } = useModal();

  const toggleLoginModal = (isOpen) => {
    if (isOpen) {
      openLoginModal();
    } else {
      closeLoginModal();
    }
  };

  const handleSignIn = useCallback(
    async (provider) => {
      const result = await signIn(provider);
      if (result?.ok) {
        closeLoginModal();
      }
    },
    [closeLoginModal]
  );

  if (!isLoginOpen) return null;

  return (
    <Drawer open={isLoginOpen} onOpenChange={toggleLoginModal}>
      <DrawerContent>
        <div className="flex flex-col space-y-4 text-white px-4 py-8 md:px-16 text-center">
          <span className="text-sm font-medium">Login to add your project</span>
          <div className="mt-2 flex flex-col justify-center items-center gap-3">
            <Button onClick={() => handleSignIn("google")}>Google</Button>
            <Button onClick={() => handleSignIn("github")}>GitHub</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Login;
