import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer, Header, Main, Page, Side } from './Layout.js';

export default {
  component: Page,
  subcomponents: { Footer, Header, Main, Side },
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layout',
} as ComponentMeta<typeof Page>;

export const OneColumnLayout: ComponentStory<typeof Page> = () => (
  <Page>
    <div>OneColumnLayout</div>
    <Header
      className={
        'tw-flex tw-h-24 tw-items-center tw-bg-red-900/60 tw-text-white tw-drop-shadow-2xl'
      }
    >
      OneColumnLayout Header
    </Header>
    <Main
      className={
        'tw-flex tw-h-24 tw-items-center tw-bg-lime-600/20 tw-text-white tw-drop-shadow-2xl'
      }
    >
      OneColumnLayout Main
    </Main>
    <Footer
      className={
        'tw-flex tw-h-24 tw-items-center tw-bg-red-600/20 tw-text-white tw-drop-shadow-2xl'
      }
    >
      OneColumnLayout Footer
    </Footer>
  </Page>
);
