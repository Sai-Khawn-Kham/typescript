// Intersection type for base props + variant-specific props
type BaseButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

type PrimaryButtonProps = {
  variant: 'primary';
  icon?: string;
};

type DangerButtonProps = {
  variant: 'danger';
  confirmMessage?: string;
};

type LinkButtonProps = {
  variant: 'link';
  href: string;
  target?: '_blank' | '_self';
};

type ButtonProps = BaseButtonProps & (
  | PrimaryButtonProps
  | DangerButtonProps
  | LinkButtonProps
);

// Usage
const primaryButton: ButtonProps = {
  variant: 'primary',
  onClick: () => console.log('clicked'),
  icon: 'plus' // ✅ Only available for primary variant
};

const linkButton: ButtonProps = {
  variant: 'link',
  onClick: () => console.log('clicked'),
  href: '/home' // ✅ Required for link variant
};