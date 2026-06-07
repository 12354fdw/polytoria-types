import ts from "typescript";
import { appendJSDocComment } from "./baseAppendJSDocComment";
import { buildJSDoc } from "./baseJSDocExtended";

export function appendClassJSDoc<T extends ts.Node>(node: T, details: ApiClass) {
	appendJSDocComment(
		node,
		buildJSDoc({
			description: details.Description,
		}),
	);
}

export function appendPropertyJSDoc<T extends ts.Node>(node: T, details: ApiProperty) {
	appendJSDocComment(
		node,
		buildJSDoc({
			description: details.Description,
			deprecated: details.IsObsolete ? "This property is deprecated" : undefined,
		}),
	);
}

export function appendMethodJSDoc<T extends ts.Node>(node: T, details: ApiMethod) {
	appendJSDocComment(
		node,
		buildJSDoc({
			description: details.Description,
			deprecated: details.IsObsolete ? "This property is deprecated" : undefined,
			params: details.Parameters.map((p) => ({
				name: p.Name,
				description: "",
			})),
		}),
	);
}

export function appendEnumJSDoc<T extends ts.Node>(node: T, details: ApiEnum) {
	appendJSDocComment(
		node,
		buildJSDoc({
			description: details.Description,
		}),
	);
}
