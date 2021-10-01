#!/usr/bin/env node
import fs from 'fs';
import { NextjsServerBuilder } from '@soluble/bundle-nm-core';
import cac from 'cac';
import { green } from 'nanocolors';
import prettyBytes from 'pretty-bytes';

const cli = cac();

cli
  .command('<target-folder>', 'Generate a new project to target folder')
  .option(
    '--npm-client <client>',
    `Choose an npm client for installing packages ('yarn' | 'npm' | 'pnpm')`
  )
  .action(async (targetFolder, { npmClient }) => {
    const baseDir = '/home/sebastien/github/nextjs-monorepo-example';
    const buildDir = `${baseDir}/apps/web-app/.next`;

    const builder = new NextjsServerBuilder({
      baseDir,
      buildDir,
    });
    const trace = await builder.getTrace();
    let total = 0;
    let count = 0;
    trace.fileList.map((file) => {
      const { size } = fs.statSync(`${baseDir}/${file}`);
      total += size;
      count++;
      console.log('file', prettyBytes(size), file);
    });
    console.log('Number of files:', `${green(count)}`);
    console.log('Total size:', `${green(prettyBytes(total))}`);
  });

cli.help();
cli.version(require('../package').version);

try {
  // Parse CLI args without running the command
  cli.parse(process.argv, { run: false });
  // Run the command yourself
  // You only need `await` when your command action returns a Promise
  cli.runMatchedCommand();
} catch (error) {
  // Handle error here..
  // e.g.
  console.error(error instanceof Error ? error.message : 'Unknown error type');
  process.exit(1);
}
