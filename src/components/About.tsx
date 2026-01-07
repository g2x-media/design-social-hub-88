import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Anos de experiência" },
  { number: "100+", label: "Projetos entregues" },
  { number: "50+", label: "Clientes satisfeitos" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-4 rounded-3xl border-2 border-primary/30" />
              
              {/* Main image area */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-coral shadow-elevated">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-display text-8xl font-bold text-primary-foreground/90">
                      👋
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 lg:-right-8 px-6 py-3 rounded-xl bg-card border border-border shadow-card"
              >
                <span className="font-display font-semibold text-primary">
                  Criativo & Estratégico
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
              Sobre Mim
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Criando experiências visuais que{" "}
              <span className="text-gradient">inspiram</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Olá! Sou designer gráfico e especialista em social media, apaixonado por 
                criar marcas que se destacam e estratégias digitais que geram resultados reais.
              </p>
              <p>
                Com mais de 5 anos de experiência, já ajudei dezenas de empresas a 
                transformar suas ideias em identidades visuais marcantes e presença digital 
                que engaja e converte.
              </p>
              <p>
                Minha abordagem combina criatividade com estratégia, garantindo que cada 
                projeto não seja apenas bonito, mas também efetivo nos objetivos do negócio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <span className="block font-display text-3xl md:text-4xl font-bold text-gradient">
                    {stat.number}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
