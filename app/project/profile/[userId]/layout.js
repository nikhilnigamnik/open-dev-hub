"use client";
import { setLogout } from "@/redux/slices/userSlice";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const session = useSession();
  if (session?.status === "unauthenticated") {
    redirect("/project");
  }

  return (
    <div className="lg:ml-64 text-white px-4">
      <div className="flex items-center gap-4">
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
          className="cursor-pointer border border-border rounded-xl px-4 py-1 bg-secondary"
          onClick={() => {
            dispatch(setLogout());
            signOut("google");
            redirect("/project");
          }}
        >
          Logout
        </p>
      </div>
      {children}
    </div>
  );
};

export default layout;
