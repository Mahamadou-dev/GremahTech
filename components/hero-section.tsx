"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

// 🔹 Types & constantes
type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  targetOpacity: number
  color: string
  life: number
  maxLife: number
}

const COLORS = ["#8B5CF6", "#A78BFA", "#C084FC", "#93C5FD", "#67E8F9"]
const INITIAL_PARTICLES = 60
const REACTION_RADIUS = 120
const FRICTION = 0.98
const FADE_DURATION = 60

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const animationRef = useRef<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations("hero")

  // 🔹 Observer pour déclencher les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // 🔹 Effet Particules
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Particle[] = []
    const createParticles = (count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2.5 + 1,
          opacity: 0,
          targetOpacity: Math.random() * 0.5 + 0.1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 0,
          maxLife: Math.random() * 300 + 150,
        })
      }
    }
    createParticles(INITIAL_PARTICLES)

    let mouseX = -1000,
      mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const resetMouse = () => {
      mouseX = -1000
      mouseY = -1000
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", resetMouse)

    const drawParticle = (p: Particle) => {
      ctx.save()
      ctx.globalAlpha = p.opacity
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5)
      gradient.addColorStop(0, p.color)
      gradient.addColorStop(0.8, `${p.color}80`)
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawConnections = (p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 100) {
        ctx.save()
        ctx.globalAlpha = ((100 - distance) / 100) * 0.15
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
        gradient.addColorStop(0, p1.color)
        gradient.addColorStop(1, p2.color)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
        ctx.restore()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (Math.random() < 0.02) createParticles(1)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        if (p.life < FADE_DURATION) {
          p.opacity = (p.life / FADE_DURATION) * p.targetOpacity
        } else if (p.life > p.maxLife - FADE_DURATION) {
          p.opacity = ((p.maxLife - p.life) / FADE_DURATION) * p.targetOpacity
        } else if (p.life > p.maxLife) {
          particles.splice(i, 1)
          continue
        } else {
          p.opacity = p.targetOpacity
        }

        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < REACTION_RADIUS) {
          const force = (REACTION_RADIUS - distance) / REACTION_RADIUS
          p.vx += (dx / distance) * force * 0.06
          p.vy += (dy / distance) * force * 0.06
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= FRICTION
        p.vy *= FRICTION
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        drawParticle(p)
        for (let j = i + 1; j < particles.length; j++) {
          drawConnections(p, particles[j])
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationRef.current!)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", resetMouse)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 transition-opacity duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-background/40" />
      <div className="absolute inset-0 opacity-[0.03] pattern-grid-lg text-primary" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Tagline */}
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center bg-primary/10 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/20"
            >
              <Sparkles className="w-5 h-5 text-primary mr-3 animate-pulse" />
              <span className="text-sm font-medium text-primary/90 uppercase tracking-wider">
                {t("tagline")}
              </span>
            </motion.div>
          </div>

          {/* Title avec effet de reveal */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
            >
              {t("title")}
            </motion.span>
            <br />
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              {t("subtitle")}
            </motion.span>
          </motion.h1>

          {/* Description avec effet de fade-up */}
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {t("description")}
          </motion.p>
          {/*scroll indicator I want to put it at the bottom of the hero*/}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="animate-bounce bg-background/50 backdrop-blur-md border-primary/30 hover:border-primary/50 text-primary"
              aria-label="Scroll Down"
              onClick={() => {
                const nextSection = document.getElementById("about")
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <ArrowRight className="w-5 h-5 rotate-90" />
            </Button>
            <span className="sr-only">{t("scrollHint")}</span>
              
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
