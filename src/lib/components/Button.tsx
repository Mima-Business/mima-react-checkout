import React from "react";
import styles from "../styles/Button.module.css";
import clsx from "clsx";
import Spinner from "./Spinner";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outlined" | "text";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  variant = "default",
  onClick,
  className,
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  let loadingColor = "white";

  switch (variant) {
    case "outlined":
      loadingColor = "#414651";
      break;
    case "text":
      loadingColor = "#255A5A";
      break;
    case "default":
    default:
      loadingColor = "white";
      break;
  }

  const mergedClassName = clsx(
    styles["button-base"],
    styles[`button-${variant}`],
    {
      [styles["button-full"]]: fullWidth,
      [styles["button-disabled"]]: disabled,
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={mergedClassName}
    >
      {loading ? <Spinner color={loadingColor} size={15} /> : title}
    </button>
  );
};

export default Button;
