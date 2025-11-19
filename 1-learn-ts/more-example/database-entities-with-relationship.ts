// Base entity properties
type EntityBase = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

// Different entity types
type UserEntity = EntityBase & {
  type: 'user';
  email: string;
  name: string;
  role: 'admin' | 'user' | 'moderator';
};

type ProductEntity = EntityBase & {
  type: 'product';
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

type OrderEntity = EntityBase & {
  type: 'order';
  userId: string;
  productIds: string[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
};

// Union type for all entities
type Entity = UserEntity | ProductEntity | OrderEntity;

// Generic repository with type guards
class Repository {
  private entities: Entity[] = [];

  add<T extends Entity>(entity: T): void {
    this.entities.push(entity);
  }

  // Type-safe filtering
  findByType<T extends Entity['type']>(type: T): Extract<Entity, { type: T }>[] {
    return this.entities.filter(
      (entity): entity is Extract<Entity, { type: T }> => entity.type === type
    );
  }

  // Type-safe single entity find
  findUserById(id: string): UserEntity | undefined {
    return this.entities.find(
      (entity): entity is UserEntity => entity.type === 'user' && entity.id === id
    );
  }
}

// Usage
const repo = new Repository();
repo.add({
  type: 'user',
  id: '1',
  email: 'john@example.com',
  name: 'John',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date()
});

const users = repo.findByType('user'); // ✅ Type: UserEntity[]
// const firstUser = users[0];
// console.log(firstUser.email); // ✅ TypeScript knows this is a UserEntity

// if(users.length > 0) {
//   const firstUser = users[0];
//   console.log(firstUser.email);
// }

const firstUser = users.at(0);
if (firstUser) {
  console.log(firstUser.email);
}
