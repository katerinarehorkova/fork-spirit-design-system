import { resolve } from 'path';
import { readdirSync } from 'fs';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { getNestedDirs } from '../../scripts/build';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, '../../partials'),
      runtimeOptions: {
        data: {
          // Get the list of components directories and pass their names to the data
          components: [
            ...readdirSync('src/components', { withFileTypes: true })
              .filter((item) => item.isDirectory())
              .map((item) => item.name),
          ],
        },
      },
    }),
  ],
  css: {
    postcss: resolve(__dirname, 'config'),
    preprocessorOptions: {
      scss: {
        includePaths: [
          resolve(__dirname, '../../../../node_modules'),
          resolve(__dirname, '../../../../node_modules/@lmc-eu/spirit-design-tokens/src/scss'),
        ],
      },
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../../index.html'),
        ...getNestedDirs('src/components', 'index.html'),
      },
      output: {
        entryFileNames: `assets/spirit-web-react-entry.[hash].js`,
        chunkFileNames: `assets/spirit-web-react-chunk.[hash].js`,
        assetFileNames: `assets/spirit-web-react-asset.[hash].[ext]`,
      },
    },
  },
});
