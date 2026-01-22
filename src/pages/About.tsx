import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, CheckCircle2, Rocket, Users, Code2, Trophy } from "lucide-react";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage creative thinking and out-of-the-box solutions to real-world problems.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Success comes from teamwork. We build together, learn together, and grow together.",
  },
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "We strive for clean code, best practices, and continuous improvement in our craft.",
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description: "We prepare our members to compete and win at the highest levels of hackathons.",
  },
];

const differentiators = [
  "Industry-focused project development",
  "Mentorship from experienced developers",
  "Direct industry connections and networking",
  "Hands-on workshops with real technologies",
  "Team-based learning environment",
  "Portfolio-building opportunities",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">TechForge</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Founded with a vision to bridge the gap between academic learning and industry 
              requirements, TechForge is where ambition meets opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TechForge was born from a simple observation: traditional college clubs 
                  weren't preparing students for the fast-paced world of tech innovation. 
                  We saw students with incredible potential but no platform to apply their 
                  skills to real challenges.
                </p>
                <p>
                  In 2022, a group of passionate developers came together with a mission: 
                  to create a club that operates like a startup—agile, innovative, and 
                  results-driven. We wanted to build something that would give students 
                  real experience before they even graduate.
                </p>
                <p>
                  Today, TechForge stands as the premier technical club, with members 
                  who have competed in and won hackathons hosted by Microsoft, Google, 
                  Meta, and other leading tech companies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden neon-border p-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                  <Rocket className="w-32 h-32 text-primary/50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl card-gradient border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower students with practical technical skills, industry exposure, 
                and collaborative experiences that prepare them to excel in hackathons 
                and build successful careers in technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl card-gradient border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most impactful student-led technical community, recognized 
                globally for producing innovative solutions and developing the next 
                generation of tech leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at TechForge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Unlike traditional college clubs, we operate with the intensity and 
                focus of a startup. Every project we take on has real-world applications, 
                and every member is pushed to grow beyond their comfort zone.
              </p>
              
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2022", label: "Founded" },
                { value: "50+", label: "Members" },
                { value: "15+", label: "Projects" },
                { value: "8", label: "Hackathon Wins" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl card-gradient border border-border/50 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
