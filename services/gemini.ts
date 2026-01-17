
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

const handleApiKeyError = async (error: any) => {
  if (error?.message?.includes("Requested entity was not found")) {
    // @ts-ignore
    if (window.aistudio && window.aistudio.openSelectKey) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }
  }
};

export const generateMarketingCopy = async (params: {
  storeName: string;
  businessType: string;
  event: string;
  tone: string;
  lang: 'ar' | 'en';
  primaryColor: string;
  secondaryColor: string;
}) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let identityPrompt = "";
    if (params.primaryColor) {
      identityPrompt = `Brand Identity: Dominant colors are ${params.primaryColor} and ${params.secondaryColor}. Reflect these colors in the copy's visual descriptions if applicable.`;
    }

    const prompt = `Write a professional marketing caption for social media.
    Store Name: ${params.storeName}
    Business Category: ${params.businessType}
    Event/Occasion: ${params.event}
    Tone: ${params.tone}
    ${identityPrompt}
    Target Output Language: ${params.lang === 'ar' ? 'Arabic' : 'English'}
    Include hashtags and a clear call to action in ${params.lang === 'ar' ? 'Arabic' : 'English'}. Return only the text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    await handleApiKeyError(error);
    throw error;
  }
};

export const generateMarketingImage = async (params: {
  prompt: string;
  primaryColor: string;
  secondaryColor1: string;
  secondaryColor2: string;
  lang?: 'ar' | 'en';
  aspectRatio: "1:1" | "9:16" | "16:9";
}) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let visualRequirement = "";
    if (params.primaryColor) {
      visualRequirement = `
      CRITICAL VISUAL REQUIREMENT: Use a consistent color palette based on the brand's visual identity:
      - Primary color: ${params.primaryColor}
      - Secondary accents: ${params.secondaryColor1} and ${params.secondaryColor2}.
      The overall lighting, background elements, and textures should reflect this color scheme for brand consistency.`;
    } else {
      visualRequirement = `CRITICAL VISUAL REQUIREMENT: Use a vibrant, professional, and commercially attractive color palette that fits the event theme perfectly.`;
    }

    const langRequirement = params.lang === 'ar' 
      ? "If there is any visible text in the image, use Arabic language. The style should appeal to the Middle Eastern market."
      : "If there is any visible text in the image, use English language. The style should appeal to an international market.";

    const enhancedPrompt = `${params.prompt}. ${visualRequirement}. ${langRequirement}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: enhancedPrompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: params.aspectRatio,
        },
      },
    });

    let imageUrl = '';
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }
    return imageUrl;
  } catch (error) {
    await handleApiKeyError(error);
    throw error;
  }
};

export const generateMarketingVideo = async (params: {
  prompt: string;
  primaryColor: string;
  secondaryColor: string;
  lang?: 'ar' | 'en';
  aspectRatio: "9:16" | "16:9";
}) => {
  try {
    // @ts-ignore
    if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let colorPrompt = "";
    if (params.primaryColor) {
      colorPrompt = `The video cinematography should be color-graded to match the brand identity using ${params.primaryColor} and ${params.secondaryColor} as the core color theme.`;
    } else {
      colorPrompt = `The video cinematography should be professional, high-quality, and color-graded to suit a high-end commercial look.`;
    }

    const langPrompt = params.lang === 'ar' 
      ? "The visual narrative and any on-screen text/context should be in Arabic culture/language."
      : "The visual narrative and any on-screen text/context should be in English culture/language.";

    const enhancedPrompt = `${params.prompt}. ${colorPrompt}. ${langPrompt}`;

    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: enhancedPrompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: params.aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (downloadLink) {
      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
    return '';
  } catch (error) {
    await handleApiKeyError(error);
    throw error;
  }
};
