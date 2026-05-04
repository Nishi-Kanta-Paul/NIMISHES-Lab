import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: Eye,
    title: "Vision",
    text: "To build a future where intelligent systems augment clinical decision-making, making accurate, timely, and equitable healthcare accessible across diverse and resource-constrained environments.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To design and deploy reliable, efficient, and clinically grounded AI systems for medical data analysis  bridging the gap between research prototypes and real-world healthcare impact.",
  },
  {
    icon: BookOpen,
    title: "Research Philosophy",
    text: "We approach healthcare AI as a systems problem. Our work emphasizes reproducibility, robustness, and real-world constraints, combining advances in machine learning with practical deployment considerations such as efficiency, interpretability, and continuous adaptation.",
  },
  {
    icon: Sparkles,
    title: "Our Story",
    text: "NIMISHES Lab was founded in 2026 as an independent research initiative focused on rethinking how AI systems are built and deployed in healthcare. Motivated by real-world challenges in clinical settings, the lab emphasizes practical, scalable solutions over purely theoretical advances. Starting as a small initiative, we aim to grow into a collaborative research hub addressing critical gaps in global healthcare systems.",
  },
];

const About = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="About NIMISHES Lab" subtitle="An emerging independent research lab at the intersection of AI and healthcare" />
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-xl bg-card border border-border"
            >
              <s.icon className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
