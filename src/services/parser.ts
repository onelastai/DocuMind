import fs from 'fs'

export function parseDocument(path: string): string {
  console.log(`📥 Parsing document at ${path}`)
  return fs.readFileSync(path, 'utf-8')
}

