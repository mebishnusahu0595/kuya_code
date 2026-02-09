export * from "./client.js"
export * from "./server.js"

import { createKuyaCodeClient } from "./client.js"
import { createKuyaCodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createKuyaCode(options?: ServerOptions) {
  const server = await createKuyaCodeServer({
    ...options,
  })

  const client = createKuyaCodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
