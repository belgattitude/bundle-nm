import { GluegunCommand } from 'gluegun';

const command: GluegunCommand = {
  name: 'bundle-nm-cli',
  run: async (toolbox) => {
    const { print } = toolbox;

    print.info('Welcome to your CLI, Yo!');
  },
};

module.exports = command;
