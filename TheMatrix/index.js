var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var text = 'abcdefghijklmnopqrstuvwxyz';
text = text.split('');

var fontsize = 22;
// compute Column
var col = c.width / fontsize;

var drops = [];
for (var i = 0; i < col; i++) {
	drops[i] = 0;
}

function draw() {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = '#0f0';
	ctx.font = fontsize + 'px arial';

	for (var i = 0, len = drops.length; i < len; i++) {
		var txt = text[Math.floor(Math.random() * text.length)];
		ctx.fillText(txt, i * fontsize, drops[i] * fontsize);
		drops[i]++;
		// loop drop
		if (drops[i] * fontsize > c.height && Math.random() > 0.95) {
			drops[i] = 0;
		}
	}
}

setInterval(draw, 30);
