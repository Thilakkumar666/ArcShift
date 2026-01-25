import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const coreTeam: TeamMember[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "President",
    bio: "Full-stack developer passionate about AI and open source. Microsoft Imagine Cup finalist.",
    avatar: "AC",
    socials: { github: "#", linkedin: "#", email: "alex@arcshift.edu" },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Vice President",
    bio: "Cloud architect and DevOps enthusiast. AWS certified and loves building scalable systems.",
    avatar: "SJ",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Technical Lead",
    bio: "Machine learning engineer with a focus on computer vision. Research assistant at the AI lab.",
    avatar: "RP",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Events Coordinator",
    bio: "UI/UX designer turned organizer. Brings creativity to every hackathon and workshop we host.",
    avatar: "EZ",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const leadTeam: TeamMember[] = [
  {
    id: 5,
    name: "Mike Wilson",
    role: "Web Dev Lead",
    bio: "React enthusiast building modern web applications.",
    avatar: "MW",
    socials: { github: "#" },
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "AI/ML Lead",
    bio: "Deep learning researcher focused on NLP solutions.",
    avatar: "PS",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 7,
    name: "James Lee",
    role: "Mobile Dev Lead",
    bio: "Flutter developer creating cross-platform experiences.",
    avatar: "JL",
    socials: { github: "#" },
  },
  {
    id: 8,
    name: "Nina Roberts",
    role: "Cloud Lead",
    bio: "AWS and GCP specialist for cloud infrastructure.",
    avatar: "NR",
    socials: { linkedin: "#" },
  },
  {
    id: 9,
    name: "David Kim",
    role: "Marketing Lead",
    bio: "Spreading the word about ArcShift across campus.",
    avatar: "DK",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 10,
    name: "Aisha Mohammed",
    role: "Outreach Lead",
    bio: "Building industry partnerships and sponsorships.",
    avatar: "AM",
    socials: { linkedin: "#", email: "outreach@arcshift.edu" },
  },
];

const TeamCard = ({ member, large = false }: { member: TeamMember; large?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 ${
      large ? "text-center" : ""
    }`}
  >
    <div
      className={`rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4 ${
        large ? "w-24 h-24 text-2xl" : "w-16 h-16 text-lg"
      }`}
    >
      {member.avatar}
    </div>
    
    <h3 className={`font-semibold group-hover:text-primary transition-colors ${large ? "text-xl" : "text-lg"}`}>
      {member.name}
    </h3>
    <p className="text-sm text-primary mb-2">{member.role}</p>
    <p className={`text-muted-foreground mb-4 ${large ? "text-sm" : "text-xs"}`}>
      {member.bio}
    </p>
    
    <div className={`flex gap-2 ${large ? "justify-center" : ""}`}>
      {member.socials.github && (
        <a
          href={member.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        >
          <Github className="w-4 h-4" />
        </a>
      )}
      {member.socials.linkedin && (
        <a
          href={member.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}
      {member.socials.twitter && (
        <a
          href={member.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        >
          <Twitter className="w-4 h-4" />
        </a>
      )}
      {member.socials.email && (
        <a
          href={`mailto:${member.socials.email}`}
          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        >
          <Mail className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The passionate individuals driving innovation and building the future 
              at ArcShift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Core <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The leadership team steering ArcShift forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} large />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Team */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Domain <span className="gradient-text-accent">Leads</span>
            </h2>
            <p className="text-muted-foreground">
              Experts leading our specialized technical domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Join the Team?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for passionate individuals to join our 
              leadership team. If you have skills and dedication, we want you!
            </p>
            <a href="/join" className="inline-block">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Apply to Join
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
