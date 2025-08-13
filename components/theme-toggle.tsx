"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-10 h-10">
        <Sun size={20} />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 transition-all duration-300 hover:scale-110 hover:bg-primary/10 relative overflow-hidden group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative">
        <Sun
          size={20}
          className={`absolute inset-0 transition-all duration-500 text-amber-500 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 transition-all duration-500 text-blue-400 ${
            theme === "dark" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/20 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  )
}
