const Discord = require('discord.js');


const emoji = require('../../emojis.json')

module.exports = {
    name: 'pause',
    description: 'Met la musique actuelle en pause',
    cat: 'musique',

    botpermissions: ['CONNECT', 'SPEAK'],

    async execute(message, args) {


        const voice = message.member.voice.channel;
        if (!voice) {
            return message.errorMessage(`Vous devez d'abord rejoindre un salon vocal !`)
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.errorMessage(`Nous ne sommes pas dans le même salon vocal`);

        if (!message.client.player.getQueue(message)) return message.errorMessage(`Je ne joue pas de musique actuellement.`)
        if (message.client.player.getQueue(message).paused) return message.errorMessage(`La musique est déja en pause sur ce serveur .`)

        message.client.player.pause(message);

        message.mainMessage(`▶ La musique a été mise en pause sur le serveur  !`);












    },
};