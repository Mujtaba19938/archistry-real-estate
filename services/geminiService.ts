import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string) => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the chat history for the API
    // We only send the last few messages to keep context relevant but concise
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