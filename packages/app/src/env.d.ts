interface ImportMetaEnv {
  readonly VITE_KUYACODE_SERVER_HOST: string
  readonly VITE_KUYACODE_SERVER_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
