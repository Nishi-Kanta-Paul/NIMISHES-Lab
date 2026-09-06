import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Microscope, Database, Lightbulb, ShieldCheck, ArrowRight, Newspaper, Users, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-medical-ai.jpg";

const researchAreas = [
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

const projects = [
  {
    title: "Green Multimodal Clinical AI",
    desc: "Efficient multimodal radiology report generation tailored for low-resource clinical settings.",
    status: "Ongoing",
    duration: "May 2026 - June 2026",
  },
  {
    title: "Multimodal Cardiovascular Signal Intelligence",
    desc: "Fusion of physiological signals for robust and interpretable cardiovascular monitoring.",
    status: "Planned",
    duration: "June 2026 - July 2026",
  },
  {
    title: "Privacy-Preserving Clinical Language Systems",
    desc: "Local-first clinical language AI with secure handling of sensitive patient records.",
    status: "Planned",
    duration: "July 2026 - August 2026",
  },
  {
    title: "Label-Efficient Medical Imaging AI",
    desc: "Learning from unlabeled medical data to reduce annotation needs and improve rare disease detection.",
    status: "Planned",
    duration: "August 2026 - September 2026",
  },
  {
    title: "Real-Time Clinical Workflow Intelligence",
    desc: "Edge-efficient visual intelligence for procedural stage recognition and workflow support.",
    status: "Planned",
    duration: "September 2026 - October 2026",
  },
];

const news = [
  { date: "Sep 2026", text: "Three journal manuscripts in preparation: ForensiBlock, BGD-SF PolySegNet, and LCM-UNet" },
  { date: "Aug 2026", text: "AWEF-Net and PDGuard submitted to IEEE ICCIT 2026 (under review)" },
  { date: "Jul 2026", text: "DR-LiteNet accepted at iCONEECT 2026" },
  { date: "Jun 2026", text: "SleepEffFormer and WaveFoG accepted at IEEE BECITHCON 2026" },
  { date: "Apr 2026", text: "NIMISHES Lab officially launches as an independent research initiative" },
];

const publications = [
  {
    title: "SleepEffFormer: Efficient CNN-Transformer with Transition-Aware Smoothing for Single-Channel EEG Sleep Stage Classification",
    venue: "IEEE BECITHCON 2026",
    status: "Accepted",
    result: "83.9% accuracy, 78.9% macro-F1 with only ~367K parameters",
    pdf: "/papers/SleepEffFormer.pdf",
  },
  {
    title: "WaveFoG: Wavelet-Gated Transformer for Parkinson's Freezing of Gait Detection",
    venue: "IEEE BECITHCON 2026",
    status: "Accepted",
    result: "F1 0.875 under subject-independent ten-fold cross-validation",
    pdf: "/papers/WaveFoG.pdf",
  },
  {
    title: "DR-LiteNet: Lightweight Explainable Hybrid CNN for Imbalanced Diabetic Retinopathy Grading",
    venue: "iCONEECT 2026",
    status: "Accepted",
    result: "QWK 0.884 on APTOS 2019 with 4.69M parameters",
    pdf: "/papers/DR-LiteNet.pdf",
  },
  {
    title: "AWEF-Net: Attention-Weighted Ensemble Fusion for Multi-Class Pulmonary Disease Classification",
    venue: "IEEE ICCIT 2026",
    status: "Under Review",
    result: "96.3% macro-F1 on the COVID-19 Radiography Database",
    pdf: "/papers/AWEF-Net.pdf",
  },
  {
    title: "BGD-SF PolySegNet: Boundary-Guided Dynamic Selective Fusion for Polyp Segmentation",
    venue: "Journal manuscript",
    status: "In Preparation",
    result: "Dice 0.887 at 35 FPS, +34.6% ASSD over CNN baselines",
    pdf: "/papers/BGD-SF-PolySegNet.pdf",
  },
  {
    title: "LCM-UNet: Reparameterizable Local-Compensated Mamba U-Net for Skin Lesion Segmentation",
    venue: "Journal manuscript",
    status: "In Preparation",
    result: "34,180 parameters and 0.06 GFLOPs after reparameterization",
    pdf: "/papers/LCM-UNet.pdf",
  },
];

const pubStatusColors: Record<string, string> = {
  Accepted: "bg-emerald-500/10 text-emerald-400",
  "Under Review": "bg-primary/10 text-primary",
  "In Preparation": "bg-yellow-500/10 text-yellow-400",
};

const impact = [
  { value: "8", label: "Manuscripts" },
  { value: "3", label: "IEEE acceptances" },
  { value: "2", label: "Under review" },
  { value: "3", label: "Journals in preparation" },
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
      <div className="absolute inset-0">
        <img src={heroImage} alt="AI Medical Imaging" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-heading font-medium mb-4 tracking-wider text-sm uppercase">
            Nishi Medical Imaging & Intelligent Health Engineering Systems
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            NIMISHES <span className="gradient-text">Lab</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Advancing AI-driven Medical Imaging & Intelligent Healthcare Systems. An emerging independent research lab focused on building reliable, explainable AI tools for clinical applications.
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
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Impact strip */}
    <section className="py-12 border-y border-border bg-card/30">
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Research Areas" subtitle="Our work spans multiple domains at the intersection of AI and healthcare" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>

    {/* Selected Publications */}
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Selected Publications"
          subtitle="Peer-reviewed and in-progress work across medical imaging, biosignals, and trustworthy AI - full PDFs available"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {publications.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.pdf}
              target="_blank"
              rel="noreferrer"
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded ${pubStatusColors[p.status]}`}>{p.status}</span>
                <span className="text-xs text-muted-foreground">{p.venue}</span>
              </div>
              <h3 className="font-heading font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 flex-1">{p.result}</p>
              <span className="text-xs text-primary mt-4 inline-flex items-center gap-1">
                <FileText size={13} /> Read PDF
              </span>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/publications" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
            View all publications <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" subtitle="2026 project roadmap across green AI, biosignals, privacy, and clinical workflows" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{p.status}</span>
                <span className="text-xs text-muted-foreground">{p.duration}</span>
              </div>
              <h3 className="font-heading font-semibold mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/projects" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
            View all projects <ArrowRight size={14} />
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
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeUp}>
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold mb-4">Join the Lab</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We welcome researchers, students, and collaborators passionate about AI in healthcare.
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
