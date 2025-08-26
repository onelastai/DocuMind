import { CONFIG } from './config'
import { parseDocument } from './services/parser'
import { summarizeContent } from './services/summarizer'

export function startAgent() {
  console.log(`📄 DocuMind v${CONFIG.version} activated`)
  const rawText = parseDocument(CONFIG.inputPath)
  const summary = summarizeContent(rawText)
  console.log('🧠 Summary:', summary)
}

