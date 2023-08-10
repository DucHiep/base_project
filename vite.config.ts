import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
// @ts-ignore
import { wrapperEnv } from './src/utils/getEnv.ts';

// @see: https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
    const env = loadEnv(mode.mode, process.cwd());
    const viteEnv = wrapperEnv(env);

    return {
        resolve: {
            alias: {
                '~': resolve(__dirname, './src'),
            },
        },
        // server config
        server: {
            host: '0.0.0.0',
            port: viteEnv.VITE_PORT,
            open: viteEnv.VITE_OPEN,
            cors: true,
            // https: false,
            proxy: {
                '/api': {
                    target: 'https://mock.mengxuegu.com/mock/62abda3212c1416424630a45', // easymock
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        // plugins
        plugins: [react()],
        esbuild: {
            pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
        },
        // build configure
        build: {
            outDir: 'dist',
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    // Static resource classification and packaging
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                },
            },
        },
    };
});
