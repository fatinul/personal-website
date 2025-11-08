import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Cascadia Code", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "full",
            'p': {
              color: theme('colors.gray.500'),
            },
            'strong': {
              color: theme('colors.emerald.400'),
            },
            'code': {
              color: theme('colors.indigo.400'),
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.black'),
            },
            'listitem': {
              color: theme('colors.gray.500'),
            },
          },
        },
        invert: {
          css: {
            'p': {
              color: theme('colors.gray.400'),
            },
            'strong': {
              color: theme('colors.emerald.400'),
            },
            'code': {
              color: theme('colors.indigo.400'),
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
          }
        }
      }),
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": { 
            opacity: 0, 
            transform: "rotate(0deg)" 
          },
          "50%": { 
            opacity: 1,
            transform: "rotate(180deg)" 
          },
          "100%": { 
            opacity: 0, 
            transform: "rotate(360deg)" 
          },
        },
        meteor: {
          "0%": { 
            opacity: 0, 
            transform: "translateY(200%)" 
          },
          "50%": { 
            opacity: 1  
          },
          "100%": { 
            opacity: 0, 
            transform: "translateY(0)" 
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
