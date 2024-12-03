import Image from 'next/image';
import localFont from 'next/font/local';
import { useRouter } from 'next/router';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col bg-neutral-950 text-white">
      {/* Navbar */}
      <div className="flex h-16 w-full bg-neutral-900 items-center px-4">
        {/* Logo - Back to the Left */}
        <div>
          <Image
            src="/motorlogo-removebg-preview-modified.png"
            alt="Preview Image"
            width={170}
            height={170}
          />
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex gap-48 font-semibold justify-center flex-1">
          <a href="https://example.com">Home</a>
          <a href="https://example.com">About</a>
          <a href="https://example.com">Garage</a>
          <a href="https://example.com">Contact</a>
        </div>

        {/* Service Desk Button - Back to the Right */}
        <div>
          <button className="px-4 py-2 bg-gray-500 hover:bg-gray-800 transition rounded-full font-semibold">
            Service Desk
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-5 flex justify-center items-center h-64">
        <p className="text-4xl font-bold text-center">Welcome to Motor Mile</p>
      </div>

      {/* Scrollable Columns Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 flex justify-center  w-[1200px] gap-4 p-5">
          {/* Column 1 */}
          <div className="bg-neutral-800 p-4 rounded-lg">
            <p className="text-2xl font-semibold">What is Motor Mile?</p>
            <p className="p-1 text-md">
              Motor Mile is a premier service garage based in the UK, specializing in comprehensive automotive care and maintenance.
              <p className="p-2"></p>
              Catering to a wide range of vehicles, from everyday cars to luxury models, Motor Mile prides itself on delivering top-notch service with a focus on reliability, quality, and customer satisfaction.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-neutral-800 p-4 text-center rounded-lg">
            <p className="text-2xl text-center font-semibold">Services Offered:</p>
            <p className="p-0.5 font-semibold text-center text-lg">Routine maintenance:</p>
            <p className="p-1">Including oil changes, tire rotations, and brake inspections.</p>
            <p className="p-0.5 font-semibold text-center text-lg">Diagnostics and Repairs:</p>
            <p className="p-1">Utilizing advanced tools to identify and fix engine, transmission, and electrical issues.</p>
            <p className="p-2 font-bold text-center blur hover:blur-none transition">AND MORE...</p>
          </div>

          {/* Column 3 */}
          <div className="bg-neutral-800 p-4 rounded-lg">
            <p className="text-2xl font-semibold">Pricing</p>
            <p>Answer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
