import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true,
      clientPort: 8080,
    },
    // Fix WebSocket connectivity issues
    watch: {
      usePolling: false,
      useFsEvents: false,
    },
    // Ensure proper CORS handling
    cors: true,
    // Add fallback for potential networking issues
    strictPort: false,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add build optimizations to prevent fetch errors
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge'
    ],
  },
  // Ensure proper asset handling
  base: '/',
  // Add environment variables for better error handling
  define: {
    global: 'globalThis',
  },
}));
