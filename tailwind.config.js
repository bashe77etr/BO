/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary: {
  				50: '#f0fdf4',
  				100: '#dcfce7',
  				200: '#bbf7d0',
  				300: '#86efac',
  				400: '#4ade80',
  				500: '#22c55e',
  				600: '#16a34a',
  				700: '#15803d',
  				800: '#166534',
  				900: '#14532d',
  				950: '#0f3d22',
  			},
  			accent: {
  				50: '#fffbeb',
  				100: '#fef3c7',
  				200: '#fde68a',
  				300: '#fcd34d',
  				400: '#fbbf24',
  				500: '#c8922a',
  				600: '#b47d1e',
  				700: '#92640e',
  				800: '#78520d',
  				900: '#633e0a',
  			},
  			brand: {
  				dark: '#0d2818',
  				DEFAULT: '#14532d',
  				light: '#166534',
  			},
  		},
  		fontFamily: {
  			cairo: ['Cairo', 'sans-serif'],
  		},
  		animation: {
  			'float': 'float 6s ease-in-out infinite',
  			'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' },
  			},
  			fadeInUp: {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' },
  			},
  		},
  	}
  },
  plugins: [import("tailwindcss-animate")],
}

