const Discord = require('discord.js');


const emoji = require('../../emojis.json')

module.exports = {
    name: 'play',
    description: 'Joue la musique indiqué dans le salon vocal dans lequel vous êtes.',
    cat: 'musique',
    args: true,
    aliases: ['p', 'song'],
    usage: '<nom de la musique>',
    exemple: 'Angela',
    botpermissions: ['CONNECT', 'SPEAK'],

    async execute(message, args) {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.errorMessage(`Vous devez d'abord rejoindre un salon vocal !.`)
        }
        const name = args.join(" ");
        if (!name) {
            return message.errorMessage(`Veuillez fournir un nom de chanson ou un lien.`)
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.errorMessage(`Nous ne sommes pas dans le même salon vocal`);

        message.client.player.play(message, name, true);









    },
};