import useStoredValue from "@/stores/localstorage";
import { SubjectType } from "@/types/subject";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { useEffect, useCallback } from "react";

function useLocalStorage(key: string, initialValue: SubjectType[]) {
  const { storedValue, setStoredValue } = useStoredValue();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = getLocalStorage(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.log(error);
      }
    }
  }, [key]);

  const setValue = useCallback((value: SubjectType[]) => {
    try {
      console.log(value);
      setStoredValue(value);
      if (typeof window !== "undefined") {
        setLocalStorage(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { storedValue, setValue };
}

export default useLocalStorage;
