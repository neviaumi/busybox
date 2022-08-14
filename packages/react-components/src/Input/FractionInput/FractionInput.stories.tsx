import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormEvent, useState } from 'react';

import Button from '../../Button/Button.js';
import { generateTestIdWithPrefix } from '../../test-helpers/test-id.js';
import { palette } from '../../theme.js';
import { Field } from '../Field.js';
import Label from '../Label.js';
import FractionInputComponent from './FractionInput.js';

export default {
  argTypes: {
    onChange: { action: 'value change' },
    onSubmit: { action: 'value change' },
  },
  component: FractionInputComponent,
  subcomponents: { Field, Label },
  title: 'Component/Input/FractionInput',
} as ComponentMeta<typeof FractionInputComponent>;

const FractionInputTemplate: ComponentStory<typeof FractionInputComponent> = ({
  'data-testid': testId,
  onChange,
  onSubmit,
  ...rest
}) => {
  const [isInValid, setIsInValid] = useState(false);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.(e as unknown as FormEvent<HTMLInputElement>);
      }}
    >
      <Field>
        <Label>Fraction Input</Label>
        <FractionInputComponent
          {...rest}
          className={isInValid ? palette.error.text : ''}
          data-testid={testId}
          onChange={event => {
            const { denominator, numerator } = event.detail.value;
            setIsInValid(denominator === null && numerator === null);
            onChange(event);
          }}
        />
      </Field>
      <Button
        data-testid={generateTestIdWithPrefix({
          id: 'submit-button',
          prefix: testId,
        })}
        type={'submit'}
      >
        Submit
      </Button>
    </form>
  );
};

export const FractionInput = FractionInputTemplate.bind({});
FractionInput.args = {
  'data-testid': 'test-fraction-input',
};
