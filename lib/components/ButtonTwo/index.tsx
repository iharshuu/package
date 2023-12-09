import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large";
  variant?: "primary" | "dark" | "light";
  children?: React.ReactNode;
}

const ButtonTwo: React.FC<ButtonProps> = ({
  size,
  variant,
  children,
  ...restProps
}) => {
  const buttonStyles: React.CSSProperties = {
    padding: size === "small" ? "8px 12px" : "12px 16px",
    borderRadius: size === "small" ? "4px" : "8px",
    width: size === "small" ? "fit-content" : "100%",
    fontSize: size === "small" ? "0.75rem" : "1rem",
    backgroundColor:
      variant === "dark"
        ? "black"
        : variant === "light"
        ? "#E8EDF1"
        : "#005EEA",
    color: variant === "dark" ? "white" : "black",
  };

  return (
    <button type="button" style={buttonStyles} {...restProps}>
      {children}
    </button>
  );
};

export default ButtonTwo;
