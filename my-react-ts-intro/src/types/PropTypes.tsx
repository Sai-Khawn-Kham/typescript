import type { ButtonHTMLAttributes, HTMLAttributes, ReactElement, ReactNode } from "react";

export type ButtonVariant = "plain" | "solid" | "outline";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ContainerProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type TextCardProps = {
  heading: string;
  description: string;
  icon: ReactElement;
};