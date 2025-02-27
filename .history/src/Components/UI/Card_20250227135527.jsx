import PropTypes from 'prop-types';

function Card({ children, className, hover = false }) {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm p-5 md:p-6
        ${hover ? 'hover:shadow-md transition-all duration-300' : ''}
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool
};

export default Card;
