interface Config {
  geminiApiKey: string;
}

export const config: Config = {
  geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
};

export const validateConfig = (): void => {
  if (!config.geminiApiKey) {
    throw new Error("VITE_GEMINI_API_KEY environment variable is required");
  }
};
