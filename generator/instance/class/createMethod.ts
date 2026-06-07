import ts from "typescript";
import { createParameter } from "./createParameter";
import { mapType } from "../../util/mapType";
import { appendMethodJSDoc } from "../../util/JSDocs/JSDocCommentExtended";

export function createMethod(details: ApiMethod) {
	const method = ts.factory.createMethodDeclaration(
		undefined,
		undefined,
		details.Name,
		undefined,
		undefined,
		details.Parameters.map((p) => createParameter(p)),
		mapType(details.ReturnType),
		undefined,
	);

	appendMethodJSDoc(method, details);
	return method;
}
