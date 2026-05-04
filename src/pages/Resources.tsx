import { motion } from "framer-motion";
import { Database, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: Database,
    title: "Curated Datasets",
    items: [
      { name: "NIH Chest X-ray Dataset", link: "#", desc: "112,000+ chest X-ray images with disease labels" },
      { name: "BraTS Challenge Dataset", link: "#", desc: "Multi-institutional brain tumor segmentation data" },
      { name: "MIMIC-CXR", link: "#", desc: "Large-scale chest radiograph dataset with free-text reports" },
      { name: "Retinal OCT Dataset", link: "#", desc: "Optical coherence tomography images for retinal disease classification" },
    ],
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    items: [
      { name: "Deep Learning for Medical Imaging  CS229 Notes", link: "#", desc: "Stanford course materials on ML in healthcare" },
      { name: "MONAI Documentation", link: "#", desc: "Official docs for the Medical Open Network for AI" },
      { name: "FastAI Medical Imaging", link: "#", desc: "Practical deep learning course with medical imaging applications" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Beginner Guides",
    items: [
      { name: "Introduction to Medical Image Analysis with Python", link: "#", desc: "Getting started with SimpleITK and NumPy for DICOM data" },
      { name: "Transfer Learning for Radiology", link: "#", desc: "How to fine-tune pretrained models on medical imaging tasks" },
      { name: "Understanding DICOM Format", link: "#", desc: "A beginner's guide to the standard medical imaging file format" },
    ],
  },
];

const Resources = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Resources" subtitle="Datasets, tools, and learning materials for medical imaging AI" />
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
                  <a key={item.name} href={item.link} className="block p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group">
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
