/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F1E8',
        card: '#FFFFFF',
        ink: '#2D2D2D',
        amber: '#D97706',
        umber: '#8B5E3C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(45,45,45,0.08)',
        card: '0 1px 2px rgba(45,45,45,0.06), 0 8px 24px rgba(45,45,45,0.06)',
        glow: '0 0 0 1px rgba(217,119,6,0.25), 0 12px 32px rgba(217,119,6,0.18)',
      },
      backgroundImage: {
        'amber-gradient': 'linear-gradient(135deg, #D97706 0%, #8B5E3C 100%)',
      },
    },
  },
  plugins: [],
}
