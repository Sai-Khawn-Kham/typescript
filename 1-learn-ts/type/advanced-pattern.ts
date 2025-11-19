type ID = string;
type Email = string;

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



// Recursive types
type TreeNode<T> = {
    value: T;
    children: TreeNode<T>[];
};

type JSONValue = 
    | string 
    | number 
    | boolean 
    | null 
    | JSONValue[] 
    | { [key: string]: JSONValue };

// Mapped types
type ReadonlyProduct = Readonly<Product>;
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;

// Conditional types with aliases
type NonNullableUser = NonNullable<User | null | undefined>;
type UserKeys = keyof User;