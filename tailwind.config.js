/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primaryBg: '#fdfaf1', // Light Cream
        sea: '#0496c7',
        secondaryBg: '#e0c9a6', // Sand
        accent: '#007e8a', // Teal/Blue
        textColor: '#333'
      },
      fontFamily: {
        title: ['Higher Jump', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        pacifico: ['var(--font-pacifico)', 'cursive'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif']
      }
    }
  },
  plugins: []
}
