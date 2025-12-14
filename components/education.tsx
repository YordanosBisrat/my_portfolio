import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
            <p className="text-lg text-muted-foreground text-pretty">Academic background and relevant coursework.</p>
          </div>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
                    <p className="text-base font-medium text-accent mt-1">Addis Ababa University</p>
                    <p className="text-sm text-muted-foreground mt-1">Expected Graduation: 2028</p>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Relevant Coursework:</h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div>• Data Structures & Algorithms</div>
                      <div>• Software Engineering Principles</div>
                      <div>• Database Management Systems</div>
                      <div>• Web Development</div>
                      <div>• Object-Oriented Programming</div>
                      <div>• Computer Networks</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
