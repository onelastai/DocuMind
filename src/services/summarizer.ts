import { CONFIG } from '../config'

export function summarizeContent(text: string): string {
  const prompt = `Summarize this document:\n${text}`
  // Placeholder for LLM call
  return `Summary using ${CONFIG.llmModel}: [placeholder output]`
}

