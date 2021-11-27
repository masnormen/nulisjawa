import { defineConfig } from 'vite';
import reactJsx from 'vite-react-jsx';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig(() => ({
  build: {
    outDir: 'build',
  },
  plugins: [
    reactJsx(),
    {
      ...obfuscator({
        fileOptions: {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.5,
          identifierNamesGenerator: 'hexadecimal',
          rotateStringArray: true,
          shuffleStringArray: true,
          splitStrings: true,
          splitStringsChunkLength: 4,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayThreshold: 1,
          stringArrayWrappersCount: 2,
          transformObjectKeys: true
        },
        include: ['**/*.js', '**/*.jsx']
      }),
      apply: 'build',
      enforce: 'post',
    },
  ],
}));
