/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module "*.svg" {
  const content: string;
  export default content;
} 