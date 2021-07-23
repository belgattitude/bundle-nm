import { nodeFileTrace, NodeFileTraceOptions } from '@vercel/nft';

export class BundleAnalyzer {
  async getDependencies() {
    const buildPath =
      '/home/sebastien/github/nextjs-monorepo-example/apps/web-app/.next';

    const files = [
      'server/pages/api/hello.js',
      'server/pages/api/rest/poem.js',
    ].map((file) => `${buildPath}/${file}`);

    const { fileList, reasons, esmFileList } = await nodeFileTrace(files, {
      base: '/home/sebastien/github/nextjs-monorepo-example',
    });
    return fileList;
  }
}
