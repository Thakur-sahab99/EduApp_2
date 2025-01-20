"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Search, Upload, Download } from "lucide-react"

export function Header() {
  const { setTheme, theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary">EduApp</span>
          </Link>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("Search:", searchQuery)
              }}
            >
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" onClick={() => console.log("Upload")}>
              <Upload className="h-5 w-5" />
              <span className="sr-only">Upload document</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => console.log("Download")}>
              <Download className="h-5 w-5" />
              <span className="sr-only">Download document</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

