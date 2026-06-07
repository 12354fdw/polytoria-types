import ts from "typescript";
import { createCommentStatement } from "../util/createCommentStatement";
import { createClass } from "./class/createClass";

export function createInstanceSourceFile(details: ApiClass): ts.SourceFile {
	const statements = new Array<ts.Statement>();

	statements.push(createCommentStatement(`DO NOT EDIT! THIS IS A GENERATED FILE`));

	statements.push(createClass(details));

	return ts.factory.createSourceFile(
		statements,
		ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
		ts.NodeFlags.None,
	);
}
