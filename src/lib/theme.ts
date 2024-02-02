import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
  colors: {
    primary: {
      '50': '#e6f7ff', // Lightest
      '100': '#b3e5ff',
      '200': '#80d4ff',
      '300': '#4dc2ff',
      '400': '#1ab1ff',
      '500': '#00d9ff', // Base
      '600': '#00b2cc',
      '700': '#008c99',
      '800': '#006566',
      '900': '#003f33', // Darkest
    },
    secondary: {
      '50': '#fde8e0', // Lightest
      '100': '#facbb3',
      '200': '#f7ae86',
      '300': '#f49159',
      '400': '#f1742c',
      '500': '#cb5300', // Base
      '600': '#a34200',
      '700': '#7b3200',
      '800': '#522100',
      '900': '#2a1100', // Darkest
    },
    accent: {
      '50': '#e6f7ff', // Lightest
      '100': '#b3e5ff',
      '200': '#80d4ff',
      '300': '#4dc2ff',
      '400': '#1ab1ff',
      '500': '#00d9ff', // Base
      '600': '#00b2cc',
      '700': '#008c99',
      '800': '#006566',
      '900': '#003f33', // Darkest
    },
    neutral: {
      '50': '#e6f4fc', // Lightest
      '100': '#cde9f9',
      '200': '#b3ddf6',
      '300': '#9ad2f3',
      '400': '#80c6f0',
      '500': '#7dd3fc', // Base
      '600': '#64b8e4',
      '700': '#4b9ecc',
      '800': '#327fb3',
      '900': '#1a609b', // Darkest
    },
    base: {
      '50': '#ffffff', // Lightest
      '100': '#f6f9f8',
      '200': '#edf3f1',
      '300': '#e4ede9',
      '400': '#dbe7e2',
      '500': '#d2e0db', // Base
      '600': '#c9d9d4',
      '700': '#c0d2cd',
      '800': '#b7cbc6',
      '900': '#aebfbf', // Darkest
    },
    info: {
      '50': '#e6f7ff', // Lightest
      '100': '#b3e5ff',
      '200': '#80d4ff',
      '300': '#4dc2ff',
      '400': '#1ab1ff',
      '500': '#00d3ff', // Base
      '600': '#00b2cc',
      '700': '#008c99',
      '800': '#006566',
      '900': '#003f33', // Darkest
    },
    success: {
      '50': '#e6fff5', // Lightest
      '100': '#b3ffea',
      '200': '#80ffdf',
      '300': '#4dffd4',
      '400': '#1affc9',
      '500': '#00ffb4', // Base
      '600': '#00cc91',
      '700': '#00996e',
      '800': '#00664b',
      '900': '#003328', // Darkest
    },
    warning: {
      '50': '#fff3e6', // Lightest
      '100': '#ffe0b3',
      '200': '#ffcc80',
      '300': '#ffb94d',
      '400': '#ffa61a',
      '500': '#ffae00', // Base
      '600': '#cc8c00',
      '700': '#996a00',
      '800': '#664800',
      '900': '#332400', // Darkest
    },
    '50': '#ffe6eb', // Lightest
    '100': '#ffbcc7',
    '200': '#ff91a4',
    '300': '#ff6780',
    '400': '#ff3d5d',
    '500': '#ff617e', // Base
    '600': '#cc4e65',
    '700': '#993a4d',
    '800': '#662734',
    '900': '#33131a', // Darkest
  },
})
