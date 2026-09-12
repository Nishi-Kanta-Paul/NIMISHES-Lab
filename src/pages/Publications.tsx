import { motion } from "framer-motion";
import { FileText, Github, CheckCircle2, Clock, PenLine, Users2, Mail, type LucideIcon } from "lucide-react";
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
  keywords: string[];
  pdf?: string;
  code?: string;
};

type Section = {
  status: Status;
  icon: LucideIcon;
  blurb: string;
  papers: Paper[];
};

const LAB_EMAIL = "nimisheslab72@gmail.com";

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
        keywords: ["Freezing of gait", "Parkinson's disease", "Wearable IMU", "Discrete wavelet transform", "Focal loss"],
        pdf: "/papers/WaveFoG.pdf",
        code: "https://github.com/Shihabul-Shuvo/WaveFoG",
      },
      {
        title:
          "DR-LiteNet: A Lightweight Explainable Hybrid CNN Framework for Imbalanced Diabetic Retinopathy Grading via Adaptive SMOTE Fusion",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Audrija Chowdhury, Israt Jahan Esha",
        venue:
          "1st Int. Conf. on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT 2026)",
        venueNote: "Premier University, Chittagong, Bangladesh - 25-26 September 2026",
        domain: "Medical Imaging - Ophthalmology",
        summary:
          "A dual-branch network that fuses 1,280-d EfficientNetB0 features with a 51-d handcrafted lesion descriptor (vessel density, exudate intensity, texture entropy, HSV histograms) into a 1,331-d hybrid embedding, then applies ADASYN in feature space to correct five-grade class imbalance without touching the images.",
        keywords: ["Diabetic retinopathy", "Class imbalance", "ADASYN", "EfficientNet", "Grad-CAM", "Explainable AI"],
        pdf: "/papers/DR-LiteNet.pdf",
        code: "https://github.com/Nishi-Kanta-Paul/DR-LiteNet",
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
        keywords: ["Parkinson's disease", "IMU", "CNN", "Bi-LSTM", "Attention", "Wearable health"],
        pdf: "/papers/PDGuard.pdf",
      },
    ],
  },
  {
    status: "In Preparation",
    icon: PenLine,
    blurb: "Journal and workshop manuscripts in preparation. These are not circulated publicly - email the authors and they will share a copy on request.",
    papers: [
      {
        title:
          "CoMAF-Polyp: Calibrated Reliability-Aware Fusion of Specialist and Foundation Pseudo-Labels for Semi-Supervised Polyp Segmentation",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Camila González",
        venue: "WACV Workshop",
        venueNote: "Target venue - manuscript in preparation",
        domain: "Medical Imaging - Endoscopy",
        summary:
          "A semi-supervised polyp segmentation framework that draws pseudo-labels from both a task-specific specialist segmenter and a general vision foundation model, then fuses them under calibrated reliability estimates so each source is trusted in proportion to how well-calibrated it is on a given region, rather than uniformly.",
        keywords: [
          "Polyp segmentation",
          "Semi-supervised learning",
          "Pseudo-labelling",
          "Foundation models",
          "Calibration",
          "Colonoscopy",
        ],
      },
      {
        title: "Anomaly-Aware ForensiBlock: Explainable Behavioral Monitoring for Digital Evidence Access",
        authors: "Asma Jodeiri Akbarfam, Nishi Kanta Paul, Shereen Ismail",
        venue: "Journal manuscript",
        venueNote: "Target submission: September 2026",
        domain: "Blockchain Forensics - Explainable AI",
        summary:
          "Extends the RBAC-SA blockchain forensics model with real-time behavioral anomaly scoring, risk-adaptive response, asynchronous TreeSHAP explanations, and verifiable on-chain auditing - detecting insider misuse that static authorization cannot see.",
        keywords: ["Behavioral anomaly detection", "Blockchain", "Digital forensics", "Insider threat", "TreeSHAP", "Smart contracts"],
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
        keywords: ["Polyp segmentation", "Colonoscopy", "Boundary guidance", "EfficientNet-B4", "Attention fusion"],
      },
      {
        title: "LCM-UNet: A Reparameterizable Local-Compensated Mamba U-Net for Skin Lesion Segmentation",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Kishor Morol",
        venue: "Journal manuscript",
        venueNote: "Target submission: September 2026",
        domain: "Medical Imaging - Dermatology",
        summary:
          "Strengthens the local pathway of an ultra-compact state-space segmentation network with a zero-initialized dilated depthwise adapter that merges exactly into a single kernel after training - more capacity during learning, an unchanged graph at inference.",
        keywords: ["Skin lesion segmentation", "State space model", "Mamba", "Structural reparameterization", "U-Net"],
      },
    ],
  },
];

const statusStyles: Record<Status, string> = {
  Accepted: "bg-emerald-500/10 text-emerald-700 border-emerald-600/30 dark:text-emerald-400 dark:border-emerald-500/20",
  "Under Review": "bg-primary/10 text-primary border-primary/20",
  "In Preparation": "bg-amber-500/10 text-amber-700 border-amber-600/30 dark:text-yellow-400 dark:border-yellow-500/20",
};

const stats = [
  { value: "9", label: "Manuscripts" },
  { value: "3", label: "Accepted at IEEE venues" },
  { value: "2", label: "Under review (ICCIT 2026)" },
  { value: "4", label: "In preparation" },
];

const Publications = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Publications"
          subtitle="Peer-reviewed and in-progress research across computer vision, signal modelling, efficient architectures, and trustworthy AI. PDFs are available for accepted and submitted work; manuscripts still in preparation are shared by the authors on request."
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

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.keywords.map((k) => (
                        <span key={k} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {k}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-5">
                      {p.pdf ? (
                        <a
                          href={p.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          <FileText size={15} /> Read PDF
                        </a>
                      ) : (
                        <a
                          href={`mailto:${LAB_EMAIL}?subject=${encodeURIComponent(`Manuscript request: ${p.title}`)}`}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
                        >
                          <Mail size={15} /> Request from authors
                        </a>
                      )}
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
          Manuscripts under review are shared as author preprints for review purposes and may differ from the final
          published versions. Manuscripts in preparation are not distributed publicly - write to{" "}
          <a href={`mailto:${LAB_EMAIL}`} className="text-primary hover:underline">
            {LAB_EMAIL}
          </a>{" "}
          and the authors will share a copy on request.
        </p>
      </div>
    </section>
  </Layout>
);

export default Publications;
