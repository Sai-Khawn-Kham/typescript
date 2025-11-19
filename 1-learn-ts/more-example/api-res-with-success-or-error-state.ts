// Union type for different API response states
type SuccessResponse<T> = {
  status: 'success';
  data: T;
  timestamp: Date;
};

type ErrorResponse = {
  status: 'error';
  error: string;
  code: number;
};

type LoadingResponse = {
  status: 'loading';
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse | LoadingResponse;

// Usage
function handleResponse<T>(response: ApiResponse<T>): void {
  if (response.status === 'success') {
    console.log('Data:', response.data); // ✅ TypeScript knows response has 'data'
  } else if (response.status === 'error') {
    console.log('Error:', response.error); // ✅ TypeScript knows response has 'error'
  } else {
    console.log('Loading...'); // ✅ TypeScript knows it's loading state
  }
}