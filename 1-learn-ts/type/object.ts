type ID = string;



// Basic object shapes
type Address = {
    street: string;
    city: string;
    country: string;
    postalCode: string;
};

type Product = {
    id: ID;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
};

// Nested object types
type Company = {
    name: string;
    address: Address;
    employees: number;
};