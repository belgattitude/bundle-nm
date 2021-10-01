import path from 'path';
import {
  nodeFileTrace,
  NodeFileTraceResult,
  NodeFileTraceReasons,
} from '@vercel/nft';
import fsExtra from 'fs-extra';
import { SetRequired } from 'type-fest';
import { isPlainObject } from '../utils/typeguards';

type ServerPagesEntry = {
  route: string;
  file: string;
};

type Options = {
  /** Nextjs .next build directory */
  buildDir: string;
  baseDir: string;
  layout?: {
    pagesManifest: string;
  };
};

const getDefaultOptions = (
  buildDir: string
): NonNullable<Options['layout']> => {
  return {
    pagesManifest: `${buildDir}/server/pages-manifest.json`,
  };
};

export class NextjsServerBuilder {
  private options: SetRequired<Options, 'layout'>;

  constructor(options: Options) {
    this.options = {
      ...{ layout: getDefaultOptions(options.buildDir) },
      ...options,
    } as const;
    this.options.layout?.pagesManifest;
  }

  getTrace = async (): Promise<NodeFileTraceResult> => {
    const ssrPagesEntries = await this.getSsrPagesEntries();
    const files = [];
    for (const entry of ssrPagesEntries) {
      files.push(entry.file);
    }

    //const base = this.options.baseDir || process.cwd();
    const trace = await nodeFileTrace(files, {
      base: this.options.baseDir,
      //resolve: this.buildOptions.resolve,
    });
    console.log('a', trace.reasons);
    return trace;
  };

  getSsrPagesEntries = async (): Promise<ServerPagesEntry[]> => {
    const { pagesManifest } = this.options.layout;
    const hasServerPageManifest = await fsExtra.pathExists(pagesManifest);
    if (!hasServerPageManifest) {
      throw new Error(`Missing pagesManifest: ${pagesManifest}`);
    }
    const entries = await fsExtra.readJSON(pagesManifest, { throws: true });
    if (!isPlainObject<string>(entries)) {
      throw new Error(`Invalid pagesManifest: ${pagesManifest}`);
    }
    const files: ServerPagesEntry[] = [];
    for (const [route, file] of Object.entries(entries)) {
      if (path.extname(file) === '.js') {
        files.push({
          route: route,
          file: path.join(path.dirname(pagesManifest), `${file}`),
        });
      }
    }
    return files;
  };
}
