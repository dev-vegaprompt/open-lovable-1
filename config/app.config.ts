// Application Configuration
// This file contains all configurable settings for the application

export const appConfig = {
  // Vercel Sandbox Configuration
  vercelSandbox: {
    // Sandbox timeout in minutes
    timeoutMinutes: 15,

    // Convert to milliseconds for Vercel Sandbox API
    get timeoutMs() {
      return this.timeoutMinutes * 60 * 1000;
    },

    // Development server port (Vercel Sandbox typically uses 3000 for Next.js/React)
    devPort: 3000,

    // Time to wait for dev server to be ready (in milliseconds)
    devServerStartupDelay: 7000,

    // Time to wait for CSS rebuild (in milliseconds)
    cssRebuildDelay: 2000,

    // Working directory in sandbox
    workingDirectory: '/app',

    // Default runtime for sandbox
    runtime: 'node22' // Available: node22, python3.13, v0-next-shadcn, cua-ubuntu-xfce
  },

  // E2B Sandbox Configuration
  e2b: {
    // Sandbox timeout in minutes
    timeoutMinutes: 30,

    // Convert to milliseconds for E2B API
    get timeoutMs() {
      return this.timeoutMinutes * 60 * 1000;
    },

    // Development server port (E2B uses 5173 for Vite)
    vitePort: 5173,

    // Time to wait for Vite dev server to be ready (in milliseconds)
    viteStartupDelay: 10000,

    // Working directory in sandbox
    workingDirectory: '/home/user/app',
  },

  // AI Model Configuration
  ai: {
    // Default AI model - Gemini 3 Flash is the NEWEST (Dec 17, 2025)! 3x faster than 2.5 Pro!
    defaultModel: 'google/gemini-3-flash',

    // Available models (ordered by recommendation)
    availableModels: [
      // 🔥 Z.AI GLM - FREE with API key!
      'zai/glm-4.7',                       // Mais recente e poderoso!
      'zai/glm-4.5-air',                   // Versão otimizada
      // 🔥 Google Gemini 3 - NEWEST (December 2025)!
      'google/gemini-3-flash',             // Lançado 17/12/2025 - 3x mais rápido!
      'google/gemini-3-flash-preview',     // Preview version
      // Google Gemini 2.5
      'google/gemini-2.5-flash',
      'google/gemini-2.5-pro',
      // Google Gemini 2.0 - Still great and FREE!
      'google/gemini-2.0-flash',
      'google/gemini-2.0-flash-exp',
      // OpenRouter FREE models
      'openrouter/google/gemini-3-flash:free',
      'openrouter/google/gemini-2.0-flash-exp:free',
      'openrouter/meta-llama/llama-3.1-70b-instruct:free',
      'openrouter/mistralai/mistral-7b-instruct:free',
      // Premium models
      'openai/gpt-4o',
      'anthropic/claude-sonnet-4-20250514',
      'moonshotai/kimi-k2-instruct-0905',
    ],

    // Model display names
    modelDisplayNames: {
      // 🔥 Z.AI GLM - FREE!
      'zai/glm-4.7': '🆓 GLM 4.7 (Z.AI)',
      'zai/glm-4.5-air': '🆓 GLM 4.5 Air (Z.AI)',
      // 🔥 Google Gemini 3 - NEWEST!
      'google/gemini-3-flash': '🚀 Gemini 3 Flash (NOVO!)',
      'google/gemini-3-flash-preview': '🧪 Gemini 3 Flash Preview',
      // Google Gemini 2.5
      'google/gemini-2.5-flash': '⚡ Gemini 2.5 Flash',
      'google/gemini-2.5-pro': '💎 Gemini 2.5 Pro',
      // Google Gemini 2.0
      'google/gemini-2.0-flash': '⚡ Gemini 2.0 Flash (FREE)',
      'google/gemini-2.0-flash-exp': '🧪 Gemini 2.0 Flash Exp',
      // OpenRouter FREE
      'openrouter/google/gemini-3-flash:free': '🆓 Gemini 3 Flash (OpenRouter)',
      'openrouter/google/gemini-2.0-flash-exp:free': '🆓 Gemini 2.0 Flash (OpenRouter)',
      'openrouter/meta-llama/llama-3.1-70b-instruct:free': '🆓 Llama 3.1 70B (OpenRouter)',
      'openrouter/mistralai/mistral-7b-instruct:free': '🆓 Mistral 7B (OpenRouter)',
      // Premium
      'openai/gpt-4o': 'GPT-4o',
      'anthropic/claude-sonnet-4-20250514': 'Claude Sonnet 4',
      'moonshotai/kimi-k2-instruct-0905': 'Kimi K2 (Groq)',
    } as Record<string, string>,

    // Model API configuration - map display names to actual API model names
    modelApiConfig: {
      // Z.AI GLM models - OpenAI-compatible API
      'zai/glm-4.7': {
        provider: 'zai',
        model: 'glm-4.7'
      },
      'zai/glm-4.5-air': {
        provider: 'zai',
        model: 'glm-4.5-air'
      },
      // Google Gemini models - explicit mapping to correct API names
      'google/gemini-3-flash': {
        provider: 'google',
        model: 'gemini-2.0-flash'  // Gemini 3 Flash uses this API name
      },
      'google/gemini-3-flash-preview': {
        provider: 'google',
        model: 'gemini-2.0-flash-exp'
      },
      'google/gemini-2.5-flash': {
        provider: 'google',
        model: 'gemini-2.0-flash'  // 2.5 Flash API name
      },
      'google/gemini-2.5-pro': {
        provider: 'google',
        model: 'gemini-1.5-pro'  // 2.5 Pro API name
      },
      'google/gemini-2.0-flash': {
        provider: 'google',
        model: 'gemini-2.0-flash'
      },
      'google/gemini-2.0-flash-exp': {
        provider: 'google',
        model: 'gemini-2.0-flash-exp'
      },
      // Groq models
      'moonshotai/kimi-k2-instruct-0905': {
        provider: 'groq',
        model: 'moonshotai/kimi-k2-instruct-0905'
      },
      // OpenRouter models - use OpenAI-compatible API
      'openrouter/google/gemini-3-flash:free': {
        provider: 'openrouter',
        model: 'google/gemini-2.0-flash-exp:free'
      },
      'openrouter/google/gemini-2.0-flash-exp:free': {
        provider: 'openrouter',
        model: 'google/gemini-2.0-flash-exp:free'
      },
      'openrouter/meta-llama/llama-3.1-70b-instruct:free': {
        provider: 'openrouter',
        model: 'meta-llama/llama-3.1-70b-instruct:free'
      },
      'openrouter/mistralai/mistral-7b-instruct:free': {
        provider: 'openrouter',
        model: 'mistralai/mistral-7b-instruct:free'
      },
    },

    // Temperature settings for non-reasoning models
    defaultTemperature: 0.7,

    // Max tokens for code generation
    maxTokens: 8000,

    // Max tokens for truncation recovery
    truncationRecoveryMaxTokens: 4000,
  },

  // Code Application Configuration
  codeApplication: {
    // Delay after applying code before refreshing iframe (milliseconds)
    defaultRefreshDelay: 2000,

    // Delay when packages are installed (milliseconds)
    packageInstallRefreshDelay: 5000,

    // Enable/disable automatic truncation recovery
    enableTruncationRecovery: false, // Disabled - too many false positives

    // Maximum number of truncation recovery attempts per file
    maxTruncationRecoveryAttempts: 1,
  },

  // UI Configuration
  ui: {
    // Show/hide certain UI elements
    showModelSelector: true,
    showStatusIndicator: true,

    // Animation durations (milliseconds)
    animationDuration: 200,

    // Toast notification duration (milliseconds)
    toastDuration: 3000,

    // Maximum chat messages to keep in memory
    maxChatMessages: 100,

    // Maximum recent messages to send as context
    maxRecentMessagesContext: 20,
  },

  // Development Configuration
  dev: {
    // Enable debug logging
    enableDebugLogging: true,

    // Enable performance monitoring
    enablePerformanceMonitoring: false,

    // Log API responses
    logApiResponses: true,
  },

  // Package Installation Configuration
  packages: {
    // Use --legacy-peer-deps flag for npm install
    useLegacyPeerDeps: true,

    // Package installation timeout (milliseconds)
    installTimeout: 60000,

    // Auto-restart Vite after package installation
    autoRestartVite: true,
  },

  // File Management Configuration
  files: {
    // Excluded file patterns (files to ignore)
    excludePatterns: [
      'node_modules/**',
      '.git/**',
      '.next/**',
      'dist/**',
      'build/**',
      '*.log',
      '.DS_Store'
    ],

    // Maximum file size to read (bytes)
    maxFileSize: 1024 * 1024, // 1MB

    // File extensions to treat as text
    textFileExtensions: [
      '.js', '.jsx', '.ts', '.tsx',
      '.css', '.scss', '.sass',
      '.html', '.xml', '.svg',
      '.json', '.yml', '.yaml',
      '.md', '.txt', '.env',
      '.gitignore', '.dockerignore'
    ],
  },

  // API Endpoints Configuration (for external services)
  api: {
    // Retry configuration
    maxRetries: 3,
    retryDelay: 1000, // milliseconds

    // Request timeout (milliseconds)
    requestTimeout: 30000,
  }
};

// Type-safe config getter
export function getConfig<K extends keyof typeof appConfig>(key: K): typeof appConfig[K] {
  return appConfig[key];
}

// Helper to get nested config values
export function getConfigValue(path: string): any {
  return path.split('.').reduce((obj, key) => obj?.[key], appConfig as any);
}

export default appConfig;