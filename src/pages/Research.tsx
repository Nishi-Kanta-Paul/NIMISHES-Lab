import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Microscope, ShieldCheck, Database, Lightbulb, FileText, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    icon: Brain,
    title: "Medical AI Systems",
    desc: "Designing intelligent systems for analyzing medical data across imaging, signals, and clinical records, including tasks such as detection, classification, and segmentation for real-world healthcare applications.",
    papers: [
      { name: "AWEF-Net - attention-weighted ensemble fusion for chest radiographs (96.3% macro-F1)", pdf: "/papers/AWEF-Net.pdf" },
      { name: "DR-LiteNet - explainable hybrid CNN for diabetic retinopathy grading (QWK 0.884)", pdf: "/papers/DR-LiteNet.pdf" },
      { name: "BGD-SF PolySegNet - boundary-guided polyp segmentation (Dice 0.887 at 35 FPS)", pdf: "/papers/BGD-SF-PolySegNet.pdf" },
    ],
  },
  {
    icon: Microscope,
    title: "Biosignals & Wearable Health",
    desc: "Learning from physiological time series - EEG, accelerometry, and inertial signals - to move clinical assessment out of the lab and into everyday, subject-independent monitoring.",
    papers: [
      { name: "SleepEffFormer - single-channel EEG sleep staging with transition-aware smoothing", pdf: "/papers/SleepEffFormer.pdf" },
      { name: "WaveFoG - wavelet-gated Transformer for freezing-of-gait detection (F1 0.875)", pdf: "/papers/WaveFoG.pdf" },
      { name: "PDGuard - CNN-BiLSTM attention for wearable IMU-based Parkinson's detection", pdf: "/papers/PDGuard.pdf" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Clinical AI & Decision Support",
    desc: "Developing AI-driven tools that support clinical workflows, enhance diagnostic processes, and improve patient care outcomes - validated on held-out subjects and external datasets rather than favourable splits.",
    papers: [
      { name: "BGD-SF PolySegNet - external validation across CVC-ClinicDB, CVC-ColonDB, ETIS-Larib, CVC-300", pdf: "/papers/BGD-SF-PolySegNet.pdf" },
      { name: "PDGuard - subject-disjoint evaluation on the 469-participant PADS cohort", pdf: "/papers/PDGuard.pdf" },
    ],
  },
  {
    icon: Database,
    title: "Healthcare Data Systems & Security",
    desc: "Building scalable, secure, and privacy-aware infrastructures for managing sensitive medical and forensic data, including tamper-evident auditing and behavioral monitoring of authorized insiders.",
    papers: [
      { name: "Anomaly-Aware ForensiBlock - explainable behavioral monitoring for digital evidence access", pdf: "/papers/Anomaly-Aware-ForensiBlock.pdf" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Trustworthy & Efficient AI",
    desc: "Focusing on reliability, interpretability, and computational efficiency so models are deployable on hospital CPUs, edge devices, and smartphone-class hardware - not just on research GPUs.",
    papers: [
      { name: "LCM-UNet - 34K-parameter reparameterizable Mamba U-Net at 0.06 GFLOPs", pdf: "/papers/LCM-UNet.pdf" },
      { name: "SleepEffFormer - AttnSleep-level accuracy with 3-5x fewer parameters", pdf: "/papers/SleepEffFormer.pdf" },
      { name: "DR-LiteNet - Grad-CAM explainability at 4.69M parameters", pdf: "/papers/DR-LiteNet.pdf" },
    ],
  },
];

const Research = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Research Areas" subtitle="Our research spans core areas of AI-driven healthcare innovation - each backed by peer-reviewed or in-progress papers you can read in full" />
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
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground mb-2">Representative papers</p>
                    <ul className="space-y-1.5">
                      {a.papers.map((paper) => (
                        <li key={paper.name}>
                          <a
                            href={paper.pdf}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-start gap-2"
                          >
                            <FileText size={13} className="mt-0.5 shrink-0 text-primary" />
                            {paper.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/publications" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
            Browse all publications and PDFs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
