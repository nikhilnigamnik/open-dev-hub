"use client";
import { CardSpotlight } from "@/components/CardSpotlight";
import { DeleteIcon, EditIcon } from "@/components/Icon/Icon";
import ProjectLoader from "@/components/Loader/ProjectLoader";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import useFetch from "@/hooks/useFetch";

const Page = ({ params }) => {
  const [editingProject, setEditingProject] = useState(null);
  const [triggerDataFetch, setTriggerDataFetch] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { data, isLoading } = useFetch(
    `/api/user/${params.userId}`,
    triggerDataFetch
  );

  useEffect(() => {
    if (editingProject) {
      reset({
        title: editingProject.title,
        description: editingProject.description,
        repoLink: editingProject.repoLink,
        projectLink: editingProject.projectLink,
        tags: editingProject.tags.join(", "),
      });
    }
  }, [editingProject, reset]);

  const handleUpdate = async (projectId, data) => {
    try {
      const tagsArray = data.tags.split(",").map((tag) => tag.trim());
      await axios.put(`/api/projects/${projectId}`, {
        ...data,
        tags: tagsArray,
      });
      reset();
      setTriggerDataFetch(!triggerDataFetch);
      toast.success("Project Updated Successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      setTriggerDataFetch(!triggerDataFetch);
      toast.success("Project Deleted Successfully");
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
            <CardSpotlight className={"animate_in"} key={el?.id} hoverEffect>
              <div className="flex justify-between items-center">
                <p>{el?.title}</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setEditingProject(el)}
                      variant="outline"
                    >
                      <EditIcon />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Update Project</DialogTitle>
                    </DialogHeader>
                    <form
                      onSubmit={handleSubmit((formData) =>
                        handleUpdate(el?.id, formData)
                      )}
                    >
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
                      <Button loading={isSubmitting} type="submit">
                        Save changes
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <p>{el?.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {el?.tags.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
                <button onClick={() => handleDelete(el?.id)}>
                  <DeleteIcon />
                </button>
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
