import React, { HTMLAttributes } from "react";

import { DotIcon, Map } from "lucide-react";

import clsx from "clsx";
import { shouldRenderSection } from "@/src/utils/should-render-section";

interface Props extends HTMLAttributes<HTMLDivElement> {
  category: string[];
  iconSize?: number;
}

const categoryList = ({
  category,
  iconSize = 16,
  className,
  ...props
}: Props) => {
  if (!shouldRenderSection(category)) return;

  const classes = clsx(
    className,
    `text-text-primary flex items-center flex-wrap gap-[3px]`,
  );

  return (
    <div {...props} className={classes}>
      <Map size={iconSize} className="text-text-primary" />
      <span className="ml-1 mr-2 font-medium text-text-primary">category:</span>
      {category.map((el, i) => (
        <React.Fragment key={i}>
          {i > 0 && <DotIcon size={16} />}

          {el}
        </React.Fragment>
      ))}
    </div>
  );
};

export default categoryList;
