import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Volume2,
  Download,
  Maximize2,
  RotateCcw,
  Copy,
  FileText,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface ContentPreviewProps {
  content: string;
  contentType: "poem" | "essay";
  onRegenerate?: () => void;
  isLoading?: boolean;
}

const ContentPreview = ({
  content = "This is a sample poem or essay content. The actual content will be generated based on user input and preferences.",
  contentType = "poem",
  onRegenerate = () => console.log("Regenerate content"),
  isLoading = false,
}: ContentPreviewProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [selectedWord, setSelectedWord] = useState("");
  const [wordExplanation, setWordExplanation] = useState("");

  // Function to handle text-to-speech
  const handleTextToSpeech = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(content);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech!");
    }
  };

  // Function to handle download
  const handleDownload = (format: "txt" | "pdf") => {
    if (format === "txt") {
      const element = document.createElement("a");
      const file = new Blob([content], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `${contentType}-${new Date().toISOString()}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // For PDF, in a real implementation you would use a library like jsPDF
      alert(
        "PDF download functionality would be implemented with a library like jsPDF",
      );
    }
  };

  // Function to copy content to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  // Function to handle word click for chatbot explanation
  const handleWordClick = (word: string) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
    if (cleanWord.length > 0) {
      setSelectedWord(cleanWord);
      // Generate a simple explanation for the word
      const explanations = {
        the: "A definite article used to specify a particular noun.",
        and: "A conjunction used to connect words, phrases, or clauses.",
        is: 'Third person singular present of "be"; indicates existence or identity.',
        of: "A preposition expressing the relationship between a part and a whole.",
        to: "A preposition expressing direction, place, or position.",
        in: "A preposition expressing the situation of something that is surrounded by something else.",
        for: "A preposition used to indicate the purpose or intended recipient of something.",
        with: "A preposition used to express accompaniment or association.",
        on: "A preposition expressing location or position in contact with and supported by a surface.",
        at: "A preposition expressing location or arrival in a particular place or position.",
      };

      const explanation =
        explanations[cleanWord.toLowerCase()] ||
        `"${cleanWord}" - This word may have multiple meanings depending on context. It could be a noun, verb, adjective, or other part of speech. Consider looking it up in a dictionary for detailed definitions and usage examples.`;

      setWordExplanation(explanation);
      setShowChatbot(true);
    }
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <Card className="w-full shadow-lg border-2 border-orange-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold capitalize text-black">
              {contentType} Preview
            </h3>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleTextToSpeech}
                      className="border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Text-to-Speech</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDownload("txt")}
                      className="border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download as TXT</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopy}
                      className="border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to Clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Expand View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={onRegenerate}
                      className="border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Regenerate</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div
            className={`bg-orange-50 border border-orange-200 p-6 rounded-lg ${contentType === "poem" ? "font-serif" : "font-sans"} relative min-h-[300px] flex items-center justify-center`}
          >
            {isLoading ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin-orange rounded-full h-10 w-10 border-4 border-orange-200 border-t-orange-500"></div>
                <div className="animate-pulse-orange">
                  <p className="text-orange-600 font-medium">
                    Generating your {contentType}...
                  </p>
                </div>
                <div className="flex space-x-1">
                  <div
                    className="animate-bounce-orange h-2 w-2 bg-orange-400 rounded-full"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="animate-bounce-orange h-2 w-2 bg-orange-500 rounded-full"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="animate-bounce-orange h-2 w-2 bg-orange-600 rounded-full"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="prose max-w-none w-full">
                <div className="whitespace-pre-line leading-relaxed">
                  {content.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="cursor-pointer hover:bg-orange-100 px-1 rounded transition-colors"
                      onClick={() => handleWordClick(word)}
                    >
                      {word}{" "}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Chatbot button */}
            <motion.div
              className="absolute bottom-4 right-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => setShowChatbot(true)}
                    >
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Not sure what a word means? Ask me!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle className="capitalize">
              {contentType} Preview
            </DialogTitle>
            <DialogDescription>
              View your {contentType} in fullscreen mode
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto h-full p-6 bg-orange-50 border border-orange-200 rounded-lg">
            <div
              className={`prose max-w-none ${contentType === "poem" ? "font-serif" : "font-sans"}`}
            >
              <div className="whitespace-pre-line leading-relaxed">
                {content.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className="cursor-pointer hover:bg-orange-100 px-1 rounded transition-colors"
                    onClick={() => handleWordClick(word)}
                  >
                    {word}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Chatbot Dialog */}
      <Dialog open={showChatbot} onOpenChange={setShowChatbot}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Word Explanation</DialogTitle>
            <DialogDescription>
              Understanding the word "{selectedWord}"
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-black font-medium">{wordExplanation}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContentPreview;
