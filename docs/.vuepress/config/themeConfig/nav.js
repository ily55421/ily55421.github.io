// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '算法与数据结构', link: '/algorithm/',

    items: [
      { text: '算法', link: '/pages/24768e/' },
      { text: '数据结构', link: '/pages/24770e/' },
      { text: '刷题', link: '/pages/040924/' },
     ]


  },
  {
    text: '专题', link: '/topic/',

    items: [
      { text: '专题文章', link: '/pages/a4770e/' },
      { text: 'Java系列', link: '/pages/678015/' },
      { text: 'Mysql系列', link: '/pages/0590ad/' },
    ]
  },
  {
    text: '生活', link: '/life/',

    items: [
      { text: '最佳实践', link: '/pages/bc7034/' },
   
    ]
  },
  {
    text: '编程', link: '/code/',

    items: [
      { text: 'JAVA', link: '/pages/ace3fe/' },
      { text: 'JVM', link: '/pages/f2e80b/' ,
      items: [
        { text: 'Java虚拟机基本原理', link: '/pages/f2e80b/'} ,
        { text: '高效编译', link: '/pages/bf46c5/'} ,
        { text: '代码优化', link: '/pages/1261df/'} ,
      ]
    },
      
    ]
  },
  { text: '索引', link: '/categories/',
  items: [
    { text: '分类', link: '/categories/' },
    { text: '标签', link: '/tags/' },
    { text: '归档', link: '/archives/' },
  ],
},
  { text: '留言板', link: '/message-board/' },
  { text: '我的博客', link: 'https://ily55421.github.io' },
]