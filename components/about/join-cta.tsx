import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function JoinCTA() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-primary p-10 md:p-16 lg:p-20 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-5 leading-tight">
              Ready to Write the <span className="italic">Next Chapter?</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Join hundreds of young Nepalis who are already making a difference. 
              Your community is waiting for you.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-12 text-sm font-medium rounded-lg transition-colors"
            >
              <Link href="/join">
                Join Team555 Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
