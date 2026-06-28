export default defineConfig(({mode, isSsrBuild}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: isSsrBuild
      ? {
          rollupOptions: {
            output: {
              format: 'cjs',
              entryFileNames: '[name].cjs',
            },
          },
        }
      : undefined,
  };
});