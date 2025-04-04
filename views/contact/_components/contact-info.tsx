"use client"

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Icon from "@/components/icon";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation()

  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Location",
      details: "Mirzo Ulugbek, Qorabuloq 24",
      subDetails: "Tashkent, Uzbekistan, 100070",
      // action: {
      //   text: "Get Directions",
      //   url: "https://maps.google.com",
      // },
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      details: "+998 77 151 66 33",
      subDetails: "Mon-Fri from 10am to 7pm",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: "unicorpuz@gmail.com",
      subDetails: "We'll respond as soon as possible",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      details: "Monday to Friday",
      subDetails: "10:00 - 19:00",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border h-full">
      <h2 className="text-2xl font-bold mb-6 text-foreground">{t('contact.contactInformation')}</h2>

      <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
        {contactDetails.map((contact, index) => (
          <motion.div key={index} className="flex gap-4" variants={item}>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {contact.icon}
            </div>
            <div>
              <h3 className="font-medium text-foreground">{contact.title}</h3>
              <p className="text-foreground">{contact.details}</p>
              <p className="text-sm text-muted-foreground">{contact.subDetails}</p>
              {/* {contact.action && (
                <a
                  href={contact.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-sm text-tp-link-more hover:underline"
                >
                  {contact.action.text} <ExternalLink size={14} />
                </a>
              )} */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="font-medium text-foreground mb-4">{t('contact.connectWithUs')}</h3>
        <div className="flex gap-4">
          {[
            { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
            { name: "Telegram", icon: "telegram", url: "https://facebook.com" },
            { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full duration-200 group bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={`Follow us on ${social.name}`}
            >
              <span className="sr-only">{t('contact.followUsOn')} {social.name}</span>
              <Icon className="group-hover:!bg-brand" size={26} icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

