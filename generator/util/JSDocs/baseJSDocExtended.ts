export interface JSDocParams {
	name: string;
	description: string;
}

export interface JSDocContext {
	description?: string;
	deprecated?: string;
	params?: Array<JSDocParams>;
	returns?: string;
}

export function buildJSDoc(ctx: JSDocContext): string[] {
	const lines: string[] = [];

	if (ctx.description) {
		lines.push(ctx.description);
	}

	if (ctx.deprecated) {
		lines.push(`@deprecated ${ctx.deprecated}`);
	}

	if (ctx.params) {
		for (const p of ctx.params) {
			lines.push(`@param ${p.name} ${p.description}`);
		}
	}

	if (ctx.returns) {
		lines.push(`@returns ${ctx.returns}`);
	}

	return lines;
}
