import { motion } from "framer-motion";
import { CheckCircle2, Clock, PenLine, Rocket, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

type NewsKind = "Acceptance" | "Submission" | "In Preparation" | "Milestone";

const kindStyles: Record<NewsKind, { icon: LucideIcon; badge: string; icon_color: string }> = {
  Acceptance: {
    icon: CheckCircle2,
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-600/30 dark:text-emerald-400 dark:border-emerald-500/20",
    icon_color: "text-emerald-700 dark:text-emerald-400",
  },
  Submission: {
    icon: Clock,
    badge: "bg-primary/10 text-primary border-primary/20",
    icon_color: "text-primary",
  },
  "In Preparation": {
    icon: PenLine,
    badge: "bg-amber-500/10 text-amber-700 border-amber-600/30 dark:text-yellow-400 dark:border-yellow-500/20",
    icon_color: "text-amber-700 dark:text-yellow-400",
  },
  Milestone: {
    icon: Rocket,
    badge: "bg-violet-500/10 text-violet-700 border-violet-600/30 dark:text-violet-300 dark:border-violet-400/25",
    icon_color: "text-violet-700 dark:text-violet-300",
  },
};

const updates: { date: string; kind: NewsKind; title: string; desc: string }[] = [
  {
    date: "September 2026",
    kind: "In Preparation",
    title: "Four manuscripts in preparation",
    desc: "Anomaly-Aware ForensiBlock, BGD-SF PolySegNet, and LCM-UNet are being finalised for journal submission this month, alongside CoMAF-Polyp, a semi-supervised polyp segmentation study with the Medical University of Vienna targeting a WACV workshop.",
  },
  {
    date: "August 2026",
    kind: "Submission",
    title: "Two papers submitted to IEEE ICCIT 2026",
    desc: "AWEF-Net (input-adaptive attention gating for ensemble fusion) and PDGuard (CNN-BiLSTM attention over raw wearable sensor streams) are under review at the 29th IEEE International Conference on Computer and Information Technology.",
  },
  {
    date: "July 2026",
    kind: "Acceptance",
    title: "DR-LiteNet accepted at iCONEECT 2026",
    desc: "Our lightweight explainable hybrid CNN for imbalanced multi-grade classification was accepted at the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies.",
  },
  {
    date: "June 2026",
    kind: "Acceptance",
    title: "SleepEffFormer and WaveFoG accepted at IEEE BECITHCON 2026",
    desc: "Both signal-modelling papers were accepted at the 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health, to be presented in Dhaka on 4-5 September 2026.",
  },
  {
    date: "April 2026",
    kind: "Milestone",
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
          {updates.map((u, i) => {
            const style = kindStyles[u.kind];
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border"
            >
              <style.icon className={`h-5 w-5 mt-0.5 shrink-0 ${style.icon_color}`} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${style.badge}`}>{u.kind}</span>
                  <span className="text-xs text-muted-foreground">{u.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-sm mt-1.5">{u.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{u.desc}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default News;
