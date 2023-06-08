const { Client, GatewayIntentBits } = require('discord.js');

const testIntents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers
];

const client = new Client({ intents: testIntents });

const token = 'MTExNTY3MDM4NjI0MDEzMTA3Mg.Gd7KCV.cYq2Wya5_9_q8veIvitXRDSLyEd3yU3jqWQlBo';

// Log in the bot using the token
client.login(token);

// Event listener for handling incoming messages
client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'hello') {
    message.reply('Hello! How are you?');
  }
  else if (message.content.toLowerCase() === 'bye') {
    message.reply('Bye bye!');
  }
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  // Perform any necessary cleanup or logging
  // You can also terminate the process if needed: process.exit(1);
});
