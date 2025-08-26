"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

interface ServiceCardProps {
  service: {
    id: number
    icon: any
    title: string
    description: string
    color: string
  }
  index: number
  onLearnMore: () => void
}

export function ServiceCard({ service, index, onLearnMore }: ServiceCardProps) {
  const t = useTranslations("services")
  const IconComponent = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 glass border-border/20 hover:border-primary/30 transition-all duration-300 group cursor-pointer h-full flex flex-col hover:shadow-xl hover:scale-105">
        {/* Icon with gradient background */}
        <div className="flex items-center mb-5">
          <div
            className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            <IconComponent className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold font-display text-foreground/90">{service.title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-5 leading-relaxed flex-grow">{service.description}</p>

        {/* Learn More Button */}
        <Button
          onClick={onLearnMore}
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-auto"
        >
          {t("learnMore")}
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Card>
    </motion.div>
  )
}