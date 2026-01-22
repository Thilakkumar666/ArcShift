import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

type ProjectStatus = "completed" | "ongoing" | "planned";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  status: ProjectStatus;
  category: string;
  github?: string;
  demo?: string;
  hackathon?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EcoTrack",
    description: "AI-powered carbon footprint tracker for individuals and organizations",
    longDescription: "EcoTrack uses machine learning to analyze user behavior and provide personalized recommendations for reducing carbon emissions. Built for Google Solution Challenge 2023.",
    techStack: ["React", "TensorFlow", "Node.js", "MongoDB"],
    status: "completed",
    category: "AI/ML",
    hackathon: "Google Solution Challenge",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "MedConnect",
    description: "Telemedicine platform connecting rural patients with specialists",
    longDescription: "A comprehensive telemedicine solution featuring video consultations, prescription management, and health record tracking. Winner at Microsoft Imagine Cup regionals.",
    techStack: ["Next.js", "Azure", "PostgreSQL", "WebRTC"],
    status: "completed",
    category: "Healthcare",
    hackathon: "Microsoft Imagine Cup",
    github: "#",
  },
  {
    id: 3,
    title: "CodeCollab",
    description: "Real-time collaborative coding environment with AI assistance",
    longDescription: "An online IDE that enables real-time collaboration between developers with integrated AI code suggestions and debugging tools.",
    techStack: ["React", "Socket.io", "OpenAI", "Docker"],
    status: "ongoing",
    category: "Developer Tools",
    github: "#",
  },
  {
    id: 4,
    title: "AgriSense",
    description: "IoT-based smart farming solution for crop monitoring",
    longDescription: "Using IoT sensors and data analytics to help farmers optimize irrigation, detect diseases early, and improve crop yields.",
    techStack: ["Python", "Arduino", "Firebase", "TensorFlow"],
    status: "ongoing",
    category: "IoT",
  },
  {
    id: 5,
    title: "SafeRoute",
    description: "Women's safety app with real-time location sharing and SOS features",
    longDescription: "A mobile app designed to enhance personal safety with features like route tracking, emergency contacts, and crowd-sourced safety ratings.",
    techStack: ["Flutter", "Firebase", "Google Maps API"],
    status: "completed",
    category: "Mobile",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "LearnFlow",
    description: "Adaptive learning platform powered by AI",
    longDescription: "An educational platform that adapts to each student's learning pace and style using AI-driven personalization.",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL"],
    status: "planned",
    category: "EdTech",
  },
];

const categories = ["All", "AI/ML", "Healthcare", "Developer Tools", "IoT", "Mobile", "EdTech"];
const statuses: (ProjectStatus | "all")[] = ["all", "completed", "ongoing", "planned"];

const statusColors: Record<ProjectStatus, string> = {
  completed: "bg-accent/20 text-accent",
  ongoing: "bg-primary/20 text-primary",
  planned: "bg-secondary/20 text-secondary",
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "all">("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const statusMatch = selectedStatus === "all" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the innovative solutions built by our members for national and 
              international hackathons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-y border-border/50 bg-card/30 sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all ${
                    selectedStatus === status
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {project.hackathon && (
                    <div className="mb-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 inline-block">
                      <span className="text-xs font-medium text-primary">{project.hackathon}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-md bg-muted text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-border/50 pt-4 mt-4"
                      >
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.longDescription}
                        </p>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="outline" size="sm">
                                <Github className="w-4 h-4" />
                                Code
                              </Button>
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="neon" size="sm">
                                <ExternalLink className="w-4 h-4" />
                                Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-end mt-2 text-primary">
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        expandedProject === project.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("all");
                }}
                className="text-primary hover:underline mt-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
