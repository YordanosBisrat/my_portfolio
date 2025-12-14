import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "HTML", "CSS"],
  },
  {
    title: "Web Technologies",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "REST APIs", "JSON Server"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Vercel", "npm"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Critical Thinking"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              A comprehensive toolkit built through academic learning and hands-on projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
