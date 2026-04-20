import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Heart, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const roles = [
  {
    icon: Briefcase,
    title: "Research Intern",
    desc: "Work on active projects in medical image analysis, deep learning, or healthcare NLP. Ideal for undergraduate or graduate students with Python and ML experience.",
  },
  {
    icon: Heart,
    title: "Volunteer Contributor",
    desc: "Contribute to open-source tools, dataset curation, or documentation. No formal ML background required — enthusiasm and willingness to learn are what matter most.",
  },
];

const Join = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Join Us" subtitle="We welcome researchers, students, and collaborators passionate about AI in healthcare" />
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Roles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <r.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">Apply / Get in Touch</h3>
              {submitted ? (
                <p className="text-primary text-sm">Thank you for your interest! We'll be in touch.</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                    <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Research Intern</option>
                    <option>Volunteer Contributor</option>
                    <option>Collaboration Inquiry</option>
                  </select>
                  <textarea placeholder="Brief message about your background and interests" rows={4} className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm">
                    <Send size={16} /> Submit
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
