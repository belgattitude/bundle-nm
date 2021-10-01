#!/usr/bin/env node
const path = require('path');
const cli = require('cac')();

cli
  .command('<target-folder>', 'Generate a new project to target folder')
  .option(
    '--npm-client <client>',
    `Choose an npm client for installing packages ('yarn' | 'npm' | 'pnpm')`
  )
  .action(async (targetFolder, { npmClient }) => {
    const sao = require('sao');

    const app = sao({
      generator: path.join(__dirname, '../generator'),
      outDir: targetFolder,
      npmClient,
    });

    await app.run().catch(sao.handleError);
  });

cli.help();
cli.version(require('../package').version);

(async () => {
  try {
    // Parse CLI args without running the command
    cli.parse(process.argv, { run: false });
    // Run the command yourself
    // You only need `await` when your command action returns a Promise
    await cli.runMatchedCommand();
  } catch (error) {
    // Handle error here..
    // e.g.
    console.error(error.message);
    process.exit(1);
  }
})();
