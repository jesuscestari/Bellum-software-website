const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
