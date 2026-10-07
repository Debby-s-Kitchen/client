const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  className = "",
  name,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`border rounded-md px-3 py-2 outline-none bg-white ${className}`}
      >
        
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;