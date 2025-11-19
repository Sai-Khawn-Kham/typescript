// Generic repository for different entity types
interface Repository<T, ID = number> {
  findById(id: ID): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: ID): Promise<boolean>;
}

// Implementation with constraints
class InMemoryRepository<T extends { id: ID }, ID = number> 
  implements Repository<T, ID> {
  
  private entities = new Map<ID, T>();

  async findById(id: ID): Promise<T | null> {
    return this.entities.get(id) || null;
  }

  async save(entity: T): Promise<T> {
    this.entities.set(entity.id, entity);
    return entity;
  }

  async delete(id: ID): Promise<boolean> {
    return this.entities.delete(id);
  }
}

// Usage with different entity types
interface User {
  id: number;
  name: string;
}

interface Product {
  id: string;  // Different ID type
  title: string;
  price: number;
}

const userRepo = new InMemoryRepository<User>();
const productRepo = new InMemoryRepository<Product, string>();