"use client";

import useToggle from "@repo/hooks/useToggle";
import { Button } from "@repo/ui/button";
import { Button as ShadCNButton } from "@repo/ui/shadcn-button";
import "@repo/ui/styles.css";

export default function Home() {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div>
      <main>
        <Button onClick={() => toggleIsOpen()} variant="red">
          testok
        </Button>

        {isOpen && "isOpen"}
        <ShadCNButton variant="destructive">shadcn-ui button</ShadCNButton>
      </main>
      <footer></footer>
    </div>
  );
}
