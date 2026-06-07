import ts from "typescript";

const TYPE_MAP: Record<string, ts.TypeNode> = {
	nil: ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
	bool: ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
	string: ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
};

export function mapType(type: string): ts.TypeNode {
	const mapped = TYPE_MAP[type];
	if (mapped) return mapped;

	return ts.factory.createTypeReferenceNode(type);
}
