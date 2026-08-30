import React from "react";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface StyledButtonProps extends React.ComponentProps<"button"> {
  icon?: LucideIcon;
  iconStyle?: string;
  variant?: "primary" | "secondary" | "icon";
  cartCount?: number;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  iconStyle = "",
  icon: Icon = ArrowUpRight,
  variant = "primary",
  cartCount = 0,
  ...props
}) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isIcon = variant === "icon";
  const hasChildren = !!children;

  return (
    <button
      className={`relative flex items-center font-semibold rounded-full gap-2 w-fit 
        transition-all duration-300 ease-in-out font-secondary cursor-pointer
        ${
          isPrimary
            ? "bg-[#2D2E2C] text-white shadow-lg hover:bg-[#41423F]"
            : isSecondary
              ? "bg-white text-black border border-black shadow-lg hover:bg-gray-100"
              : isIcon
                ? "bg-transparent text-[#2D2E2C] border border-transparent hover:border-[#2D2E2C] hover:bg-gray-100"
                : ""
        }
        ${hasChildren ? "pl-4 pr-2 py-2" : "p-2"}
      `}
      {...props}
    >
      {hasChildren && <span className="text-sm">{children}</span>}

      <span
        className={`relative flex items-center justify-center rounded-full w-6 h-6 ${
          hasChildren ? "ml-2" : ""
        } ${
          isPrimary ? "bg-white" : isSecondary ? "bg-black" : "bg-transparent"
        }`}
      >
        <Icon
          className={`${
            isPrimary
              ? "text-black"
              : isSecondary
                ? "text-white"
                : "text-[#2D2E2C]"
          } ${iconStyle}`}
          size={16}
        />

        {isIcon && (
          <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </span>
    </button>
  );
};

export default StyledButton;
