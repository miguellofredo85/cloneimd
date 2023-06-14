"use client";

import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class"> {/* https://www.npmjs.com/package/next-themes?activeTab=readme All yourtheme configuration is passed to ThemeProvider.*/}

      <div className="dark:bg-gray-700 dark:text-white transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
