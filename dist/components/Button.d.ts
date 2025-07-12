import { default as React } from 'react';
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
declare const Button: React.FC<ButtonProps>;
export default Button;
