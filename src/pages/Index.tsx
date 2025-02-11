
import { motion } from "framer-motion";
import { ChevronDown, Github, Mail, Linkedin } from "lucide-react";
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
            Développeur Logiciel
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Création de solutions élégantes pour des problèmes complexes avec des technologies modernes.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Me Contacter
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
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
          <h2 className="text-3xl font-bold">Connectons-nous</h2>
          <p className="text-neutral-300">
            Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter, n'hésitez pas à me contacter.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="w-4 h-4" />
              M'envoyer un Email
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
