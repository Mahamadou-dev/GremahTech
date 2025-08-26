// i18n/request.ts
import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

export const locales = ["en", "fr", "ha"] as const
export const defaultLocale = "fr" as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? defaultLocale;
  console.log("Loading locale:", resolvedLocale) // ← Ajoutez cette ligne
  
  if (!locales.includes(resolvedLocale as any)) notFound()

  return {
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
    locale: resolvedLocale
  }
})