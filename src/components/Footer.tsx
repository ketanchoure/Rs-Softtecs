import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-tech-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <span className="text-2xl font-bold">
                RS <span className="text-primary">Softtecs</span>
              </span>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Empowering the next generation of tech professionals with world-class
              education and career guidance. Join thousands of successful students who
              have transformed their careers with us.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 99709 81875</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">contact@rssofttecs.com</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <h3 className="text-xl font-bold">Our Locations</h3>
            <div className="flex flex-col gap-4">
              {/* Deccan */}
              <div className="space-y-2">
                <iframe
                  className="w-full h-40 sm:h-48 rounded"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.257718510098!2d73.8436811!3d18.5172524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9def03dcfbb%3A0x426a5a51c3a72bde!2sRSSofttecs!5e0!3m2!1sen!2sin!4v1754114818517!5m2!1sen!2sin"
                ></iframe>
                <p className="font-semibold text-gray-200 text-xs sm:text-sm">
                  Office No 2, 4th Floor, Bhosale Shinde Arcade, JM Road, Near Deccan Bus Stop, Pune
                </p>
              </div>

              {/* Karve Nagar */}
              <div className="space-y-2">
                <iframe
                  className="w-full h-40 sm:h-48 rounded"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8975032064095!2d73.81171567456519!3d18.488301370160425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0060be0469%3A0x527943f74e396e51!2sRS%20Softtecs%20-%20Best%20Java%20Classes%20in%20Pune!5e0!3m2!1sen!2sin!4v1754115039991!5m2!1sen!2sin"
                ></iframe>
                <p className="font-semibold text-gray-200 text-xs sm:text-sm">
                  Office No 29/B Wing, 4th Floor, Yashashree Park, Warje Malwadi Rd, Near Karve Nagar PMT Bus Stop, Karve Nagar, Pune
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4 mb-0">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} RS Softtecs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
