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
        'cream-dark': '#F0E8DE',     // Darker cream (section backgrounds)
        'white-pure': '#FFFFFF',     // Pure white
        bone: '#E5E1DA',             // Bone / warm grey (editorial borders)
        'bone-dark': '#D5D0C8',      // Darker bone (hover dividers)
        gold: '#d32f2f',             // Bright red (accent)
        'gold-light': '#ff7043',     // Orange (accent-soft)
      },
      boxShadow: {
        'editorial': '0 2px 8px rgba(0,0,0,0.02)',
        'editorial-hover': '0 20px 40px rgba(0,0,0,0.04)',
      },
    },
  },
}
