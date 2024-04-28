"use client";

import * as React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import useProjectModal from "@/zustand/useProjectModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitProject } from "@/lib/actions/submit-project";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

const initialState = {
  error: null,
};

export default function AddProject() {
  const { openProject, closeProject, isProject } = useProjectModal();

  const [state, formAction] = useFormState(submitProject, initialState);

  const router = useRouter();

  React.useEffect(() => {
    closeProject();
    if (state?.redirect) {
      router.push(state.redirect);
      toast.success("Project added successfully");
    }
  }, [state.redirect]);

  return (
    <Drawer
      open={isProject}
      onOpenChange={(setIsOpen) => (setIsOpen ? openProject() : closeProject())}
    >
      <DrawerContent>
        <div className="text-center max-w-lg mx-auto">
          <form
            action={formAction}
            className="flex flex-col space-y-4 text-white px-4 py-8 md:px-16 justify-center items-center"
          >
            <label htmlFor="github">
              <span className="text-sm font-medium ">GitHub Repository</span>
              <div className="relative mt-1">
                <Input
                  name="github"
                  id="github"
                  placeholder="https://github.com/nikhilnigamnik/open-dev-hub"
                />
              </div>
              {state?.error && (
                <p className="mt-1 text-sm text-red-600" id="form-error">
                  {state?.error}
                </p>
              )}
            </label>

            <FormButton />
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button text="Submit" loading={pending}>
      Submit
    </Button>
  );
};
