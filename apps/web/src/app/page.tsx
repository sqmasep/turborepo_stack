"use client";

import useToggle from "@repo/hooks/useToggle";
import { Button } from "@repo/ui/button";
import { Button as ShadCNButton } from "@repo/ui/shadcn-button";
import "@repo/ui/styles.css";
import { Switch } from "@repo/ui/switch";
import { emailSchema } from "@repo/validation/email-schema";
import * as v from "valibot";

export default function Home() {
  const [isOpen, toggleIsOpen] = useToggle(false);

  v.parse(emailSchema, "test@gmail.com");

  return (
    <div>
      <Switch>e</Switch>
      <Button onClick={() => toggleIsOpen()} variant="red">
        testok
      </Button>

      {isOpen && "isOpen"}
      <ShadCNButton variant="destructive">shadcn-ui button</ShadCNButton>
    </div>
  );
}
