import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const navItems = [
    {
      name: "Programs",
      hasDropdown: true,
      items: ["Foundation", "Professional", "Expert"],
    },
    {
      name: "Resources",
      hasDropdown: true,
      items: ["Blog", "Free Masterclass", "Community"],
    },
    {
      name: "Courses",
      hasDropdown: true,
      items: ["Web Development", "Data Science", "AI/ML"],
    },
    { name: "About", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  return  (
    <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <div className="flex items-center space-x-2">
              <img
                src="/Final_Logo_Page1.jpg"
                alt="RS Softtecs Logo"
                className="h-[60px] w-auto object-contain"
              />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded-lg shadow-lg z-50 min-w-[160px]">
                    <ul className="py-2">
                      {item.items.map((subItem) => (
                        <li key={subItem}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Log In
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 shadow-button">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between text-foreground hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && openDropdown === item.name && (
                    <ul className="ml-4 mt-2 space-y-1 text-sm">
                      {item.items.map((subItem) => (
                        <li key={subItem}>
                          <a
                            href="#"
                            className="block text-gray-500 hover:text-primary"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary text-primary">
                  Log In
                </Button>
                <Button className="bg-gradient-primary">Enroll Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
