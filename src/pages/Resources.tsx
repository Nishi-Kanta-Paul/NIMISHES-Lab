import { motion } from "framer-motion";
import { Database, BookOpen, GraduationCap, Wrench, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: Database,
    title: "Dataset Repositories",
    items: [
      { name: "Hugging Face Datasets", link: "https://huggingface.co/datasets", desc: "Large open catalogue of vision, text, audio, and multimodal datasets" },
      { name: "Kaggle Datasets", link: "https://www.kaggle.com/datasets", desc: "Community datasets and competition benchmarks across every domain" },
      { name: "UCI Machine Learning Repository", link: "https://archive.ics.uci.edu/", desc: "Long-standing archive of classical tabular and time-series benchmarks" },
      { name: "OpenML", link: "https://www.openml.org/", desc: "Open platform for sharing datasets, tasks, and reproducible experiment results" },
      { name: "PhysioNet", link: "https://physionet.org/", desc: "Open physiological signal archives  EEG, ECG, accelerometry, and more" },
    ],
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    items: [
      { name: "Dive into Deep Learning (D2L)", link: "https://d2l.ai/", desc: "Free interactive textbook with runnable code in PyTorch, TensorFlow, and JAX" },
      { name: "PyTorch Tutorials", link: "https://pytorch.org/tutorials/", desc: "Official guides from tensors and autograd through distributed training" },
      { name: "Hugging Face Learn", link: "https://huggingface.co/learn", desc: "Practical courses on Transformers, diffusion models, and agents" },
      { name: "fast.ai  Practical Deep Learning", link: "https://course.fast.ai/", desc: "Top-down course that gets you training useful models early" },
      { name: "Distill", link: "https://distill.pub/", desc: "Archived but excellent visual explanations of core ML concepts" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools We Use",
    items: [
      { name: "Captum", link: "https://captum.ai/", desc: "Model interpretability for PyTorch  attributions, saliency, and layer analysis" },
      { name: "SHAP", link: "https://shap.readthedocs.io/", desc: "Game-theoretic feature attribution, including the TreeSHAP estimator" },
      { name: "Weights & Biases", link: "https://wandb.ai/", desc: "Experiment tracking, sweeps, and reproducible run comparison" },
      { name: "Optuna", link: "https://optuna.org/", desc: "Define-by-run hyperparameter optimization with pruning" },
      { name: "scikit-learn", link: "https://scikit-learn.org/", desc: "Classical ML, preprocessing, metrics, and cross-validation utilities" },
      { name: "imbalanced-learn", link: "https://imbalanced-learn.org/", desc: "Resampling methods including SMOTE and ADASYN for skewed datasets" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Getting Started in Research",
    items: [
      { name: "Papers We Love", link: "https://paperswelove.org/", desc: "Curated repository of influential computer science papers worth reading" },
      { name: "arXiv  Machine Learning", link: "https://arxiv.org/list/cs.LG/recent", desc: "Preprint feed for the latest machine learning research" },
      { name: "ML Reproducibility Checklist", link: "https://www.cs.mcgill.ca/~jpineau/ReproducibilityChecklist.pdf", desc: "What a rigorous, reproducible ML paper should report" },
      { name: "Papers with Code Datasets", link: "https://paperswithcode.com/datasets", desc: "Benchmarks linked to the papers and implementations that use them" },
    ],
  },
];


const Resources = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Resources" subtitle="Datasets, tools, and learning materials we rely on  and recommend to anyone starting in machine learning research" />
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((s, si) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.1 }}
            >
              <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                <s.icon className="h-5 w-5 text-primary" /> {s.title}
              </h3>
              <div className="space-y-3">
                {s.items.map((item) => (
                  <a key={item.name} href={item.link} target="_blank" rel="noreferrer" className="block p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{item.name}</p>
                      <ExternalLink size={14} className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Resources;
