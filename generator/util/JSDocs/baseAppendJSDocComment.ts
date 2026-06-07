import ts from "typescript";

export function appendJSDocComment<T extends ts.Node>(node: T, texts: string[]) {
	const body = texts.map((t) => ` * ${t}`).join("\n");
	ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, `*\n${body}\n `, true);
}
