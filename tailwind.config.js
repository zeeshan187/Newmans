/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        p1: ['13px', { lineHeight: '16px' }],  
        p2: ['14px', { lineHeight: '16px' }],  
        xs: ['12px', { lineHeight: '16px' }],  
        sm: ['14px', { lineHeight: '20px' }],   
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],   
        xl: ['20px', { lineHeight: '28px' }],   
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '1' }],   
        '6xl': ['60px', { lineHeight: '1' }],   
        '7xl': ['72px', { lineHeight: '1' }],  
        '8xl': ['96px', { lineHeight: '1' }],  
        '9xl': ['128px', { lineHeight: '1' }], 
        'h1': ['81px', { lineHeight: '1' }],
        'h2': ['45px', { lineHeight: '1' }],
        'h3': ['26px', { lineHeight: '34px' }],
        'h4': ['22px', { lineHeight: '30px' }],
        
        
      },
    },
  },
  plugins: [],
};
