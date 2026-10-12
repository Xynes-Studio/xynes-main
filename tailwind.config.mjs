import { lumiaTailwindPreset } from '@lumia-ui/theme/tailwind';
const config = {
  presets: [lumiaTailwindPreset],
  content: [
    './src/**/*.{ts,tsx}',
    '../lumia-ds/packages/components/src/**/*.{ts,tsx}',
  ],
};
export default config;
