import React, { FunctionComponent } from "react";
import ButtonSvg from "./assets/svg/ButtonSvg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  href,
  onClick,
  children,
  px,
  white
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = (): JSX.Element => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {/* {ButtonSvg(white)} */}
      <ButtonSvg white={white} />
    </button>
  );

  const renderLink = (): JSX.Element => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
