export const parameters = {
  controls: { expanded: true },
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#0808b7' },
      { name: 'dark', value: '#282a2c' },
    ],
  },
  options: {
    storySort: {
      order: ['PktPay', 'Button', 'Widget'],
    },
  },
};
