import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const updates = [
  {
    date: "September 2026",
    title: "Four manuscripts in preparation",
    desc: "Anomaly-Aware ForensiBlock, BGD-SF PolySegNet, and LCM-UNet are being finalised for journal submission this month, alongside CoMAF-Polyp, a semi-supervised polyp segmentation study with the Medical University of Vienna targeting a WACV workshop.",
  },
  {
    date: "August 2026",
    title: "Two papers submitted to IEEE ICCIT 2026",
    desc: "AWEF-Net (input-adaptive attention gating for ensemble fusion) and PDGuard (CNN-BiLSTM attention over raw wearable sensor streams) are under review at the 29th IEEE International Conference on Computer and Information Technology.",
  },
  {
    date: "July 2026",
    title: "DR-LiteNet accepted at iCONEECT 2026",
    desc: "Our lightweight explainable hybrid CNN for imbalanced multi-grade classification was accepted at the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies.",
  },
  {
    date: "June 2026",
    title: "SleepEffFormer and WaveFoG accepted at IEEE BECITHCON 2026",
    desc: "Both signal-modelling papers were accepted at the 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health, to be presented in Dhaka on 4-5 September 2026.",
  },
  {
    date: "April 2026",
    title: "NIMISHES Lab Officially Launches",
    desc: "The lab begins operations as an independent AI and machine learning research initiative based in Bangladesh.",
  },
];

const News = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="News & Updates" subtitle="Latest developments from NIMISHES Lab" />
        <div className="max-w-3xl mx-auto space-y-4">
          {updates.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border"
            >
              <Newspaper className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground">{u.date}</span>
                <h3 className="font-heading font-semibold text-sm mt-0.5">{u.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{u.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default News;
