module.exports = {
  head: {
    title: 'Onelove Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are a digital agency working with non-profits to drive social change.' }
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
      '@nuxtjs/sitemap'
    ]
 ]
}
