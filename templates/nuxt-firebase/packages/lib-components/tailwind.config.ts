module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cdark: {
          'color-scheme': 'dark',
          primary: '#4b9e30',
          secondary: '#e5e7eb',
          accent: '#d6d3d1',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        clight: {
          'color-scheme': 'light',
          primary: '#4b9e30',
          secondary: '#e5e7eb',
          accent: '#d6d3d1',
          neutral: '#191D24',
          'base-100': '#f5f5f4',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};
