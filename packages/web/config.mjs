const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://kuyacode.ai" : `https://${stage}.kuyacode.ai`,
  console: stage === "production" ? "https://kuyacode.ai/auth" : `https://${stage}.kuyacode.ai/auth`,
  email: "contact@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/kuyacode",
  discord: "https://kuyacode.ai/discord",
  headerLinks: [
    { name: "Home", url: "/" },
    { name: "Docs", url: "/docs/" },
  ],
}
