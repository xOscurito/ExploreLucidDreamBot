const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = 'ld!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot avviato');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'mild' || command === 'mildinfo'){
        client.commands.get('mild').execute(message, args);
    } 
    if(command === 'wbtb' || command === 'wbtbinfo'){
        client.commands.get('mild').execute(message, args);
    } 



    else
    {
        message.channel.send('Invalid command. Use ld!help for a list of commands.')
    }
});
 



client.login(process.env.token);