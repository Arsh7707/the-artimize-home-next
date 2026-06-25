/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin file-tracing to this project (avoids picking up a parent lockfile)
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
