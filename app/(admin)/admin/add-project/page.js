"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const page = () => {
  const { register, handleSubmit, reset } = useForm();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTagsInputChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    setTags(tagsArray);
  };

  const submit = async (data) => {
    setLoading(true);
    try {
      const tagsArray = data.tags.split(",").map((tag) => tag.trim());
      data.tags = tagsArray;
      await axios.post("/api/admin/org-project", data);
      toast.success("Project added successfully");
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:ml-64 p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-gradient">Add Project</h1>
        <Button onClick={() => router.back()}>Back</Button>
      </div>

      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <Input placeholder={"Title"} {...register("title")} name={"title"} />
        <Input
          placeholder={"Description"}
          {...register("description")}
          name={"description"}
        />
        <Input
          placeholder={"Repo Link"}
          {...register("repoLink")}
          name={"repoLink"}
        />
        <Input
          placeholder={"Project Link"}
          {...register("projectLink")}
          name={"projectLink"}
        />
        <Input
          placeholder="Tags"
          name="tags"
          {...register("tags")}
          onChange={handleTagsInputChange}
        />
        <p className="text-gradient">
          Note : Please separate tags with comma (,). Example: react, nodejs,
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
        <Button loading={loading} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default page;
