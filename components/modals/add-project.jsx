"use client";

import React, { useEffect, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useFormState, useFormStatus } from "react-dom";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitProject } from "@/lib/actions/submit-project";
import { useModal } from "@/providers/modal-provider";

const initialState = {
  error: null,
};

const AddProject = React.memo(() => {
  const [state, formAction] = useFormState(submitProject, initialState);
  const router = useRouter();
  const { isAddProjectOpen, openAddProjectModal, closeAddProjectModal } =
    useModal();

  const toggleLoginModal = (isOpen) => {
    if (isOpen) {
      openAddProjectModal();
    } else {
      closeAddProjectModal();
    }
  };

  useEffect(() => {
    if (state.redirect) {
      router.push(state.redirect);
      toast.success("Project added successfully");
      closeAddProjectModal();
    }
  }, [state.redirect, router]);

  if (!isAddProjectOpen) return null;

  return (
    <Drawer open={isAddProjectOpen} onOpenChange={toggleLoginModal}>
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
});

export default AddProject;

const FormButton = React.memo(() => {
  const { pending } = useFormStatus();
  return <Button loading={pending}>Submit</Button>;
});
