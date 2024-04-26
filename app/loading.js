import { Skeleton } from "@/components/ui/skeleton";

export default async function loading() {
  return (
    <section className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
      <Skeleton className="w-full h-40 rounded-xl" />
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton className="w-full h-10 rounded-xl" />
      ))}
    </section>
  );
}
