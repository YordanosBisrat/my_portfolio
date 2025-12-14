import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills with a professional design.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/YordanosBisrat",
  },
  {
    title: "To-Do Web Application",
    description:
      "A full-featured task management app with CRUD operations, local storage persistence, and a clean, intuitive user interface.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON Server"],
    githubUrl: "https://github.com/YordanosBisrat",
  },
  {
    title: "MiniGit – Version Control System",
    description:
      "A custom version control system built from scratch in C++, implementing core Git functionality including commits, branching, and version tracking.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/YordanosBisrat",
  },
  {
    title: "Data Analysis & AI Projects",
    description:
      "Collection of data science projects utilizing Python for statistical analysis, machine learning models, and data visualization.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/YordanosBisrat",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              A showcase of my recent work, demonstrating practical application of technical skills and problem-solving
              abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col border-border/50 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed text-pretty mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  {project.liveUrl && (
                    <Button asChild size="sm" className="rounded-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="outline" className="rounded-full bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
