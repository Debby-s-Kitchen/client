const Modal = ({ isOpen, onClose, title, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute bg-black/75 inset-0" onClick={onClose} />

      <div
        className={`relative z-10 bg-white rounded-lg shadow-lg   p-6 w-85 xl:w-full max-w-md ${className}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-black">{title}</h1>
          <button className="text-lg bg-gray " onClick={onClose}>
            x
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
