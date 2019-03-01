const jimp = require('jimp');

const killer = "Huragok";
const victim = "Aastla's stupid question";
const widow = "widow.PNG";

const imgExport = "widowtest.png";

const strsizemult = 25;

async function composeimg(killer, img1name, victim, img2name){
    const img1 = await jimp.read(img1name);
    const img2 = await jimp.read(img2name);
    widowheight = img1.bitmap.height;
    widowlen = img1.bitmap.width;
    const newwidthl = strsizemult * (killer.length + 1) + widowlen;
    const newwidthr = newwidthl + strsizemult * victim.length;
    img1.contain(newwidthl, widowheight, jimp.HORIZONTAL_ALIGN_RIGHT);
    img1.contain(newwidthr, widowheight, jimp.HORIZONTAL_ALIGN_LEFT);
    const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    img1.print(font, strsizemult, widowheight / 4, killer.toUpperCase());
    img1.print(font, newwidthl + strsizemult, widowheight / 4, victim.toUpperCase());
    img1.quality(100).write(imgExport);
}


composeimg(killer, widow, victim, widow);