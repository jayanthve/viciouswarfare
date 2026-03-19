import HomePage from "./components/HomePage";

export const metadata = {
  title: "Black and Death Metal | Vicious Warfare",
  description:
    "Revive and create the dark, raw sound of old-school black and death metal music from the 1980s and 1990s.",
  other: {
    "msvalidate.01": "E73B947F55AE11A250CA0539E7828977",
  },
};

export default function Home() {
  return (
    <div className="container w-full mx-auto px-4 py-8">
      <HomePage />
    </div>
  );
}
