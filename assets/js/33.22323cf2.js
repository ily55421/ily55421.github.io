(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{631:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"binary-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-tree"}},[s._v("#")]),s._v(" Binary Tree")]),s._v(" "),t("h2",{attrs:{id:"树-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树-tree"}},[s._v("#")]),s._v(" 树（Tree）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-25-44-2de7e10b76b248b27c43909ccad7430c-image-20220521233650701-d4e0c4-d108.png",alt:"image-20220521233650701"}})]),s._v(" "),t("p",[s._v("A 节点就是 B 节点的"),t("strong",[s._v("父节点")]),s._v("，B 节点是 A 节点的"),t("strong",[s._v("子节点")]),s._v("。B、C、D 这三个节点的父节点是同一个节点，所以它们之间互称为"),t("strong",[s._v("兄弟节点")]),s._v("。我们把没有父节点的节点叫作"),t("strong",[s._v("根节点")]),s._v("，也就是图中的节点 E。我们把没有子节点的节点叫作"),t("strong",[s._v("叶子节点")]),s._v("或者"),t("strong",[s._v("叶节点")]),s._v("，比如图中的 G、H、I、J、K、L 都是叶子节点。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-26-10-999b431f1a4e226e9332d3e2beb1c95c-image-20220521233658091-64faa8-c510.png",alt:"image-20220521233658091"}})]),s._v(" "),t("p",[t("strong",[s._v("高度")]),s._v("（Height）、"),t("strong",[s._v("深度")]),s._v("（Depth）、"),t("strong",[s._v("层")]),s._v("（Level）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-26-36-281e118031f9ead7e7060606c2ad1143-image-20220521233706590-9da5ae-4327.png",alt:"image-20220521233706590"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-26-53-8639334d86f5aedb3355a52a55989cd2-image-20220521233713143-01515d-df72.png",alt:"image-20220521233713143"}})]),s._v(" "),t("h2",{attrs:{id:"二叉树-binary-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二叉树-binary-tree"}},[s._v("#")]),s._v(" 二叉树（Binary Tree）")]),s._v(" "),t("p",[s._v("树结构多种多样，不过我们最常用还是二叉树。")]),s._v(" "),t("p",[s._v("二叉树，顾名思义，每个节点最多有两个“叉”，也就是两个子节点，分别是"),t("strong",[s._v("左子节点")]),s._v("和"),t("strong",[s._v("右子节点")]),s._v("。不过，二叉树并不要求每个节点都有两个子节点，有的节点只有左子节点，有的节点只有右子节点。")]),s._v(" "),t("h2",{attrs:{id:"二叉树的存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的存储"}},[s._v("#")]),s._v(" 二叉树的存储")]),s._v(" "),t("h3",{attrs:{id:"链式存储法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式存储法"}},[s._v("#")]),s._v(" 链式存储法")]),s._v(" "),t("p",[s._v("每个节点至少有三个字段，其中一个存储数据，另外两个是指向左右子节点的指针。这种存储方式比较常用，大部分二叉树代码都是通过这种结构来实现的。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-27-27-6a9996401db27070287c7251ed62530a-image-20220521233737094-8f6d1e-2ab0.png",alt:"image-20220521233737094"}})]),s._v(" "),t("h3",{attrs:{id:"数组存储法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组存储法"}},[s._v("#")]),s._v(" 数组存储法")]),s._v(" "),t("p",[s._v("我们把根节点存储在下标 i=1 的位置，它的左子节点存储在下标为 2 * i 的位置，右子节点存储在下标为 2*i+1 的位置。以此类推，B 节点、C 节点的左右子节点都按照这种规律进行存储，最终如下图所示。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("综上，如果节点 X 存储在数组中下标为 i 的位置，那么下标为 2*i 的位置存储的就是它的左子节点，下标为 2*i+1 的位置存储的就是它的右子节点。反过来，i/2 的位置存储的就是它的父节点。一般情况下，为了方便计算，根节点会被存储在下标为 1 的位置。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-27-56-59ba946166a61d7e31f4ddfb11ab73d4-image-20220521233743354-811206-f582.png",alt:"image-20220521233743354"}})]),s._v(" "),t("p",[s._v("通过上述可以看到，针对一般树来说，使用数组的方式存储树会浪费比较多的存储空间。但是针对下文会提到的满二叉树或者完全二叉树来说，数组存储的方式是最节省内存的一种方式。因为数组存储时，不需要再存储额外的左右子节点的指针。")]),s._v(" "),t("h2",{attrs:{id:"_3-二叉树的遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-二叉树的遍历"}},[s._v("#")]),s._v(" 3. 二叉树的遍历")]),s._v(" "),t("p",[s._v("二叉树的遍历就是将二叉树中的所有节点遍历打印出来。经典的方法有三种，"),t("strong",[s._v("前序遍历、中序遍历和后序遍历")]),s._v("，还可以按层遍历（个人理解的按层遍历其实就是按照图的广度优先遍历方法来进行遍历）。")]),s._v(" "),t("p",[s._v("前、中、后是根据节点被打印的先后来进行区分的：")]),s._v(" "),t("p",[s._v("前序就是先打印"),t("strong",[s._v("节点本身")]),s._v("，之后再打印它的左子树，最后打印它的右子树；(根左右)")]),s._v(" "),t("p",[s._v("中序就是先打印节点的左子树，再打印节点本身，最后打印右子树，即把节点放中间的位置输出；（左根右）")]),s._v(" "),t("p",[s._v("后序就是先打印节点的左子树，再打印节点的右子树，最后打印节点本身（左右根）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-28-37-50e8f51175ff1f64a232dc96bf85f2db-image-20220521233758229-a944b8-1e49.png",alt:"image-20220521233758229"}})]),s._v(" "),t("p",[t("strong",[s._v("实际上，二叉树的前、中、后序遍历就是一个递归的过程")]),s._v("。")]),s._v(" "),t("p",[s._v("按层遍历类似于图的广度优先遍历，先打印第一层的节点，之后再依次打印第二层的节点，以此类推。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-30-07-31c42e586a9153a24604038afa6ec4e6-68747470733a2f2f696d672e6461776e67756f2e636e2f416c676f726974686d2f696d6167652d32303230303731363136313634353434302e706e67-84d0.png",alt:"image-20200716161645440"}})]),s._v(" "),t("h3",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" "),t("strong",[s._v("代码实现")])]),s._v(" "),t("p",[s._v("实际上，二叉树的前、中、后序遍历是一个递归的过程。比如，前序遍历，其实就是先打印根节点，然后递归遍历左子树，最后递归遍历右子树。递归遍历左右子树其实就跟遍历根节点的方法一样。下面先写出这三者遍历的递推公式：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v("前序遍历的递推公式：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" print r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n中序遍历的递推公式：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" print r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n后序遍历的递推公式：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("print r\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("之后将递推公式转化为代码如下所示：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 前序遍历 根左右\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 中序遍历 左根右\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 后序遍历  左右根\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])]),t("blockquote",[t("p",[s._v("递归代码的关键，在于写出递推公式。而递推公式的关键在于，A 问题可以被拆解成 B、C 两个问题。假设要解决 A 问题，那么假设 B、C 问题已经解决了。那么在 B、C 已经解决的提前下，看如何利用 B、C 来解决 A 。千万不要模拟计算机一层一层想下去，否则你就会发现你自己都不知道在哪了。")])]),s._v(" "),t("p",[s._v("下面是按层遍历的代码，按层遍历需要用到队列的入队和出队等操作。先将根节点放入到队列中，然后循环从队列中取节点（出队），再将该节点的左右子节点入队。出队的顺序就是层次遍历的结果。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 层次遍历\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BFSOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Queue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" queue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" temp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("offer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isEmpty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        temp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("poll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("offer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("offer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h3",{attrs:{id:"时间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[s._v("#")]),s._v(" "),t("strong",[s._v("时间复杂度")])]),s._v(" "),t("p",[s._v("遍历过程中的次数就是访问所有节点的所需的次数，而每个节点最多被访问两次，因此遍历的时间复杂度是跟节点的个数 n 成正比的，即遍历的时间复杂度是 O(n)。")]),s._v(" "),t("h2",{attrs:{id:"特殊的二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊的二叉树"}},[s._v("#")]),s._v(" 特殊的二叉树")]),s._v(" "),t("h3",{attrs:{id:"满二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#满二叉树"}},[s._v("#")]),s._v(" 满二叉树")]),s._v(" "),t("p",[s._v("满二叉树是一种特殊的二叉树，而且还是完全二叉树的一种特殊情况。如上图编号 2 的那棵树所示，叶子节点全在底层，除了叶子节点之外，每个节点都有左右两个子节点。")]),s._v(" "),t("h3",{attrs:{id:"完全二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉树"}},[s._v("#")]),s._v(" 完全二叉树")]),s._v(" "),t("p",[s._v("完全二叉树也是一种特殊的二叉树。如上图编号 3 的那棵树所示，叶子节点都在最底下两层，最后一层的叶子节点都靠左排列，并且除了最后一层，其他层的节点个数都达到最大。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-32-57-38ed21ad4aaedec8ab1fab3135a18881-Ciqc1F7nVgiAaAzDAACeT1A4his243-93346c-0165.png",alt:"image"}})]),s._v(" "),t("p",[s._v("完全二叉树的特征使得它可以使用数组就可以很好地存储数据。完全二叉树要求最后一层的叶子节点靠左排列也是因为如此。")]),s._v(" "),t("h3",{attrs:{id:"完全二叉树的存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉树的存储"}},[s._v("#")]),s._v(" 完全二叉树的存储")]),s._v(" "),t("h4",{attrs:{id:"链式存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式存储"}},[s._v("#")]),s._v(" 链式存储")]),s._v(" "),t("p",[s._v("就是上面提到的那种方式。也就是像链表一样，每个结点有三个字段，一个存储数据，另外两个分别存放指向左右子结点的指针，如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-34-16-ee246f6612f7fd6ae5dce5450b30950b-CgqCHl7nVhKAJVYKAABbMx2OS5o954-4b2bd3-f3b3.png",alt:"image"}})]),s._v(" "),t("h4",{attrs:{id:"数组存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组存储"}},[s._v("#")]),s._v(" 数组存储")]),s._v(" "),t("p",[s._v("完全二叉树使用数组存储时，如下图所示。我们发现使用数组来存储完全二叉树是一种很节省内存的方式。这也是完全二叉树被作为一种特殊树的原因，也是完全二叉树要求最后一层的子节点必须都靠左的原因。")]),s._v(" "),t("p",[t("strong",[s._v("在讲解堆或者堆排序的时候，堆其实也是一种完全二叉树，最常用的存储方式就是数组")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("顺序存储法，就是按照规律把结点存放在数组里，如下图所示，为了方便计算，我们会约定把根结点放在下标为 1 的位置。随后，B 结点存放在下标为 2 的位置，C 结点存放在下标为 3 的位置，依次类推。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/21-34-00-86e832827572d2c943b696d3f14bb810-CgqCHl7nVhyAF-yqAAFEIfF2-z4697-70ef8b-4746.png",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"其他特殊的二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他特殊的二叉树"}},[s._v("#")]),s._v(" 其他特殊的二叉树")]),s._v(" "),t("p",[s._v("其他特殊的二叉树还有二叉查找树、平衡二叉查找树等。因为这两种特殊的树涵盖的知识比较多，所以会将其分开进行单独讲解。")]),s._v(" "),t("h2",{attrs:{id:"巨人的肩膀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#巨人的肩膀"}},[s._v("#")]),s._v(" 巨人的肩膀")]),s._v(" "),t("ol",[t("li",[s._v("极客时间专栏，王争老师的《数据结构与算法之美》")])])])}),[],!1,null,null,null);t.default=e.exports}}]);