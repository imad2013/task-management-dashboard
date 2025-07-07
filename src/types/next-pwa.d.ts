declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  interface PWAConfig {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    runtimeCaching?: any[];
    buildExcludes?: any[];
    fallbacks?: any;
    cacheOnFrontEndNav?: boolean;
    reloadOnOnline?: boolean;
    sw?: string;
    scope?: string;
    swUrl?: string;
    dynamicStartUrl?: boolean;
    dynamicStartUrlRedirect?: string;
    ignoreURLParametersMatching?: RegExp[];
    additionalManifestEntries?: any[];
    modifyURLPrefix?: Record<string, string>;
    maximumFileSizeToCacheInBytes?: number;
    sourcemap?: boolean;
    cleanupOutdatedCaches?: boolean;
    clientsClaim?: boolean;
    inlineWorkboxRuntime?: boolean;
    workboxOptions?: any;
  }

  interface NextPWAConfig extends NextConfig {
    pwa?: PWAConfig;
  }

  function withPWA(config?: NextPWAConfig): NextConfig;
  export = withPWA;
} 