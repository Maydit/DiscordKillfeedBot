const jimp = require('jimp');

const killer = "Huragok";
const victim = "Aastla's stupid question";

const imgExport = "widowtext.png";

const strsizemult = 5;

async function main(){
    const widowimg = await jimp.read('widow.png');
    widowheight = widowimg.bitmap.height;
    widowlen = widowimg.bitmap.length;
    const newwidth = strsizemult * (victim.length + killer.length) + widowlen;
    widowimg.contain(newwidth, widowheight, jimp.HORIZONTAL_ALIGN_CENTER);
    const font = await jimp.loadFont(jimp.FONT_SANS_10_BLACK);
    widowimg.print(font, 0, 0, killer);
    widowimg.print(font, newwidth / 2 + widowlen / 2, 0, victim);
    widowimg.quality(100).write(imgExport);
}