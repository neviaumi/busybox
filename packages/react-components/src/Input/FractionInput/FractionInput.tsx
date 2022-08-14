import type { ChangeEventHandler } from 'react';

import ReactWiredInput, {
  InputProps,
} from '../../wired-elements/WiredInput.js';
import { useFieldContext } from '../Field.js';

export type FractionInputProps = Omit<InputProps, 'type' | 'onChange'> & {
  onChange: (
    e: CustomEvent<{
      value: { denominator: number | null; numerator: number | null };
    }>,
  ) => void;
};

export default function FractionInput(props: FractionInputProps) {
  const { id } = useFieldContext();
  const { onChange, ...rest } = props;
  const onChangeWithValidation: ChangeEventHandler<
    HTMLInputElement
  > = event => {
    const value = event.target?.value;
    const [numerator, denominator]: string[] = value.split('/');
    const [intNumerator, intDenominator]: [number, number] = [
      parseInt(numerator, 10),
      parseInt(denominator, 10),
    ];
    onChange?.(
      new CustomEvent('change', {
        detail: {
          value: {
            denominator: Number.isNaN(intDenominator) ? null : intDenominator,
            numerator: Number.isNaN(intNumerator) ? null : intNumerator,
          },
        },
      }),
    );
  };
  return (
    <ReactWiredInput
      id={id}
      placeholder={'Use / as separator for denominator and numerator'}
      title={
        'Use / as separator for denominator and numerator like 4/4, 2/2 ...etc.'
      }
      {...rest}
      aria-label={rest.name}
      onChange={onChangeWithValidation}
      pattern={'\\d+\\/\\d+'}
      role={'input'}
      type={'text'}
    />
  );
}
