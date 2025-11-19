

// Generic API client with error handling
class ApiClient {
  async get<T>(url: string): Promise<{ data: T; status: number }> {
    const response = await fetch(url);
    const data = await response.json() as T;
    return { data, status: response.status };
  }

  async post<T, U>(url: string, body: T): Promise<{ data: U; status: number }> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    const data = await response.json() as U;
    return { data, status: response.status };
  }
}

// Usage with type safety
interface User { id: number; name: string; }
interface CreateUserDto { name: string; email: string; }

const api = new ApiClient();

// Type-safe API calls
const userResponse = await api.get<User>('/users/1');
const newUser = await api.post<CreateUserDto, User>('/users', {
  name: "John",
  email: "john@example.com"
});