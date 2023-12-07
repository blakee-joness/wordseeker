import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const dictionaryClient: AxiosInstance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/', // Ideally this would be an environment variable
  timeout: 5000, // Set a timeout of 5 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export interface DictionaryResponse {
  word: string
  phonetic: string
  phonetics: Array<{
    text: string
    audio?: string
  }>
  origin: string
  meanings: Array<{
    partOfSpeech: string
    definitions: Array<{
      definition: string
      example: string
      synonyms: string[]
      antonyms: string[]
    }>
  }>
}

export interface WordNotFoundResponse {
  title: string
  message: string
  resolution: string
}
