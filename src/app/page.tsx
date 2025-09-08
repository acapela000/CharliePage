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
import ProjectGrid from "@/components/project-grid";
import GitHubActivity from "@/components/github-activity";
// import Timeline from "@/components/timeline"
import SpokenLanguages from "@/components/spoken-languages";
import Certifications from "@/components/certifications";
import { Project } from "@/components/project-grid";

// Updated project data with Bento.js colors
const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "Description for project one.",
    image: "/images/project-one.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/example/project-one",
    size: "large", // Ensure this matches "small" | "medium" | "large" | "wide"
    featured: true,
    color: "#FF5733",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Description for project two.",
    image: "/images/project-two.jpg",
    technologies: ["Next.js", "Node.js", "CSS"],
    size: "medium", // Ensure this matches "small" | "medium" | "large" | "wide"
    color: "#33FF57",
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

const timelineEvents = [
  {
    date: "2023/11",
    title: "Started Learning React",
    description:
      "Began my journey with React and modern JavaScript frameworks.",
  },
  {
    date: "2024/1",
    title: "First Client Project",
    description: "Completed my first paid project for a local business.",
  },
  {
    date: "2024/5",
    title: "Joined Tech Startup",
    description: "Started working as a junior developer at a tech startup.",
  },
  {
    date: "2024/9",
    title: "Launched Personal Project",
    description: "Released my first major personal project to the public.",
  },
  {
    date: "2024/12",
    title: "Achieved Senior Role",
    description:
      "Promoted to senior developer position after demonstrating expertise.",
  },
];

const spokenLanguages = [
  { name: "English", proficiency: 5 },
  { name: "Japanese", proficiency: 3 },
  { name: "Spanish", proficiency: 2 },
];

const certifications = [
  { name: "AWS Certified Developer", issuer: "Associate Level" },
  { name: "React Developer Certification", issuer: "Meta Front-End Developer" },
  { name: "JLPT N2", issuer: "Japanese Language Proficiency Test" },
];

export default async function HomePage() {
  // Fetch GitHub activity data
  const githubResponse = await fetch(
    "https://api.github.com/users/acapela000/repos?sort=updated&per_page=10",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!githubResponse.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const githubData = await githubResponse.json();

  // Fix repository mapping
  const recentRepos = githubData.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url, // Correct property name
    updated_at: repo.updated_at, // Keep original format
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    language: repo.language,
  }));

  // Fix commits fetching
  const recentCommits = await Promise.all(
    recentRepos.slice(0, 5).map(async (repo: { name: string }) => {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/acapela000/${repo.name}/commits?per_page=5&author=acapela000`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
          },
        );
        if (!commitsResponse.ok) return [];
        const commits = await commitsResponse.json();
        return commits.map((commit: any) => ({
          ...commit,
          repository: { name: repo.name },
        }));
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}:`, error);
        return [];
      }
    }),
  );

  const commits = recentCommits.flat();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="fixed px-6 md:px-28 top-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-medium hidden md:inline md:text-blue-400">
                Home
              </span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium hidden md:block md:text-blue-400">
                LinkedIn
              </span>
            </Link>
            <Link href="https://github.com" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span className="font-medium hidden md:block md:text-blue-400">
                GitHub
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium hidden md:block md:text-blue-400">
                About
              </span>
            </Link>
            <Link href="/blogs" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium hidden md:block md:text-blue-400">
                Blogs
              </span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium hidden md:block md:text-blue-400">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section with Centered Atropos Card */}
        <section className="flex justify-center mt-16 mb-12">
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
          <GitHubActivity
            recentRepos={recentRepos}
            recentCommits={commits} // Use real commits instead of mockCommits
          />
          {/* <ProgrammingLanguages /> */}
        </section>

        {/* Timeline Section */}
        {/* <Timeline events={timelineEvents} /> */}

        {/* Languages & Skills Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <SpokenLanguages languages={spokenLanguages} />
          <Certifications certifications={certifications} />
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
export const metadata = {
  title: "Charlie Junior's Portfolio",
  description: "A showcase of my projects and skills as a web developer.",
};
