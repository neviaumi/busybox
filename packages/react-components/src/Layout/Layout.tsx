import type { PropsWithChildren } from 'react';

export interface LayoutProps {
  className?: string;
  'data-testId'?: string;
}

export function Page({
  children,
  className = '',
  ...rest
}: PropsWithChildren<LayoutProps>) {
  return (
    <div
      className={`tw-container ${className}`}
      role={'document'}
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Main({ children, ...rest }: PropsWithChildren<LayoutProps>) {
  return <article {...rest}>{children}</article>;
}

export function Content({ children, ...rest }: PropsWithChildren<LayoutProps>) {
  return <main {...rest}>{children}</main>;
}

export function Header({ children, ...rest }: PropsWithChildren<LayoutProps>) {
  return <header {...rest}>{children}</header>;
}

export function Footer({ children, ...rest }: PropsWithChildren<LayoutProps>) {
  return <footer {...rest}>{children}</footer>;
}

export function Side({ children, ...rest }: PropsWithChildren<LayoutProps>) {
  return <aside {...rest}>{children}</aside>;
}
