/** @type {import('tailwindcss').Config} */
export default {
    theme:{
      colors:{
        'coba':"#fafaf9"
      }
    },
    content: [
      // ...
      'node_modules/flowbite-react/lib/esm/**/*.js',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
  
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [
      // ...
      require('flowbite/plugin'),
    ],
  };