"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) return toast("Please enter an email");
    try {
      const res = await axios.post("/api/newsletter", { email });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="py-20">
      <Container>
        <div className="text-center flex flex-col gap-3">
          <h1 className={"text-3xl font-semibold text-gradient"}>
            Subscribe to our Newsletter
          </h1>
          <p className={"text-gray-500"}>
            Subscribe to our newsletter to get updates about our latest products
          </p>
        </div>
        <div className="flex justify-between items-center gap-4 mt-3">
          <Input
            value={email}
            name={"email"}
            className={"text-white"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <Button onClick={handleSubscribe}>Subscribe</Button>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
