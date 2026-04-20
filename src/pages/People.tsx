import { motion } from "framer-motion";
import { GraduationCap, Handshake, User, Users, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

type Member = {
  name: string;
  role?: string;
  affiliation?: string;
  image?: string;
};

type PeopleSection = {
  title: string;
  icon: LucideIcon;
  members: Member[];
};

const sections: PeopleSection[] = [
  {
    title: "Founder",
    icon: User,
    members: [
      {
        name: "Nishi Kanta Paul",
        role: "Founder",
        image: "/Profile/Nishi.jpeg",
      },
    ],
  },
  {
    title: "Lead Researcher",
    icon: Handshake,
    members: [
      {
        name: "Farhana Hossain Swarnali",
        role: "Lead Researcher",
          affiliation: "University of Utah",
      },
    ],
  },
  {
    title: "Incoming PhD Student",
    icon: GraduationCap,
    members: [
      {
        name: "Md Shihabul Islam Shovo",
          affiliation: "Ahsanullah University of Science and Technology",
      },
    ],
  },
  {
    title: "Research Assistants",
    icon: Users,
    members: [
      {
        name: "Vaskor Debnath Aninda",
          affiliation: "Brac University",
      },
      {
        name: "Sudeepta Chandra Paul",
          affiliation: "Ahsanullah University of Science and Technology",
      },
    ],
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const People = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="People" subtitle="The team behind NIMISHES Lab" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-semibold text-lg">{section.title}</h3>
              </div>

              <div className="space-y-3">
                {section.members.map((member) => (
                  <div key={member.name} className="flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-background/40">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-14 h-14 rounded-full object-cover border border-border"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                        {getInitials(member.name)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium leading-snug">{member.name}</p>
                      {member.role && <p className="text-xs text-primary">{member.role}</p>}
                      {member.affiliation && <p className="text-xs text-muted-foreground">{member.affiliation}</p>}
                    </div>
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

export default People;
