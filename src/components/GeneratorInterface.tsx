import React, { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import ContentPreview from "./ContentPreview";
import { Sparkles, RefreshCw, Languages, Palette, Volume2 } from "lucide-react";
import { generateContent, GenerateContentParams } from "@/lib/apiService";

interface GeneratorInterfaceProps {
  onGenerate?: (content: string) => void;
}

const GeneratorInterface: React.FC<GeneratorInterfaceProps> = ({
  onGenerate = () => {},
}) => {
  const [theme, setTheme] = useState("");
  const [contentType, setContentType] = useState("poem");
  const [language, setLanguage] = useState("english");
  const [style, setStyle] = useState("poetic");
  const [tone, setTone] = useState("creative");
  const [length, setLength] = useState([500]);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!theme.trim()) return;

    setIsGenerating(true);

    try {
      const params: GenerateContentParams = {
        prompt: theme,
        format: contentType as "poem" | "essay",
        tone,
        style,
        wordCount: length[0],
        language: (language.charAt(0).toUpperCase() + language.slice(1)) as
          | "English"
          | "Tagalog"
          | "Korean"
          | "Japanese"
          | "Spanish",
      };

      const content = await generateContent(params);
      setGeneratedContent(content);
      onGenerate(content);
    } catch (error) {
      console.error("Error generating content:", error);
      // Fallback to demo content if API fails
      const fallbackContent =
        contentType === "poem"
          ? `Here is a ${tone} poem about ${theme} in ${style} style:\n\nThe wonders of ${theme}\nCaptivate my soul and mind,\nIn depths of thought I find,\nBeauty that's one of a kind.\n\nThrough valleys deep and mountains high,\nThe journey of ${theme} takes flight,\nIlluminating darkest night,\nWith wisdom's gentle, guiding light.`
          : `This essay explores the fascinating topic of ${theme}. Written in a ${tone} tone with a ${style} approach, it delves into various aspects and considerations.\n\nFirstly, ${theme} represents a significant area of study in contemporary discourse. Scholars and researchers have long debated its implications and applications across different fields.\n\nMoreover, when examining ${theme} through a ${style} lens, we discover nuanced perspectives that challenge conventional thinking. This approach allows us to appreciate the complexity and multifaceted nature of the subject.`;

      setGeneratedContent(fallbackContent);
      onGenerate(fallbackContent);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-2">
          Create Your Poem or Essay Now!
        </h2>
        <p className="text-muted-foreground">
          Let your mind speak. InspiroAI brings your feelings to life through words.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Card className="lg:col-span-5 bg-card">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme/Topic</Label>
                <Textarea
                  id="theme"
                  placeholder="Enter the theme or topic you want your poem or essay to be about"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Content Type</Label>
                <RadioGroup
                  value={contentType}
                  onValueChange={setContentType}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poem" id="poem" />
                    <Label htmlFor="poem">Poem</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="essay" id="essay" />
                    <Label htmlFor="essay">Essay</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Languages className="mr-2 h-4 w-4" />
                  <Label>Preferred Language</Label>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="tagalog">Tagalog</SelectItem>
                    <SelectItem value="korean">Korean</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Palette className="mr-2 h-4 w-4" />
                  <Label>Style</Label>
                </div>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poetic">Poetic</SelectItem>
                    <SelectItem value="research-based">
                      Research-based
                    </SelectItem>
                    <SelectItem value="creative-writing">
                      Creative Writing
                    </SelectItem>
                    <SelectItem value="narrative">Narrative</SelectItem>
                    <SelectItem value="analytical">Analytical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Volume2 className="mr-2 h-4 w-4" />
                  <Label>Tone</Label>
                </div>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="reflective">Reflective</SelectItem>
                    <SelectItem value="persuasive">Persuasive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Word Count: {length[0]}</Label>
                <Slider
                  value={length}
                  onValueChange={setLength}
                  min={50}
                  max={1000}
                  step={50}
                />
              </div>

              <Button
                type="button"
                onClick={handleGenerate}
                className="w-full"
                disabled={!theme || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate My {contentType === "poem" ? "Poem" : "Essay"}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="lg:col-span-7">
          <ContentPreview
            content={generatedContent}
            contentType={contentType}
            isLoading={isGenerating}
            onRegenerate={handleRegenerate}
            language={language}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratorInterface;
