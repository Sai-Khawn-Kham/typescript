// Complex constraints for database operations
interface Entity {
  id: number;
  createdAt: Date;
}

function updateEntity<
  T extends Entity,
  K extends keyof T
>(
  entity: T,
  field: K,
  value: T[K]
): T {
  return { ...entity, [field]: value };
}

// Usage with type safety
const user = { id: 1, name: "Alice", createdAt: new Date() };
const updated = updateEntity(user, "name", "Bob"); // Valid
// updateEntity(user, "invalid", "value"); // TypeScript error