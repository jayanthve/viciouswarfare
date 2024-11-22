"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020817] via-[#0F1729] to-[#020817]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/logo.jpg')] opacity-5 bg-repeat mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0F1729]/30 to-[#020817]/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDIwIEwgMjAgMCBNIC0yIDIgTCAyIC0yIE0gMTggMjIgTCAyMiAxOCIgc3Ryb2tlPSIjMTEyMjQ0IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-[0.15] pointer-events-none" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
                Biography
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent"></div>
              </h1>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-6 text-lg backdrop-blur-sm bg-gradient-to-br from-[#0F1729]/40 via-[#0F1729]/30 to-[#0F1729]/40 p-6 rounded-lg border border-[#1a2847]/30 shadow-xl">
              <p className="relative group">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">
                  Vicious Warfare was formed in 2014 in Bangalore, India. Nekrozin is the founding
                  member, vocalist, and guitarist. In 2016, Zed joined the band as the bassist.
                </span>
              </p>

              <p className="relative group">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">
                  The band draws influences from the occult, death, and magic, and is greatly
                  inspired by legendary bands such as The Mighty Impiety, Demoncy, Sadistic Intent,
                  Immortal, and Mortem.
                </span>
              </p>

              <p className="relative group">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">
                  Vicious Warfare aims to revive and create the dark, raw sound of old-school black
                  and death metal music from the 1980s and 1990s.
                </span>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="relative w-full h-[400px] md:h-[500px] transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-[#020817] opacity-50" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0F1729]/50 to-[#020817] opacity-40" />

              <Image
                src="/banner.jpg"
                alt="Vicious Warfare Band"
                fill
                className="rounded-lg object-contain mix-blend-luminosity"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[#020817]/20 via-transparent to-[#020817]/20 backdrop-blur-[1px]" />
              <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
            </div>

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden md:block">
              <div className="absolute inset-0 bg-gradient-radial from-blue-600/5 via-transparent to-transparent rounded-lg blur-xl opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
