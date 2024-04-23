"use client";

import { GitIcon, LinkedInIcon, TwitterIcon } from "@/components/Icon/Icon";
import NextImage from "@/components/NextImage";
import { Badge } from "@/components/ui/badge";
import { setLogout } from "@/redux/slices/userSlice";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.persistedReducer.user);

  user ? "" : redirect("/project");

  return (
    <div className="lg:ml-64 text-white px-4 flex flex-col gap-4">
      <div className="flex animate_in  items-center gap-4">
        <NextImage
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
            signOut("github");
          }}
        >
          Logout
        </p>
      </div>
      <h2 className="text-gradient text-lg font-semibold">Social Links</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          {user?.linkedin && (
            <Link href={user?.github}>
              <GitIcon />
            </Link>
          )}
          {user?.github && (
            <Link href={user?.linkedin}>
              <LinkedInIcon />
            </Link>
          )}

          {user?.twitter && (
            <Link href={user?.twitter}>
              <TwitterIcon />
            </Link>
          )}

          <Link href={`/project/profile/${user?.id}/updateprofile`}>
            <p className="border border-border bg-secondary rounded-xl px-3 py-1 text-sm cursor-pointer">
              Update Profile
            </p>
          </Link>
        </div>
        <div className="flex gap-2 mt-3">
          {user?.skills.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
};

export default layout;
