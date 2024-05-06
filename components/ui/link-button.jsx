export function LinkButton({ children, className }) {
  return (
    <button
      className={` bg-secondary text-gray-200 focus:ring-4 focus:ring-gray-500 rounded-lg text-sm px-4 py-1  focus:outline-none  ${className}`}
    >
      {children}
    </button>
  );
}
