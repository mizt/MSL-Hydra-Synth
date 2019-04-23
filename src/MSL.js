function stringifyWithFunctions(object) {
	return JSON.stringify(object,(k,v) => {
		if(typeof(v)==="function") return `(${v})`;
		return v;
	},"\t");
};

var output = function(uid) {
	global["o"+uid] = {
		index:uid,
		uniforms:{},
		getTexture:function() {},
		renderPasses:function(glsl) {
			
			require("fs").writeFileSync("./assets/s"+this.index+".metal",glsl[0].frag);
			require("fs").writeFileSync("./assets/u"+this.index+".json",stringifyWithFunctions(glsl[0].uniforms));
			
		}
	};
} 

output(0);

const gen = new (require('./MSLGeneratorFactory.js'))(o0)
global.generator = gen
Object.keys(gen.functions).forEach((key)=>{
	global[key] = gen.functions[key];  
})

module.exports = {}