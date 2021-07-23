import { GluegunCommand } from 'gluegun';
import { BundleAnalyzer } from '@soluble/bundle-nm-core';

const command: GluegunCommand = {
  name: 'bundle-nm-cli',
  run: async (toolbox) => {
    const { print } = toolbox;

    print.info('Welcome to your CLI, Yo!');
    const bundleAnalyzer = new BundleAnalyzer();
    console.log('cool', await bundleAnalyzer.getDependencies());
  },
};

module.exports = command;
