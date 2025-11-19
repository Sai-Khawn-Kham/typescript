type ID = string;
type Email = string;
type Timestamp = number;

type Address = {
    street: string;
    city: string;
    country: string;
    postalCode: string;
};



// API and data modeling
type ApiConfig = {
    baseURL: string;
    timeout: number;
    headers: Record<string, string>;
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

type Order = {
    id: ID;
    userId: ID;
    products: Array<{
        productId: ID;
        quantity: number;
        price: number;
    }>;
    status: "created" | "paid" | "shipped" | "delivered" | "cancelled";
    total: number;
    createdAt: Timestamp;
};