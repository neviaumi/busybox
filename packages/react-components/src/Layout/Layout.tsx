import type { PropsWithChildren } from 'react';

interface LayoutProps {
  className?: string;
}

export function Page({
  children,
  className = '',
}: PropsWithChildren<LayoutProps>) {
  return (
    <div className={`tw-container ${className}`} role={'document'} tabIndex={0}>
      {children}
    </div>
  );
}

export function Main({
  children,
  className = '',
}: PropsWithChildren<LayoutProps>) {
  return <main className={`tw-w-full ${className}`}>{children}</main>;
}

export function Header({
  children,
  className = '',
}: PropsWithChildren<LayoutProps>) {
  return <header className={`tw-w-full ${className}`}>{children}</header>;
}

export function Footer({
  children,
  className = '',
}: PropsWithChildren<LayoutProps>) {
  return <footer className={`tw-w-full ${className}`}>{children}</footer>;
}

export function Side({
  children,
  className = '',
}: PropsWithChildren<LayoutProps>) {
  return <aside className={`tw-w-full ${className}`}>{children}</aside>;
}
