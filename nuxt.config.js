module.exports = {
  head: {
    title: 'Onelove Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are a digital agency working with non-profits to drive social change.' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@onelovedigital' },
      { name: 'twitter:title', content: 'One Love Digital' },
      { name: 'twitter:description', content: 'We are a digital agency working with non-profits to drive social change.' },
      { name: 'twitter:image', content: 'https://www.onelove.digital/social.jpg' },
      { name: 'twitter:image:alt', content: 'Onelove Digital Banner' },
      { name: 'og:url', content: 'https://www.onelove.digital' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'One Love Digital' },
      { name: 'og:image', content: 'https://www.onelove.digital/social-share.jpg' },
      { name: 'og:description', content: 'We are a digital agency working with non-profits to drive social change.' },
      { name: 'og:site_name', content: 'Onelove Digital' },
      { name: 'og:locale', content: 'en_US' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ],
    script: [
      { src: 'https://use.typekit.net/fdq7zge.js' }
    ]
  },
  css: ['~assets/css/main.css'],
  loading: { color: '#e32559' },
  modules: [
    [
      '@nuxtjs/google-analytics', { id: 'UA-109208017-1'},
      '@nuxtjs/sitemap',
      '@nuxtjs/pwa', { icon: false },
    ]
 ]
}
