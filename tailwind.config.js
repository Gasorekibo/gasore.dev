export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        text: "#aaaaaa",
        heading: "#ffffff",
        meta: "#666666",
        primary: "#E8563A",
        secondary: "#2F4538",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
      },
    },
  },
}