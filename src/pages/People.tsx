import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Globe,
  Facebook,
  FileText,
  GraduationCap,
  Handshake,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

type Links = {
  email?: string;
  linkedin?: string;
  scholar?: string;
  github?: string;
  website?: string;
  facebook?: string;
  cv?: string;
};

type Member = {
  name: string;
  role?: string;
  affiliation?: string;
  location?: string;
  image?: string;
  bio?: string;
  links?: Links;
};

const founder: Member = {
  name: "Nishi Kanta Paul",
  role: "Founder & Research Lead",
  affiliation: "Ahsanullah University of Science and Technology",
  location: "Dhaka, Bangladesh",
  image: "/Profile/Nishi.jpeg",
  bio: "Founded NIMISHES Lab in 2026 to work on efficient, explainable deep learning for high-stakes decisions. Lead or co-author on nine manuscripts spanning computer vision, signal modelling, and trustworthy AI, with work accepted at IEEE BECITHCON 2026 and iCONEECT 2026.",
  links: {
    email: "nishikantapaul108@gmail.com",
    scholar: "https://scholar.google.com/citations?user=tn-UPUAAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/nishi-kanta-paul-4251351b8/",
    github: "https://github.com/Nishi-Kanta-Paul",
    website: "https://nishi-kanta-paul.github.io/",
  },
};

type Group = {
  title: string;
  icon: LucideIcon;
  blurb: string;
  columns: string;
  members: Member[];
};

