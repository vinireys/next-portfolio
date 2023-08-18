/**@type {import( 'tailwindcss').Config} */
module.exports ={
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
     './components/**/*.{js,ts,jsx,tsx,mdx}',
     './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    extends: {
      colors: {
        'h-gray-500': '#737994',
        'h-blue-500': '#8CAAEE',
        'h-blue-900': '#303446',
      },
      width: {
        120: '30rem',
        125: '31.25rem',
      },
      height: {
        125: '31.25rem',
      },
    },
  },
  plugins: [],
};
