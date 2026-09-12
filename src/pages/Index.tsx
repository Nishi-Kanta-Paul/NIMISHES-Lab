import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Network, Cpu, Eye, Lightbulb, ArrowRight, Newspaper, Users, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";

const researchAreas = [
  {
    icon: Network,
    title: "Deep Learning Architectures",
    desc: "CNNs, Transformers, and state-space models, combined through attention, gating, and multi-branch fusion.",
  },
  {
    icon: Cpu,
    title: "Efficient & Edge AI",
    desc: "Models built under hard parameter, latency, and FLOP budgets so they run on CPUs and edge hardware.",
  },
  {
    icon: Eye,
    title: "Vision & Signal Intelligence",
    desc: "Segmentation and classification on medical images, alongside EEG, IMU, and other sensor streams.",
  },
  {
    icon: Lightbulb,
    title: "Explainable & Trustworthy AI",
    desc: "Attribution, attention analysis, and honest evaluation so predictions can be inspected and defended.",
  },
];





const news = [
  { date: "Sep 2026", text: "Four manuscripts in preparation: CoMAF-Polyp (WACV Workshop, with Medical University of Vienna), ForensiBlock, BGD-SF PolySegNet, and LCM-UNet" },
  { date: "Aug 2026", text: "AWEF-Net and PDGuard submitted to IEEE ICCIT 2026 (under review)" },
  { date: "Jul 2026", text: "DR-LiteNet accepted at iCONEECT 2026" },
  { date: "Jun 2026", text: "SleepEffFormer and WaveFoG accepted at IEEE BECITHCON 2026" },
  { date: "Apr 2026", text: "NIMISHES Lab officially launches as an independent research initiative" },
];

const impact = [
  { value: "9", label: "Manuscripts" },
  { value: "3", label: "IEEE acceptances" },
  { value: "2", label: "Under review" },
  { value: "4", label: "In preparation" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-heading font-medium mb-4 tracking-wider text-sm uppercase">
            Independent AI &amp; Machine Learning Research Lab
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            NIMISHES <span className="gradient-text">Lab</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We build efficient, explainable deep learning systems for high-stakes decisions  models small enough to deploy, transparent enough to trust, and evaluated honestly enough to believe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Research <ArrowRight size={18} />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              <FileText size={18} /> Read Our Papers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Impact strip */}
    <section className="py-12 border-y border-border bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impact.map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="text-center">
              <p className="font-heading text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Research Areas */}
    <section id="research-areas" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Research Areas" subtitle="The core areas of machine learning we work in, from architecture design to evaluation methodology" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-border transition-all group"
            >
              <area.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-lg mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/research" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
            View all research areas <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* News */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Latest Updates" />
        <div className="max-w-2xl mx-auto space-y-4">
          {news.map((n, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start p-4 rounded-lg bg-card border border-border"
            >
              <Newspaper className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground">{n.date}</span>
                <p className="text-sm">{n.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeUp}>
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold mb-4">Join the Lab</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We welcome researchers, students, and collaborators passionate about efficient, explainable AI for high-stakes problems.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Involved <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
