"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "@/redux/slices/userSlice";
import { useForm } from "react-hook-form";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, setValue, reset } = useForm();

  const onSubmit = async (data) => {
    if (!data.twitter && !data.github && !data.linkedin && !data.portfolio)
      return toast("Please fill at least one field", { type: "error" });
    try {
      setLoading(true);
      const res = await axios.put(`/api/user/${params.userId}`, data);
      dispatch(setLoginData(res.data));
      reset();
      toast(" Profile Updated ", { type: "success" });
      router.back();
    } catch (error) {
      toast("Something went wrong", { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  setValue("twitter", user?.twitter);
  setValue("github", user?.github);
  setValue("linkedin", user?.linkedin);
  setValue("portfolio", user?.portfolio);

  return (
    <div className="mt-4 animate_in ">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient text-lg font-semibold">Update Profile</h1>
        <p
          onClick={() => router.back()}
          className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm cursor-pointer"
        >
          Go Back
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            placeholder="Twitter"
            name="twitter"
            id="twitter"
            {...register("twitter")}
          />
          <Input
            placeholder="Github"
            name="github"
            id="github"
            {...register("github")}
          />
          <Input
            placeholder="Linkedin"
            name="linkedin"
            id="linkedin"
            {...register("linkedin")}
          />
          <Input
            placeholder="Portfolio"
            name="portfolio"
            id="portfolio"
            {...register("portfolio")}
          />
          <Button loading={loading} type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
