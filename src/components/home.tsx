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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash Your Creativity with AI-Powered Poems and Essays
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8"
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
              className="bg-indigo-600 hover:bg-indigo-700"
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
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                  Poem Example
                </h3>
                <p className="text-slate-600 font-serif">
                  Whispers of dawn,
                  <br />
                  Painting skies with golden light,
                  <br />
                  Nature awakens.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                  Essay Example
                </h3>
                <p className="text-slate-600 text-sm">
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At InspiroAI, we make creativity effortless. Just input a theme or
            topic, and get beautifully crafted content in seconds. Whether
            you're exploring your imagination, seeking writing help, or need a
            quick draft, InspiroAI delivers. Our goal: make personalized,
            high-quality writing accessible through the power of AI.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-slate-800"
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
                  "Select tone and format: formal, casual, creative, academic, and more.",
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
                title: "Integrated Chatbot",
                description:
                  "Click on any unfamiliar word for an instant explanation.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-slate-800"
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
                title: "Enter your theme or topic",
                description: "Describe what your content should be about.",
              },
              {
                step: "2",
                title: "Choose content type",
                description: "Select between Poem or Essay.",
              },
              {
                step: "3",
                title: "Select tone and style",
                description: "Customize your content's feel and format.",
              },
              {
                step: "4",
                title: "Generate and refine",
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
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Create Your Poem or Essay Now!
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
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <Button
            size="lg"
            onClick={scrollToGenerator}
            className="bg-white text-indigo-600 hover:bg-slate-100"
          >
            Create My Poem or Essay
          </Button>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          <p className="mt-8 text-indigo-200">
            © {new Date().getFullYear()} InspiroAI. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
