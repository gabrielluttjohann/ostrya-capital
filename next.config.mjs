// next.config.js
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Desativa a otimização de imagens
    domains: [
      "via.placeholder.com",
      "i.ibb.co",
      "picsum.photos",
      "placehold.co",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Desativa o cache do Webpack
    config.cache = false;

    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
