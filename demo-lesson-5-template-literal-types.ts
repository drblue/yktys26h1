/**
 * Template Literal Types
 *
 * <https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html>
 */

// 👎🏻
// type ResponsiveColumns = "col-xs-1" | "col-xs-2" | "col-xs-3" | "col-sm-1" | "col-sm-2";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// 🤯
type ResponsiveColumns = `col-${Breakpoint}-${Column}`;


// const myCol: ResponsiveColumns = "col-md-13";  // nope!

type OffsetColumns = `offset-${Breakpoint}-${Column}`;

type BootstrapGridClasses = (ResponsiveColumns | OffsetColumns)[];

const validGridClasses: BootstrapGridClasses = [
	"col-sm-6",
	"col-lg-2",
	"offset-sm-3",
	// "col-xxl-4",  // nope!
];
