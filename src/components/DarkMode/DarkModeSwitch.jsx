"use client";
import React, { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <HiSun
            onClick={() => setTheme("light")}
            className="cursor-pointer text-xl hover:text-yellow-500 flex items-baseline"
          />
        ) : (
          <HiMoon
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-xl hover:text-yellow-500 flex items-baseline"
          />
        ))}
    </>
  );
}
