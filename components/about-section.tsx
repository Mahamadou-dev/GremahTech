"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Target, Eye, Zap } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent to-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            About <span className="text-gradient">GremahTech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in the heart of Zinder, GremahTech is a dynamic IT startup committed to transforming businesses
            through innovative technology solutions and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses in Niger and beyond with cutting-edge technology solutions that drive growth,
                efficiency, and digital transformation.
              </p>
            </div>
          </Card>

          {/* Vision */}
          <Card className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading technology partner in West Africa, known for innovation, reliability, and
                transformative digital solutions.
              </p>
            </div>
          </Card>

          {/* Values */}
          <Card className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, integrity, excellence, and customer-centricity guide everything we do as we build the future
                of technology in Niger.
              </p>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "25+", label: "Happy Clients" },
            { number: "3+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
