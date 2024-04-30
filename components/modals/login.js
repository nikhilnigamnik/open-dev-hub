import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Drawer, DrawerContent } from "../ui/drawer";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const LoginModal = React.memo(
  forwardRef((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const openModal = useCallback(() => setIsVisible(true), []);
    const closeModal = useCallback(() => setIsVisible(false), []);

    useImperativeHandle(
      ref,
      () => ({
        open: openModal,
        close: closeModal,
      }),
      [openModal, closeModal]
    );

    const handleSignIn = useCallback(
      async (provider) => {
        const result = await signIn(provider);
        if (result?.ok) {
          closeModal();
        }
      },
      [closeModal]
    );

    if (!isVisible) return null;

    return (
      <Drawer
        open={isVisible}
        onOpenChange={(setIsOpen) => setIsVisible(setIsOpen)}
      >
        <DrawerContent>
          <div className="flex flex-col space-y-4 text-white px-4 py-8 md:px-16 text-center">
            <span className="text-sm font-medium ">
              Login to add your project
            </span>
            <div className="mt-2 flex flex-col justify-center items-center gap-3">
              <Button onClick={() => handleSignIn("google")}>Google</Button>
              <Button onClick={() => handleSignIn("github")}>GitHub</Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    );
  })
);

export default LoginModal;
