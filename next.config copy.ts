import nextra from "nextra";
import type { NextConfig } from "next";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: true,
});

export default nextConfig;
