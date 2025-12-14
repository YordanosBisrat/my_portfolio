import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, BookOpen, Code } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Consistently maintaining high academic performance in software engineering coursework",
  },
  {
    icon: Code,
    title: "LeetCode Problem Solver",
    description: "Actively solving algorithmic challenges to strengthen problem-solving skills",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Completed multiple online courses in web development and modern frameworks",
  },
  {
    icon: Trophy,
    title: "Project Portfolio",
    description: "Built diverse projects ranging from web apps to system-level programming",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Achievements & Milestones</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Key accomplishments throughout my learning journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="border-border/50 text-center">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-balance">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
