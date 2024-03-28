"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const page = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const [tags, setTags] = useState([]);

  const onSubmit = async (data) => {
    if (
      !data.title &&
      !data.description &&
      !data.repoLink &&
      !data.projectLink &&
      !data.tags
    ) {
      toast("Please fill all fields", { type: "error" });
      return;
    }

    setLoading(true);
    try {
      const tagsArray = data.tags.split(",").map((tag) => tag.trim());
      await axios.post("/api/projects", {
        ...data,
        tags: tagsArray,
        userId: params.userId,
      });
      reset();
      toast("Project added successfully", { type: "success" });
      router.back();
    } catch (error) {
      toast("Something went wrong", { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleTagsInputChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    setTags(tagsArray);
  };

  return (
    <div className="mt-4 animate_in ">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient text-lg font-semibold">Add Project</h1>
        <p
          onClick={() => router.back()}
          className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm cursor-pointer"
        >
          Go Back
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mt-4">
          <Input placeholder="Title" name="title" {...register("title")} />
          <Input
            placeholder="Description"
            name="description"
            {...register("description")}
          />
          <Input
            placeholder="Repository Link"
            name="repoLink"
            {...register("repoLink")}
          />
          <Input
            placeholder="Live Link"
            name="projectLink"
            {...register("projectLink")}
          />
          <Input
            placeholder="Tags"
            name="tags"
            {...register("tags")}
            onChange={handleTagsInputChange}
          />
          <p>
            Note : Please separate tags with comma (,). Example: react, nodejs,
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
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
