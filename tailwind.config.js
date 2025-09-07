module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1E3A8A',
          dark: '#3B82F6',
          DEFAULT: '#1E3A8A',
        },
        accent: {
          light: '#FBBF24',
          dark: '#F59E0B',
          DEFAULT: '#FBBF24',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
        surface: {
          light: '#F8FAFC',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
