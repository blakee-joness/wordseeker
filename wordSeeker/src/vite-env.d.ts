/// <reference types="vite/client" />
interface ImportMeta {
  env: {
    readonly VITE_PREVIEW_PORT: number
    readonly VITE_APP_NAME: string
    readonly VITE_DICTIONARY_BASE_URL: string
  }
}
