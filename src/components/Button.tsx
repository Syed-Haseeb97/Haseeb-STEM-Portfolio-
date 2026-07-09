import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-accent bg-accent text-white hover:bg-blue-700 hover:border-blue-700',
  secondary:
    'border-line bg-white text-ink hover:border-gray-300 hover:bg-gray-50',
  ghost: 'border-transparent bg-transparent text-ink hover:bg-gray-100',
};

export function Button({
  children,
  variant = 'secondary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
