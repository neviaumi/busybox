import { createContext, PropsWithChildren, useContext } from 'react';

const FieldContext = createContext<{ id?: string }>({});

export function Field(props: PropsWithChildren) {
  return (
    <FieldContext.Provider value={{ id: window.crypto.randomUUID() }}>
      {props.children}
    </FieldContext.Provider>
  );
}

export function useFieldContext() {
  return useContext(FieldContext);
}
