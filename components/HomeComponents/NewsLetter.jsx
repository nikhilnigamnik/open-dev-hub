"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const res = await axios.post("/api/newsletter", { email });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <h1 className={"text-3xl font-semibold text-gradient"}>
            Subscribe to our Newsletter
          </h1>
          <p className={"text-gray-500"}>
            Subscribe to our newsletter to get updates about our latest products
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
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
