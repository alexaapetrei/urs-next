/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const typescript = {
  ignoreBuildErrors: true,
}

module.exports = {nextConfig,typescript}
