import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedWorkflow } from "../types";

const apiKey = process.env.API_KEY || '';

export const generateWorkflow = async (prompt: string): Promise<GeneratedWorkflow> => {
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "A catchy title for the workflow process" },
      description: { type: Type.STRING, description: "A brief professional summary of what this workflow achieves" },
      steps: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            step: { type: Type.INTEGER },
            action: { type: Type.STRING, description: "The specific action taken" },
            role: { type: Type.STRING, description: "The person or system role performing the action" },
            system: { type: Type.STRING, description: "The software tool involved (e.g. Slack, Salesforce, Jira)" }
          },
          required: ["step", "action", "role", "system"]
        }
      }
    },
    required: ["title", "description", "steps"]
  };

  const model = "gemini-3-flash-preview";
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Generate a detailed enterprise workflow for the following request: "${prompt}". 
      Focus on B2B SaaS integrations, automation, and role-based actions. 
      Keep it realistic and professional.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: "You are an expert enterprise solutions architect designed to map out business processes."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as GeneratedWorkflow;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
