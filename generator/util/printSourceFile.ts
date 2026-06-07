import ts from "typescript";

export function printSourceFile(sf: ts.SourceFile): string {
	const printer = ts.createPrinter({
		newLine: ts.NewLineKind.LineFeed,
	});

	return printer.printFile(sf);
}
