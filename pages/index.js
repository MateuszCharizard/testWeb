import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { useState } from "react";
import { useRouter } from "next/router";
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'htpps://dtvyznjxprwwsrlbaijw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

 
 
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
<div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-neutral-800 bg-opacity-60 backdrop-blur-xl">
        {/* Logo */}
<div className="flex-shrink-0">
<Image
            src="/motorlogo-removebg-preview-modified.png"
            alt="Motor Mile Logo"
            width={170}
            height={170}
            draggable="false"
          />
</div>
 
        {/* Navigation Links (Buttons) */}
<div className="hidden md:flex space-x-24 text-white font-semibold">
<button className="hover:text-neutral-400 transition-all">Home
</button>
<button className="hover:text-neutral-400 transition-all href={/searches.js}">About
 
          </button>
<button className="hover:text-neutral-400 transition-all">Garage
 
          </button>
<button className="hover:text-neutral-400 transition-all">Contact
</button>
</div>
 
        {/* Search Bar */}
<div className="relative flex items-center w-[300px] lg:w-[400px]">
<input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-full bg-neutral-700 text-white w-full"
            placeholder="Search services..."
          />
          {searchQuery && (
<div className="absolute top-12 left-0 w-full bg-neutral-800 p-4 text-white rounded-lg shadow-lg z-50">
<ul className="max-h-64 overflow-auto">
                {filteredSuggestions.map((suggestion, index) => (
<li
                    key={index}
                    className="px-4 py-2 hover:bg-neutral-600 transition rounded-lg cursor-pointer"
                    onClick={() => {
                      setSearchQuery();  // Set the selected suggestion
                      router.push("/searches");  // Navigate to the desired page
                    }}
>
                    {suggestion}
</li>
                ))}
</ul>
</div>
          )}
</div>
</div>
 
 
      {/* Full-Page Welcome Section */}
<div
        className="h-screen flex items-center justify-center bg-neutral-900 pt-10 relative"
        style={{
          backgroundImage: "url(/porsche-gt3-rs-q8-3840x2160.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "", // Optional: Apply blur effect
          position: "x-12"
        }}
>
<h1 className="text-6xl md:text-8xl font-bold text-center backdrop-blur-sm w-full px-4 py-4 rounded-lg text-white">
          Welcome to Motor Mile
</h1>
</div>
 
      {/* Scrollable Pricing Columns Section */}
<div className="sticky grid grid-cols-1 md:grid-cols-3 px-[100px] gap-48 mt-10">
        {/* Column 1 for Services */}
<div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
<h2 className="text-3xl font-semibold mb-4">Routine Maintenance</h2>
<p>
            Keep your vehicle in top shape with regular oil changes, tire
            rotations, and brake inspections.
</p>
</div>
 
        {/* Column 2 for Services */}
<div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
<h2 className="text-3xl font-semibold mb-4">Diagnostics & Repairs</h2>
<p>
            Using advanced diagnostic tools to address engine, transmission,
            and electrical issues with precision.
</p>
</div>
 
        {/* Column 3 for Services */}
<div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
<h2 className="text-3xl font-semibold mb-4">Custom Services</h2>
<p>
            Offering tailored services for luxury and performance vehicles,
            from restoration to performance tuning.
</p>
</div>
</div>
 
      {/* Footer Section */}
<footer className="bg-neutral-800 text-white text-center py-4 mt-10">
<p>&copy; 2024 Motor Mile. All rights reserved.</p>
<p>
          Contact us: <a href="mailto:info@motormile.com" className="underline">info@motormile.com</a>
</p>
</footer>
</div>
  );
}