// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/angelgabriel/Documents/cosass_dev/react/s/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/angelgabriel/Documents/cosass_dev/react/s/node_modules/@vitejs/plugin-react/dist/index.mjs";
import typescript from "file:///C:/Users/angelgabriel/Documents/cosass_dev/react/s/node_modules/@rollup/plugin-typescript/dist/es/index.js";
var __vite_injected_original_dirname = "C:\\Users\\angelgabriel\\Documents\\cosass_dev\\react\\s";
var vite_config_default = defineConfig(() => ({
  plugins: [react(), typescript()],
  build: {
    lib: {
      formats: ["es", "umd"],
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "index",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react"
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbmdlbGdhYnJpZWxcXFxcRG9jdW1lbnRzXFxcXGNvc2Fzc19kZXZcXFxccmVhY3RcXFxcc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5nZWxnYWJyaWVsXFxcXERvY3VtZW50c1xcXFxjb3Nhc3NfZGV2XFxcXHJlYWN0XFxcXHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FuZ2VsZ2FicmllbC9Eb2N1bWVudHMvY29zYXNzX2Rldi9yZWFjdC9zL3ZpdGUuY29uZmlnLnRzXCI7LyogaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbn0pXG4gKi9cblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICdWaXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0BWaXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+ICh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0eXBlc2NyaXB0KCldLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0J10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAncmVhY3QnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpIl0sCiAgIm1hcHBpbmdzIjogIjtBQVNBLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFadkIsSUFBTSxtQ0FBbUM7QUFjekMsSUFBTyxzQkFBUSxhQUFhLE9BQU87QUFBQSxFQUNqQyxTQUFTLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUFBLEVBQy9CLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLElBQ3ZDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTztBQUFBLE1BQ2xCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
