import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Sparkles, FileText, ArrowRight } from "lucide-react";
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

const trackRecord = [
  {
    label: "Accepted at IEEE venues",
    value: "3 papers",
    detail:
      "SleepEffFormer and WaveFoG at IEEE BECITHCON 2026; DR-LiteNet at iCONEECT 2026.",
  },
  {
    label: "Under peer review",
    value: "2 papers",
    detail: "AWEF-Net and PDGuard, submitted to the 29th IEEE ICCIT 2026.",
  },
  {
    label: "Journal manuscripts in preparation",
    value: "3 papers",
    detail:
      "Anomaly-Aware ForensiBlock, BGD-SF PolySegNet, and LCM-UNet, targeting September 2026 submission.",
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

        <div className="max-w-3xl mx-auto mt-16">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-heading font-semibold text-xl">Research Output</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Since launching in April 2026 the lab has produced nine manuscripts spanning computer vision, signal
            modelling, efficient architectures, and secure data systems. Every paper is available to read in full.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trackRecord.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <p className="font-heading text-2xl font-bold gradient-text">{t.value}</p>
                <p className="text-xs font-medium mt-1">{t.label}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{t.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/publications" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
              See all publications with PDFs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
