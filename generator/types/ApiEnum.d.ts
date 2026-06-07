interface ApiEnumOption {
	Name: string;
	Description: string;
}

interface ApiEnum {
	Name: string;
	InternalName: string;
	Description: string;

	Options: ApiEnumOption[];
}
