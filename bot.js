var Discord = require('discord.io');
var logger = require('winston');
var jimp = require('jimp');
var auth = require('./auth.json');

const bot = new Discord.Client({
    token: auth.token,
    autorun: true,
});

const strsizemult = 5; // Size of a single character in string

bot.on('message', function(user, userID, channelID, message, evt) {
    if(user.bot === true) {
        return;
    }
    if(message.substring(0, 5) === "!KMB ") {
        const args = message.substring(5).split('->');
        if(args.length === 1) {
            //check for help
            if(args[0] === "help" || args[0] === "h");
            bot.sendMessage({
                to: channelID,
                message: "Type !KMB (killer) (victim) to make your meme."
            });
        }
        const killer = args[0];
        const victim = args[1];
        const memeBuf = await jimp.read('widow.png'); // store image buffer here
        const widowheight = memeBuf.bitmap.height;
        const widowlen = memeBuf.bitmap.length;
        const newwidth = strsizemult * (killer.length + victim.length);
        memeBuf.contain(newwidth, widowheight, jimp.HORIZONTAL_ALIGN_CENTER);
        const font = await jimp.loadFont(jimp.FONT_SANS_10_BLACK);
        memeBuf.print(font, 0, 0, killer);
        memeBuf.print(font, newwidth / 2 + widowlen / 2, 0, victim);
        bot.uploadFile({
            to: channelID,
            file: memeBuf,
        });
    }
});