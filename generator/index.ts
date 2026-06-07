import fs from "fs";
import yaml from "yaml";
import { createInstanceSourceFile } from "./instance/createSourceFile";
import { printSourceFile } from "./util/printSourceFile";

let polytoriaDeclartions = "";

// create instances
fs.readdirSync("Docs-v2/yaml/types/").forEach((file) => {
	const text = fs.readFileSync(`Docs-v2/yaml/types/${file}`, "utf-8");
	const data = yaml.parse(text) as ApiClass;

	const sf = createInstanceSourceFile(data);
	const declarationText = printSourceFile(sf);
	polytoriaDeclartions += declarationText;
});

try {
	fs.rmSync("generated", { recursive: true, force: true });
} catch {
	console.log();
}

fs.mkdirSync("generated");
fs.writeFileSync("generated/polytoria.d.ts", polytoriaDeclartions, "utf-8");

console.log("finished!");
