"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    // This is a placeholder for actual map integration
    // You would typically use a library like Google Maps, Mapbox, or Leaflet

    if (mapRef.current) {
      const mapContainer = mapRef.current

      // Apply styling based on theme
      mapContainer.style.backgroundColor = theme === "dark" ? "#1f2937" : "#e5e7eb"

      // Add placeholder content
      mapContainer.innerHTML = `
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <p class="text-muted-foreground">Interactive Map</p>
            <p class="text-xs text-muted-foreground mt-1">
              (Replace with actual map integration)
            </p>
          </div>
        </div>
      `
    }
  }, [theme])

  return (
    <div className="rounded-lg overflow-hidden border border-border shadow-lg">
      {/* <div ref={mapRef} className="w-full h-[400px] relative" data-aos="zoom-in" /> */}
      <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.1629723836579!2d69.30909038466038!3d41.32516118147199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c24e40bf9d%3A0x4bcace3d85526e7f!2sKara-Bulak%20Street%2024%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1743761719124!5m2!1sen!2s" width="800" height="600" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="bg-card p-6">
        <h3 className="text-xl font-medium mb-2">UniCorp LLC Headquarters</h3>
        <p className="text-muted-foreground">
          Mirzo Ulugbek, Qorabuloq 24
          <br />
          Tashkent, Uzbekistan, 100070
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-foreground">Parking</h4>
            <p className="text-sm text-muted-foreground">Street parking nearby</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground">Public Transit</h4>
            <p className="text-sm text-muted-foreground">7-minute walk from Pushkin Metro Station</p>
          </div>
        </div>
      </div>
    </div>
  )
}

