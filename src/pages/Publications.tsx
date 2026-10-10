import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, PenLine, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

type Status = "Accepted" | "Under Review" | "In Preparation";
type Filter = "All" | Status;

type Paper = {
  /** Short venue tag shown in brackets before the title, e.g. "ISBI 2027". */
  tag: string;
  title: string;
  authors: string;
  /** Full venue line. */
  venue: string;
  /** Journal quartile ranking, for journals only. */
  quartile?: "Q1" | "Q2" | "Q3" | "Q4";
  /** Journal Impact Factor, e.g. "7.7". */
  impactFactor?: string;
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

const WACV_2027 = "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2027";

const sections: Section[] = [
  {
    status: "Accepted",
    icon: CheckCircle2,
    blurb: "Accepted for presentation at IEEE and international conferences in 2026.",
    papers: [
      {
        tag: "BECITHCON 2026",
        title:
          "SleepEffFormer: Efficient CNN-Transformer with Transition-Aware Smoothing for Single-Channel EEG Sleep Stage Classification",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Israt Jerin Esha, Adrita Rahman",
        venue:
          "Proceedings of the 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), Dhaka, Bangladesh, 2026",
        pdf: "/papers/SleepEffFormer.pdf",
        code: "https://github.com/Nishi-Kanta-Paul/SleepStage",
      },
      {
        tag: "BECITHCON 2026",
        title:
          "WaveFoG: Wavelet-Gated Transformer for Parkinson's Freezing of Gait Detection Using Wearable Accelerometer Signals",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Adrita Rahman, Israt Jerin Esha",
        venue:
          "Proceedings of the 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), Dhaka, Bangladesh, 2026",
        pdf: "/papers/WaveFoG.pdf",
        code: "https://github.com/Shihabul-Shuvo/WaveFoG",
      },
      {
        tag: "iCONEECT 2026",
        title:
          "DR-LiteNet: A Lightweight Explainable Hybrid CNN Framework for Imbalanced Diabetic Retinopathy Grading via Adaptive SMOTE Fusion",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Audrija Chowdhury, Israt Jahan Esha",
        venue:
          "Proceedings of the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT), Chittagong, Bangladesh, 2026",
        pdf: "/papers/DR-LiteNet.pdf",
        code: "https://github.com/Nishi-Kanta-Paul/DR-LiteNet",
      },
    ],
  },
  {
    status: "Under Review",
    icon: Clock,
    blurb: "Submitted to peer-reviewed journals and WACV 2027 workshops.",
    papers: [
      {
        tag: "IEEE JBHI",
        title: "LCM-UNet: A Reparameterizable Local-Compensated Mamba U-Net for Skin Lesion Segmentation",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Kishor Morol",
        venue: "IEEE Journal of Biomedical and Health Informatics",
        quartile: "Q1",
        impactFactor: "7.7",
      },
      {
        tag: "IEEE Access",
        title: "Anomaly-Aware ForensiBlock: Explainable Behavioral Monitoring for Digital Evidence Access",
        authors: "Asma Jodeiri Akbarfam, Nishi Kanta Paul, Shereen Ismail",
        venue: "IEEE Access",
        quartile: "Q1",
        impactFactor: "4.2",
      },
      {
        tag: "PLOS ONE",
        title:
          "BGD-SF PolySegNet: Boundary-Guided Dynamic Selective Fusion Network for Robust Polyp Segmentation in Colonoscopy Images",
        authors: "Nishi Kanta Paul, Shamia Maherin, Morsheda Akter",
        venue: "PLOS ONE",
        quartile: "Q1",
        impactFactor: "2.8",
      },
      {
        tag: "WACV 2027 Workshop",
        title: "Coupled or Independent? Fault Coupling in Agentic Medical Vision Systems",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Jamil Fayyad, Md Mostafijur Rahman",
        venue: `Workshop on Foundation AI for Biomedical Reasoning, Imaging, and Cognition (FABRIC), ${WACV_2027}`,
      },
      {
        tag: "WACV 2027 Workshop",
        title: "AquaProbe: Efficient Adaptation of Frozen Vision Models for Underwater Images",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Trung Tien Dong, Xiaomin Lin",
        venue: `5th Workshop on Maritime Computer Vision (MaCVi), ${WACV_2027}`,
      },
    ],
  },
  {
    status: "In Preparation",
    icon: PenLine,
    blurb: "Manuscripts in preparation for IEEE ISBI 2027 and MIDL 2027.",
    papers: [
      {
        tag: "ISBI 2027",
        title:
          "APED-CXR: Adaptive Privileged Evidence Distillation for Chest X-Ray Grounding with Image-Only Inference",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Jamil Fayyad",
        venue: "Target venue: IEEE International Symposium on Biomedical Imaging (ISBI) 2027",
      },
      {
        tag: "MIDL 2027",
        title:
          "CoMAF-Polyp: Calibrated Reliability-Aware Fusion of Specialist and Foundation Pseudo-Labels for Semi-Supervised Polyp Segmentation",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Camila González",
        venue: "Target venue: Medical Imaging with Deep Learning (MIDL) 2027",
      },
    ],
  },
];

const totalPapers = sections.reduce((n, s) => n + s.papers.length, 0);

const filters: { label: Filter; count: number }[] = [
  { label: "All", count: totalPapers },
  ...sections.map((s) => ({ label: s.status, count: s.papers.length })),
];

const metricBadge =
  "inline-block align-middle font-body text-xs font-semibold px-1.5 py-0.5 rounded border bg-violet-500/10 text-violet-700 border-violet-600/30 dark:text-violet-300 dark:border-violet-400/25";

const PaperLinks = ({ paper }: { paper: Paper }) => {
  const link = "text-primary hover:underline";
  return (
    <p className="text-sm mt-2 flex flex-wrap gap-x-3 gap-y-1">
      {paper.pdf ? (
        <span>
          [<a href={paper.pdf} target="_blank" rel="noreferrer" className={link}>Paper</a>]
        </span>
      ) : (
        <span>
          [
          <a
            href={`mailto:${LAB_EMAIL}?subject=${encodeURIComponent(`Manuscript request: ${paper.title}`)}`}
            className={link}
          >
            Request PDF
          </a>
          ]
        </span>
      )}
      {paper.code && (
        <span>
          [<a href={paper.code} target="_blank" rel="noreferrer" className={link}>Code</a>]
        </span>
      )}
    </p>
  );
};

const Publications = () => {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? sections : sections.filter((s) => s.status === active);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Publications"
            subtitle="Peer-reviewed and in-progress research across computer vision, signal modelling, efficient architectures, and trustworthy AI."
          />

          {/* Filter */}
          <div className="max-w-4xl mx-auto mb-12 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter publications">
            {filters.map((f) => {
              const on = active === f.label;
              return (
                <button
                  key={f.label}
                  type="button"
                  onClick={() => setActive(f.label)}
                  aria-pressed={on}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    on
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {f.label} <span className={on ? "opacity-80" : "opacity-70"}>({f.count})</span>
                </button>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {visible.map((section) => (
              <div key={section.status}>
                <div className="flex items-center gap-2 mb-1">
                  <section.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">{section.status}</h3>
                  <span className="text-xs text-muted-foreground">({section.papers.length})</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">{section.blurb}</p>

                <div className="space-y-4">
                  {section.papers.map((p, i) => (
                    <motion.article
                      key={`${active}-${p.title}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="p-5 rounded-xl bg-card border border-border card-interactive"
                    >
                      <p className="font-heading font-semibold leading-snug">
                        <span className="text-primary mr-2">[{p.tag}]</span>
                        {p.quartile && (
                          <span className={`${metricBadge} mr-1.5`} title="Journal quartile ranking">
                            {p.quartile}
                          </span>
                        )}
                        {p.impactFactor && (
                          <span className={`${metricBadge} mr-2`} title="Journal Impact Factor">
                            IF {p.impactFactor}
                          </span>
                        )}
                        {p.title}.
                      </p>
                      <p className="text-sm text-muted-foreground mt-1.5">{p.authors}.</p>
                      <p className="text-sm italic text-muted-foreground mt-1">{p.venue}</p>
                      <PaperLinks paper={p} />
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="max-w-4xl mx-auto text-sm text-muted-foreground mt-12 text-center">
            Manuscripts under review or in preparation are not distributed publicly - write to{" "}
            <a href={`mailto:${LAB_EMAIL}`} className="text-primary hover:underline">
              {LAB_EMAIL}
            </a>{" "}
            and the authors will share a copy on request.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
