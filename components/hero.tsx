import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Code2 } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Software Engineering Student</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Yordanos Bisrat</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-balance">Aspiring Full-Stack Developer</p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-pretty">
                Building innovative web applications and solving complex problems through code. Currently studying at{" "}
                <span className="text-foreground font-medium">Addis Ababa University</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                <a 
                target="_blank"
                href="https://drive.google.com/file/d/1EnjZGasWH8IX9-e8WD684ne66jiKqoY4/view?usp=sharing" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/YordanosBisrat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yordanos-bisrat-911788334"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/YordanosB/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LeetCode"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-secondary">
                <img src="/professional-portrait-photo-software-engineer.jpg" alt="Yordanos Bisrat" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-3xl bg-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
