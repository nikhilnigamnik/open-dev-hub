export const metadata = {
  title: "Blog | Open Dev Hub",
  description: "Read the latest blog posts on Open Dev Hub.",
};

export default async function layout({ children }) {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 animate_in">
      {children}
    </main>
  );
}
