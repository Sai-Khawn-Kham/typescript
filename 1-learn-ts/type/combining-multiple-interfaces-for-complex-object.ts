// Base properties
type Identifiable = {
  id: string;
  createdAt: Date;
};

type Timestampable = {
  updatedAt: Date;
  deletedAt?: Date;
};

type SoftDeletable = {
  isDeleted: boolean;
};

// Intersection combines ALL properties
type BaseEntity = Identifiable & Timestampable & SoftDeletable;

type User = BaseEntity & {
  name: string;
  email: string;
};

// Usage - must satisfy ALL types
const user: User = {
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  isDeleted: false,
  name: "John",
  email: "john@example.com"
  // ✅ Must have all properties from all intersected types
};