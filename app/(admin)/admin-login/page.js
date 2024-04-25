"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/admin/admin-login", data);
      toast("Login Successful", { type: "success" });
      reset();

      router.push("/admin/dashboard");
    } catch (error) {
      toast(error?.response?.data?.message, { type: "error" });
    } finally {
      setLoading(false);
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
        <Button loading={loading} type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default page;
