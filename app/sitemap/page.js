import Link from "next/link";

export default function Sitemap() {
  const sitemapData = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Vicious Warfare Sitemap</h1>
        <div className="max-w-md mx-auto space-y-4">
          {sitemapData.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block p-4 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 w-full"
            >
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
