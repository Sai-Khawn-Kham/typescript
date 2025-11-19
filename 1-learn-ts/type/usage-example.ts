type ID = string;
type Email = string;

type Address = {
    street: string;
    city: string;
    country: string;
    postalCode: string;
};

type User = {
    id: ID;
    email: Email;
    profile: {
        firstName: string;
        lastName: string;
        avatar?: string;
    };
    preferences: {
        theme: "light" | "dark";
        notifications: boolean;
    };
    addresses: Address[];
};

type Result<T, E = Error> = {
    success: boolean;
    data?: T;
    error?: E;
};

type CSSPosition = `${"top" | "bottom"}-${"left" | "right"}`;
type CSSSize = `${number}px` | `${number}em` | `${number}rem` | `${number}%`;

type AsyncFetcher<T> = (url: string) => Promise<T>;



// Using the type aliases
const user: User = {
    id: "user-123",
    email: "john@example.com",
    profile: {
        firstName: "John",
        lastName: "Doe"
    },
    preferences: {
        theme: "dark",
        notifications: true
    },
    addresses: []
};

const apiResult: Result<User> = {
    success: true,
    data: user
};

const position: CSSPosition = "top-left";
const size: CSSSize = "100px";

// Function using type aliases
const handleApiResponse: AsyncFetcher<User> = async (url) => {
    const response = await fetch(url);
    return response.json();
};