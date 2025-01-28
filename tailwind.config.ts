import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "1rem",
	},
  	extend: {
		fontSize: {
			'fs60': ['var(--fs-60)', 'var(--lh-90)'],
			'fs50': ['var(--fs-50)', 'var(--lh-75)'],
			'9xl': ['56px', '84px']
		},
  		colors: {
			tp: {
				DEFAULT: 'hsl(var(--tp))',
				secondary: 'hsl(var(--tp-secondary))',
				tertiary: 'hsl(var(--tp-tertiary))',
				'link-more': 'hsl(var(--tp-link-more))',
				'white-500': 'hsl(var(--tp-white-500))'
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			footer: {
				DEFAULT: 'hsl(var(--footer))',
				foreground: 'hsl(var(--footer-foreground))'
			},
			brand: {
				DEFAULT: 'hsl(var(--brand))',
				foreground: 'hsl(var(--brand-foreground))'
			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