const groups: Group[] = [
  {
    title: "Lead Researchers",
    icon: Handshake,
    blurb: "Driving individual research tracks and first-authoring lab publications.",
    columns: "sm:grid-cols-2",
    members: [
      {
        name: "Md Shihabul Islam Shovo",
        role: "Lead Researcher",
        affiliation: "Ahsanullah University of Science and Technology",
        image: "/Profile/Shovo.png",
        links: {
          email: "shihabul900@gmail.com",
          scholar: "https://scholar.google.com/citations?user=qg1UAcYAAAAJ&hl=en",
          linkedin: "https://www.linkedin.com/in/shihabul-islam-shovo/",
          github: "https://github.com/Shihabul-Shuvo/",
          website: "https://shihabul-shuvo.github.io/",
          facebook: "https://www.facebook.com/shihabul.shovo",
          cv: "https://shihabul-shuvo.github.io/Portfolio-shihabul/Resume/MD-SHIHABUL-ISLAM-SHOVO.pdf",
        },
      },
    ],
  },
  {
    title: "Collaborators & Co-authors",
    icon: UserRound,
    blurb: "Researchers across four institutions in the United States and Austria who have co-authored our work.",
    columns: "sm:grid-cols-2",
    members: [
      {
        name: "Camila Gonz\u00e1lez",
        role: "Assistant Professor (Tenure-Track) & PI, RIIC Lab",
        affiliation:
          "Dept. of Anesthesia, Intensive Care Medicine, and Pain Medicine, Medical University of Vienna, Austria",
        image: "/Profile/ProfCamila.png",
        bio: "PI of the Representational Intelligence for Intensive Care (RIIC) lab, working on machine learning for intensive care and perioperative medicine. PhD at TU Darmstadt; postdoctoral research at Stanford. MICCAI Young Scientist and IPMI Fran\u00e7ois Erbsmann awardee, and Career Development & Student Chair for MICCAI 2026.",
        links: {
          scholar: "https://scholar.google.com/citations?user=VbpLc7YAAAAJ&hl=en",
        },
      },
      {
        name: "Kishor Morol",
        role: "AI Safety Researcher \u00b7 Founder, ELITE Research Lab",
        affiliation: "Meta, New York, United States",
        image: "/Profile/KishorMorol.png",
        links: {
          scholar: "https://scholar.google.com/citations?user=pjn3jg4AAAAJ&hl=en",
          linkedin: "https://www.linkedin.com/in/kishormorol/",
          website: "https://elitelab.ai/",
        },
      },
      {
        name: "Asma Jodeiri Akbarfam",
        role: "Assistant Professor",
        affiliation: "Washington State University",
        image: "/Profile/ProfAsma.png",
        links: {
          scholar: "https://scholar.google.com/citations?user=i87DIwIAAAAJ&hl=en",
          website: "https://dblp.org/pid/344/1938.html",
        },
      },
      {
        name: "Shereen Ismail",
        role: "Research Scientist",
        affiliation: "Merit Network, University of Michigan",
        image: "/Profile/DrShereen.png",
        links: {
          scholar: "https://scholar.google.com/citations?user=zlzGrwIAAAAJ&hl=en",
          linkedin: "https://www.linkedin.com/in/shereen-ismail-phd-49b35415/",
        },
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

const linkConfig: { key: keyof Links; icon: LucideIcon; label: string; href: (v: string) => string }[] = [
  { key: "email", icon: Mail, label: "Email", href: (v) => `mailto:${v}` },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn", href: (v) => v },
  { key: "scholar", icon: GraduationCap, label: "Google Scholar", href: (v) => v },
  { key: "github", icon: Github, label: "GitHub", href: (v) => v },
  { key: "website", icon: Globe, label: "Website", href: (v) => v },
  { key: "facebook", icon: Facebook, label: "Facebook", href: (v) => v },
  { key: "cv", icon: FileText, label: "CV", href: (v) => v },
];

const ProfileLinks = ({ links, name }: { links?: Links; name: string }) => {
  if (!links) return null;
  const available = linkConfig.filter((c) => links[c.key]);
  if (!available.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {available.map((c) => (
        <a
          key={c.key}
          href={c.href(links[c.key] as string)}
          target={c.key === "email" ? undefined : "_blank"}
          rel="noreferrer"
          title={`${name} on ${c.label}`}
          aria-label={`${name} on ${c.label}`}
          className="w-8 h-8 rounded-lg border border-border bg-background/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
        >
          <c.icon size={15} />
        </a>
      ))}
    </div>
  );
};

const Avatar = ({ member, size = "md" }: { member: Member; size?: "md" | "lg" }) => {
  const dim = size === "lg" ? "w-28 h-28 text-2xl" : "w-14 h-14 text-sm";
  return member.image ? (
    <img
      src={member.image}
      alt={member.name}
      className={`${dim} rounded-full object-cover border-2 border-primary/20 shrink-0`}
      loading="lazy"
    />
  ) : (
    <div
      className={`${dim} rounded-full shrink-0 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 text-primary flex items-center justify-center font-heading font-semibold`}
    >
      {getInitials(member.name)}
    </div>
  );
};

const People = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="People"
          subtitle="A small, distributed team of researchers and collaborators building efficient, explainable AI"
        />

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
            <div
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 50% 80% at 8% 0%, hsl(199 89% 48% / 0.10), transparent 70%)",
              }}
            />
            <div className="relative flex flex-col sm:flex-row gap-7 items-start">
              <Avatar member={founder} size="lg" />
              <div className="flex-1">
                <h3 className="font-heading font-bold text-2xl">{founder.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{founder.role}</p>
                <p className="text-sm text-muted-foreground">{founder.affiliation}</p>
                {founder.location && <p className="text-xs text-muted-foreground mt-0.5">{founder.location}</p>}
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-2xl">{founder.bio}</p>
                <ProfileLinks links={founder.links} name={founder.name} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Groups */}
        <div className="max-w-5xl mx-auto space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-2 mb-1">
                <group.icon className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-semibold text-xl">{group.title}</h3>
                <span className="text-xs text-muted-foreground">({group.members.length})</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{group.blurb}</p>

              <div className={`grid grid-cols-1 ${group.columns} gap-5`}>
                {group.members.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full"
                  >
                    <div className="flex items-start gap-4 h-full">
                      <Avatar member={member} />
                      <div className="min-w-0 flex-1 flex flex-col self-stretch">
                        <p className="font-heading font-semibold leading-snug">{member.name}</p>
                        {member.role && <p className="text-xs text-primary mt-0.5">{member.role}</p>}
                        {member.affiliation && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{member.affiliation}</p>
                        )}
                        {member.bio && (
                          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
                        )}
                        <div className="mt-auto">
                          <ProfileLinks links={member.links} name={member.name} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-5xl mx-auto text-xs text-muted-foreground mt-14 text-center">
          Interested in joining or collaborating? See{" "}
          <Link to="/join" className="text-primary hover:underline">
            Join Us
          </Link>
          .
        </p>
      </div>
    </section>
  </Layout>
);

export default People;
