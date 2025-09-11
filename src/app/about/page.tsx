import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-10">
      <Link
        href="/"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Charlie Junior"
                  />
                  <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl">Charlie Thao</CardTitle>
              <CardDescription>Software Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">
                      Location
                    </span>
                    <span className="font-medium">Osaka, Japan</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">
                      Experience
                    </span>
                    <span className="font-medium">3+ Years</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                  <Link
                    href="https://github.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="mailto:contact@example.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                Full-stack engineer with 3+years’ experience in TypeScript/React/Next.js, specializing in AI-powered web applications.
                Awarded Best Employee at FPT and multiple hackathon prizes, with proven ability to deliver scalable, production-ready solutions on AWS.
                Experienced in cross-cultural teamwork in Japan.
                </p>
                <p>
                  With over 3 years of experience in the industry, I've worked
                  on a variety of projects ranging from AI-powered platforms to
                  content management systems and etc.
                </p>
                <p>
                  My approach to development focuses on writing clean,
                  maintainable code and creating intuitive user experiences. I'm
                  constantly learning and exploring new technologies to stay at
                  the forefront of AI-powered web app development.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Fullstack Developer
                  </h3>
                  <p className="text-muted-foreground">
                    FPT Software Company. • 2023 - Present
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>
                      Led the development of the company's flagship product
                      using React and TypeScript
                    </li>
                    <li>
                      Implemented CI/CD pipelines to streamline the deployment
                      process
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Fullstach Developer</h3>
                  <p className="text-muted-foreground">
                    Mockdata • 2019 - 2022
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>
                      Developed responsive web applications for various clients
                    </li>
                    <li>
                      Collaborated with designers to implement pixel-perfect UIs
                    </li>
                    <li>
                      Optimized application performance and improved load times
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Master of Computer Science
                  </h3>
                  <p className="text-muted-foreground">
                    Mock University • 2017 - 2019
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Specialized in Human-Computer Interaction and Software
                    Engineering
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-muted-foreground">
                    University of California, Berkeley • 2013 - 2017
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Graduated with honors. Participated in various hackathons
                    and coding competitions.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
