"use client";

import { GitIcon, LinkedInIcon, TwitterIcon } from "@/components/Icon/Icon";
import { setLogout } from "@/redux/slices/userSlice";
import { signOut } from "next-auth/react";
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
        <div className="md:flex-row flex-col flex gap-1">
          <Link href={`/project/profile/${user?.id}/updateprofile`}>
            <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm cursor-pointer">
              Update Profile
            </p>
          </Link>
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
      </div>
      <h2 className="text-gradient text-lg font-semibold">Social Links</h2>
      {isProfileIncomplete ? (
        <>
          <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm ">
            No Social Links Found.
          </p>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <Link href={user?.github}>
              <GitIcon />
            </Link>
            <Link href={user?.linkedin}>
              <LinkedInIcon />
            </Link>
            <Link href={user?.twitter}>
              <TwitterIcon />
            </Link>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default layout;
