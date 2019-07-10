module.exports = {
  title: '皮卡丘的网站',
  description: 'Just playing around',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ]
  port: 2333,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '代码', items: [
        { text: 'CSS', link: '/code/css/' },
        { text: 'JavaScript', link: '/code/js/' },
        { text: 'Vue 组件', link: '/code/components/' }
      ] },
      { text: 'Github', link: 'https://github.com/L-cw' },
    ],
    sidebar: {
      '/code/js/': [
        '',     /* /foo/ */
        '微信小程序生成图片'
      ],
      '/code/css/': [
        '',     /* /foo/ */
        'variable',
        'base-style',
        'media-query',
        'reset-style',
        'scroll-bar-style',
        'css-overview'
      ],
      '/code/js/': [
        '',
        'js-overview'
      ]
    },
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    }
  }
}