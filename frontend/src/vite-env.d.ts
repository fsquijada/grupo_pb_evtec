/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_LAUNCH_DATE?: string;
  readonly VITE_REGISTRATION_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
