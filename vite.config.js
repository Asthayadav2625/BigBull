import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Add alias for Font Awesome
//       '@fortawesome/react-fontawesome': '@fortawesome/fontawesome-free/js/fontawesome',
//       '@fortawesome/free-solid-svg-icons': '@fortawesome/fontawesome-free/js/solid',
//       '@fortawesome/free-regular-svg-icons': '@fortawesome/fontawesome-free/js/regular',
//       '@fortawesome/free-brands-svg-icons': '@fortawesome/fontawesome-free/js/brands'
//     },
//   },
// });
