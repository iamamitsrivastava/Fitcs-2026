import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t-4 border-gray-800 pt-20 pb-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/assets/aisct-logo-new.png"
                alt="AISCT Logo"
                width={120}
                height={120}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full mb-2"
              />
            </div>
            <p className="text-gray-300 text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27), bringing together researchers,
              academics, and industry experts from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/call-for-papers" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                  Call for Abstract
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/venue" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                  Venue Information
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <p className="text-sm text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                  Parul University, PO Limda, Vadodara, Gujarat 391760, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <p className="text-sm text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">+91 9384345662</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <p className="text-sm text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">fitcs.conference@paruluniversity.ac.in</p>
              </div>
              <div className="flex items-center space-x-3">
                {/* Contact time */}
                <Clock className="w-4 h-4 text-white flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="text-sm text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Mon - Fri: 9:00AM - 5:00PM</div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Stay Connected</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="https://www.facebook.com/ParulUniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-md"
              >
                <Facebook className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </a>
              <a
                href="https://twitter.com/ParulUniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-md"
              >
                <Twitter className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </a>
              <a
                href="https://www.instagram.com/Paruluniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-md"
              >
                <Instagram className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCeXQgKg0qhTKbNRi5hpIL9A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-md"
              >
                <Youtube className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </a>
              <a
                href="https://www.linkedin.com/company/paruluniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-md"
              >
                <Linkedin className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </a>
            </div>
            <p className="text-sm text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] mb-3">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-gray-900 border border-gray-700 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all min-w-0 rounded-md"
              />
              <button className="px-4 py-2 bg-white text-black font-semibold rounded-md shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 drop-shadow-[0_0_3px_rgba(255,255,255,0.2)] mb-4 md:mb-0">
              © 2026-27 AISCT International Conference. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 drop-shadow-[0_0_3px_rgba(255,255,255,0.2)] mb-4 md:mb-0 flex items-center flex-wrap gap-x-1">
              <span>Designed & Developed by:</span>
              <a href="https://www.linkedin.com/in/amit-srivastava108/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all group">
                <span className="font-bold mr-1 group-hover:underline">Amit Srivastava</span>
                <Linkedin className="w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </a>
              <span>&</span>
              <a href="https://www.linkedin.com/in/mahek-darji-521651303/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all group">
                <span className="font-bold mr-1 group-hover:underline">Mahek Darji</span>
                <Linkedin className="w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </a>
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;