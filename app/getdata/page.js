"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitProject } from "@/lib/actions/submit-project";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

const initialState = {
  error: null,
};

export default function page() {
  const [state, formAction] = useFormState(submitProject, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.redirect) {
      router.push(state.redirect);
      toast.success("Project added successfully");
    }
  }, [state?.redirect]);

  return (
    <form
      action={formAction}
      className="flex flex-col space-y-4 text-white px-4 py-8 md:px-16"
    >
      <label htmlFor="github">
        <span className="text-sm font-medium ">GitHub Repository</span>
        <div className="relative mt-1">
          <Input
            name="github"
            id="github"
            placeholder="https://github.com/dubinc/dub"
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
