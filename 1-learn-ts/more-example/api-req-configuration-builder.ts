type HTTPConfig = {
  baseURL: string;
  timeout: number;
};

type AuthConfig = {
  apiKey?: string;
  token?: string;
  credentials?: 'include' | 'omit';
};

type CacheConfig = {
  cache: 'no-cache' | 'force-cache';
  revalidate?: number;
};

type RequestConfig = HTTPConfig & AuthConfig & CacheConfig;

function createApiClient(config: RequestConfig) {
  // config has ALL properties from all three types
  return {
    baseURL: config.baseURL,
    timeout: config.timeout,
    apiKey: config.apiKey,
    cache: config.cache
    // ✅ Can access any property from the intersection
  };
}

const client = createApiClient({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  cache: 'no-cache',
  // ✅ Must provide required from HTTPConfig and CacheConfig
  // ✅ Optional from AuthConfig
});