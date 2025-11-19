// Base props every component needs
type Stylable = {
  className?: string;
  style?: React.CSSProperties;  // no react library
};

// Accessibility props
type Accessible = {
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
};

// Focus management
type Focusable = {
  autoFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

// Button-specific props
type ButtonSpecific = {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  onClick: () => void;
};

// Intersection creates complete button props
type ButtonProps = Stylable & Accessible & Focusable & ButtonSpecific;

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  onClick: () => console.log('clicked'),
  className: 'btn-primary',
  ariaLabel: 'Submit form',
  autoFocus: true,
  // ✅ Must include onClick, variant, size from ButtonSpecific
  // ✅ Can optionally include any from Stylable, Accessible, Focusable
};