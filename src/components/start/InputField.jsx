const InputField = ({
  id,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-black font-medium mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
        required
      />
    </div>
  )
}

export default InputField
