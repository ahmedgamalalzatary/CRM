import PropTypes from 'prop-types';

function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  fullWidth = false,
  animate = false
}) {
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95',
    secondary: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:scale-95',
    icon: 'p-2.5 hover:bg-gray-100 text-gray-600 active:scale-95',
  };

  const baseClasses = `
    rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    transform hover:-translate-y-0.5 hover:shadow-md
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${baseClasses}
        ${fullWidth ? 'w-full' : ''}
        ${animate ? 'animate-pulse-once' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'icon']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  animate: PropTypes.bool
};

export default Button;
