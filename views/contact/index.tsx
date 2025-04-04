'use client'

import type { Metadata } from "next"
import ContactForm from "./_components/contact-form"
import ContactInfo from "./_components/contact-info"
import ContactMap from "./_components/contact-map"
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "react-i18next"

export const metadata: Metadata = {
  title: "Contact Us | UniCorp LLC",
  description: "Get in touch with our team for inquiries, support, or partnership opportunities.",
}

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <main className="container py-12 md:py-20 overflow-hidden">
      <div className="space-y-4 text-center mb-12" data-aos="fade-up">
        <h1 className="text-fs50 md:text-fs60 font-bold text-foreground">{t('contact.title')}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div data-aos="fade-right" data-aos-delay="100">
          <ContactInfo />
        </div>

        <div data-aos="fade-left" data-aos-delay="200">
          <ContactForm />
        </div>
      </div>

      <Separator className="my-16" />

      <div data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Location</h2>
        <ContactMap />
      </div>
    </main>
  )
}

