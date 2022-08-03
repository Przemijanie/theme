module.exports = {
  content: ['**/*.twig'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
      },
    },
    extend: {
      colors: {
        primary: '#279e95',
      },
      width: {
        '88': '22rem',
        '92': '23rem',
      },
      inset: {
        '370px': '370px',
        '368px': '-368px',
        '680px': '680px',
      },
      screens: {
        xs2: '240px',
        sm: '340px',
        sm2: '640px,',
      },
    },
  },
}
