import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import GeneratorInterface from "./GeneratorInterface";
import { ArrowDown, Facebook, Twitter, Instagram } from "lucide-react";

const Home = () => {
  const scrollToGenerator = () => {
    const generatorSection = document.getElementById("generator");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-orange-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash Your Creativity with AI-Powered Poems and Essays
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Provide a theme, and let AI craft a unique, engaging poem or essay
            tailored just for you!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={scrollToGenerator}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Get Started
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-orange-200 hover:border-orange-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-600">
                  Poem Example
                </h3>
                <p className="text-gray-600 font-serif italic">
                  Whispers of dawn,
                  <br />
                  Painting skies with golden light,
                  <br />
                  Nature awakens.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-orange-200 hover:border-orange-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-600">
                  Essay Example
                </h3>
                <p className="text-gray-600 text-sm">
                  The concept of sustainability has evolved significantly over
                  the past decade, influencing how we approach environmental
                  challenges...
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16 border-t border-orange-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About InspiroAI
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           InspiroAI is a writing companion designed to help anyone—especially students—turn their ideas, feelings, and emotions into meaningful poems or essays. Whether you're having a hard time finding the right words, dealing with writer’s block, or simply need help starting, InspiroAI makes the process fast, simple, and creative.
        Just enter a topic or theme, and the AI will generate a personalized piece based on your preferred tone, style, and language. It’s built to support anyone who wants to express themselves through writing—no pressure, no judgment.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Poem and Essay Generation",
                description:
                  "Get custom content instantly, tailored to your topic and needs.",
              },
              {
                title: "User-Friendly Interface",
                description:
                  "No writing or tech experience needed—just type and click!",
              },
              {
                title: "Style and Tone Customization",
                description:
                  "Select tone and format: formal, casual, creative, academic.",
              },
              {
                title: "Instant Preview & Edits",
                description:
                  "Preview results, tweak parts, or regenerate instantly.",
              },
              {
                title: "Download & Share",
                description:
                  "Save your poem or essay in .txt or .pdf and share anywhere.",
              },
              {
                title: "Integrated with AI",
                description:
                  "Click on any unfamiliar word for an instant explanation.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-orange-100 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Enter your theme",
                description: "Describe what your content should be about.",
              },
              {
                step: "2",
                title: "Choose content type",
                description: "Select between Poem or Essay.",
              },
              {
                step: "3",
                title: "Select tone",
                description: "Customize your content's feel and format.",
              },
              {
                step: "4",
                title: "Generate & refine",
                description: "Review, adjust, and download your content.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start Creating
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GeneratorInterface />
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={scrollToGenerator}
              className="bg-white text-orange-600 hover:bg-gray-100 font-medium"
            >
              Create My Poem or Essay
            </Button>
          </motion.div>

         <div className="mt-12 flex justify-center space-x-6">
          {[
            {
              icon: <Facebook size={24} />,
              name: "Facebook",
              url: "https://www.facebook.com/cedricmark.solano.3/",
            },
            {
              icon: <Instagram size={24} />,
              name: "Instagram",
              url: "https://www.instagram.com/cedsolano_/?hl=en",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-200 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
           </div>

          <motion.p
            className="mt-8 text-orange-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            © {new Date().getFullYear()} InspiroAI. All rights reserved.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
