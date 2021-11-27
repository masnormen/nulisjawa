import { defineConfig } from 'vite';
import reactJsx from 'vite-react-jsx';

export default defineConfig(() => ({
  build: {
    outDir: 'build',
  },
  plugins: [
    reactJsx()
  ],
}));
