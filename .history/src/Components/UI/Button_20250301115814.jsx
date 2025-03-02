import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md", 
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = "left"
}) => {
  // Base classes for all buttons
  const baseClasses = "font-body font-medium transition-all duration-200 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center";
  
  // Size variations
  const sizeClasses = {
    xs: "text-xs py-1.5 px-2.5",
    sm: "text-sm py-2 px-3",
    md: "text-sm py-2.5 px-4",
    lg: "text-base py-3 px-5",
    xl: "text-lg py-3.5 px-6"
  };
  
  // Variant styles
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 border border-gray-200 focus:ring-gray-500",
    success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus:ring-green-500",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-500",
    info: "bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800 focus:ring-cyan-500",
    dark: "bg-gray-800 text-white hover:bg-gray-900 active:bg-black focus:ring-gray-700",
    light: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-500",
    link: "bg-transparent text-blue-600 hover:text-blue-800 hover:underline px-1 py-1",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900",
  };
  
  // Disabled styles
  const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";
  
  // Full width
  const widthClass = fullWidth ? "w-full" : "";
  
  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? disabledClasses : ""}
    ${widthClass}
    ${className}
  `;
  
  // Handle icon positioning
  const renderContent = () => {
    if (!icon) return children;
    
    return (
      <>
        {iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary", "secondary", "success", "danger", 
    "warning", "info", "dark", "light", "link", "ghost"
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"])
};

export default Button;
