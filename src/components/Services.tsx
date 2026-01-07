import { motion } from "framer-motion";
import { Palette, Share2, Lightbulb, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design Gráfico",
    description: "Identidade visual, logos, materiais impressos e digitais que comunicam a essência da sua marca.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Gestão completa de redes sociais, criação de conteúdo e estratégias de engajamento.",
  },
  {
    icon: Lightbulb,
    title: "Branding",
    description: "Desenvolvimento de marcas autênticas que se destacam e criam conexões emocionais.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia Digital",
    description: "Planejamento de conteúdo e campanhas para maximizar seu alcance e resultados.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            O que eu faço
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofereço soluções criativas completas para elevar sua presença digital e fortalecer sua marca.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-elevated h-full"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-coral flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
