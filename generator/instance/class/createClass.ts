import ts from "typescript";
import { createHeritageClause } from "../../util/createHeritageClause";
import { createProperty } from "./createProperty";
import { createMethod } from "./createMethod";

export function createClass(details: ApiClass): ts.ClassDeclaration {
	const heritage = details.BaseType
		? [createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [details.BaseType])]
		: undefined;

	const members = [
		...details.Properties.map((p) => createProperty(p)),
		...details.Methods.map((m) => createMethod(m)),
	];

	return ts.factory.createClassDeclaration(
		[
			ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
			ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword),
		],
		details.Name,
		undefined,
		heritage,
		members,
	);
}
