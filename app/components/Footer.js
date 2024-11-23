import Link from "next/link";
import { Facebook, Mail, Home, Users, MessageSquare, Info } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/viciouswarfare",
      aria: "Facebook",
    },
    {
      icon: Mail,
      href: "mailto:viciouswarfare@gmail.com",
      aria: "Gmail",
    },
  ];

  const siteLinks = [
    { name: "Sitemap", href: "/sitemap" },
    // { name: "Events", href: "/events" },
    // { name: "Contact", href: "/contact" },
    // { name: "Privacy Policy", href: "/privacy" },
    // { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 text-gray-100">
      <div className="container mx-auto px-4 py-6">
        {/* Combined Links and Social */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
          {/* Site Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {siteLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-purple-500 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Separator */}
          <span className="hidden sm:block text-zinc-700">|</span>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.aria}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                className="text-zinc-400 hover:text-purple-500 transition-colors duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        {/* Copyright Section */}
        <div className="text-center border-t border-zinc-800 pt-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="https://www.viciouswarfare.com"
              className="text-zinc-500 hover:text-purple-500 transition-colors font-bold"
            >
              ViciousWarfare
            </Link>{" "}
            | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
