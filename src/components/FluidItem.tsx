import type { ComponentProps } from "react";

export function FluidItem({ children, className = "", ...props }: ComponentProps<"div">) {
  return (
    <div className="fluid-item-wrapper">
      <div {...props} className={`fluid-item ${className}`}>
        {children}
      </div>
    </div>
  );
}
