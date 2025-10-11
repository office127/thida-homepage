// TypeScript declarations for Nuxt auto-imports and Vite features
declare global {
  const useState: typeof import('nuxt/app')['useState']
  const useCookie: typeof import('nuxt/app')['useCookie']
  const readonly: typeof import('vue')['readonly']
  
  // Server-side utilities
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const getMethod: typeof import('h3')['getMethod']
  const createError: typeof import('h3')['createError']
  const useRuntimeConfig: typeof import('nuxt/app')['useRuntimeConfig']
  const readBody: typeof import('h3')['readBody']
}

// Extend ImportMeta interface for Vite
interface ImportMeta {
  readonly client: boolean
  readonly server: boolean
}

export {}
