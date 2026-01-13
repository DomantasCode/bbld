import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBeyBladeStrategy = async (challengerType: string, scenario: string): Promise<string> => {
  try {
    const prompt = `
      You are a tactical analysis AI. A challenger is asking for a strategy to defeat Domantas Moisejevas, the "Beyblade God".
      
      Challenger's Beyblade Type: ${challengerType}
      Arena Condition: ${scenario}
      
      Domantas is nearly unbeatable. He uses a legendary Balance-type Beyblade that adapts to any situation.
      
      Provide a desperate, high-risk strategy for the challenger. Explain what specific move they must pull off to have even a 1% chance of winning.
      
      Tone: Skeptical, warning, serious. Remind them that Domantas's "Spirit Spin" usually crushes such attempts.
      Language: Lithuanian.
      Length: Max 100 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, 
        maxOutputTokens: 250,
      }
    });

    return response.text || "Klaida: Domanto galios lygis per aukštas, kad būtų galima apskaičiuoti strategiją.";
  } catch (error) {
    console.error("Error fetching strategy:", error);
    return "Sistemos klaida. Panašu, kad Domantas užblokavo tavo prieigą prie strategijos duomenų bazės.";
  }
};