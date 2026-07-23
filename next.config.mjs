/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // output: 'export',
  // Set basePath to your repo name if deploying to username.github.io/repo-name
  // Leave empty if deploying to username.github.io (repo named <username>.github.io)
  // basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
