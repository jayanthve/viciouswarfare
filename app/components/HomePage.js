"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-100">
      <div className="page-content relative container mx-auto px-4 py-16  border border-white rounded-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 relative z-10 p-6 bg-transparent">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Vicious Warfare</h1>

            <div className="text-gray-300 leading-relaxed space-y-6 text-lg">
              <p>
                Vicious Warfare was formed in 2014 in Bangalore, India. Nekrozin is the founding
                member, vocalist and guitarist. In 2016, Zed joined the band as the bassist.
              </p>

              <p>
                The band draws influences from the occult, death, and magic, and is greatly inspired
                by legendary bands such as The Mighty Impiety, Demoncy, Sadistic Intent, Immortal,
                and Mortem.
              </p>

              <p>
                Vicious Warfare aims to revive and create the dark, raw sound of old-school black
                and death metal music from the 1980s and 1990s.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="relative w-full h-[400px] md:h-[500px] transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/banner.jpg"
                alt="Vicious Warfare Band"
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
