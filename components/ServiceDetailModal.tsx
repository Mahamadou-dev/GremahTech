"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

interface ServiceDetailModalProps {
  service: {
    id: number
    icon: any
    title: string
    description: string
    color: string
    details: {
      subServices: Array<{
        title: string
        image: string
        features: string[]
        price: string
      }>
      technologies: Array<{
        name: string
        logo: string
      }>
    }
  }
  onClose: () => void
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const t = useTranslations("services")
  const IconComponent = service.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold font-display">{service.title}</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-8">{service.description}</p>

          {/* Sub Services */}
          <h3 className="text-xl font-bold mb-6">{t("subServicesTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {service.details.subServices.map((subService, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-5 border-border/20 hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Image placeholder */}
                  <div className="bg-muted rounded-lg h-32 mb-4 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">{t("imagePlaceholder")}</div>
                  </div>
                  
                  <h4 className="font-semibold mb-3">{subService.title}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {subService.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-lg font-bold text-primary mt-auto">
                    {subService.price}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

            {/* Technologies */}
            <h3 className="text-xl font-bold mb-6">{t("technologiesTitle")}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-8">
            {service.details.technologies.map((tech, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center"
                >
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-2 shadow-md">
                    <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                    />
                </div>
                <span className="text-xs text-center text-muted-foreground">
                    {tech.name}
                </span>
                </motion.div>
            ))}
            </div>


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
           <a href="#contact"><Button size="lg" className="flex-1 bg-gradient-gemini from-primary to-accent">
              {t("requestQuote")}
            </Button></a>
            <Button variant="outline" size="lg" className="flex-1" onClick={onClose}>
              {t("backToServices")}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}