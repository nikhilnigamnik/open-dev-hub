import Welcome from "@/markdown/welcome.mdx";

const page = ({ params: { blogId } }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Welcome />
    </div>
  );
};

export default page;
