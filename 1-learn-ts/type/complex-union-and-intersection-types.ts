// Discriminated unions
type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number }
    | { kind: "triangle"; base: number; height: number };

// Intersection types
type Identifiable = { id: string };
type Timestamped = { createdAt: Date; updatedAt: Date };
type SoftDeletable = { deletedAt: Date | null };

type BaseEntity = Identifiable & Timestamped & SoftDeletable;

// Conditional union
type ApiResponse<T> = 
    | { status: "success"; data: T }
    | { status: "error"; message: string };