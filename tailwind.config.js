const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */

export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  './index.html',
  flowbite.content(),
];
export const theme = {
  extend: {
    fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] },
  },
};
export const plugins = [flowbite.plugin()];
