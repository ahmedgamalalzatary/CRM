import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth,
  className = '',
  ...props 
}) {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
    light: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-200',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
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
