/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            hostname: "bucket-api.domain.com.au",
        },
        {
          hostname: "youtu.be",
      },
    ]
}
}

module.exports = nextConfig, (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}
