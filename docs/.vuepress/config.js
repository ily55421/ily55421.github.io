const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "ily55421",
  description: '💻学习📝记录🔗分享\n学无止境是永远前进的基础，跃然纸上是对知识的总结交代，与众分享则是实现价值的最好方式。',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ],//使目录栏支持h2~h6标题
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "cf9ec197dde00bb3c601",
        clientSecret: "36e0127a9d6380d2f3e1cedb573e264df86417c3",
        owner: "ily55421",
        repo: "ily55421.github.io",
      },
    ],
    // 增强 markdown
    [
      "md-enhance", {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true,
      },
    ],
  ],
}