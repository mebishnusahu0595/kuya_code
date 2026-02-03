import { $ } from "bun"

import { copyBinaryToSidecarFolder, getCurrentSidecar, windowsify } from "./utils"

const RUST_TARGET = Bun.env.TAURI_ENV_TARGET_TRIPLE

const sidecarConfig = getCurrentSidecar(RUST_TARGET)

const binaryPath = windowsify(`../kuyacode/dist/${sidecarConfig.ocBinary}/bin/kuyacode`)

await $`cd ../kuyacode && bun run build --single`

await copyBinaryToSidecarFolder(binaryPath, RUST_TARGET)
