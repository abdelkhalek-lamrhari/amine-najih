"use client"

import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

export default function Portfolio() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/467783256_2317995768537232_2351148762887780131_n-rASrdYQBYt88HYeS4W490ToC4EhQGY.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 py-12 text-center space-y-12">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            {/* Rotating ring - Instagram story style */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 animate-spin"
              style={{ animationDuration: "3s" }}
            />

            {/* Inner circle for spacing */}
            <div className="absolute inset-1 rounded-full bg-black" />

            {/* Profile image */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-black">
              <Image
                src="/images/design-mode/467783256_2317995768537232_2351148762887780131_n.jpg"
                alt="Amine Najih"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance">Amine Najih</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/najih.amine?utm_source=qr&igsh=MWl6dTQwbmkxb21wcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
              title="Instagram"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 p-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-2">
                  <Image
                    src="/images/design-mode/%E2%80%94Pngtree%E2%80%94three-dimensional%20instagram%20icon_9015419(1).png"
                    alt="Instagram"
                    width={56}
                    height={56}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
              </div>
              <span className="text-xs sm:text-sm text-white/80 font-semibold">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212604946292"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
              title="WhatsApp"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-500 p-1 hover:shadow-2xl transition-all duration-300 hover:shadow-green-500/50">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-2">
                  <Image
                    src="/images/design-mode/%E2%80%94Pngtree%E2%80%94whatsapp%20phone%20icon_9015282(1).png"
                    alt="WhatsApp"
                    width={56}
                    height={56}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
              </div>
              <span className="text-xs sm:text-sm text-white/80 font-semibold">WhatsApp</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+212604946292"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
              title="Call"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-500 p-1 hover:shadow-2xl transition-all duration-300 hover:shadow-blue-500/50">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-2">
                  <Image
                    src="/images/design-mode/png-clipart-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-thumbnail-removebg-preview(1).png"
                    alt="Call"
                    width={56}
                    height={56}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
              </div>
              <span className="text-xs sm:text-sm text-white/80 font-semibold">Call</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/16Rt7YnwYt/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
              title="Facebook"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600 p-1 hover:shadow-2xl transition-all duration-300 hover:shadow-blue-600/50">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-2 px-0 py-0 opacity-100 shadow-xl">
                  <Image
                    src="/images/design-mode/Facebook-Logosu(1).png"
                    alt="Facebook"
                    width={56}
                    height={56}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
              </div>
              <span className="text-xs sm:text-sm text-white/80 font-semibold">Facebook</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-12">
            <a
              href="https://wa.me/212604946292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
            <a
              href="tel:+212604946292"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 hover:shadow-lg transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
