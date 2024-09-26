"use client";

import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "",
  variants: {
    variant: {
      red: "bg-red-500 text-salt-500",
      blue: "bg-blue-500 text-salt-500",
    },
  },
});

export function Button({
  children,
  variant,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof button>) {
  return (
    <button className={button({ variant })} {...props}>
      {children}
    </button>
  );
}
