const Button = ({
  onClick,
  children,
  className,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`py-2 px-4 rounded-md font-semibold ${className} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Processing..." : children}
    </button>
  )
}

export default Button
