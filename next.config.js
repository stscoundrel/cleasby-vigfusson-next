const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
  sassOptions: {
    prependData: `
        @import 'styles/variables';
      `,
  },
})
