import ts from "typescript";

export function createHeritageClause(
	kind: ts.SyntaxKind.ExtendsKeyword | ts.SyntaxKind.ImplementsKeyword,
	names: string[],
): ts.HeritageClause {
	return ts.factory.createHeritageClause(
		kind,
		names.map((name) => ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(name), undefined)),
	);
}
