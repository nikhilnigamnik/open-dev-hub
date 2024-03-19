"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";

const page = ({ params }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    tags: "",
    user: params.userId,
    userId: params.userId,
  });

  const handleSubmitForm = async () => {
    try {
      if (
        !formData.title ||
        !formData.description ||
        !formData.link ||
        !formData.tags
      ) {
        toast("Please fill all the fields");
        return;
      }
      const res = await axios.post("/api/project", formData);
      setFormData({
        title: "",
        description: "",
        link: "",
        tags: "",
      });
      console.log(res.data);
    } catch (error) {}
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-8">
      <h1 className="text-gradient text-lg font-semibold">Add Project</h1>
      <div className="flex flex-col gap-4 mt-8">
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
          name="link"
          value={formData.link}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
        />
        <Button onClick={handleSubmitForm}>Save</Button>
      </div>
    </div>
  );
};

export default page;
