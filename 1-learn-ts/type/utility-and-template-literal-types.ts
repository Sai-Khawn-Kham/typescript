// Template literal types
type CSSPosition = `${"top" | "bottom"}-${"left" | "right"}`;
type CSSSize = `${number}px` | `${number}em` | `${number}rem` | `${number}%`;

// Index signatures
type Dictionary<T> = {
    [key: string]: T;
};

type NumericArray = {
    [index: number]: number;
};