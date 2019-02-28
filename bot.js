var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var bot = new Discord.Client({
    token: auth.token,
    autorun: true,
});

bot.on('message', function(user, userID, channelID, message, evt) {
    if(message.substring(0, 5) === "!KMB ") {
        var args = message.substring(5).split('->');
        var killer = args[0];
        var victim = args[1];
        var memeBuf; // store image buffer here
        bot.uploadFile({
            to: channelID,
            file: memeBuf,
        });
    }
});