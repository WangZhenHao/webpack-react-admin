import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  const env = loadEnv(mode, process.cwd(), '')

  // Path aliases
  const aliases = {
    '@': path.resolve(__dirname, './src'),
    '@views': path.resolve(__dirname, './src/views'),
    '@components': path.resolve(__dirname, './src/components'),
    '@store': path.resolve(__dirname, './src/store'),
    '@api': path.resolve(__dirname, './src/api'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@type': path.resolve(__dirname, './src/type'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@router': path.resolve(__dirname, './src/router')
  }

  // Server configuration based on mode
  const serverConfig = {
    port: 4000,
    open: true,
    cors: true,
    // API proxy for development
    proxy: {
      '/api': {
        target: env.VITE_API || 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    }
  }

  // Build configuration based on mode
  const buildConfig = {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: mode === 'development',
    minify: mode === 'production',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }

  // Base path configuration
  const getBasePath = () => {
    // 优先使用环境变量配置
    if (env.VITE_BASE_PATH) {
      return env.VITE_BASE_PATH
    }

    // Development mode uses '/'
    if (mode === 'development') {
      return '/'
    }

    // Default: use /webpack-react-admin/ for other environments
    return '/webpack-react-admin/'
  }

  return {
    // Base path
    base: getBasePath(),

    // Development server settings
    server: mode === 'development' ? serverConfig : {},

    // Build settings
    build: buildConfig,

    // Path aliases
    resolve: {
      alias: aliases
    },

    // CSS settings
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "@/assets/styles/variables.scss" as *;`
        }
      }
    },

    // Plugins
    plugins: [
      react()
    ],

    // Environment variable support
    envPrefix: 'VITE_',

    // Optimization settings
    optimizeDeps: {
      include: ['react', 'react-dom', 'antd']
    }
  }
})