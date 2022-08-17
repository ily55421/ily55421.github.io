// 插件配置
module.exports = [
    // 百度自动推送
    'vuepress-plugin-baidu-autopush',
    // 鼠标点击后散开小星星
    'cursor-effects',
    // 全文搜索插件
    'fulltext-search',
    // 阅读顶部进度条
    'reading-progress',
     // 自定义插件
  [
    {
      name: 'custom-plugins',
        globalUIComponents: ["PageInfo","BlockToggle"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],
  
  // // rss 配置
  // [ 'feed', feed_options ],

  // // meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
  // ['autometa',autometa_options],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  
  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: 'f8fd5c4e21ca384b4785396a87bcc468',
    },
  ],

  // 提供mermaid图表支持
  'vuepress-plugin-mermaidjs',
  [
    'sitemap', {
      hostname: 'https://wiki.eryajf.net',
      exclude: ["/404.html"],
    },
  ],

  // 站点地图
  'robots', {
    host: "https://wiki.eryajf.net",
    disallowAll: false,
    allowAll: true,
    sitemap: "/sitemap.xml",
  },

  // gitalk评论
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: 'fb7da8986eeef58a7bdf',
        clientSecret: '9bf3f6d604fa86275b546c0d04654ec362c2a864',
        repo: 'eryajf.github.io', // GitHub 仓库
        owner: 'eryajf', // GitHub仓库所有者
        admin: ['eryajf'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
