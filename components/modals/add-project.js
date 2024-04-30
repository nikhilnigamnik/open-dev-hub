"use client";

import React, {
  useEffect,
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useFormState, useFormStatus } from "react-dom";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitProject } from "@/lib/actions/submit-project";

const initialState = {
  error: null,
};

const AddProject = React.memo(
  forwardRef((props, ref) => {
    const [state, formAction] = useFormState(submitProject, initialState);
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

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


    useEffect(() => {
      if (state.redirect) {
        router.push(state.redirect);
        toast.success("Project added successfully");
        closeModal();
      }
    }, [state.redirect, router]);

    if (!isVisible) return null;

    return (
      <Drawer
        open={isVisible}
        onOpenChange={(setIsOpen) => setIsVisible(setIsOpen)}
      >
        <DrawerContent>
          <div className="text-center max-w-lg mx-auto">
            <form
              action={formAction}
              className="flex flex-col space-y-4 text-white px-4 py-8 md:px-16 justify-center items-center"
            >
              <label htmlFor="github">
                <span className="text-sm font-medium">Github Repo URL</span>
                <div className="relative mt-1">
                  <Input
                    name="github"
                    id="github"
                    placeholder="https://github.com/your-username/your-repo"
                  />
                </div>
                {state.error && (
                  <p className="mt-1 text-sm text-red-600" id="form-error">
                    {state.error}
                  </p>
                )}
              </label>

              <FormButton />
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    );
  })
);

export default AddProject;

const FormButton = React.memo(() => {
  const { pending } = useFormStatus();
  return <Button loading={pending}>Submit</Button>;
});
