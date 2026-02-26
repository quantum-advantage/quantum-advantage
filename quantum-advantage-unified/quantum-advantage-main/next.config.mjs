/** @type {import('next').NextConfig} */
import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['@/lib'] = path.resolve(__dirname, 'lib')
    return config
  },
 
}

export default nextConfig
