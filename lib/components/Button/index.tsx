import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames"; // Import classNames
import "./styles.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large";
  variant?: "primary" | "dark" | "light";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  children,
  ...restProps
}) => {
  const buttonClasses = classNames(
    `${size === "small" ? "py-2 px-3 rounded-md text-xs w-fit" : "w-full flex items-center justify-between rounded-sm"}`,
    `py-2`,
    `px-${size === "small" ? 3 : 4}`,
    {
      "bg-black text-white": variant === "dark",
      "bg-[#E8EDF1] text-black": variant === "light",
      "bg-[#005EEA] text-white": variant === "primary",
    }
  );

  return (
    <button type="button" className={buttonClasses} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
