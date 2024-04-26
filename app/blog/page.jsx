import { Badge } from "@/components/ui/badge";
import { blogRedirect } from "@/helper/blog-data";
import Link from "next/link";

const page = () => {
  return (
    <section className=" animate_in  flex flex-col gap-4">
      <h1 className="text-gradient text-lg">Blogs</h1>
      {blogRedirect.map((blog) => (
        <div
          key={blog?.id}
          className="rounded-xl border border-border bg-secondary"
        >
          <div className="px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-gray-400">
                {blog?.author}
              </div>
              <p className="text-sm text-gray-400">{blog?.publishDate}</p>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">
              <Link href={`/blog/${blog?.link}`}>{blog?.title}</Link>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {blog?.content?.slice(0, 400)}...
            </p>
            <div className="flex flex-wrap gap-2">
              {blog?.tags?.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default page;
