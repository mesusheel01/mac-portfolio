// apps/web/tailwind.config.js
const sharedConfig = require('@portfolio/tailwind-config/tailwind.config')

module.exports = {
  ...sharedConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
}
