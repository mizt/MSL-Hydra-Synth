var BUILD = true;
var DIR = "./assets/";

function stringifyWithFunctions(object) {
	return JSON.stringify(object,(k,v) => {
		if(typeof(v)==="function") return `(${v})`;
		return v;
	},"\t");
};

global["o0"] = {
	name:"args.o0",
	uniforms:{},
	getTexture:function() {},
	renderPasses:function(glsl) {			
		require("fs").writeFileSync(DIR+"o0.metal",glsl[0].frag);
		require("fs").writeFileSync(DIR+"u0.json",stringifyWithFunctions(glsl[0].uniforms));
		if(BUILD) {
			require("child_process").execSync("xcrun -sdk macosx metal -c "+DIR+"o0.metal -o "+DIR+"o0.air; xcrun -sdk macosx metallib "+DIR+"o0.air -o "+DIR+"o0.metallib");
		}
	}
};
	
for(let k=0; k<4; k++) {
	global["s"+k] = {
		name:"args.s"+k,
		uniforms:{},
		getTexture:function() {},
	};
}

const gen = new (require('./MSLGeneratorFactory.js'))(o0)
global.generator = gen
Object.keys(gen.functions).forEach((key)=>{
	global[key] = gen.functions[key];  
})

module.exports = {}