"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useTranslations } from "next-intl"

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("team")

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

  const team = [
    {
      name: t("ceo.name"),
      role: t("ceo.role"),
      image: "/Me4.png",
      bio: t("ceo.description"),
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: t("cto.name"),
      role: t("cto.role"),
      image: "/Me.png",
      bio: t("cto.description"),
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: t("developer.name"),
      role: t("developer.role"),
      image: "/jigo.jpg",
      bio: t("developer.description"),
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: t("security.name"),
      role: t("security.role"),
      image: "/Me3.jpg",
      bio: t("security.description"),
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-accent to-primary rounded-full blur-3xl animate-float animation-delay-3000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 text-gradient">
            {t("title")} 
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-6 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-500 group overflow-hidden"
            >
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold font-display mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <Card className="p-8 glass border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@gremahtech.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gemini text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
