import OpenAI from 'openai';

const apiKey = await import.meta.env.VITE_OPENAI_API_KEY


const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

export default openai;