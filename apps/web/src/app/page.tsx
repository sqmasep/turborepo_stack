"use client";

import useToggle from "@repo/hooks/useToggle";
import { Button } from "@repo/ui/button";
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
      </main>
      <footer></footer>
    </div>
  );
}
