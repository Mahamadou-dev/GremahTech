"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, HelpCircle, Network, Shield, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("services")

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

  const services = [
    {
      icon: Code,
      title: t("webDev.title"),
      description: t("webDev.description"),
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: HelpCircle,
      title: t("itSupport.title"),
      description: t("itSupport.description"),
      features: ["Technical Support", "System Maintenance", "Software Installation", "Training & Consultation"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: t("networking.title"),
      description: t("networking.description"),
      features: ["Network Design", "Infrastructure Setup", "Wireless Solutions", "Performance Optimization"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Shield,
      title: t("cybersecurity.title"),
      description: t("cybersecurity.description"),
      features: ["Security Audits", "Threat Detection", "Data Protection", "Compliance Solutions"],
      color: "from-red-500 to-orange-500",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-accent to-primary rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            {t("title")} <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 card-3d glass animate-on-scroll border-primary/20 hover:border-primary/40 transition-all duration-500 group overflow-hidden relative"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <Card className="p-8 glass border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <Button size="lg" className="bg-gradient-gemini hover:opacity-90 transition-all duration-300">
              Get Free Consultation
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
