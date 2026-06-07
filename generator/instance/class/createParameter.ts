import ts from "typescript";
import { mapType } from "../../util/mapType";

export function createParameter(parameter: ApiParameter) {
	return ts.factory.createParameterDeclaration(
		undefined,
		undefined,
		parameter.Name,
		parameter.IsOptional ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
		mapType(parameter.Type),
		undefined,
	);
}
