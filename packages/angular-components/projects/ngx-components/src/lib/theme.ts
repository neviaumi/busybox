export const icon = {
  // https://heroicons.com/
  outline: {
    height: 'tw-h-[24px]',
    width: 'tw-w-[24px]',
  },
  solid: {
    height: 'tw-h-[20px]',
    width: 'tw-w-[20px]',
  },
};

export const palette = {
  error: {
    text: 'tw-text-red-500',
  },
  primary: {
    contrastText: 'tw-text-primary-main-text',
    hover: {
      contrastText: 'hover:tw-text-primary-hover-text',
      main: 'hover:tw-bg-primary-main-hover',
    },
    main: 'tw-bg-primary-main',
  },
  secondary: {
    contrastText: 'tw-text-secondary-main-text',
    hover: {
      contrastText: 'hover:tw-text-secondary-hover-text',
      main: 'hover:tw-bg-secondary-main-hover',
    },
    main: 'tw-bg-secondary-main',
  },
  warning: {
    contrastText: 'tw-text-warning-text',
    main: 'tw-bg-warning-main',
  },
};
