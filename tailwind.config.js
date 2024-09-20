module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'joyful-blue': '#3A86FF',  // Bright and appealing blue
        'joyful-green': '#06D6A0', // Vibrant, refreshing green
        'joyful-yellow': '#FFD166', // Warm, inviting yellow
        'joyful-pink': '#EF476F',   // Bold and energetic pink
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite', // Smooth bounce animation
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Gentle, relaxed pulse
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'sans-serif'], // Modern and clean font stack
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Visual feedback on interaction
      borderColor: ['focus-visible'], // Enhances focus accessibility
      ringColor: ['focus-visible'],   // Adds focus ring for better visibility
    },
  },
  plugins: [],
}
