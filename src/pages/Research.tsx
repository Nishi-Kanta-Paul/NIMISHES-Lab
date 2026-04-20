import { motion } from "framer-motion";
import { Brain, Microscope, ShieldCheck, Database, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    icon: Brain,
    title: "Medical AI Systems",
    desc: "Designing intelligent systems for analyzing medical data across imaging, signals, and clinical records, including tasks such as detection, classification, and segmentation for real-world healthcare applications.",
  },
  {
    icon: Microscope,
    title: "Multimodal Learning",
    desc: "Exploring methods that integrate diverse data sources such as images, text, and physiological signals to build more comprehensive and context-aware AI models.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical AI & Decision Support",
    desc: "Developing AI-driven tools that support clinical workflows, enhance diagnostic processes, and improve patient care outcomes.",
  },
  {
    icon: Database,
    title: "Healthcare Data Systems",
    desc: "Building scalable, secure, and privacy-aware data infrastructures for managing and processing complex medical datasets.",
  },
  {
    icon: Lightbulb,
    title: "Trustworthy & Efficient AI",
    desc: "Focusing on reliability, interpretability, and computational efficiency to ensure safe and deployable AI in healthcare environments.",
  },
];

const Research = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Research Areas" subtitle="Our research spans core areas of AI-driven healthcare innovation" />
        <div className="space-y-8 max-w-4xl mx-auto">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <a.icon className="h-8 w-8 text-primary shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-xl mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
