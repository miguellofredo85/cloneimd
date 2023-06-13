"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export default function DarkModeSwitch(props) {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  
  const darkModeSwitcher = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && (darkModeSwitcher === "dark" ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("light") } />
      ) : (
        <BsFillMoonFill className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("dark")} />
      ))}
      
    </>
  );
}
