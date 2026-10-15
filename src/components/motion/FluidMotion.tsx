import { m, useReducedMotion, type HTMLMotionProps } from "motion/react";

type FluidProps = HTMLMotionProps<"div"> & { order?: number };

// One shared rhythm for content entrances.
const settle = { type: "spring", duration: 0.5, bounce: 0.1 } as const;

export function FluidReveal({ children, order = 0, ...props }: FluidProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      {...props}
      data-fluid-reveal
      initial={{ transform: reduceMotion ? "none" : "translateY(20px)" }}
      whileInView={{ transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -120px 0px", amount: 0.1 }}
      transition={{
        transform: { ...settle, delay: order * 0.05 },
      }}
    >
      {children}
    </m.div>
  );
}

export function FluidItem({ children, className = "", order = 0, ...props }: FluidProps) {
  return (
    <FluidReveal order={order} className="fluid-item-reveal">
      <m.div
        {...props}
        className={`fluid-item ${className}`}
      >
        {children}
      </m.div>
    </FluidReveal>
  );
}
