// Generic containers
type Result<T, E = Error> = {
    success: boolean;
    data?: T;
    error?: E;
};

type PaginatedResponse<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasNext: boolean;
};

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;