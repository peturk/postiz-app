// Film stub: the page theme is set by the film timeline, not by a user toggle.
export function useTheme(): { theme: "light" | "dark" } { return { theme: (globalThis as any).__ykTheme === "dark" ? "dark" : "light" }; }
