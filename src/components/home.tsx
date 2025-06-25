import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import GeneratorInterface from "./GeneratorInterface";
import BehindInspiroAI from "./BehindInspiroAI";
import {
  ArrowDown,
  Menu,
  Home as HomeIcon,
  FileText,
  MessageCircle,
  User,
} from "lucide-react";

const Home = () => {
  const [showBehindPage, setShowBehindPage] = useState(false);

  const scrollToGenerator = () => {
    const generatorSection = document.getElementById("generator");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showBehindPage) {
    return <BehindInspiroAI onBack={() => setShowBehindPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b-2 border-orange-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-orange-600">InspiroAI</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className="flex items-center space-x-2 text-black hover:text-orange-600 transition-colors"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Home</span>
              </a>
              <a
                href="#generator"
                className="flex items-center space-x-2 text-black hover:text-orange-600 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>Generator</span>
              </a>
              <a
                href="#about"
                className="flex items-center space-x-2 text-black hover:text-orange-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>About</span>
              </a>
              <button
                onClick={() => setShowBehindPage(true)}
                className="flex items-center space-x-2 text-black hover:text-orange-600 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Behind InspiroAI</span>
              </button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:text-orange-600"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-orange-50 to-white"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash Your Creativity with AI-Powered Poems and Essays
          </motion.h1>
          <motion.p
            className="text-xl text-black mb-8"
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
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-600">
                  Poem Example
                </h3>
                <p className="text-black font-serif">
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
                <h3 className="text-lg font-semibold mb-2 text-orange-600">
                  Essay Example
                </h3>
                <p className="text-black text-sm">
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
    <section id="about" className="bg-orange-50 py-16">
    <div className="max-w-5xl mx-auto px-4">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-600"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      About InspiroAI
    </motion.h2>

    <motion.div
      className="text-lg text-black max-w-3xl mx-auto text-center leading-relaxed space-y-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p>
        <strong>InspiroAI</strong> is a creative writing tool designed to help individuals express their thoughts,
        emotions, and ideas through beautifully crafted poems and essays — all powered by artificial intelligence (GEMINI).
      </p>
      <p>
        Whether you're a student struggling to start an assignment, someone writing a heartfelt message,
        or just looking for inspiration, InspiroAI makes it easier to translate feelings into words.
        Simply choose a topic, adjust the tone and style, and let the AI generate personalized content for you in seconds.
      </p>
      <p className="font-semibold">
        But InspiroAI is more than just a generator — it’s a space where creativity meets accessibility.
      </p>
      <p>
        Many people have powerful things to say but find it difficult to organize their thoughts.
        InspiroAI bridges that gap, especially for those who find it hard to write due to time pressure,
        language barriers, or lack of confidence.
      </p>
      <p>
        Whether you’re writing for school, for someone special, or just for yourself,{" "}
        <strong>InspiroAI helps your words flow — your way.</strong>
        </p>
      </motion.div>
    </div>
  </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
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
                title: "Instant Preview",
                description:
                  "Preview results, tweak parts, or regenerate instantly.",
              },
              {
                title: "Download & Share",
                description:
                  "Save your poem or essay in .txt",
              },
              {
                title: "Integrated with AI",
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
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  {feature.title}
                </h3>
                <p className="text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-orange-50">
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
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {step.title}
                </h3>
                <p className="text-black">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not everyone is a writer, but everyone has a story</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={scrollToGenerator}
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              Create My Poem or Essay
            </Button>
            <Button
              size="lg"
              onClick={() => setShowBehindPage(true)}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
            >
              <User className="h-4 w-4 mr-2" />
              Behind InspiroAI
            </Button>
          </div>

          <p className="mt-8 text-orange-200">
            © {new Date().getFullYear()} InspiroAI. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
