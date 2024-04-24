import Link from "next/link";
import NextImage from "./components/NextImage";

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="md:text-4xl text-3xl font-bold my-8 text-gray-200 text-center">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="md:text-3xl text-2xl font-bold my-5 text-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="md:text-2xl text-xl font-bold my-4 text-gray-200">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="md:text-xl text-xl font-bold my-3 text-gray-200">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="md:text-lg text-lg  font-bold my-2 text-gray-200">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-md my-1 text-gray-400">{children}</h6>
    ),
    p: ({ children }) => (
      <p className="text-base my-4 text-gray-400">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-5 my-4 text-gray-400">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 my-4 text-gray-400">{children}</ol>
    ),
    li: ({ children }) => <li className="ml-2 text-gray-400">{children}</li>,
    pre: ({ children }) => (
      <div className="p-4 my-4 rounded-xl text-gray-400 border border-border bg-secondary">
        <pre className="rounded-xl">{children}</pre>
      </div>
    ),
    code: ({ children }) => (
      <code className="text-sm p-1  whitespace-pre-line rounded-lg ">
        {children}
      </code>
    ),
    img: ({ src, alt, width, height }) => (
      <div className="border border-border p-2 bg-secondary rounded-xl my-4">
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-xl"
        />
      </div>
    ),
    a: ({ children, href }) => (
      <Link className="underline my-4" href={href}>
        {children}
      </Link>
    ),
  };
}
