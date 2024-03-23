"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const page = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    repoLink: "",
    tags: [],
    projectLink: "",
    user: params.userId,
    userId: params.userId,
  });

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      if (
        !formData.title ||
        !formData.description ||
        !formData.repoLink ||
        !formData.tags
      ) {
        toast("Please fill all the fields");
        return;
      }
      const res = await axios.post("/api/project", formData);
      setFormData({
        title: "",
        description: "",
        repoLink: "",
        projectLink: "",
        tags: "",
      });
    } catch (error) {}
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagsInputChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    setFormData({ ...formData, tags: tagsArray });
  };

  return (
    <div className="mt-4 animate_in ">
      <h1 className="text-gradient text-lg font-semibold">Add Project</h1>
      <div className="flex flex-col gap-4 mt-4">
        <Input
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Repository Link"
          name="repoLink"
          value={formData.repoLink}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Live Link"
          name="projectLink"
          value={formData.projectLink}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Tags"
          name="tags"
          value={formData.tags.join(", ")}
          onChange={handleTagsInputChange}
        />
        <p>
          Note : Please separate tags with comma (,). Example: react, nodejs,
        </p>
        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
        <Button loading={loading} onClick={handleSubmitForm}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default page;
