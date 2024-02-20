"use client";

import useLoading from "@/stores/loading";
import Portal from "./Portal";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingModal() {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <Portal isOpen={isLoading}>
          <LoadingSpinner />
        </Portal>
      )}
    </>
  );
}
