import { motion } from "framer-motion";
import { FileText, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    title: "Under Review",
    items: [
      {
        title: "Comparative Analysis of Hybrid Deep CNN Models in the Classification of Pulmonary Diseases",
        authors: "NIMISHES Lab",
        status: "Under Review",
      },
    ],
  },
  {
    title: "Ongoing Publications",
    items: [
      {
        title: "MedExplain: ShinovaAI - An Explainable and Efficient Deep Learning Framework for Interpretable Breast Cancer",
        authors: "NIMISHES Lab",
        status: "Ongoing",
      },
      {
        title: "ProtoCXR: Prototype-Based Interpretable Multi-Label Diagnosis from Chest X-Rays Using Visually Grounded Anatomical Concepts",
        authors: "NIMISHES Lab",
        status: "Ongoing",
      },
    ],
  },
];

const Publications = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Publications" subtitle="Academic output from NIMISHES Lab" />
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
                <FileText className="h-5 w-5 text-primary" /> {s.title}
              </h3>
              <div className="space-y-3">
                {s.items.map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-card border border-border">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.authors}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-2">
                      <Clock size={12} /> {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Publications;
