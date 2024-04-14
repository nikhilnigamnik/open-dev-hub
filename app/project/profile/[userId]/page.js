"use client";
import { CardSpotlight } from "@/components/CardSpotlight";
import { EditIcon } from "@/components/Icon/Icon";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import { Badge } from "@/components/ui/badge";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

const Page = ({ params }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { data, isLoading } = useFetch(`/api/user/${params.userId}`);

  const handleUpdate = async (data) => {
    toast.loading("Updating Project");
    try {
      const tagsArray = data.tags.split(",").map((tag) => tag.trim());
      await axios.put(`/api/projects/${params.userId}`, {
        ...data,
        tags: tagsArray,
      });
      reset();
      toast.success("Project Updated Successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient text-lg font-semibold">Projects</h1>
        <Link href={`${params?.userId}/newproject`}>
          <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm">
            Add Project
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {isLoading ? (
          <ProjectLoader />
        ) : (
          data?.project.map((el) => (
            <CardSpotlight className={"animate_in "} key={el?._id} hoverEffect>
              <div className="flex justify-between items-center">
                <p>{el?.title}</p>
                <form onSubmit={handleSubmit(handleUpdate)}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button variant="outline">
                        <EditIcon />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Update Project</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <Input
                          placeholder="Title"
                          name="title"
                          defaultValue={el?.title}
                          {...register("title")}
                        />
                        <Input
                          placeholder="Description"
                          name="description"
                          defaultValue={el?.description}
                          {...register("description")}
                        />
                        <Input
                          placeholder="Repository Link"
                          name="repoLink"
                          defaultValue={el?.repoLink}
                          {...register("repoLink")}
                        />
                        <Input
                          placeholder="Project Link"
                          name="projectLink"
                          defaultValue={el?.projectLink}
                          {...register("projectLink")}
                        />

                        <Input
                          placeholder="Tags"
                          name="tags"
                          defaultValue={el?.tags.join(", ")}
                          {...register("tags", {
                            required: "Tags is Required",
                          })}
                        />
                      </div>

                      <Button
                        onClick={() => toast.loading("Loading.........")}
                        loading={isSubmitting}
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </DialogContent>
                  </Dialog>
                </form>
              </div>
              <p>{el?.description}</p>
              <div className="flex gap-3">
                {el?.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </CardSpotlight>
          ))
        )}
        {data?.project.length === 0 && (
          <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm ">
            No Projects Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
