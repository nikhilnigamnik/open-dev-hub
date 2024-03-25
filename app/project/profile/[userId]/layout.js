"use client";

import { setLogout } from "@/redux/slices/userSlice";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  {
    user ? "" : redirect("/project");
  }

  const isProfileIncomplete = !user.github || !user.twitter || !user.linkedin;

  return (
    <div className="lg:ml-64 text-white px-4 flex flex-col gap-4">
      <div className="flex animate_in  items-center gap-4">
        <Image
          className="rounded-full border-border border p-2 bg-secondary"
          src={user?.image}
          height={100}
          width={100}
          alt="profileImage"
        />
        <div>
          <p className="text-gradient font-semibold text-2xl">{user?.name}</p>
          <p className="text-gradient">{user?.email}</p>
        </div>
        <p
          className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm cursor-pointer"
          onClick={() => {
            dispatch(setLogout());
            signOut("google");
          }}
        >
          Logout
        </p>
      </div>
      {isProfileIncomplete ? (
        <>
          <Link className="w-fit" href={`${user?.id}/updateprofile`}>
            <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm ">
              Update profile
            </p>
          </Link>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-gradient text-lg font-semibold">Social Links</h2>
          <div>
            <p className="text-gradient">Github : {user?.github}</p>
            <p className="text-gradient">Twitter : {user?.twitter}</p>
            <p className="text-gradient">LinkedIn : {user?.linkedin}</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default layout;
