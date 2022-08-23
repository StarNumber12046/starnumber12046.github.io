import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'media',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
        svelte: "#FF3E00",
        react: "#61dafb",
        vue: "#41b883",
        angular: "#dd0031",
        javascript: "#f7df1e",
        typescript: "#2b7489",
        python: "#3572A5",
        discord: "#5865F2",
        twitter: "#1DA1F2",
        github: "#24292e",
        
      },
    },
  },
  plugins: [formsPlugin],
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx,svelte}'],
    exclude: ['node_modules', '.git'],
  },
})