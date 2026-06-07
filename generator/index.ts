import fs from "fs";
import yaml from "yaml";

const text = fs.readFileSync("Docs-v2/yaml/types/Animator.yaml", "utf-8");

const data = yaml.parse(text) as ApiClass;

console.log(data);
