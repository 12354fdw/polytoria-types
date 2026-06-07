interface ApiProperty {
	Name: string;
	Type: string;

	IsAccessibleByScripts: boolean;
	IsReadOnly: boolean;
	IsObsolete: boolean;
	IsStatic: boolean;

	Description: string;
}

interface ApiParameter {
	Name: string;
	Type: string;

	IsOptional: boolean;
	DefaultValue: string;
}

interface ApiMethod {
	Name: string;
	ReturnType: string;

	Parameters: ApiParameter[];

	IsAsync: boolean;
	IsObsolete: boolean;
	IsStatic: boolean;

	Description: string;
}

interface ApiClass {
	Name: string;
	Description: string;

	BaseType?: string;
	Category?: string;

	Properties: ApiProperty[];
	Methods: ApiMethod[];

	IsStatic: boolean;
	IsAbstract: boolean;
	IsInstantiable: boolean;
}
