import ts from "typescript";
import { createParameter } from "./createParameter";
import { mapType } from "../../util/mapType";

export function createMethod(method: ApiMethod) {
	return ts.factory.createMethodDeclaration(
		undefined,
		undefined,
		method.Name,
		undefined,
		undefined,
		method.Parameters.map((p) => createParameter(p)),
		mapType(method.ReturnType),
		undefined,
	);
}
