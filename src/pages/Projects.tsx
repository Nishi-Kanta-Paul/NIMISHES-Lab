import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

type ProjectStatus = "Ongoing" | "Planned";

type Project = {
  title: string;
  duration: string;
  overview: string;
  directionsLabel: string;
  directions: string[];
  impact: string;
  status: ProjectStatus;
};

const projects: Project[] = [
  {
    title: "Green Multimodal Clinical AI",
    duration: "May 2026 - June 2026",
    overview:
      "We are developing an efficient multimodal AI system for automated radiology report generation designed specifically for low-resource clinical environments.",
    directionsLabel: "Project Focus",
    directions: [
      "Enable CPU-level deployment for hospital settings without GPUs",
      "Improve clinical reliability and factual consistency in generated reports",
      "Reduce computational cost while maintaining high diagnostic relevance",
    ],
    impact:
      "Advancing sustainable (Green) AI for real-world healthcare deployment, especially in resource-constrained regions.",
    status: "Ongoing",
  },
  {
    title: "Multimodal Cardiovascular Signal Intelligence",
    duration: "June 2026 - July 2026",
    overview:
      "This project explores fusion of physiological signals to improve non-invasive cardiovascular monitoring.",
    directionsLabel: "Key Directions",
    directions: [
      "Integrate multiple biosignals for robust health prediction",
      "Enhance interpretability of AI-driven physiological models",
      "Support real-time monitoring systems for wearable and clinical use",
    ],
    impact:
      "Bridging signal processing and AI for next-generation digital health systems.",
    status: "Planned",
  },
  {
    title: "Privacy-Preserving Clinical Language Systems",
    duration: "July 2026 - August 2026",
    overview:
      "We are building a local-first clinical AI assistant that operates entirely within hospital infrastructure to ensure data privacy and security.",
    directionsLabel: "Focus Areas",
    directions: [
      "On-device medical text understanding and summarization",
      "Secure handling of sensitive patient records",
      "Improve trustworthiness and verifiability of AI outputs",
    ],
    impact: "Enabling privacy-safe AI adoption in clinical environments.",
    status: "Planned",
  },
  {
    title: "Label-Efficient Medical Imaging AI",
    duration: "August 2026 - September 2026",
    overview:
      "This project investigates learning from limited labeled data in medical imaging by leveraging large-scale unlabeled datasets.",
    directionsLabel: "Core Directions",
    directions: [
      "Reduce dependency on expert annotations",
      "Improve performance in rare disease detection scenarios",
      "Build scalable pipelines for medical image understanding",
    ],
    impact: "Addressing the data scarcity challenge in healthcare AI.",
    status: "Planned",
  },
  {
    title: "Real-Time Clinical Workflow Intelligence",
    duration: "September 2026 - October 2026",
    overview:
      "We are designing a real-time AI system to understand and optimize clinical workflows from visual data streams.",
    directionsLabel: "Key Goals",
    directions: [
      "Recognize procedural stages in real-time",
      "Support decision-making and safety monitoring",
      "Deploy efficient models on edge devices",
    ],
    impact:
      "Advancing AI-assisted clinical operations and smart healthcare environments.",
    status: "Planned",
  },
];

const statusColors: Record<ProjectStatus, string> = {
  Ongoing: "bg-primary/10 text-primary",
  Planned: "bg-yellow-500/10 text-yellow-400",
};

const Projects = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="Active and planned research projects for healthcare AI in 2026" />
        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded shrink-0 ${statusColors[p.status]}`}>{p.status}</span>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><strong className="text-foreground">Duration:</strong> {p.duration}</div>
                <div><strong className="text-foreground">Overview:</strong> {p.overview}</div>
                <div>
                  <strong className="text-foreground">{p.directionsLabel}:</strong>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {p.directions.map((direction) => (
                      <li key={direction}>{direction}</li>
                    ))}
                  </ul>
                </div>
                <div><strong className="text-foreground">Impact:</strong> {p.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
