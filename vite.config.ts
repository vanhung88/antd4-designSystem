import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import { colors } from './src/design-system/tokens/colors';

export default defineConfig({
  plugins: [tailwindcss(),react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': colors.primary,
        },
        javascriptEnabled: true,
      },
    },
  },
})
