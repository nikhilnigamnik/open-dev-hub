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
import { Badge } from "@/components/ui/badge";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [skills, setSkills] = useState([]);

  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, setValue, reset } = useForm();

  const onSubmit = async (data) => {
    if (
      !data.title &&
      !data.twitter &&
      !data.github &&
      !data.linkedin &&
      !data.portfolio &&
      !data.skills
    )
      return toast("Please fill at least one field", { type: "error" });
    const skillsArray = data.skills.split(",").map((skill) => skill.trim());

    try {
      setLoading(true);
      const res = await axios.put(`/api/user/${params.userId}`, {
        ...data,
        skills: skillsArray,
      });
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

  const handleSkillsChange = (e) => {
    const skillArray = e.target.value.split(",").map((skill) => skill.trim());
    setSkills(skillArray);
  };

  setValue("title", user?.title);
  setValue("twitter", user?.twitter);
  setValue("github", user?.github);
  setValue("linkedin", user?.linkedin);
  setValue("portfolio", user?.portfolio);
  setValue("skills", user?.skills);

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
            placeholder="Title"
            name="title"
            id="title"
            {...register("title")}
          />
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
          <Input
            placeholder="Skills"
            name="skills"
            id="skills"
            {...register("skills")}
            onChange={handleSkillsChange}
          />
          <p>
            Note : Please separate skills with comma (,). Example: react, nextjs
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
          <Button loading={loading} type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
