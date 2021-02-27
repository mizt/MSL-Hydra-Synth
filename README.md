### MSL-Hydra-Synth

Export [ojack](https://github.com/ojack) / [hydra-synth](https://github.com/ojack/hydra-synth) as Metal shader (WIP).

### Note

* Source buffer is not supported.
* Number of output buffers available is currently one.

### Architecture settings

* `const OS = "macosx";`
* `const OS = "iphoneos";`
* `const OS = "iphonesimulator";`

in `MSL.js`





### Build
	
	$node example_11.js 
	

The following two files are export.

* ./assets/u0.json
* ./assets/s0.metal


### Build MSL

	$ cd ./assets
	$ xcrun -sdk macosx metal -c s0.metal -o s0.air; xcrun -sdk macosx metallib s0.air -o s0.metallib


### Play

[Hydra-Synth-Player](https://github.com/mizt/MSL-Hydra-Synth-Player)


### Test

[example\_3](https://hydra.ojack.xyz/?sketch_id=example_3)

![](./images/03.png "")

by Olivia Jack

	osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.94).modulateScale(osc(10, 0),-0.03).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time))).out(o0)

[example\_4](https://hydra.ojack.xyz/?sketch_id=example_4)

![](./images/04.png "")

by Nelson Vera   
twitter: @nel\_sonologia

	osc(8,-0.5, 1).color(-1.5, -1.5, -1.5).blend(o0).rotate(-0.5, -0.5).modulate(shape(4).rotate(0.5, 0.5).scale(2).repeatX(2, 2).modulate(o0, () => mouse.x * 0.0005).repeatY(2, 2)).out(o0)

[example\_6](https://hydra.ojack.xyz/?sketch_id=example_6)

![](./images/06.png "")

by Débora Falleiros Gonzales   
https://www.gonzalesdebora.com/

	osc(5).add(noise(5, 2)).color(0, 0, 3).colorama(0.4).out()

[example\_10](https://hydra.ojack.xyz/?sketch_id=example_10)

![](./images/10.png "")

by Zach Krall   
http://zachkrall.online/

	osc( 215, 0.1, 2 )
	.modulate(
	  osc( 2, -0.3, 100 )
	  .rotate(15)
	)
	.mult(
	  osc( 215, -0.1, 2)
	  .pixelate( 50, 50 )
	)
	.color( 0.9, 0.0, 0.9 )
	.modulate(
	  osc( 6, -0.1 )
	  .rotate( 9 )
	)
	.add(
	  osc( 10, -0.9, 900 )
	  .color(1,0,1)
	)
	.mult(
	  shape(900, 0.2, 1)
	  .luma()
	  .repeatX(2)
	  .repeatY(2)
	  .colorama(10)
	)
	.modulate(
	  osc( 9, -0.3, 900 )
	  .rotate( 6 )
	)
	.add(
	  osc(4, 1, 90)
	  .color(0.2,0,1)
	)
	.out()

[example\_11](https://hydra.ojack.xyz/?sketch_id=example_11)

![](./images/11.png "")

by Zach Krall
http://zachkrall.online/

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

[example\_14](https://hydra.ojack.xyz/?sketch_id=example_14)

![](./images/14.png "")

by Olivia Jack   
@\_ojack\_

	osc(20, 0.01, 1.1)
		.kaleid(5)
		.color(2.83,0.91,0.39)
		.rotate(0, 0.1)
		.modulate(o0, () => mouse.x * 0.0003)
		.scale(1.01)
	  	.out(o0)


[example\_15](https://hydra.ojack.xyz/?sketch_id=example_15)

![](./images/15.png "")

by Olivia Jack   
https://ojack.github.io

	osc(100, 0.01, 1.4)
	.rotate(0, 0.1)
	.mult(osc(10, 0.1).modulate(osc(10).rotate(0, -0.1), 1))
	.color(2.83,0.91,0.39)
	.out(o0)

[example\_16](https://hydra.ojack.xyz/?sketch_id=example_16)

![](./images/16.png "")

by Olivia Jack   
https://ojack.github.io

	osc(4, 0.1, 0.8).color(1.04,0, -1.1).rotate(0.30, 0.1).pixelate(2, 20).modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time)).out(o0)
	
[example\_17](https://hydra.ojack.xyz/?sketch_id=example_17)

![](./images/17.png "")

by Olivia Jack
twitter: @_ojack_

	pattern = () => osc(200, 0).kaleid(200).scale(1, 0.4)
	//
	pattern()
	  .scrollX(0.1, 0.01)
	  .mult(pattern())
	  .out()
	  
	  
[example\_18](https://hydra.ojack.xyz/?sketch_id=example_18)

![](./images/18.png "")

by Olivia Jack   
https://ojack.github.io

	osc(6, 0, 0.8)
	  .color(1.14, 0.6,.80)
	  .rotate(0.92, 0.3)
	  .pixelate(20, 10)
	  .mult(osc(40, 0.03).thresh(0.4).rotate(0, -0.02))
	  .modulateRotate(osc(20, 0).thresh(0.3, 0.6), () => 0.1 + mouse.x * 0.002)
	  .out(o0)

### See also
[https://note.mu/mizt/n/n5540821c2671](https://note.mu/mizt/n/n5540821c2671)
