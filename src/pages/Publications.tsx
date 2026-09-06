import { motion } from "framer-motion";
import { FileText, Github, CheckCircle2, Clock, PenLine, Users2, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

type Status = "Accepted" | "Under Review" | "In Preparation";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  venueNote?: string;
  domain: string;
  summary: string;
  highlights: string[];
  keywords: string[];
  pdf: string;
  code?: string;
};

type Section = {
  status: Status;
  icon: LucideIcon;
  blurb: string;
  papers: Paper[];
};

const sections: Section[] = [
  {
    status: "Accepted",
    icon: CheckCircle2,
    blurb: "Peer-reviewed and accepted for presentation at IEEE conferences.",
    papers: [
      {
        title:
          "SleepEffFormer: Efficient CNN-Transformer with Transition-Aware Smoothing for Single-Channel EEG Sleep Stage Classification",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Israt Jerin Esha, Adrita Rahman",
        venue: "5th IEEE Int. Conf. on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON 2026)",
        venueNote: "Dhaka, Bangladesh - 4-5 September 2026",
        domain: "Biosignals - EEG",
        summary:
          "A lightweight CNN-Transformer for automated sleep staging from a single EEG channel, paired with a non-parametric Transition-Aware Smoothing (TAS) layer that suppresses physiologically implausible stage transitions.",
        highlights: [
          "83.9% accuracy, 78.9% macro-F1, Cohen's kappa 0.765 on Sleep-EDF Expanded (78 all-night recordings, subject-wise split)",
          "Matches AttnSleep with 3-5x fewer parameters (~367K)",
          "Transformer encoder adds +6.6 pp macro-F1; TAS adds +1.8 pp with zero trainable parameters",
          "Attention maps recover physiologically meaningful sleep-stage EEG signatures",
        ],
        keywords: ["Sleep staging", "Single-channel EEG", "Transformer", "1D CNN", "Explainability", "Lightweight DL"],
        pdf: "/papers/SleepEffFormer.pdf",
        code: "https://github.com/Nishi-Kanta-Paul/SleepStage",
      },
      {
        title:
          "WaveFoG: Wavelet-Gated Transformer for Parkinson's Freezing of Gait Detection Using Wearable Accelerometer Signals",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Adrita Rahman, Israt Jerin Esha",
        venue: "5th IEEE Int. Conf. on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON 2026)",
        venueNote: "Dhaka, Bangladesh - 4-5 September 2026",
        domain: "Wearables - Parkinson's Disease",
        summary:
          "A dual-branch CNN-Transformer that fuses discrete wavelet sub-band descriptors through a sigmoid gating layer to detect freezing-of-gait episodes from wrist-worn accelerometers under severe class imbalance.",
        highlights: [
          "F1 0.875 +/- 0.017 and AUPRC 0.833 +/- 0.020 on the Kaggle TLVMC FoG dataset",
          "Subject-independent grouped ten-fold cross-validation",
          "Up to +5.4 pp F1 over 1D CNN, Bi-LSTM, and vanilla Transformer baselines",
          "Temporal saliency maps align with reported FoG onset characteristics",
        ],
        keywords: ["Freezing of gait", "Parkinson's disease", "Wearable IMU", "Discrete wavelet transform", "Focal loss"],
        pdf: "/papers/WaveFoG.pdf",
        code: "https://github.com/Shihabul-Shuvo/WaveFoG",
      },
      {
        title:
          "DR-LiteNet: A Lightweight Explainable Hybrid CNN Framework for Imbalanced Diabetic Retinopathy Grading via Adaptive SMOTE Fusion",
        authors: "NIMISHES Lab",
        venue:
          "1st Int. Conf. on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT 2026)",
        domain: "Medical Imaging - Ophthalmology",
        summary:
          "A dual-branch network that fuses 1,280-d EfficientNetB0 features with a 52-d handcrafted lesion descriptor (vessel density, exudate intensity, texture entropy, HSV histograms), then applies ADASYN in feature space to correct five-grade class imbalance without touching the images.",
        highlights: [
          "88.77% +/- 0.61 accuracy, QWK 0.884 +/- 0.010, macro-F1 0.792 +/- 0.008 on APTOS 2019",
          "Only 4.69M parameters - beats ResNet50 (23.5M) by delta-QWK = 0.022",
          "Two-phase training: balanced head warm-up, then end-to-end fine-tuning",
          "Grad-CAM saliency maps for post-hoc clinical explainability",
        ],
        keywords: ["Diabetic retinopathy", "Class imbalance", "ADASYN", "EfficientNet", "Grad-CAM", "Explainable AI"],
        pdf: "/papers/DR-LiteNet.pdf",
      },
    ],
  },
  {
    status: "Under Review",
    icon: Clock,
    blurb: "Submitted to the 29th IEEE International Conference on Computer and Information Technology (ICCIT 2026).",
    papers: [
      {
        title:
          "AWEF-Net: An Attention-Weighted Ensemble Fusion Framework for Multi-Class Pulmonary Disease Classification from Chest Radiographs",
        authors: "NIMISHES Lab",
        venue: "29th IEEE Int. Conf. on Computer and Information Technology (ICCIT 2026)",
        venueNote: "Submitted - under review",
        domain: "Medical Imaging - Radiology",
        summary:
          "Replaces fixed late-fusion rules with a lightweight two-layer MLP attention gate that produces input-adaptive weights for ResNet50, InceptionV3, and DenseNet201, resolving the inter-model feature conflict where one backbone dominates the fused decision.",
        highlights: [
          "96.3% macro-F1 and 97.1% COVID-19 recall on the COVID-19 Radiography Database (21,165 images, 4 classes)",
          "+1.4 pp macro-F1 and +1.7 pp COVID recall over the strongest fixed-fusion baseline",
          "Gating adds under 0.6% of total model parameters",
          "Better cross-dataset generalisation on an external CXR corpus; learned weights reveal class-dependent backbone reliance",
        ],
        keywords: ["Chest radiography", "Ensemble learning", "Attention", "Feature fusion", "COVID-19"],
        pdf: "/papers/AWEF-Net.pdf",
      },
      {
        title: "PDGuard: A CNN-BiLSTM Attention Network for Wearable IMU-Based Parkinson's Disease Detection",
        authors: "NIMISHES Lab",
        venue: "29th IEEE Int. Conf. on Computer and Information Technology (ICCIT 2026)",
        venueNote: "Submitted - under review",
        domain: "Wearables - Parkinson's Disease",
        summary:
          "A compact 1D-convolution, bidirectional LSTM, and multi-head self-attention network that classifies raw wrist-worn accelerometer and gyroscope streams, targeting frequent monitoring outside the clinic.",
        highlights: [
          "88.34% +/- 1.01 accuracy, 83.79% balanced accuracy, pooled held-out ROC-AUC 0.918 on the PADS cohort (469 participants)",
          "77.34% accuracy on the harder PD vs. differential-diagnosis task",
          "Strictly subject-disjoint five-fold cross-validation; all baselines share folds, windows, and preprocessing",
          "1.24M parameters, 18.3 ms per 4.8 s window on CPU - smartphone-class deployment",
        ],
        keywords: ["Parkinson's disease", "IMU", "CNN", "Bi-LSTM", "Attention", "Wearable health"],
        pdf: "/papers/PDGuard.pdf",
      },
    ],
  },
  {
    status: "In Preparation",
    icon: PenLine,
    blurb: "Journal manuscripts in preparation, targeting submission in September 2026.",
    papers: [
      {
        title: "Anomaly-Aware ForensiBlock: Explainable Behavioral Monitoring for Digital Evidence Access",
        authors: "Asma Jodeiri Akbarfam, Nishi Kanta Paul, Shereen Ismail",
        venue: "Journal manuscript",
        venueNote: "Target submission: September 2026",
        domain: "Blockchain Forensics - Explainable AI",
        summary:
          "Extends the RBAC-SA blockchain forensics model with real-time behavioral anomaly scoring, risk-adaptive response, asynchronous TreeSHAP explanations, and verifiable on-chain auditing - detecting insider misuse that static authorization cannot see.",
        highlights: [
          "XGBoost: AUPRC 0.257 / AUROC 0.953 across 30 re-splits of CERT r4.2 (~80x the no-skill AUPRC under heavy imbalance)",
          "Random Forest: AUPRC 0.745 / F1 0.778 on full-schema corpus simulation",
          "9.37 ms mean anomaly-scoring overhead (P99 = 10.37 ms) in the integrated prototype",
          "All 25 alerts queued, logged, explained, and linked; all 65 audited transactions processed without linkage failure",
        ],
        keywords: ["Behavioral anomaly detection", "Blockchain", "Digital forensics", "Insider threat", "TreeSHAP", "Smart contracts"],
        pdf: "/papers/Anomaly-Aware-ForensiBlock.pdf",
      },
      {
        title:
          "BGD-SF PolySegNet: Boundary-Guided Dynamic Selective Fusion Network for Robust Polyp Segmentation in Colonoscopy Images",
        authors: "Nishi Kanta Paul, Shamia Maherin, Morsheda Akter",
        venue: "Journal manuscript",
        venueNote: "Target submission: September 2026",
        domain: "Medical Imaging - Endoscopy",
        summary:
          "Treats boundary information as an active architectural component rather than an auxiliary loss, steering multi-scale context aggregation, selective skip fusion, and mask refinement through three modules on an EfficientNet-B4 backbone.",
        highlights: [
          "Internal test set: Dice 0.887, IoU 0.839, Boundary-F1 0.531, HD95 30.32, ASSD 18.10",
          "+15.7% Boundary-F1, +27.5% HD95, +34.6% ASSD over the strongest CNN baselines",
          "External validation - CVC-ClinicDB 0.891, CVC-ColonDB 0.776, ETIS-Larib 0.863, CVC-300 0.885 Dice",
          "35 FPS, 22.51M parameters, 65.46 GFLOPs; Wilcoxon tests significant in 6 of 7 ablation variants (p < 0.001)",
        ],
        keywords: ["Polyp segmentation", "Colonoscopy", "Boundary guidance", "EfficientNet-B4", "Attention fusion"],
        pdf: "/papers/BGD-SF-PolySegNet.pdf",
      },
      {
        title: "LCM-UNet: A Reparameterizable Local-Compensated Mamba U-Net for Skin Lesion Segmentation",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Kishor Morol",
        venue: "Journal manuscript",
        venueNote: "Target submission: September 2026",
        domain: "Medical Imaging - Dermatology",
        summary:
          "Strengthens the local pathway of an ultra-compact state-space segmentation network with a zero-initialized dilated depthwise adapter that merges exactly into a single kernel after training - more capacity during learning, an unchanged graph at inference.",
        highlights: [
          "34,180 parameters and 0.05974 GFLOPs after reparameterization - four parameters more than the reference, identical cost",
          "+0.48 / +0.37 pp IoU and +0.29 / +0.22 pp DSC over a retrained reference backbone on ISIC 2017 and ISIC 2018",
          "External PH2 transfer: 86.37% +/- 0.29 IoU vs. 85.91% +/- 0.29 for the reference",
          "Fused and unfused models emit identical masks to numerical tolerance; image-level Wilcoxon significant at p < 1e-4",
        ],
        keywords: ["Skin lesion segmentation", "State space model", "Mamba", "Structural reparameterization", "U-Net"],
        pdf: "/papers/LCM-UNet.pdf",
      },
    ],
  },
];

