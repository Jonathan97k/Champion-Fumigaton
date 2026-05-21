declare module 'next' {
  import type { NextConfig as NextConfigType } from 'next/dist/server/config';
  export type NextConfig = NextConfigType;
}

declare module 'next/types.js' {
  import type { Metadata, ResolvingMetadata, ResolvingViewport, Viewport } from 'next/types';
  export type { Metadata, ResolvingMetadata, ResolvingViewport, Viewport };
}

declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  import type { Metadata, ResolvingMetadata, ResolvingViewport, Viewport } from 'next/dist/lib/metadata/types/metadata-interface';
  export type { Metadata, ResolvingMetadata, ResolvingViewport, Viewport };
}

declare module 'next/dist/server/next.js' {
  import type { NextConfig } from 'next/dist/server/config';
  export type { NextConfig };
}
