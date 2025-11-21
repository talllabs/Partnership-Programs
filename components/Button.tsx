import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 font-sans text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-sigmund-dark text-white hover:bg-gray-800 shadow-lg",
    outline: "bg-transparent border-2 border-sigmund-dark text-sigmund-dark hover:bg-sigmund-dark hover:text-white",
    dark: "bg-sigmund-dark text-sigmund-yellow hover:bg-gray-900 shadow-lg", // Inverted for yellow backgrounds
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};