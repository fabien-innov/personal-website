
import { motion } from "framer-motion";
import { ChevronDown, Github, Mail, Linkedin as LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const skills = [
  "TypeScript", "React", "Node.js", "PostgreSQL", "AWS", "Docker"
];

const experiences = [
  {
    title: "Développeur Full Stack Senior",
    company: "Tech Solutions SA",
    period: "2021 - Présent",
    description: "Direction technique des projets majeurs, mise en place d'architectures scalables, et mentorat d'équipe.",
    technologies: ["React", "Node.js", "AWS"]
  },
  {
    title: "Développeur Front-end",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Développement d'applications web performantes, optimisation UX et intégration de systèmes complexes.",
    technologies: ["Vue.js", "TypeScript", "GraphQL"]
  },
  {
    title: "Développeur Junior",
    company: "StartUp Innovation",
    period: "2018 - 2019",
    description: "Contribution au développement de fonctionnalités front-end et collaboration avec l'équipe design.",
    technologies: ["React", "JavaScript", "CSS"]
  }
];

const sideProjects = [
  {
    title: "AI Movie Recommender",
    description: "Application web utilisant l'intelligence artificielle pour recommander des films basés sur les préférences des utilisateurs.",
    technologies: ["Python", "React", "TensorFlow"],
    link: "https://github.com/username/ai-movie-recommender",
    status: "En cours"
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard météo en temps réel avec visualisations de données et prévisions sur 7 jours.",
    technologies: ["React", "D3.js", "OpenWeather API"],
    link: "https://github.com/username/weather-dashboard",
    status: "Terminé"
  },
  {
    title: "Task Manager CLI",
    description: "Outil de gestion de tâches en ligne de commande avec synchronisation cloud.",
    technologies: ["Node.js", "MongoDB", "Commander.js"],
    link: "https://github.com/username/task-cli",
    status: "En développement"
  }
];

const blogPosts = [
  {
    title: "Créer des Applications React Évolutives",
    excerpt: "Découvrez les meilleures pratiques pour développer des applications React à grande échelle avec des outils et techniques modernes.",
    date: "15 Mars 2024",
    category: "React"
  },
  {
    title: "L'Avenir du Développement Web",
    excerpt: "Explorer les tendances et technologies émergentes qui façonneront l'avenir du développement web.",
    date: "10 Mars 2024",
    category: "Web Dev"
  },
  {
    title: "Maîtriser TypeScript",
    excerpt: "Un guide complet pour utiliser efficacement TypeScript dans vos projets.",
    date: "5 Mars 2024",
    category: "TypeScript"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4" variant="secondary">Disponible pour des opportunités</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">
            Data engineer
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Je vous aide à mettre en place les pipelines de données au sein de votre infrastucture
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2" variant="default">
              <Mail className="w-4 h-4" />
              Me Contacter
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="max-w-5xl mx-auto"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Compétences & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors"
              >
                <h3 className="font-semibold text-lg">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Expérience Professionnelle</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">{experience.title}</h3>
                    <p className="text-neutral-600">{experience.company}</p>
                  </div>
                  <span className="text-neutral-500 text-sm mt-2 md:mt-0">{experience.period}</span>
                </div>
                <p className="text-neutral-700 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Side Projects Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="max-w-5xl mx-auto"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projets Personnels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sideProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                    <p className="text-neutral-600 mb-4">{project.description}</p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                      <Button variant="link" className="p-0 h-auto text-neutral-500 hover:text-neutral-900" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Voir le projet
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <Badge variant="secondary" className="mb-4">Derniers Articles</Badge>
            <h2 className="text-3xl font-bold">Blog & Perspectives</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <Badge className="mb-4">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                    <time className="text-sm text-neutral-500">{post.date}</time>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-8"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold">Restons connectés</h2>
          <p className="text-neutral-300">
            Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter, n'hésitez pas à me contacter.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="w-4 h-4" />
              Me contacter
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
