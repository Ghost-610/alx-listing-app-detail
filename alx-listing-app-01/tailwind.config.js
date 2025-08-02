/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// This is a Tailwind CSS configuration file for a Next.js project.
// It specifies the content paths where Tailwind CSS should look for class names,
// extends the default theme, and includes any necessary plugins.
// The `content` array includes paths to the pages and components directories,
// allowing Tailwind to purge unused styles in production builds.

// The `theme` object allows for customization of the default Tailwind CSS theme,
// and the `plugins` array can be used to add additional functionality or custom plugins.