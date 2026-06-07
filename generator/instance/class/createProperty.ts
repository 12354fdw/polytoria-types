import ts from "typescript";
import { mapType } from "../../util/mapType";
import { appendPropertyJSDoc } from "../../util/JSDocs/JSDocCommentExtended";

export function createProperty(details: ApiProperty) {
	const property = ts.factory.createPropertyDeclaration(
		undefined,
		details.Name,
		undefined,
		mapType(details.Type),
		undefined,
	);

	appendPropertyJSDoc(property, details);
	return property;
}
