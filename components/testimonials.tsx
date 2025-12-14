import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Yordanos demonstrates exceptional problem-solving skills and a genuine passion for software development. A dedicated student with great potential.",
    author: "Dr. Samuel Tesfaye",
    role: "Professor, Addis Ababa University",
  },
  {
    quote:
      "One of the most committed students I've taught. Yordanos consistently goes above and beyond in coursework and shows strong leadership in group projects.",
    author: "Prof. Hanna Mekonnen",
    role: "Software Engineering Department",
  },
  {
    quote:
      "Impressive technical skills combined with excellent communication. Yordanos brings both technical depth and collaborative spirit to every project.",
    author: "Abebe Tadesse",
    role: "Study Group Lead",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">What Others Say</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Feedback from professors, peers, and collaborators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <Quote className="h-8 w-8 text-accent/40" />
                    <p className="text-muted-foreground leading-relaxed text-pretty">{testimonial.quote}</p>
                    <div className="pt-2">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
