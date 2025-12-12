import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Pure nature,
            <br />
            delivered to you
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
            Discover our premium collection of organic honey, dates, and oils sourced directly from nature&apos;s
            finest.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 px-8">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
    </section>
  )
}
