const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = 'ld!';
const prefixx = 'LD!';
const prefixxx = 'Ld!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot ora avviato');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) && !message.content.startsWith(prefixx) && !message.content.startsWith(prefixxx) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help' || command === 'list'){
        client.commands.get('list').execute(message, args);
    } 
    else if(command === 'mild' || command === 'mildinfo'){
        client.commands.get('mild').execute(message, args);
    } 
    else if(command === 'wbtb' || command === 'wbtbinfo'){
        client.commands.get('wbtb').execute(message, args);
    } 
    else if(command === 'wild' || command === 'wildinfo'){
        client.commands.get('wild').execute(message, args);
    } 
    else if(command === 'sp' || command === 'sleepparalysis' || command === 'sleep_paralyisis'){
        client.commands.get('sleepp').execute(message, args);
    } 





    else
    {
        message.channel.send('Invalid command. Type ld!help or ld!list for a list of commands.')
    }
});
 

client.login(process.env.token);