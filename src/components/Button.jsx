import React from 'react';

const Button = ({ className, ...props }) => {
  return <button {...props} className={className} />;
};

export default Button;
