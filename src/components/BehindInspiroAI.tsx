import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  ArrowLeft,
  Code,
  Palette,
  Users,
  Clock,
  Lightbulb,
  Zap,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

interface BehindInspiroAIProps {
  onBack?: () => void;
}

const BehindInspiroAI = ({ onBack = () => {} }: BehindInspiroAIProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="bg-orange-600 text-white py-6">
        <div className="container mx-auto px-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-orange-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-center">
            Behind the InspiroAI
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Developer Introduction */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-25">
            {/* Developer Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-orange-100 rounded-lg p-4 h-96 flex items-center justify-center">
                <img
                  src="/public/images/d8061003-94e5-47ec-b009-3145c87a8449.jpg"
                  alt="Cedric Solano"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Introduction Text */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">
                  Meet the Developer
                </h2>
                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    Hi! I'm{" "}
                    <strong className="text-orange-600">
                      Sedorikku Maku
                    </strong>
                    , the developer behind InspiroAI. I'm a 21-year-old
                    third-year Information Technology student from PUP Quezon
                    City, and I also play basketball — so I understand the
                    challenge of balancing academics, sports, and personal
                    projects.
                  </p>
                  <p>
                    InspiroAI is something I built from the heart. I know how
                    difficult it can be to express your feelings, thoughts, or
                    ideas in writing — whether it's for school or something
                    personal. This tool is my way of helping others find their
                    voice through AI-assisted creativity.
                  </p>
                  <p>
                    Outside of coding and studying, I enjoy playing basketball,
                    watching anime, K-dramas, and diving into the Marvel
                    universe. I'm also a curious, passionate learner who's
                    always willing to adapt, especially in the ever-evolving
                    world of IT.
                  </p>
                  <p className="font-medium text-orange-600">
                    For me, InspiroAI is more than just a project — it's a space
                    where ideas turn into words, and expression becomes easier
                    for everyone.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Code className="h-6 w-6 text-orange-600 mr-3" />
              Technical Skills & Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Front-End Development & Design
                  </h4>
                  <ul className="space-y-2 text-black">
                    <li>
                      • Responsive Web Design using HTML, CSS, and JavaScript
                    </li>
                    <li>
                      • Familiar with TypeScript and component-based development
                    </li>
                    <li>
                      • UI/UX Design and System Design using Figma, Canva, and
                      Lucidchart
                    </li>
                    <li>• Low-Code Development experience using Flutterflow</li>
                    <li>
                      • Agile experience through Scrum Development practices
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Soft Skills
                  </h4>
                  <ul className="space-y-2 text-black">
                    <li>• Strong teamwork and collaboration</li>
                    <li>• Effective problem-solving under pressure</li>
                    <li>• Excellent time management and task prioritization</li>
                    <li>
                      • Highly creative, with an eye for design and user
                      experience
                    </li>
                    <li>
                      • Quick to adapt and learn, especially in dynamic IT
                      environments
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-orange-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Tools & Software
                  </h4>
                  <div className="space-y-2 text-black">
                    <p>
                      <strong>Code Editors/IDEs:</strong> Visual Studio Code,
                      Visual Studio Community, PyCharm
                    </p>
                    <p>
                      <strong>Design Tools:</strong> Figma, Canva, Lucidchart
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-orange-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Programming Languages
                  </h4>
                  <ul className="space-y-2 text-black">
                    <li>• HTML, CSS, JavaScript, TypeScript</li>
                    <li>• C#, Java, Python</li>
                    <li>
                      • Flutterflow for low-code and mobile interface
                      prototyping
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="text-center bg-orange-50 rounded-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Connect with Me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <a
                href="https://www.facebook.com/cedricmark.solano.3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Facebook className="h-5 w-5" />
                <span className="font-medium hidden sm:inline">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/cedsolano_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cedric-mark-solano-6309122b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/cedsolano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium hidden sm:inline">GitHub</span>
              </a>
            </div>
            <p className="text-black text-sm">
              Follow me for updates on my projects and journey in tech!
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-orange-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Express Yourself?
            </h3>
            <p className="text-black mb-6">
              Let InspiroAI help you turn your thoughts into beautiful words.
            </p>
            <Button
              onClick={onBack}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Try InspiroAI Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BehindInspiroAI;
