const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "p!"
const config = require('./config.json');
game = 'with p!help'

bot.on('ready', () => {
  bot.user.setGame(game);
  console.log('I am ready!');
});

bot.on('message', message => {
if (message.content === prefix + 'ping') {
   startTime = Date.now();
   message.channel.sendMessage("The fire is taking you...").then((message) => {
     endTime = Date.now();
       message.edit("The ping of you is - " + Math.round(endTime - startTime) + " ms");
     });
   }
 if (message.content === prefix + 'help') {
    message.channel.sendMessage("Check your DMs! :envelope_with_arrow: ");
    message.author.sendMessage('***My commands are:***\n' +
'```ping | The Fire pings you\n' +
'help | shows this message\n'+
'say | makes the bot say what you say\n'+
'inviteme | gives you the bot invite link\n'+
'shutdown | shutdowns the bot! Just owners can execute this command!\n'+
'8ball | ask 8ball a question!```\n');
  }
if (message.content.startsWith('p!say')) {
var msg = message.content.replace("p!say", "");
message.delete();
message.channel.sendMessage(msg);
}
if (message.content === prefix + 'inviteme') {
   message.channel.sendMessage("Check your DMs! :envelope_with_arrow: ");
   message.author.sendMessage("Here you can invite me to your server: https://discordapp.com/oauth2/authorize?client_id=314051446817554433&scope=bot&permissions=0");
}
  if (message.content === prefix + 'shutdown') {
    if((message.author.id === config.ownerID)) {
      message.channel.sendMessage('The bot is shutting down! :hand_splayed: ');
      bot.destroy()
    } else {
      message.reply('You arent the owner of the bot to do that!')
    }
  }

  if (message.content.startsWith('p!8ball')) {
    if ( message.content.endsWith('?')) {
      var answers = [
      'Maybe.', 'Lol no.', 'I really hope so.', 'Not in your wildest dreams.',
      'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
      'I hope so.', 'Wtf no!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
      'Sorry, bby.', 'fuck, yes.', 'Hell to the no.', 'ehhhhhh, i dont know.',
      'The future is uncertain.', 'I would rather not say.', 'Who cares?',
      'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];
      var answer = answers[Math.floor(Math.random() * answers.length)];
    } else {
      message.channel.sendMessage('Please add "?" to your question!');
    }
  message.channel.sendMessage(answer);
} 


});

bot.login(config.token);