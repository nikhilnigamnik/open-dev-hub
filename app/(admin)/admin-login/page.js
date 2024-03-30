"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const page = () => {
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm();

  const submit = async (data) => {
    try {
      await axios.post("/api/admin/admin-login", data);
      toast("Login Successful", { type: "success" });
      reset();
      router.push("/admin/dashboard");
    } catch (error) {
      toast(error?.response?.data?.message, { type: "error" });
    }
  };

  return (
    <Container>
      <form
        className={"flex flex-col gap-4 justify-center items-center h-[60vh]"}
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-gradient text-lg font-bold">Admin Login</h1>
        <Input placeholder="Email" name={"email"} {...register("email")} />
        <Input
          placeholder="Password"
          name="password"
          {...register("password")}
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default page;
