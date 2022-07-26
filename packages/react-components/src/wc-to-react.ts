import { createComponent } from '@lit-labs/react';
import React from 'react';

export function createReactComponentFromLitElement<T = React.PropsWithChildren>(
  name: string,
  litElement: any,
): React.FunctionComponent<T> {
  // @ts-expect-error I don't want spent time to fight with that
  return createComponent(React, name, litElement);
}
