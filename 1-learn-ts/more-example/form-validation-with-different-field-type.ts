// Union types for different form field validations
type TextFieldValidation = {
  type: 'text';
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

type NumberFieldValidation = {
  type: 'number';
  required: boolean;
  min?: number;
  max?: number;
  integer?: boolean;
};

type EmailFieldValidation = {
  type: 'email';
  required: boolean;
  domain?: string;
};

type FieldValidation = TextFieldValidation | NumberFieldValidation | EmailFieldValidation;

// Usage with intersection for complete field definition
type FormField = {
  name: string;
  label: string;
  value: any;
} & FieldValidation;

function validateField(field: FormField): boolean {
  switch (field.type) {
    case 'text':
      return field.value.length >= (field.minLength || 0); // ✅ TypeScript knows minLength exists
    case 'number':
      return field.value >= (field.min || 0); // ✅ TypeScript knows min exists
    case 'email':
      return field.value.includes('@'); // ✅ Type-specific validation
  }
}