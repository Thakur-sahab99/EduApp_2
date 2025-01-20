import { Header } from "./components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, HelpCircle, UserPlus, CreditCard } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to EduApp</h1>
        <Tabs defaultValue="courses" className="w-full">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Introduction to React</CardTitle>
                  <CardDescription>Learn the basics of React</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Progress: 60%</p>
                </CardContent>
                <CardFooter>
                  <Button>Continue Learning</Button>
                </CardFooter>
              </Card>
              {/* Add more course cards here */}
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>React Cheat Sheet</CardTitle>
                  <CardDescription>Quick reference for React concepts</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline">Download</Button>
                </CardFooter>
              </Card>
              {/* Add more document cards here */}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t">
        <div className="container flex justify-between items-center h-14">
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Friends
            </Button>
            <Button variant="ghost" size="sm">
              <CreditCard className="mr-2 h-4 w-4" />
              Subscription
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

