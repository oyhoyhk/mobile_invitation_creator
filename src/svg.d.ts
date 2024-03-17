/// <reference types="vite-plugin-svgr/client" />

// svg.d.ts
declare module "*.svg" {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
