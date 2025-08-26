// app/[locale]/test/page.tsx
import { useTranslations } from "next-intl"

export default function TestPage() {
  const t = useTranslations("navigation")
  
  return (
    <div>
      <h1>Test des traductions</h1>
      <p>Home: {t("home")}</p>
      <p>About: {t("about")}</p>
    </div>
  )
}