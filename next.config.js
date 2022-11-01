/** @type {import('next').NextConfig} */


module.exports =  {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  typescript: {ignoreBuildErrors:true},
  experimental:{appDir:true}
};
