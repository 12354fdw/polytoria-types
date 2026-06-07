import fs from "fs";
import yaml from "yaml";
import { createInstanceSourceFile } from "./instance/createSourceFile";
import { printSourceFile } from "./util/printSourceFile";

const text = fs.readFileSync("Docs-v2/yaml/types/Animator.yaml", "utf-8");

const data = yaml.parse(text) as ApiClass;

const sf = createInstanceSourceFile(data);
const declarationFile = printSourceFile(sf);

console.log(declarationFile);
