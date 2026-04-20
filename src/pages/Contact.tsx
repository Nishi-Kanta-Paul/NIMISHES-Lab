import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Contact" subtitle="Get in touch with NIMISHES Lab" />
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border">
                <Mail className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">contact@nimisheslab.org</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <MapPin className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Bangladesh — Remote Research Lab</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              {submitted ? (
                <p className="text-primary text-sm">Thank you! We'll respond shortly.</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <input type="text" placeholder="Name" required className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input type="text" placeholder="Subject" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                  <textarea placeholder="Message" rows={4} required className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm">
                    <Send size={16} /> Send Message
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

export default Contact;
