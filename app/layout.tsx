import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Chatbot } from "./components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EduApp - Online Education Platform",
  description: "A web-based online education platform that emulates an Android application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}

