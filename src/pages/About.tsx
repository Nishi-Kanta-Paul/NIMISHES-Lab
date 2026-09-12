import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: Eye,
    title: "Vision",
    text: "To build a future where intelligent systems augment high-stakes human decisions, making accurate, timely, and equitable outcomes accessible across diverse and resource-constrained environments  not only where the compute budget is generous.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To design and deploy reliable, efficient, and evidence-grounded AI systems  bridging the gap between research prototypes and real-world impact in any domain where trust, efficiency, and accountability are non-negotiable.",
  },
  {
    icon: BookOpen,
    title: "Research Philosophy",
    text: "We approach applied AI as a systems problem, not a leaderboard. Our work emphasizes reproducibility, robustness, and real-world constraints  subject-disjoint evaluation, external validation, and honest statistics  combined with deployment realities such as parameter budgets, interpretability, and continuous adaptation.",
  },
  {
    icon: Sparkles,
    title: "Our Story",
    text: "NIMISHES Lab was founded in 2026 as an independent research initiative focused on rethinking how AI systems are built and deployed under real constraints. Motivated by the gap between benchmark results and working systems, the lab emphasizes practical, scalable solutions over purely theoretical advances. Starting as a small initiative, we aim to grow into a collaborative research hub tackling problems where model efficiency, interpretability, and honest evaluation actually decide whether a system is usable.",
  },
];


const About = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="About NIMISHES Lab" subtitle="An independent AI and machine learning research lab building efficient, explainable systems for high-stakes decisions" />
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
