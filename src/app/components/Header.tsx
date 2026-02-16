import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import Favicon from "@/assets/images/favicon-32x32.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/services", label: "Услуги" },
    { path: "/tariffs", label: "Тарифы" },
    { path: "/about", label: "О компании" },
    { path: "/contacts", label: "Контакты" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={Favicon}
              alt="Moscow Cargo Group"
              className="w-10 h-10 object-contain logo-brand"
            />
            <div className="text-xl lg:text-2xl font-bold text-blue-600">
              Moscow Cargo Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <a
            href="tel:+76972072478"
            className="hidden lg:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">+7 (697) 207-24-78</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 transition-colors ${
                  isActive(item.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+76972072478"
              className="flex items-center gap-2 py-3 text-blue-600 font-semibold"
            >
              <Phone className="w-5 h-5" />
              +7 (697) 207-24-78
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
