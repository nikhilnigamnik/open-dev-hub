export function LinkButton({ children }) {
  return (
    <button className=" bg-secondary focus:ring-4 focus:ring-gray-500 rounded-lg text-sm px-4 py-1  focus:outline-none ">
      {children}
    </button>
  );
}
