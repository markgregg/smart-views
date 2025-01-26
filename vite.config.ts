import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import * as packageJson from './package.json'

const projectName = 'smart-views';

export default defineConfig(({ mode }) => {
  const debug = mode !== 'production';

  return ({
    define: {
      'process.env.NODE_ENV': debug ? '"development"' : '"production"',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      reporters: ['verbose'],
      coverage: {
        reporter: [
          'json',
          'html',
          'text-summary',
          ['cobertura', { file: 'cobertura.xml' }],
          'lcov',
        ],
        include: ['./tests/functional/**/*.{test,spec}.{ts,tsx}'],
      }
    },
    resolve: {
      alias: [
        { find: '@', replacement: '/src' },
      ]
    },
    plugins: [
      react(),
      eslintPlugin(),
      libInjectCss(),
      dts({
        include: ['src'],
        copyDtsFiles: true,
        tsconfigPath: 'tsconfig.build.json',
        exclude: ['tests', 'src/TestApp'],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
          relativeUrls: true,
          javascriptEnabled: true
        },
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.tsx'),
        fileName: debug ? projectName : `${projectName}.min`,
        formats: ['es'],
      },
      rollupOptions: {
        input: {
          [projectName]: resolve(__dirname, 'src/index.tsx')
        },
        external: [...Object.keys(packageJson.peerDependencies)],
        output: {
          assetFileNames: debug
            ? `${projectName}.[ext]`
            : `${projectName}.min.[ext]`,
          plugins: [
            getBabelOutputPlugin({
              presets: [`@babel/preset-env`],
            }),
          ],
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    esbuild: {
      minifyIdentifiers: !debug,
      keepNames: debug,
    }
  });
})
