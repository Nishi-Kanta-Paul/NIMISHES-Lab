import { motion } from "framer-motion";
import { Brain, Microscope, ShieldCheck, Database, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    icon: Brain,
    title: "Medical Image Analysis",
    desc: "Developing deep learning models for automated analysis of CT, MRI, and X-ray images. Our research focuses on segmentation, classification, and anomaly detection in clinical imaging data.",
    problems: ["Tumor segmentation in brain MRI", "Organ delineation in abdominal CT", "Fracture detection in X-rays"],
    tools: ["PyTorch", "MONAI", "OpenCV", "SimpleITK"],
  },
  {
    icon: Microscope,
    title: "Deep Learning in Radiology",
    desc: "Designing and evaluating novel neural network architectures tailored for radiological image interpretation, including transfer learning and self-supervised approaches for limited labeled data.",
    problems: ["Few-shot learning for rare pathologies", "Multi-task learning across imaging modalities", "Domain adaptation for cross-institutional datasets"],
    tools: ["PyTorch", "TensorFlow", "Hugging Face", "Weights & Biases"],
  },
  {
    icon: ShieldCheck,
    title: "Clinical Decision Support Systems",
    desc: "Building AI-powered tools that assist clinicians in diagnosis and treatment planning, integrating seamlessly into existing clinical workflows.",
    problems: ["Triage prioritization in emergency radiology", "Risk stratification from imaging features", "Automated measurement and reporting"],
    tools: ["FastAPI", "ONNX Runtime", "Docker", "FHIR"],
  },
  {
    icon: Database,
    title: "Healthcare Data Engineering",
    desc: "Creating scalable data pipelines for medical data preprocessing, anonymization, and curation — essential infrastructure for reproducible medical AI research.",
    problems: ["DICOM data standardization", "De-identification of patient records", "Multi-source data integration"],
    tools: ["Python", "Apache Spark", "PostgreSQL", "Airflow"],
  },
  {
    icon: Lightbulb,
    title: "Explainable AI in Medicine",
    desc: "Developing interpretability methods that provide clinicians with transparent, understandable reasoning behind AI predictions — a critical requirement for clinical adoption.",
    problems: ["Saliency maps for diagnostic confidence", "Concept-based explanations", "Uncertainty quantification in predictions"],
    tools: ["SHAP", "Grad-CAM", "LIME", "Captum"],
  },
];

const Research = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Research Areas" subtitle="Our research spans core areas of AI-driven healthcare innovation" />
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
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{a.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Example Problems</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {a.problems.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {a.tools.map((t) => (
                          <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
