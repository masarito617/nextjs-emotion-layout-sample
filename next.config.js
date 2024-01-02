/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      // Emotion有効化
      emotion: true,
    };
    return compilerConfig;
  })(),
}

module.exports = nextConfig
