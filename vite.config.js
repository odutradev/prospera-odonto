import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: '8080'
    },
    build:{
      outDir: 'build'
    }
  }
})