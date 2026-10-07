// UI/Input.jsx
const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  
  label,
  className,
  multiline = false, // new: when true, renders <textarea> instead of <input>
  rows = 4,          // new: only matters for textarea, controls default height
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      {multiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`border px-3 py-2 outline-none ${className}`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border px-3 py-2 outline-none ${className}`}
        />
      )}
    </div>
  );
};

export default Input;