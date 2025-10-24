"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Target, Eye, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("about")

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 text-gradient">
            {t("title")} 
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">{t("mission")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("missionText")}</p>
            </div>
          </Card>

          {/* Vision */}
          <Card className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">{t("vision")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("visionText")}</p>
            </div>
          </Card>

          {/* Values */}
          <Card className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">{t("values")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("valuesText")}</p>
            </div>
          </Card>
        </div>

        {/* Stats */}
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[t("stat1"), t("stat2"), t("stat3")].map((stat, index) => (
              <div 
                key={index}
                className="bg-background/50 backdrop-blur-md p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-105"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.split('|')[0]}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.split('|')[1]}
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
