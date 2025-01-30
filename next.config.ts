import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "nikka-bill",
project: "nikka-bill",

// Only print logs for uploading source maps in CI
silent: false,

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

});