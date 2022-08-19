import type { ComponentMeta, ComponentStory } from '@storybook/react';

import CardComponent from './Card.js';

export default {
  component: CardComponent,
  title: 'Component/Card',
} as ComponentMeta<typeof CardComponent>;

export const CardWithHeader: ComponentStory<typeof CardComponent> = () => (
  <CardComponent className={'tw-w-20'} fill={'#F00'}>
    <h1>Card Header</h1>
    <section>Card Body</section>
  </CardComponent>
);
