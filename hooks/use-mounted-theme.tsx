import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Hook to ensure the `theme` is resolved and accessible on the client.
 * @returns The `theme` and `resolvedTheme`, with a `mounted` flag.
 */
export const useMountedTheme = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { theme, resolvedTheme, mounted };
};
