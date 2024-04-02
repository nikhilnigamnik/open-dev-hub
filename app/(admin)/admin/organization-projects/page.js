"use client";

import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import { Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const page = () => {
  const [refreshData, setRefreshData] = useState(false);
  const { data, isLoading } = useFetch("/api/user", refreshData);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/user/${id}`);
      toast("Deleted", { type: "success" });
      setRefreshData(!refreshData);
    } catch (error) {
      toast("Failed to delete", { type: "error" });
    }
  };
  return (
    <div className="lg:ml-64 p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-gradient">Projects</h1>
        <Button size={"sm"}>
          <Link href="/admin/add-project">Add Project</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((user, i) => (
              <TableRow key={user.id}>
                <TableCell>{i + 1}</TableCell>

                <TableCell>
                  <NextImage
                    src={user.image}
                    alt={user.name}
                    className={"rounded-full"}
                    width={40}
                    height={40}
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Trash
                    className="cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
