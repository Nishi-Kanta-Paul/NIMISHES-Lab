import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Maximize2, PenLine, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type Status = "Accepted" | "Under Review" | "In Preparation";
type Filter = "All" | Status;

type Figure = {
  /** File name, without extension, in public/figures and public/figures/thumb. */
  file: string;
  /** Short name shown as the popup title. */
  name: string;
  /** Small line above the title, e.g. "Model architecture · Figure 1". */
  label: string;
  caption: string;
  alt: string;
};

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
  arxiv?: string;
  code?: string;
  /** Architecture figure, for papers whose figures are public. */
  figure?: Figure;
};

type Section = {
  status: Status;
  icon: LucideIcon;
  blurb: string;
  papers: Paper[];
};

const LAB_EMAIL = "nimisheslab72@gmail.com";

const WACV_2027 = "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2027";
const ISBI_2027 = "IEEE International Symposium on Biomedical Imaging (ISBI) 2027";

const sections: Section[] = [
  {
    status: "Accepted",
    icon: CheckCircle2,
    blurb: "Accepted for presentation at IEEE and international conferences and workshops in 2026 and 2027.",
    papers: [
      {
        tag: "WACV 2027 Workshop",
        title: "AquaProbe: Efficient Adaptation of Frozen Vision Models for Underwater Images",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Trung Dong, Xiaomin Lin",
        venue: `5th Workshop on Maritime Computer Vision (MaCVi), ${WACV_2027}`,
        arxiv: "https://arxiv.org/abs/2610.40900",
        figure: {
          file: "aquaprobe",
          name: "AquaProbe",
          label: "Model architecture · Figure 2",
          caption:
            "The measured divergence profile sets each block’s LoRA rank under a fixed budget. The rank-allocated encoder feeds a linear decoder, and a router selects among nested per-cluster prefixes when the profile is condition dependent.",
          alt: "Architecture diagram of AquaProbe: rank allocation, a frozen encoder with LoRA, a linear decoder, and conditioned routing.",
        },
      },
      {
        tag: "BECITHCON 2026",
        title:
          "SleepEffFormer: Efficient CNN-Transformer with Transition-Aware Smoothing for Single-Channel EEG Sleep Stage Classification",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Israt Jerin Esha, Adrita Rahman",
        venue:
          "Proceedings of the 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), Dhaka, Bangladesh, 2026",
        pdf: "/papers/SleepEffFormer.pdf",
        arxiv: "https://arxiv.org/abs/2609.22148",
        code: "https://github.com/Nishi-Kanta-Paul/SleepStage",
        figure: {
          file: "sleepeffformer",
          name: "SleepEffFormer",
          label: "Model architecture · Figure 1",
          caption:
            "(a) End-to-end pipeline from raw epoch to hypnogram. (b) CNN tokeniser with per-block output shapes. (c) Pre-LN encoder block; the residual path bypasses each normalised sublayer. Dashed purple marks attention-based saliency.",
          alt: "Architecture diagram of SleepEffFormer: preprocessing, a 1D CNN tokeniser, Transformer encoder blocks, and transition-aware smoothing.",
        },
      },
      {
        tag: "BECITHCON 2026",
        title:
          "WaveFoG: Wavelet Gated Transformer for Parkinson's Freezing of Gait Detection Using Wearable Accelerometer Signals",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Adrita Rahman, Israt Jerin Esha",
        venue:
          "Proceedings of the 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), Dhaka, Bangladesh, 2026",
        pdf: "/papers/WaveFoG.pdf",
        arxiv: "https://arxiv.org/abs/2609.22147",
        code: "https://github.com/Shihabul-Shuvo/WaveFoG",
        figure: {
          file: "wavefog",
          name: "WaveFoG",
          label: "Model architecture · Figure 1",
          caption:
            "Three parallel branches encode the input window. The Wavelet Gate (dashed purple) soft-interpolates between the concatenated encoder representation and a wavelet projection, and a two-layer MLP outputs the FoG probability.",
          alt: "Architecture diagram of WaveFoG: 1D CNN, Transformer and DWT branches combined through a wavelet gate into an MLP classifier.",
        },
      },
      {
        tag: "iCONEECT 2026",
        title:
          "DR-LiteNet: A Lightweight Explainable Hybrid CNN Framework for Imbalanced Diabetic Retinopathy Grading via Adaptive SMOTE Fusion",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Audrija Chowdhury, Israt Jahan Esha",
        venue:
          "Proceedings of the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT), Chittagong, Bangladesh, 2026",
        pdf: "/papers/DR-LiteNet.pdf",
        arxiv: "https://arxiv.org/abs/2611.04405",
        code: "https://github.com/Nishi-Kanta-Paul/DR-LiteNet",
        figure: {
          file: "dr-litenet",
          name: "DR-LiteNet",
          label: "Model architecture · Figure 1",
          caption:
            "The CNN branch (EfficientNetB0 + GAP) yields 1,280-d deep features and the handcrafted branch yields 51-d lesion descriptors, concatenated into a 1,331-d hybrid vector. ADASYN oversampling applies during training only; Grad-CAM maps derive from EfficientNetB0’s last convolutional block.",
          alt: "Architecture diagram of DR-LiteNet: preprocessing, CNN and handcrafted feature branches, feature fusion, and a classification head with five output grades.",
        },
      },
    ],
  },
  {
    status: "Under Review",
    icon: Clock,
    blurb: "Submitted to IEEE ISBI 2027 and WACV 2027 workshops.",
    papers: [
      {
        tag: "ISBI 2027",
        title:
          "APED-CXR: Adaptive Privileged Evidence Distillation for Chest X-Ray Grounding with Image-Only Inference",
        authors: "Md Shihabul Islam Shovo, Nishi Kanta Paul, Jamil Fayyad",
        venue: ISBI_2027,
        arxiv: "https://arxiv.org/abs/2610.29740",
        figure: {
          file: "aped-cxr",
          name: "APED-CXR",
          label: "Model overview · Figure 1",
          caption:
            "The student predicts disease probabilities and boxes from evidence maps using the image alone. In training, a frozen teacher verifies proposals, and its support scores supervise the student’s box-pooled scores. Maps and boxes are schematic.",
          alt: "Overview diagram of APED-CXR: a compact student predicting from a chest X-ray alone, and a frozen multimodal teacher verifying proposals during training.",
        },
      },
      {
        tag: "ISBI 2027",
        title:
          "Band2Net: Frequency-to-Network Transport Distillation for fMRI-Privileged, EEG-Only Session-Condition Decoding",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Dwarikanath Mahapatra",
        venue: ISBI_2027,
        arxiv: "https://arxiv.org/abs/2611.01548",
        figure: {
          file: "band2net",
          name: "Band2Net",
          label: "Model architecture · Figure 1",
          caption:
            "Five band-wise EEG connectivity graphs and seven canonical fMRI network tokens are matched by a balanced transport plan computed per paired observation. The transported targets supervise the EEG student through a stop-gradient, and the frozen fMRI branch is discarded at inference.",
          alt: "Architecture diagram of Band2Net: an fMRI teacher, a frequency-to-network transport module, and an EEG student deployed at inference.",
        },
      },
      {
        tag: "ISBI 2027",
        title: "LAPIS: Clinically Constrained Patient-Identity Residual Learning for Chest X-Ray Anonymization",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Désiré Sidibé",
        venue: ISBI_2027,
        arxiv: "https://arxiv.org/abs/2610.40722",
        figure: {
          file: "lapis",
          name: "LAPIS",
          label: "Model architecture · Figure 1",
          caption:
            "(a) A semi-orthogonal basis splits the latent into a patient-identity residual and a clinical complement. (b) The decoder is trained on cross-patient residual swaps. (c) A metric loss makes the residual patient-discriminative while a spatial adversary suppresses identity in the clinical complement. The output card is schematic, not a model prediction.",
          alt: "Architecture diagram of LAPIS: latent decomposition, replacement-aware training, and identity residual learning on chest radiographs.",
        },
      },
      {
        tag: "WACV 2027 Workshop",
        title: "Coupled or Independent? Fault Coupling in Agentic Medical Vision Systems",
        authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Md Mostafijur Rahman, Jamil Fayyad",
        venue: `Workshop on Foundation AI for Biomedical Reasoning, Imaging, and Cognition (FABRIC), ${WACV_2027}`,
        arxiv: "https://arxiv.org/abs/2610.40913",
        figure: {
          file: "coupled",
          name: "Coupled or Independent?",
          label: "System overview · Figure 1",
          caption:
            "The perturbed image reaches the tool channel (segmentation, BiomedCLIP retrieval) and the reasoning channel (a frozen reasoner in a ReAct loop); only the pipeline order differs. Under full-image retrieval the channels disagree and the check fires; under crop-first retrieval both fail alike and the check stays silent. The retrieved tiles and predictions illustrate modal experimental outcomes, not a logged end-to-end execution.",
          alt: "System diagram comparing full-image and crop-first retrieval in an agentic medical vision pipeline, with a disagreement check between tool and reasoning channels.",
        },
      },
    ],
  },
  {
    status: "In Preparation",
    icon: PenLine,
    blurb: "Manuscript in preparation.",
    papers: [
      {
        tag: "IEEE Access",
        title: "Anomaly-Aware ForensiBlock: Explainable Behavioral Monitoring for Digital Evidence Access",
        authors: "Asma Jodeiri Akbarfam, Nishi Kanta Paul, Shereen Ismail",
        venue: "Target venue: IEEE Access",
      },
      // {
        // tag: "MIDL 2027",
        // title:
          // "CoMAF-Polyp: Calibrated Reliability-Aware Fusion of Specialist and Foundation Pseudo-Labels for Semi-Supervised Polyp Segmentation",
        // authors: "Nishi Kanta Paul, Md Shihabul Islam Shovo, Camila González",
        // venue: "Target venue: Medical Imaging with Deep Learning (MIDL) 2027",
      // },
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
      {paper.pdf && (
        <span>
          [<a href={paper.pdf} target="_blank" rel="noreferrer" className={link}>Paper</a>]
        </span>
      )}
      {paper.arxiv && (
        <span>
          [<a href={paper.arxiv} target="_blank" rel="noreferrer" className={link}>arXiv</a>]
        </span>
      )}
      {!paper.pdf && !paper.arxiv && (
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

const figurePath = (figure: Figure) => `/figures/${figure.file}.webp`;
const thumbPath = (figure: Figure) => `/figures/thumb/${figure.file}.webp`;

/** A plain link to the full image, so ctrl/cmd-click still opens it in a new tab. */
const FigureThumb = ({ figure, onOpen }: { figure: Figure; onOpen: (thumb: HTMLElement) => void }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen(event.currentTarget);
  };

  return (
    <a
      href={figurePath(figure)}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-label={`Enlarge the ${figure.name} figure`}
      className="group relative block aspect-[2/1] cursor-zoom-in overflow-hidden rounded-lg border border-border bg-white p-1.5 transition-[border-color,box-shadow] hover:border-primary/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* The figures are drawn on white, so the tile stays white in dark mode too. */}
      <img
        src={thumbPath(figure)}
        alt={figure.alt}
        loading="lazy"
        decoding="async"
        className="block h-full w-full object-contain"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-1.5 right-1.5 flex h-[22px] w-[22px] items-center justify-center rounded border border-black/20 bg-white/90 text-slate-600 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-focus-visible:border-primary group-focus-visible:bg-primary group-focus-visible:text-primary-foreground"
      >
        <Maximize2 size={11} />
      </span>
    </a>
  );
};

const FigurePopup = ({ figure, paperLink }: { figure: Figure; paperLink?: string }) => {
  // Show the loaded thumbnail straight away, then swap in the sharp image. Both have the
  // same proportions, so the popup does not change size when the swap happens.
  const [src, setSrc] = useState(thumbPath(figure));

  useEffect(() => {
    let current = true;
    const sharp = new Image();
    sharp.onload = () => {
      if (current) setSrc(figurePath(figure));
    };
    sharp.src = figurePath(figure);
    return () => {
      current = false;
    };
  }, [figure]);

  const link = "text-primary hover:underline";

  return (
    <>
      <div className="border-b border-border px-5 py-3.5 pr-12">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{figure.label}</p>
        <DialogTitle className="font-heading mt-1 text-lg leading-snug">{figure.name}</DialogTitle>
      </div>
      <div className="bg-white p-4">
        <img src={src} alt={figure.alt} className="block h-auto max-h-[68vh] w-full object-contain" />
      </div>
      <div className="border-t border-border px-5 py-3.5">
        <DialogDescription className="leading-relaxed">{figure.caption}</DialogDescription>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
          {paperLink && (
            <a href={paperLink} target="_blank" rel="noreferrer" className={link}>
              Read the paper
            </a>
          )}
          <a href={figurePath(figure)} target="_blank" rel="noreferrer" className={link}>
            Open full size
          </a>
        </p>
      </div>
    </>
  );
};

const Publications = () => {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? sections : sections.filter((s) => s.status === active);
  // The selected paper outlives `popupOpen` so the popup keeps its content while it fades out.
  const [selected, setSelected] = useState<Paper | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const openedFrom = useRef<HTMLElement | null>(null);

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
                      className={`p-5 rounded-xl bg-card border border-border card-interactive${
                        p.figure ? " md:grid md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:gap-5" : ""
                      }`}
                    >
                      <div>
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
                      </div>
                      {p.figure && (
                        <div className="mt-4 md:mt-0">
                          <FigureThumb
                            figure={p.figure}
                            onOpen={(thumb) => {
                              openedFrom.current = thumb;
                              setSelected(p);
                              setPopupOpen(true);
                            }}
                          />
                        </div>
                      )}
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="max-w-4xl mx-auto text-sm text-muted-foreground mt-12 text-center">
            Manuscripts without a public preprint are not distributed publicly - write to{" "}
            <a href={`mailto:${LAB_EMAIL}`} className="text-primary hover:underline">
              {LAB_EMAIL}
            </a>{" "}
            and the authors will share a copy on request.
          </p>
        </div>
      </section>

      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent
          className="block max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-[1180px] overflow-y-auto rounded-xl p-0 sm:rounded-xl"
          onCloseAutoFocus={(event) => {
            // Without a DialogTrigger, Radix would otherwise drop focus to the page body.
            event.preventDefault();
            openedFrom.current?.focus();
          }}
        >
          {selected?.figure && (
            <FigurePopup
              key={selected.figure.file}
              figure={selected.figure}
              paperLink={selected.arxiv ?? selected.pdf}
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Publications;
