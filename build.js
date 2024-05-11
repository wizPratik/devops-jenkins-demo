require("esbuild").buildSync({
	entryPoints: ["index.js"],
	bundle: true,
	platform: "node",
	// packages: "external",
	outfile: "dist/out.js",
});
