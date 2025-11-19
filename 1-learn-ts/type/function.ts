// Function signatures
type ClickHandler = (event: MouseEvent) => void;
type Comparator<T> = (a: T, b: T) => number;
type AsyncFetcher<T> = (url: string) => Promise<T>;
type EventCallback = (data: unknown) => void;

// Usage example
type ApiResponseHandler = {
    onSuccess: (data: any) => void;
    onError: (error: Error) => void;
};