require("./src/MSL.js");

osc(10, 0.9, 300)
.color(0.9, 0.7, 0.8)
.diff(
	osc(45, 0.3, 100)
	.color(0.9, 0.9, 0.9)
	.rotate(0.18)
	.pixelate(12)
	.kaleid()
)
.scrollX(10)
.colorama()
.luma()
.repeatX(4)
.repeatY(4)
.modulate(
	osc(1, -0.9, 300)
)
.scale(2)
.out()