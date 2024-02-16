import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return isOpen ? (
    createPortal(children, document.getElementById("modal-root") as HTMLElement)
  ) : (
    <></>
  );
}
