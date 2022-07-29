import type { PropsWithChildren } from 'react';

export type ComponentProps<T = Record<string, never>> = PropsWithChildren<
  {
    // https://testing-library.com/docs/queries/bytestid
    'data-testid'?: string;
  } & T
>;
