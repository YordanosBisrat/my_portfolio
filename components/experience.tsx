import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    period: "2023 - Present",
    title: "Software Engineering Student",
    organization: "Addis Ababa University",
    description:
      "Pursuing comprehensive coursework in algorithms, data structures, software design, and web development. Actively building projects to apply theoretical knowledge.",
  },
  {
    period: "2024",
    title: "Self-Learning Journey",
    organization: "Independent Study",
    description:
      "Completed multiple online courses and tutorials in full-stack development, focusing on React, Next.js, and modern JavaScript frameworks. Built various personal projects.",
  },
  {
    period: "2023",
    title: "Academic Projects",
    organization: "University Coursework",
    description:
      "Developed several academic projects including a custom version control system in C++, web applications, and data analysis projects using Python.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Experience & Learning Journey</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              My path in software engineering through academic excellence and continuous learning.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-base font-medium text-accent">{exp.organization}</p>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
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
