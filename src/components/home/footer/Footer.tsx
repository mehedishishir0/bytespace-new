import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"]
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Main Footer Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Left Column: Logo & Newsletter Subscription */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image
                  src="/images/logo.png" 
                  alt="ByteSpace Logo"
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-display font-bold text-[#242528] tracking-wider">
                ByteSpace
              </span>
            </div>

            {/* Newsletter Description */}
            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email Input & Search Button */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <button 
                type="button"
                className="h-12 px-8 bg-brand-accent hover:bg-brand-accent/90 text-gray-900 font-bold text-sm rounded-full transition-colors shadow-sm cursor-pointer flex items-center justify-center"
              >
                Search
              </button>
            </div>

            {/* Terms Consent Text */}
            <p className="text-[11px] text-gray-400 max-w-md leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">
            
            {footerColumns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-4">
                <ul className="space-y-3">
                  {column.map((linkName, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="/404" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        {linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom Footer Copyright & Policies */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/404" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/404" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">
              Terms of Service
            </Link>
            <Link href="/404" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}