const statusStyles: Record<Status, string> = {
  Accepted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Under Review": "bg-primary/10 text-primary border-primary/20",
  "In Preparation": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const stats = [
  { value: "8", label: "Manuscripts" },
  { value: "3", label: "Accepted at IEEE venues" },
  { value: "2", label: "Under review (ICCIT 2026)" },
  { value: "3", label: "Journal papers in preparation" },
];

const Publications = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Publications"
          subtitle="Peer-reviewed and in-progress research from NIMISHES Lab across medical imaging, biosignals, and trustworthy AI. Full PDFs are available for every manuscript."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-xl bg-card border border-border text-center"
            >
              <p className="font-heading text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section) => (
            <div key={section.status}>
              <div className="flex items-center gap-2 mb-1">
                <section.icon className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-semibold text-xl">{section.status}</h3>
                <span className="text-xs text-muted-foreground">({section.papers.length})</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{section.blurb}</p>

              <div className="space-y-6">
                {section.papers.map((p, i) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded border ${statusStyles[section.status]}`}>
                        {section.status}
                      </span>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-secondary">{p.domain}</span>
                    </div>

                    <h4 className="font-heading font-semibold text-lg leading-snug">{p.title}</h4>

                    <p className="text-xs text-muted-foreground mt-2 flex items-start gap-1.5">
                      <Users2 size={13} className="mt-0.5 shrink-0" />
                      {p.authors}
                    </p>
                    <p className="text-xs text-primary mt-1">{p.venue}</p>
                    {p.venueNote && <p className="text-xs text-muted-foreground mt-0.5">{p.venueNote}</p>}

                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">{p.summary}</p>

                    <div className="mt-4">
                      <p className="text-xs font-medium text-foreground uppercase tracking-wide mb-2">Key results</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.keywords.map((k) => (
                        <span key={k} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {k}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-5">
                      <a
                        href={p.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        <FileText size={15} /> Read PDF
                      </a>
                      {p.code && (
                        <a
                          href={p.code}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
                        >
                          <Github size={15} /> Source code
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-4xl mx-auto text-xs text-muted-foreground mt-12 text-center">
          Manuscripts under review or in preparation are shared as author preprints for review purposes and may differ from
          the final published versions.
        </p>
      </div>
    </section>
  </Layout>
);

export default Publications;
