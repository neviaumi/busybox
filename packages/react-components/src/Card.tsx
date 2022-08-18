import type { ComponentProps } from './components.js';
import ReactWiredCard from './wired-elements/WiredCard.js';

export default function Card({ children, ...rest }: ComponentProps<unknown>) {
  return <ReactWiredCard {...rest}>{children}</ReactWiredCard>;
}
