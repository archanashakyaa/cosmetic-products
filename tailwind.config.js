/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Custom color names mapped to the new palette
        charcoal: '#2d1a15',        // Dark maroon (primary)
        'charcoal-light': '#6B5348', // Light charcoal (neutral-700)
        'charcoal-soft': '#A89080',  // Soft charcoal (neutral-500)
        cream: '#FDF7F4',            // Warm cream (light background)
        'white-pure': '#FFFFFF',     // Pure white
        gold: '#d32f2f',             // Bright red (accent)
        'gold-light': '#ff7043',     // Orange (accent-soft)
      },
    },
  },
}
