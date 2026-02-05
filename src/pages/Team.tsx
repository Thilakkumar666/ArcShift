import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import "@/components/Hexagon.css";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const facultyTeam: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Placeholder 1",
    role: "Faculty Advisor",
    bio: "Guiding the next generation of innovators.",
    image: "/src/assets/1.jpg",
    socials: { linkedin: "#" },
  },
  {
    id: 2,
    name: "Dr. Placeholder 2",
    role: "Faculty Advisor",
    bio: "Expert in machine learning and AI.",
    image: "/src/assets/1.jpg",
    socials: { linkedin: "#" },
  },
];

const campusAmbassador = {
  id: 3,
  name: "Ramprakash R",
  role: "Campus Ambassador",
  bio: "Spreading the word about ArcShift across campus.",
  image: "/src/assets/1.jpg",
  socials: { twitter: "#", linkedin: "#" },
};

const leadTeam: TeamMember[] = [
  {
    id: 4,
    name: "Sheerin S",
    role: "Creative Lead",
    bio: "Designing the future of ArcShift.",
    image: "/src/assets/1.jpg",
    socials: { linkedin: "#" },
  },
  {
    id: 5,
    name: "Princeton Vishal J",
    role: "Communications Lead",
    bio: "Connecting ArcShift with the world.",
    image: "/src/assets/1.jpg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 6,
    name: "Dhershini M",
    role: "Outreach Lead",
    bio: "Building industry partnerships and sponsorships.",
    image: "/src/assets/1.jpg",
    socials: { linkedin: "#", email: "outreach@arcshift.edu" },
  },
  {
    id: 7,
    name: "Thilak Kumar",
    role: "Technical Lead",
    bio: "Leading the technical development of ArcShift.",
    image: "/src/assets/1.jpg",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 8,
    name: "E Yagna Sai Harshith",
    role: "Community Lead",
    bio: "Building a strong and vibrant community.",
    image: "/src/assets/1.jpg",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 9,
    name: "Vivin K S",
    role: "Operations Lead",
    bio: "Ensuring the smooth operation of ArcShift.",
    image: "/src/assets/1.jpg",
    socials: { github: "#", linkedin: "#" },
  },
];

const FacultyCard = ({ member }: { member: TeamMember }) => (
  <div className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
    <div className="rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4 overflow-hidden w-48 h-48">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
      {member.name}
    </h3>
    <p className="text-sm text-primary mb-2">{member.role}</p>
    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
    <div className="flex gap-2 justify-center">
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
    </div>
  </div>
);

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="hexagon">
    <div className="hexagon-inner">
      <div className="hexagon-image-container">
        <img src={member.image} alt={member.name} className="hexagon-image" />
      </div>
      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-primary mb-2">{member.role}</p>
      <div className="flex gap-2 justify-center">
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
    </div>
  </div>
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

      {/* Faculty Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Faculty <span className="gradient-text">Advisors</span>
            </h2>
            <p className="text-muted-foreground">
              Our guiding lights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facultyTeam.map((member) => (
              <FacultyCard key={member.id} member={member} />
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
              Our <span className="gradient-text-accent">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The students leading the charge
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center p-12">
            <div className="hexagon-row">
              <TeamCard member={leadTeam[0]} />
              <TeamCard member={leadTeam[1]} />
            </div>
            <div className="hexagon-row -mt-24">
              <TeamCard member={leadTeam[2]} />
              <div className="relative mx-4">
                <TeamCard member={campusAmbassador} />
              </div>
              <TeamCard member={leadTeam[3]} />
            </div>
            <div className="hexagon-row -mt-24">
              <TeamCard member={leadTeam[4]} />
              <TeamCard member={leadTeam[5]} />
            </div>
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
