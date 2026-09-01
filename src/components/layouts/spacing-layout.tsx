import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SpacingLayout = ({ children, className, ...props }: Props) => {
  const classes = `${className} md:space-y-20 md:mb-20 space-y-15 mb-15`;

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default SpacingLayout;
