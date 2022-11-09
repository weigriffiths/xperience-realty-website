/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig, (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}
