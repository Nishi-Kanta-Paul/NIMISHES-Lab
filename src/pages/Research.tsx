import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Network, Shrink, Layers, Cpu, Eye, Activity, Lightbulb, Scale, ShieldCheck, FlaskConical, FileText, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    icon: Network,
    title: "Deep Learning Architectures",
    desc: "Designing and analysing neural architectures  convolutional, recurrent, Transformer, and state-space models  with a focus on attention, gating, and multi-branch fusion as mechanisms for combining heterogeneous representations.",
    papers: [
      { name: "AWEF-Net - input-adaptive attention gating for ensemble fusion", pdf: "/papers/AWEF-Net.pdf" },
      { name: "WaveFoG - wavelet-gated dual-branch CNN-Transformer", pdf: "/papers/WaveFoG.pdf" },
      { name: "LCM-UNet - state-space (Mamba) U-Net with reparameterizable local adapters" },
    ],
  },
  {
    icon: Cpu,
    title: "Efficient & Edge AI",
    desc: "Building models under hard parameter, latency, and FLOP budgets so they run on CPUs, edge devices, and consumer hardware  using structural reparameterization, compact backbones, and architecture-level compression rather than post-hoc pruning alone.",
    papers: [
      { name: "LCM-UNet - 34,180 parameters at 0.06 GFLOPs, fused exactly at inference" },
      { name: "SleepEffFormer - competitive accuracy with 3-5x fewer parameters", pdf: "/papers/SleepEffFormer.pdf" },
      { name: "PDGuard - 18.3 ms per window on CPU, smartphone-class deployment", pdf: "/papers/PDGuard.pdf" },
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Classification, segmentation, and dense prediction  including boundary-aware segmentation, multi-scale context aggregation, selective skip fusion, and ensemble strategies that adapt to the input rather than averaging over it.",
    papers: [
      { name: "BGD-SF PolySegNet - boundary guidance as an architectural component" },
      { name: "LCM-UNet - ultralight segmentation with reparameterized local compensation" },
      { name: "AWEF-Net - multi-class image classification via adaptive ensemble fusion", pdf: "/papers/AWEF-Net.pdf" },
    ],
  },
  {
    icon: Activity,
    title: "Time-Series & Signal Intelligence",
    desc: "Learning from sequential and sensor data  wavelet and spectral representations, temporal context modelling, and sequence-level post-processing  evaluated under subject-independent protocols that test genuine generalisation.",
    papers: [
      { name: "SleepEffFormer - CNN-Transformer with transition-aware sequence smoothing", pdf: "/papers/SleepEffFormer.pdf" },
      { name: "WaveFoG - discrete wavelet sub-band gating for event detection", pdf: "/papers/WaveFoG.pdf" },
      { name: "PDGuard - CNN-BiLSTM attention over raw multi-channel sensor streams", pdf: "/papers/PDGuard.pdf" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Explainable & Trustworthy AI",
    desc: "Making predictions inspectable and defensible by the people who act on them, through gradient- and game-theoretic attribution, attention analysis, and calibrated, honestly-reported uncertainty.",
    papers: [
      { name: "DR-LiteNet - Grad-CAM saliency for post-hoc explanation", pdf: "/papers/DR-LiteNet.pdf" },
      { name: "Anomaly-Aware ForensiBlock - TreeSHAP explanations with verifiable audit linkage" },
      { name: "SleepEffFormer - attention maps validated against domain expectations", pdf: "/papers/SleepEffFormer.pdf" },
    ],
  },
  {
    icon: Scale,
    title: "Imbalanced & Data-Efficient Learning",
    desc: "Handling skewed, long-tailed, and label-scarce data as a first-class problem  synthetic minority generation in feature space, cost-sensitive objectives, and evaluation metrics that do not flatter a majority-class predictor.",
    papers: [
      { name: "DR-LiteNet - ADASYN applied in feature space across five imbalanced grades", pdf: "/papers/DR-LiteNet.pdf" },
      { name: "WaveFoG - focal loss where positives are 12-18% of windows", pdf: "/papers/WaveFoG.pdf" },
      { name: "Anomaly-Aware ForensiBlock - AUPRC-first evaluation at ~80x the no-skill baseline" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure & Intelligent Data Systems",
    desc: "Anomaly detection, behavioral monitoring, and privacy-aware infrastructure for sensitive data  combining machine learning with tamper-evident logging, access control, and verifiable auditing.",
    papers: [
      { name: "Anomaly-Aware ForensiBlock - risk-adaptive behavioral monitoring on-chain" },
    ],
  },
  {
    icon: FlaskConical,
    title: "Rigorous Evaluation & Reproducibility",
    desc: "Treating experimental design as part of the contribution: subject-disjoint and grouped cross-validation, external held-out datasets, non-parametric significance testing with effect sizes, and baselines that share identical folds and preprocessing.",
    papers: [
      { name: "BGD-SF PolySegNet - four external datasets, Wilcoxon tests across seven ablations" },
      { name: "LCM-UNet - three seeds, paired image-level tests, external transfer evaluation" },
      { name: "PDGuard - strictly subject-disjoint folds shared by every baseline", pdf: "/papers/PDGuard.pdf" },
    ],
  },
];


const methods = [
  {
    icon: Shrink,
    title: "Efficient & Lightweight Architectures",
    desc: "Designing models under hard parameter and FLOP budgets without surrendering accuracy.",
    evidence: "LCM-UNet at 34,180 parameters / 0.06 GFLOPs - SleepEffFormer matching AttnSleep with 3-5x fewer parameters - DR-LiteNet beating ResNet50 at a fifth of the size",
  },
  {
    icon: Layers,
    title: "Attention, Gating & Multi-Branch Fusion",
    desc: "Learning how to combine heterogeneous representations instead of averaging or concatenating them.",
    evidence: "AWEF-Net input-adaptive ensemble gating - WaveFoG wavelet sub-band gating - BGD-SF boundary-guided selective attention fusion",
  },
  {
    icon: Cpu,
    title: "Structural Reparameterization",
    desc: "Adding capacity during training that folds away exactly at inference, leaving the deployed graph unchanged.",
    evidence: "LCM-UNet - dilated depthwise adapters merged into a single sparse kernel, verified to numerical tolerance",
  },
  {
    icon: Scale,
    title: "Imbalanced & Long-Tail Learning",
    desc: "Treating skewed label distributions as a first-class problem, and reporting metrics that survive them.",
    evidence: "ADASYN in feature space (DR-LiteNet) - focal loss under 12-18% positives (WaveFoG) - AUPRC-first evaluation at ~80x no-skill (ForensiBlock)",
  },
  {
    icon: Eye,
    title: "Explainability & Model Interpretation",
    desc: "Making predictions inspectable by the people who have to act on them.",
    evidence: "Grad-CAM saliency (DR-LiteNet) - TreeSHAP with encrypted, hash-linked audit reports (ForensiBlock) - attention and temporal saliency maps (SleepEffFormer, WaveFoG)",
  },
  {
    icon: FlaskConical,
    title: "Rigorous Evaluation Protocol",
    desc: "Designing experiments that make a claim falsifiable rather than flattering.",
    evidence: "Subject-disjoint and grouped cross-validation - external held-out datasets - Wilcoxon signed-rank tests with effect sizes - baselines sharing identical folds, windows, and preprocessing",
  },
];

const Research = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Research Areas" subtitle="The core areas of machine learning we work in  each backed by peer-reviewed or in-progress papers you can read in full" />
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
                          {paper.pdf ? (
                            <a
                              href={paper.pdf}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-start gap-2"
                            >
                              <FileText size={13} className="mt-0.5 shrink-0 text-primary" />
                              {paper.name}
                            </a>
                          ) : (
                            <span
                              title="Manuscript in preparation - available from the authors on request"
                              className="text-sm text-muted-foreground inline-flex items-start gap-2"
                            >
                              <FileText size={13} className="mt-0.5 shrink-0 text-muted-foreground" />
                              {paper.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">Methods &amp; Expertise</h3>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              The technical threads that run through our work. We validate them on demanding public benchmarks across
              vision, sensor, and security data  wherever models must be small, honest, and accountable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {methods.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <m.icon className="h-7 w-7 text-primary mb-3" />
                <h4 className="font-heading font-semibold mb-2">{m.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <p className="text-xs text-muted-foreground/80 mt-3 pt-3 border-t border-border leading-relaxed">
                  {m.evidence}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/publications" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
            Browse all publications and PDFs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
