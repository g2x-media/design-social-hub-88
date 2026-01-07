import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#" className="font-display text-lg font-bold">
            <span className="text-gradient">Designer</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • Feito com{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> por Designer
          </p>

          {/* Back to top */}
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao topo ↑
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
