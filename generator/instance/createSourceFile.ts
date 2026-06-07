import ts from "typescript";
import { createClass } from "./class/createClass";

export function createInstanceSourceFile(details: ApiClass): ts.SourceFile {
	const statements = new Array<ts.Statement>();

	statements.push(createClass(details));

	return ts.factory.createSourceFile(
		statements,
		ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
		ts.NodeFlags.None,
	);
}
