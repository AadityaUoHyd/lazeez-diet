/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BACKEND_URL: string; // Replace/add your actual env vars here
    // Add more if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  /// <reference types="vite/client" />
