"use client";

import Container from "@/components/ui/Container";
import { setLoginData, setlogin } from "@/redux/slices/userSlice";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const session = useSession();
  dispatch(setLoginData(session?.data?.user));
  if (session.status === "authenticated") {
    dispatch(setlogin());
    redirect("/project");
  }
  return (
    <Container className={"py-20 h-[60vh] flex justify-center items-center flex-col"}>
      <section className="flex flex-col gap-4 text-center">
        <h1 className="text-xl  font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          OpenDevHub
        </h1>
        <p className="text-gradient">Or sign in with social account</p>
        <button
          onClick={() => signIn("google")}
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-full border-border  border text-blue-200 bg-secondary px-3.5 py-2.5 font-semibold  "
        >
          <span className="mr-2 inline-block">
            <svg
              className="h-6 w-6 text-rose-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </span>
          Sign in with Google
        </button>
        <button
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-full border-border  border text-blue-200 bg-secondary px-3.5 py-2.5 font-semibold  "
        >
          <span className="mr-2 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
          Sign in with Github
        </button>
      </section>
    </Container>
  );
};

export default page;
