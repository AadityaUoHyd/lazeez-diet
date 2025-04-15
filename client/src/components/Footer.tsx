import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-10 pb-6">
      {/* Top grid section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-purple-500 transition">About Us</a></li>
            <li><a href="/careers" className="hover:text-purple-500 transition">Careers</a></li>
            <li><a href="/team" className="hover:text-purple-500 transition">Team</a></li>
            <li><a href="/contact" className="hover:text-purple-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* For Dieters */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-4">For Dieters</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/track-meal" className="hover:text-purple-500 transition">Track Meals</a></li>
            <li><a href="/suggest-recipes" className="hover:text-purple-500 transition">Suggest Recipes</a></li>
            <li><a href="/community" className="hover:text-purple-500 transition">Community</a></li>
            <li><a href="/support" className="hover:text-purple-500 transition">Support</a></li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-purple-500 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-purple-500 transition">Terms & Conditions</a></li>
            <li><a href="/faqs" className="hover:text-purple-500 transition">FAQs</a></li>
            <li><a href="/sitemap" className="hover:text-purple-500 transition">Sitemap</a></li>
          </ul>
        </div>

        {/* Social + Country */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-4">Connect with us</h3>
          <div className="flex gap-3">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-500 hover:text-black transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-500 hover:text-black transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-500 hover:text-black transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-500 hover:text-black transition">
              <Linkedin size={18} />
            </a>
          </div>
          <div className="mt-6">
            <label className="block text-sm mb-2">Country & Language</label>
            <select className="bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm w-full">
              <option>India - English</option>
              <option>USA - English</option>
              <option>Germany - Deutsch</option>
              <option>France - Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 space-y-4">
        

        <p className="text-xs leading-relaxed max-w-3xl mx-auto">
          By continuing past this page, you agree to our <span className="text-white underline cursor-pointer">Terms of Service</span>, <span className="text-white underline cursor-pointer">Cookie Policy</span>, <span className="text-white underline cursor-pointer">Privacy Policy</span> and <span className="text-white underline cursor-pointer">Content Policies</span>. All trademarks are properties of their respective owners.
        </p>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} Lazeez Diet. All rights reserved.
        </p>

        <p className="text-xs italic text-gray-500">Developed by - <a href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/" className="hover:text-purple-500">Aaditya B Chatterjee.</a></p>
      </div>
    </footer>
  );
};

export default Footer;
