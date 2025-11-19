// TypeScript - Explicit optional handling
interface UserConfig {
    name: string;
    email: string;
    age?: number; // Explicitly optional
}

function createUser(config: UserConfig) {
    const user = {
        name: config.name,
        email: config.email,
        age: config.age
    };
    
    // TypeScript forces you to handle optional cases
    if (user.age) {
        console.log(user.age + 1); // ✅ Safe
    } else {
        console.log("Age not provided"); // ✅ Proper handling
    }
}