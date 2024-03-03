/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VVITE_SERVERADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
