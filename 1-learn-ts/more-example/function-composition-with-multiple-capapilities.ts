type Logger = {
  log: (message: string) => void;
  error: (error: Error) => void;
};

type Cache = {
  get: (key: string) => any;
  set: (key: string, value: any) => void;
};

type Validator = {
  validate: (data: any) => boolean;
};

// Service has ALL capabilities
type DataService = Logger & Cache & Validator;

const dataService: DataService = {
  log: (message) => console.log(message),
  error: (error) => console.error(error),
  get: (key) => localStorage.getItem(key),
  set: (key, value) => localStorage.setItem(key, value),
  validate: (data) => data !== null && data !== undefined
  // ✅ Must implement ALL methods from ALL types
};