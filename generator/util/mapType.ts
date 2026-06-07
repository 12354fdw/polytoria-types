import ts from "typescript";

const TYPE_MAP: Record<string, ts.TypeNode> = {
	nil: ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
	bool: ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
	string: ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
};

export function mapType(type: string): ts.TypeNode {
	type = type.trim();

	// its all using a void callback ;-;
	if (type === "() -> ()") {
		return ts.factory.createTypeReferenceNode("() => void", undefined);
	}

	// arrays: {T}
	if (type.startsWith("{") && type.endsWith("}")) {
		const inner = type.slice(1, -1).trim();
		return ts.factory.createArrayTypeNode(mapType(inner));
	}

	// primitives
	const mapped = TYPE_MAP[type];
	if (mapped) return mapped;

	// fallback
	return ts.factory.createTypeReferenceNode(type, undefined);
}
