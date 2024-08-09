/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "className",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
    body: ['Poppins', 'sans-serif,Inter', 
'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
    
    
    ],
  },
  
  theme: {
    colors: {
      bgPrimaryRed: "#D45147",
      textDarkBlue: "#031555",
      textDarkGray: "#323258",
      textWhite: "#FFFFFF",
      bgLightWhite: "#E3E6ED",
      textBlack:"#000000",
      shadowCustom:"4px 4px 12px rgba(0, 0, 0, 0.25)",
      textprimarywhite: "#ffff",
      textprimarygrey: "#717171",
      textgray: "#8D8D8D",      
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    
    extend: {
      dropShadow: {
        customShadowOne: "4px 4px 12px #D45147",
      },
      
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%": { backgroundColor: "textDarkBlue" },
          "50%": { backgroundColor: "textDarkBlue" },
          "100%": { backgroundColor: "textDarkBlue" },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        title_bg_image: "url('../public/icons/title-bg.svg')",
        client_bg_image: "url('../public/icons/client-bg.svg')",
        cloud_bg_image:"url('../public/illustrations/cloud.svg')",
        Devops_bg_image:"url('../public/icons/Devops.svg')",
        software_development_image:"url('../public/icons/software-development.svg')",
        cloud_enablement_bg_image:"url('../public/icons/cloud.svg')",
        Quality_bg_image:"url('../public/icons/Quality.svg')",
        Devops_top_bg_image:"url('../public/icons/devops-top.svg')",
        software_page_bg_image:"url('../public/icons/software-development.svg')",
        cloud_page_bg_image:"url('../public/icons/cloud-top.svg')",
        quality_page_bg_image:"url('../public/illustrations/qualitybefore.svg')",
        UpandDown_lines:"url('../public/logos/lines.jpg')",
        Vertical_lines:"url('../public/logos/vertical.jpg')",
      },

      shadow:{
        circle_shadow :"box-shadow 0 0 10px rgba(0, 0, 0, 0.2)",
      },
      
    },
  },
  plugins: [],
};

