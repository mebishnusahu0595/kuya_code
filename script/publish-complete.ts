#!/usr/bin/env bun

import { Script } from "@kuyacode-ai/script"
import { $ } from "bun"

if (!Script.preview) {
  await $`gh release edit v${Script.version} --draft=false`
}

await $`bun install`

await $`gh release download --pattern "kuyacode-linux-*64.tar.gz" --pattern "kuyacode-darwin-*64.zip" -D dist`

await import(`../packages/kuyacode/script/publish-registries.ts`)
