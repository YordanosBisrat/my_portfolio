import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin, Code2, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              I'm always interested in hearing about new opportunities and collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        target="_blank"
                        href="mailto:bisratyordanos777@gmail.com"
                        className="font-medium hover:text-accent transition-colors"
                      >
                        bisratyordanos777@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Ethiopia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold mb-4">Online Presence</h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/YordanosBisrat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/yordanos-bisrat-911788334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://leetcode.com/YordanosB/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Code2 className="h-5 w-5" />
                      <span>LeetCode</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center pt-6">
            <Button asChild size="lg" className="rounded-full">
              <a 
              target="_blank"
              href="https://drive.google.com/file/d/1EnjZGasWH8IX9-e8WD684ne66jiKqoY4/view?usp=sharing" download>
                <Download className="mr-2 h-4 w-4" />
                Download My Resume
                
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yordanos Bisrat. 
        </p>
      </footer>
    </section>
  )
}
