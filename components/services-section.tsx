"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Smartphone, 
  Network, 
  Shield, 
  Palette,
  Video,
  HelpCircle,
  X,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { useTranslations } from "next-intl"
import { ServiceCard } from "./ServiceCard"
import { ServiceDetailModal } from "./ServiceDetailModal"
import { log } from "console"

export function ServicesSection() {
  const t = useTranslations("services")
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: Code,
      title: t("webDev.title"),
      description: t("webDev.description"),
      color: "from-blue-500 to-cyan-500",
      details: {
        subServices: [
          {
            title: t("webDev.subServices.frontend.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("webDev.subServices.frontend.features.0"),
              t("webDev.subServices.frontend.features.1"),
              t("webDev.subServices.frontend.features.2")
            ],
            price: t("webDev.subServices.frontend.price")
          },
          {
            title: t("webDev.subServices.backend.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("webDev.subServices.backend.features.0"),
              t("webDev.subServices.backend.features.1"),
              t("webDev.subServices.backend.features.2")
            ],
            price: t("webDev.subServices.backend.price")
          },
          {
            title: t("webDev.subServices.fullstack.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("webDev.subServices.fullstack.features.0"),
              t("webDev.subServices.fullstack.features.1"),
              t("webDev.subServices.fullstack.features.2")
            ],
            price: t("webDev.subServices.fullstack.price")
          }
        ],
        technologies: [
          { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
          { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" },
          { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
          { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
          { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
          { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
          { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
          { name: "ASP.NET", logo: "https://cdn.simpleicons.org/dotnet/512BD4" },
          { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/384px-Logo_C_sharp.svg.png" },
          { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
          { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
          { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
          { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
          { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
          { name: "SQL Server ", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
          { name: "Json Web Token ", logo: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
          { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
          { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
          { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png" },
          { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Microsoft-Azure.png/1200px-Microsoft-Azure.png?20211101220632" },
          { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
          { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
          { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify/00C7B7" },
          { name: "AppWrite", logo: "https://cdn.simpleicons.org/appwrite/FF6C37" },  
        ]
      }
    },
    {
      id: 2,
      icon: Smartphone,
      title: t("mobileDev.title"),
      description: t("mobileDev.description"),
      color: "from-purple-500 to-pink-500",
      details: {
        subServices: [
          {
            title: t("mobileDev.subServices.ios.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("mobileDev.subServices.ios.features.0"),
              t("mobileDev.subServices.ios.features.1"),
              t("mobileDev.subServices.ios.features.2")
            ],
            price: t("mobileDev.subServices.ios.price")
          },
          {
            title: t("mobileDev.subServices.android.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("mobileDev.subServices.android.features.0"),
              t("mobileDev.subServices.android.features.1"),
              t("mobileDev.subServices.android.features.2")
            ],
            price: t("mobileDev.subServices.android.price")
          },
          {
            title: t("mobileDev.subServices.crossPlatform.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("mobileDev.subServices.crossPlatform.features.0"),
              t("mobileDev.subServices.crossPlatform.features.1"),
              t("mobileDev.subServices.crossPlatform.features.2")
            ],
            price: t("mobileDev.subServices.crossPlatform.price")
          }
        ],
        technologies: [
          { name: "Swift", logo: "https://cdn.simpleicons.org/swift/FA7343" },
          { name: "Kotlin", logo: "https://cdn.simpleicons.org/kotlin/7F52FF" },
          { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
          { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
          { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
          { name: "App Store", logo: "https://cdn.simpleicons.org/appstore/0D96F6" },
          { name: "Google Play", logo: "https://cdn.simpleicons.org/googleplay/414141" },
          { name: "Xamarin", logo: "data:image/png;base64,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" },
          {name: ".Net MAUI", logo: "https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2021/10/shadow.png" }
        ]
      }
    },
    {
      id: 3,
      icon: Network,
      title: t("networking.title"),
      description: t("networking.description"),
      color: "from-green-500 to-teal-500",
      details: {
        subServices: [
          {
            title: t("networking.subServices.enterprise.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("networking.subServices.enterprise.features.0"),
              t("networking.subServices.enterprise.features.1"),
              t("networking.subServices.enterprise.features.2")
            ],
            price: t("networking.subServices.enterprise.price")
          },
          {
            title: t("networking.subServices.cloud.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("networking.subServices.cloud.features.0"),
              t("networking.subServices.cloud.features.1"),
              t("networking.subServices.cloud.features.2")
            ],
            price: t("networking.subServices.cloud.price")
          },
          {
            title: t("networking.subServices.wireless.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("networking.subServices.wireless.features.0"),
              t("networking.subServices.wireless.features.1"),
              t("networking.subServices.wireless.features.2")
            ],
            price: t("networking.subServices.wireless.price")
          }
        ],
        technologies: [
          { name: "Cisco", logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
          { name: "Ubiquiti", logo: "https://cdn.simpleicons.org/ubiquiti/0559C9" },
          { name: "AWS", logo: " https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png" },
          { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Microsoft-Azure.png/1200px-Microsoft-Azure.png?20211101220632" },
          { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
          { name: "VMware", logo: "https://cdn.simpleicons.org/vmware/607078" },
          { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/768px-Oracle_logo.svg.png" },
          { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
          { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
        ]
      }
    },
    {
      id: 4,
      icon: Shield,
      title: t("cybersecurity.title"),
      description: t("cybersecurity.description"),
      color: "from-red-500 to-orange-500",
      details: {
        subServices: [
          {
            title: t("cybersecurity.subServices.audit.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("cybersecurity.subServices.audit.features.0"),
              t("cybersecurity.subServices.audit.features.1"),
              t("cybersecurity.subServices.audit.features.2")
            ],
            price: t("cybersecurity.subServices.audit.price")
          },
          {
            title: t("cybersecurity.subServices.dataProtection.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("cybersecurity.subServices.dataProtection.features.0"),
              t("cybersecurity.subServices.dataProtection.features.1"),
              t("cybersecurity.subServices.dataProtection.features.2")
            ],
            price: t("cybersecurity.subServices.dataProtection.price")
          },
          {
            title: t("cybersecurity.subServices.monitoring.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("cybersecurity.subServices.monitoring.features.0"),
              t("cybersecurity.subServices.monitoring.features.1"),
              t("cybersecurity.subServices.monitoring.features.2")
            ],
            price: t("cybersecurity.subServices.monitoring.price")
          }
        ],
        technologies: [
          { name: "SSL/TLS", logo: "https://cdn.simpleicons.org/letsencrypt/003A70" },
          { name: "Firewall", logo: "data:image/jpeg;base64,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" },
          { name: "VPN", logo: "https://cdn.simpleicons.org/openvpn/EA7E20" },
          { name: "Antivirus", logo: "https://cdn.simpleicons.org/avast/FF7800" },
          { name: "SIEM", logo: "https://cdn.simpleicons.org/splunk/000000" },
          { name: "OWASP", logo: "https://cdn.simpleicons.org/owasp/000000" },
          { name: "Kali Linux", logo: "https://cdn.simpleicons.org/kalilinux/557C94" },
          { name: "Metasploit", logo: "https://cdn.simpleicons.org/metasploit/000000" },
        ]
      }
    },
    {
      id: 5,
      icon: Palette,
      title: t("graphicDesign.title"),
      description: t("graphicDesign.description"),
      color: "from-yellow-500 to-amber-500",
      details: {
        subServices: [
          {
            title: t("graphicDesign.subServices.identity.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("graphicDesign.subServices.identity.features.0"),
              t("graphicDesign.subServices.identity.features.1"),
              t("graphicDesign.subServices.identity.features.2")
            ],
            price: t("graphicDesign.subServices.identity.price")
          },
          {
            title: t("graphicDesign.subServices.uiux.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("graphicDesign.subServices.uiux.features.0"),
              t("graphicDesign.subServices.uiux.features.1"),
              t("graphicDesign.subServices.uiux.features.2")
            ],
            price: t("graphicDesign.subServices.uiux.price")
          },
          {
            title: t("graphicDesign.subServices.marketing.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("graphicDesign.subServices.marketing.features.0"),
              t("graphicDesign.subServices.marketing.features.1"),
              t("graphicDesign.subServices.marketing.features.2")
            ],
            price: t("graphicDesign.subServices.marketing.price")
          }
        ],
        technologies: [
          { name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/768px-Adobe_Photoshop_CC_icon.svg.png" },
          { name: "Illustrator", logo: "data:image/png;base64,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" },
          { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
          { name: "Adobe XD", logo: "data:image/png;base64,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" },
          { name: "Sketch", logo: "https://cdn.simpleicons.org/sketch/F7B500" },
          { name: "InDesign", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/768px-Adobe_InDesign_CC_icon.svg.png" },
          { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC" },
          { name: "CorelDRAW", logo: "https://cdn.simpleicons.org/coreldraw/46A037" },
        ]
      }
    },
    {
      id: 6,
      icon: Video,
      title: t("videoEditing.title"),
      description: t("videoEditing.description"),
      color: "from-pink-500 to-rose-500",
      details: {
        subServices: [
          {
            title: t("videoEditing.subServices.editing.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("videoEditing.subServices.editing.features.0"),
              t("videoEditing.subServices.editing.features.1"),
              t("videoEditing.subServices.editing.features.2")
            ],
            price: t("videoEditing.subServices.editing.price")
          },
          {
            title: t("videoEditing.subServices.animation.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("videoEditing.subServices.animation.features.0"),
              t("videoEditing.subServices.animation.features.1"),
              t("videoEditing.subServices.animation.features.2")
            ],
            price: t("videoEditing.subServices.animation.price")
          },
          {
            title: t("videoEditing.subServices.production.title"),
            image: "/api/placeholder/300/200",
            features: [
              t("videoEditing.subServices.production.features.0"),
              t("videoEditing.subServices.production.features.1"),
              t("videoEditing.subServices.production.features.2")
            ],
            price: t("videoEditing.subServices.production.price")
          }
        ],
        technologies: [
          { name: "Premiere Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/768px-Adobe_Premiere_Pro_CC_icon.svg.png" },
          { name: "After Effects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/768px-Adobe_After_Effects_CC_icon.svg.png" },
          { name: "Final Cut Pro", logo: "https://upload.wikimedia.org/wikipedia/fr/a/a5/Final_Cut_Pro_Logo_2015.png?20180306162337" },
          { name: "DaVinci Resolve", logo: "https://cdn.simpleicons.org/davinciresolve/233A51" },
          { name: "Blender", logo: "https://cdn.simpleicons.org/blender/F5792A" },
          { name: "Audition", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Adobe_Audition_CC_icon_%282020%29.svg/768px-Adobe_Audition_CC_icon_%282020%29.svg.png" },
          { name: "CapCut", logo: "data:image/png;base64,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" }
        ]
      }
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-accent to-primary rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            {t("title")} <span className="text-gradient">GremahTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onLearnMore={() => setSelectedService(service.id)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 glass border-primary/20 max-w-2xl mx-auto bg-gradient-to-r from-background/50 to-muted/30">
            <h3 className="text-2xl font-bold font-display mb-4">{t("cta.title")}</h3>
            <p className="text-muted-foreground mb-6">
              {t("cta.description")}
            </p>
            <Button size="lg" className="bg-gradient-gemini from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              {t("cta.button")}
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <ServiceDetailModal
            service={services.find(s => s.id === selectedService)!}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}