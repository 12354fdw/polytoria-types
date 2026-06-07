export default {
	entry: ["generator/index.ts"],
	format: ["esm"],
	outDir: "dist",
	external: ["typescript"],
	clean: true,
};
