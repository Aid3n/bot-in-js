const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})

//ready -> bot is online!
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("X-01");
});

//!hello -> Hello!
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello!");
    }
})

//what is my avatar -> avatar url
client.on('message', message => {
    if (message.content === 'what is my avatar') {
        return message.channel.send(message.author.avatarURL);
    }
});

//!join -> join voice channel
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if (!message.guild) return;
    
    if (message.content === '!join') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
                return message.channel.send('Me he unido a tu canal de voz correctamente.');
            })
            .catch(console.log);
        } else {
            return message.channel.send('Debes estar en un canal de voz primero.');
        }
    }
});

client.login(procces.env.BOT_TOKEN);
