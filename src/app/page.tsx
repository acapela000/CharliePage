import Link from "next/link";
import {
  Building2,
  Github,
  Home,
  Linkedin,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import AtroposCard from "@/components/atropos-card";
// import ProjectGrid from "@/components/project-grid";
import GitHubActivity from "@/components/github-activity";
// import ProgrammingLanguages from "@/components/programming-languages";
// import Timeline from "@/components/timeline";
// import SpokenLanguages from "@/components/spoken-languages";
// import Certifications from "@/components/certifications";

// Updated project data with Bento.js colors
const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-featured online store with cart and checkout functionality.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    size: "large",
    featured: true,
    color: "#e56b4d", // Coral
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Organize and track your daily tasks with this intuitive task management application.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Redux", "Firebase"],
    size: "medium",
    color: "#2a7d8b", // Teal
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Real-time weather information and forecasts using OpenWeather API.",
    image: "/placeholder.svg?height=200&width=200",
    technologies: ["React", "OpenWeather API"],
    size: "small",
    color: "#f3ca40", // Yellow
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my work and skills.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Tailwind", "Framer Motion"],
    size: "wide",
    color: "#173e48", // Dark teal
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "MDX", "Prisma"],
    size: "medium",
    color: "#2a7d8b", // Teal
  },
  {
    id: "6",
    title: "Social Media App",
    description: "Connect with friends and share updates.",
    image: "/placeholder.svg?height=200&width=200",
    technologies: ["React", "GraphQL", "MongoDB"],
    size: "small",
    color: "#e56b4d", // Coral
  },
  {
    id: "7",
    title: "AI Image Generator",
    description: "Generate unique images using AI.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "TensorFlow", "React"],
    size: "medium",
    color: "#173e48", // Dark teal
  },
  {
    id: "8",
    title: "Chat Application",
    description: "Real-time chat with WebSocket.",
    image: "/placeholder.svg?height=200&width=200",
    technologies: ["Socket.io", "Express", "React"],
    size: "small",
    color: "#f3ca40", // Yellow
  },
];

// const timelineEvents = [
//   {
//     date: "2023/11",
//     title: "Started Learning React",
//     description: "Began my journey with React and modern JavaScript frameworks.",
//   },
//   {
//     date: "2024/1",
//     title: "First Client Project",
//     description: "Completed my first paid project for a local business.",
//   },
//   {
//     date: "2024/5",
//     title: "Joined Tech Startup",
//     description: "Started working as a junior developer at a tech startup.",
//   },
//   {
//     date: "2024/9",
//     title: "Launched Personal Project",
//     description: "Released my first major personal project to the public.",
//   },
//   {
//     date: "2024/12",
//     title: "Achieved Senior Role",
//     description: "Promoted to senior developer position after demonstrating expertise.",
//   },
// ]

// const spokenLanguages = [
//   { name: "English", proficiency: 5 },
//   { name: "Japanese", proficiency: 3 },
//   { name: "Spanish", proficiency: 2 },
// ]

// const certifications = [
//   { name: "AWS Certified Developer", issuer: "Associate Level" },
//   { name: "React Developer Certification", issuer: "Meta Front-End Developer" },
//   { name: "JLPT N2", issuer: "Japanese Language Proficiency Test" },
// ]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-bold">Home</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </Link>
            <Link href="https://github.com" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">About</span>
            </Link>
            <Link href="/newsletter" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Newsletter</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section with Centered Atropos Card */}
        <section className="flex justify-center mb-12">
          <div className="w-full max-w-md">
            <AtroposCard />
          </div>
        </section>

        {/* Projects Section with Bento Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Projects</h2>
          <ProjectGrid projects={projects} />
        </section>

        {/* GitHub Activity and Languages */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <GitHubActivity />
          {/* <ProgrammingLanguages /> */}
        </section>

        {/* Timeline Section */}
        {/* <Timeline events={timelineEvents} /> */}

        {/* Languages & Skills Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <SpokenLanguages languages={spokenLanguages} />
          {/* <Certifications certifications={certifications} /> */}
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 mt-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Charlie Junior. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
