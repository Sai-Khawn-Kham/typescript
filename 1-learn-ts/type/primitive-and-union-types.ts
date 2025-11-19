// Primitive aliases for better semantics
type ID = string;
type Email = string;
type Percentage = number;
type Timestamp = number;

// Union types
type Status = "pending" | "approved" | "rejected";
type Size = "small" | "medium" | "large";
type UserRole = "admin" | "user" | "guest";