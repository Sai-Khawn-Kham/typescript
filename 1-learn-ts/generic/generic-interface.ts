interface ApiResponse<T> {
  data: T;
  status: number;
  timestamp: Date;
}

// Usage with explicit types
const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "John" },
  status: 200,
  timestamp: new Date()
};