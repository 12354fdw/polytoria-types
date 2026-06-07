import ts from "typescript";
import { mapType } from "../../util/mapType";

export function createProperty(property: ApiProperty) {
	return ts.factory.createPropertyDeclaration(undefined, property.Name, undefined, mapType(property.Type), undefined);
}
