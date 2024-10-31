"use client";

import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "",
  variants: {
    variant: {
      // TODO see if i keep this prefix
      // red: "ui-bg-red-300 p-4 ui-text-salt-500",
      red: "ui-bg-red-300 ui-p-4 ui-text-blue-500",
      blue: "ui-bg-blue-500 ui-text-salt-500",
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
