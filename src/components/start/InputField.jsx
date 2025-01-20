const InputField = ({ id, label, type, placeholder }) => {
  return (
    <div className='mb-6'>
      <label htmlFor={id} className='block text-gray-700 font-medium mb-2'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500'
      />
    </div>
  )
}

export default InputField
