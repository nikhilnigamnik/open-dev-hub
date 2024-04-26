const UpdateProject = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <section
      className="fixed inset-0 z-50 overflow-auto backdrop-blur-xl transition-all duration-300 flex"
      onClick={onClose}
    >
      <div
        className="max-w-sm w-full m-auto flex-col flex relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-secondary rounded-xl border-border border mx-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default UpdateProject;
