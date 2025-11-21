// import { useEffect, useState } from "react";
//
// export function useTheme() {
//   const [theme, setTheme] = useState<string>(() => {
//     const local = localStorage.getItem("theme");
//     if (local) return local;
//
//     // default: follow OS
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   });
//
//   useEffect(() => {
//     const html = document.documentElement;
//
//     if (theme === "dark") {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//
//   return { theme, setTheme };
// }
