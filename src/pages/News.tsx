import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const updates = [
  { date: "April 2026", title: "NIMISHES Lab Officially Launches", desc: "The lab begins operations as an independent AI + healthcare research initiative based in Bangladesh." }
];

const News = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="News & Updates" subtitle="Latest developments from NIMISHES Lab" />
        <div className="max-w-2xl mx-auto space-y-4">
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
