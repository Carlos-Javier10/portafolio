const Button = ({ text, onClick, type = "button", className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  