import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <nav className="container mx-auto px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-lg border border-border shadow-card">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="font-display text-xl font-bold">
              <span className="text-gradient">Designer</span>
            </a>

            {/* Desktop navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-coral transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div className="hidden md:block">
              <a
                href="#contato"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-coral font-display text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-elevated hover:scale-105"
              >
                Fale Comigo
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-border"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-gradient-coral font-display font-semibold text-primary-foreground"
                  >
                    Fale Comigo
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
