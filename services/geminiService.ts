import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("Failed to initialize Gemini AI:", e);
  }
}

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string) => {
  if (!ai || !apiKey) {
    console.warn("Gemini API Key is missing. Returning mock response.");
    return "I'm currently in demo mode as the API key hasn't been configured. Once fully deployed with a valid key, I can help you find your dream home!";
  }

  try {
    const model = 'gemini-1.5-flash';

    // Construct the chat history for the API
    const chatHistory = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: msg.parts,
    }));

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: `You are "Archie", the AI Real Estate Expert for Archistry. 
        Your goal is to help users navigate the luxury real estate market.
        
        Tone: Professional, sophisticated, yet warm and inviting. Matches the "Archistry" brand of exceptional properties and strategic insight.
        
        Capabilities:
        1. Answer questions about buying/selling luxury homes.
        2. Explain current market trends (invent plausible but general expert advice).
        3. Schedule consultations (pretend to book them).
        
        Keep responses concise (under 100 words) as you are in a chat widget.
        If asked about specific listings, invent 1-2 high-end "Archistry Exclusive" listings with features like "Infinity pools", "Minimalist architecture", etc.
        `,
      },
      history: chatHistory
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to our real estate database at the moment. Please try again shortly.";
  }
};