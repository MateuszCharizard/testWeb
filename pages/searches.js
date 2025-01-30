import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import { useRouter } from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const searchSuggestions = [
  "Routine Maintenance",
  "Diagnostics & Repairs",
  "Custom Services",
  "Oil Change",
  "Brake Inspection",
  "Tuning",
  "Engine Repair",
  "Suspension Work",
  "Battery Replacement",
  "Performance Upgrades"
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const router = useRouter();

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = searchSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="bg-neutral-950 text-white select-none bg-opacity-70">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-8 bg-neutral-800 bg-opacity-60 backdrop-blur-xl">
        {/* Logo */}
        <div className="flex-shrink-0 mt-2">
          <Image
            src="/motorlogo-removebg-preview-modified.png"
            alt="Preview Image"
            width={170}
            height={170}
            draggable="false"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="relative font-bold flex-1 grid grid-cols-1 md:grid-cols-4 px-[100px] gap-48 mt-5 bg-neutral-800 p-4 rounded-lg shadow-lg transition-all items-center justify-center">
        <a className="hover:text-2xl transition-all" href="https://example.com">Home</a>
        <a className="hover:text-2xl transition-all" href="https://example.com">About</a>
        <a className="hover:text-2xl transition-all" href="https://example.com">Garage</a>
        <a className="hover:text-2xl transition-all" href="https://example.com">Contact</a>
      </div>

      {/* Full-Page Welcome Section */}
      <div
        className="h-screen flex items-center justify-center bg-neutral-900 pt-10 relative"
        style={{
          backgroundImage: "url(/julian-hochgesang-ghibewXEVVg-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "", // Apply blur effect
        }}
      >
        {/* Content for the Welcome Section */}
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
          <p className="mt-4 text-lg">We provide top-notch services for your vehicle.</p>
        </div>
      </div>
    </div>
  );
}
