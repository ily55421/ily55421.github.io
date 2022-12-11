(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{615:function(s,a,n){"use strict";n.r(a);var t=n(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[s._v("#")]),s._v(" 递归")]),s._v(" "),a("h2",{attrs:{id:"递归基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归基础"}},[s._v("#")]),s._v(" 递归基础")]),s._v(" "),a("blockquote",[a("p",[s._v("争哥：从我自己学习数据结构和算法的经历来看，我觉得最难理解的知识点，一个是动态规划，另一个是递归。好吧，在众多不太熟练的数据结构和算法中，我也是这两个。")])]),s._v(" "),a("p",[s._v('**递归从编程形式上看是函数自己调用自己，是一种编程方法。**很多数据结构和算法的实现都会采用递归这种方式，比如 DFS 深度优先搜索、前中后序二叉树遍历等等。那么怎么理解递归呢？递归其实分为两个过程，去的过程叫过“递”，回来的过程叫做"归"。比如我们坐在电影院里看电影，想知道自己坐的是第几排（别说电影票上有写），那么我们会问前面一排的人，它是第几排，这个过程叫过“递”；之后前面一排的人同样会问再前面一排的人他是第几排，以此类推。当问到第一排的人之后，第一排的人向第二排的人回了个 1，以此类推；我们前面一排的人会给我们回了个第 n-1 排，那么这个过程叫做“归”，从而得到我们是第 n 排。')]),s._v(" "),a("h3",{attrs:{id:"递归使用需要满足的三个条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归使用需要满足的三个条件"}},[s._v("#")]),s._v(" 递归使用需要满足的三个条件")]),s._v(" "),a("p",[a("strong",[s._v("要想使用递归一定要以下这三个条件，简单来说就是可以分解成子问题，这些子问题的解法和原问题思路一样，有终止条件。")])]),s._v(" "),a("ul",[a("li",[s._v("一个问题的解可以分成几个子问题的解。子问题的意思是数据规模更小的问题，也就是说一个数据规模比较大的问题解可以由几个数据规模比较小的问题的解组成。")]),s._v(" "),a("li",[s._v("子问题除了数据规模不同之外，求解思路完全一样。也就是子问题的求解方法和当前问题的求解方法是一样。")]),s._v(" "),a("li",[s._v("存在递归终止条件。当前问题会被分解成子问题，子问题又会被分解成更小的子问题，以此类推下去，显然不能无限递下去，一定要终止条件，从而有归的过程。")])]),s._v(" "),a("h3",{attrs:{id:"编写递归代码的技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写递归代码的技巧"}},[s._v("#")]),s._v(" 编写递归代码的技巧")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("写递归代码最关键的是找到大问题分解为小问题的规律，并且基于此写出递推公式；之后再确定终止条件（也叫做基线条件）；最后将这些翻译成代码即可")]),s._v("。")]),s._v(" "),a("li",[s._v("另外在编程思考递归过程的时候，"),a("strong",[s._v("千万不要铺开模拟递归的过程，也就是千万不要试图想清楚整个递和归的过程")]),s._v("，这种实际上会进入一个思维误区。其实，**只需要考虑两层即可，即假设子问题已有答案，然后思考原问题和子问题的解怎么联系起来。**比如一个问题 A 可以分解为若干子问题 B、C、D，那么假设子问题 B、C、D 已经解决，在此基础上思考如何解决问题 A 即可。不要去想一层层调用关系，不要试图用人脑分解递归的每个步骤，屏蔽掉这些细节。")])]),s._v(" "),a("h3",{attrs:{id:"递归方式存在的弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归方式存在的弊端"}},[s._v("#")]),s._v(" 递归方式存在的弊端")]),s._v(" "),a("p",[s._v("在递归实现代码时，会遇到很多问题，比如堆栈溢出、重复计算、函数调用耗时多、空间复杂度高等问题。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("堆栈溢出")]),s._v(" "),a("p",[s._v("因为递归的本质是函数调用，而函数调用过程中会使用栈来保存临时变量（栈中保存着未完成的函数调换用）。如果递归求解的数据规模很大，调用层次很深，一直压入栈，就会有栈溢出的风险。")]),s._v(" "),a("p",[s._v("那么如何避免栈溢出呢？可以设置递归的层次，一旦超过一定层次之后，就不在往下递归了，直接返回报错。但是这种方式不能完全解决问题，因为可能层次设置太大，在未达到一定层次之前就已经栈溢出了。因此，这种方式适合最大深度比较小的。")])]),s._v(" "),a("li",[a("p",[s._v("重复计算")]),s._v(" "),a("p",[s._v("在递归的过程中还会出现重复计算的问题，如下面这个递归过程中就存在大量的重复计算：想要计算f(5)，需要先计算 f(4) 和 f(3) ,而计算 f(4) 又会计算 f(3)，f(3) 就被重复计算了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/22-09-14-e05915d74d5ab7018ec9578ee8bf0aa4-image-20221211220914662-8848.png",alt:"image-20221211220914662"}})]),s._v(" "),a("p",[a("strong",[s._v("为了避免重复计算，可以使用一个数据结构（比如散列表）来保存已经求解过的 f(k) 值。当递归到 k 的时候判断，f(k) 是否已经求解过了，如果求解过了，那么直接返回，不需要重复计算。")])])]),s._v(" "),a("li",[a("p",[s._v("函数调用耗时多、空间复杂度高")]),s._v(" "),a("p",[s._v("递归中会涉及到很多函数调用，当函数调用的数量比较多的时候，会使得耗时比较多。同时，由于调用一次就会在内核栈中保存一次现场数据，因此空间复杂度也会比较大。")])])]),s._v(" "),a("h3",{attrs:{id:"如何改写为非递归代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何改写为非递归代码"}},[s._v("#")]),s._v(" 如何改写为非递归代码")]),s._v(" "),a("p",[s._v("针对上述递归存在的问题，可以将递归代码转化为非递归的形式。**一般来说，递归代码都可以改写成非递归代码的形式。**因为递归本身就是借助栈来实现的，只不过递归使用的是系统栈或者虚拟机提供的。假如我们自己实现一个栈，模拟入栈、出栈的过程的话，那也是可以的（比如图的深度优先比例时可以使用栈和循环来实现，一般情况都是使用递归）。")]),s._v(" "),a("p",[s._v("上述说到了模拟栈的方式，但是在有些递归代码改为非递归代码的形式中，不一定要那么做。**对于同一个问题而言，递归代码是从最大的问题开始，先层层分解，分解完成之后会得到结果，再将结果层层返回，这是有一个有去有回的过程；假如我们知道子问题的答案的话，可以直接从子问题的答案开始，然后子问题求出大的问题的答案，这种相当于只取了归的过程。**比如有这么个递归式：f(n)=f(n-1)+1，终止条件是f(1)=1，那么改为非递归的形式，如下所示。下面这种方式，其实就相当于从子问题的答案出发，从而推得更大问题的解，比如 f(1) = 1，推得 f(2) = f(1)+1=2。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-JAVA line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" prepre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" prepre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    prepre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("从上述的例子中我们可以得出这样一句话，使用递归可以让解决方法更清晰，但是并没有性能上的优势；而使用循环的性能更好。")]),s._v(" "),a("h3",{attrs:{id:"java实现尾部递归的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java实现尾部递归的方式"}},[s._v("#")]),s._v(" Java实现尾部递归的方式")]),s._v(" "),a("div",{staticClass:"language-JAVA line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("factorialTailRecursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("factorialHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("factorialHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1L")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("factorialHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"递归树-递归代码的复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归树-递归代码的复杂度分析"}},[s._v("#")]),s._v(" 递归树---递归代码的复杂度分析")]),s._v(" "),a("p",[s._v("递归代码的复杂度一般比较难分析，一般可以通过递推公式推导的方式来求解复杂度。但是有时候递推公式推导比较繁琐，这个时候我们可以使用递归树的方式来分析递归算法的复杂度。（个人认为其实掌握递归树即可，递推公式最终也可以转换为递归树，只是递推公式时没有显式的树过程）。")]),s._v(" "),a("p",[s._v("递归的思想就是将大问题分解为小问题来求解，然后再将小问题分解成小小问题。这样一层层分解，直到问题的数据规模被分解得足够小，不用继续递归分解为止。那么将这个过程画成一颗树，这颗树就叫做递归树。")]),s._v(" "),a("p",[s._v("比如斐波那契使用递归的方式求解时，就可以画出下面这样一颗递归树。节点里的数字表示数据的规模，一个节点的求解可以分解为左右子节点两个子问题的求解。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/22-10-12-6653191c70258b3de2fe7cfd5b83c8a8-68747470733a2f2f696d672e6461776e67756f2e636e2f416c676f726974686d2f696d6167652d32303230303732313131303231323031362e706e67-79d0.png",alt:"img"}})]),s._v(" "),a("p",[s._v("下面通过举几个例子来讲解递归树求解的方法。")]),s._v(" "),a("h3",{attrs:{id:"归并排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[s._v("#")]),s._v(" 归并排序")]),s._v(" "),a("p",[s._v("归并排序的每次分解都是一分为二，整个递归过程画成递归树之后如图所示。m(n) 的时间复杂度为 m(n/2) 的时间复杂度乘以 2，加上合并所需要的时间复杂度。而 m(n/2) 的时间复杂度等于 m(n/4) 的时间复杂度乘以 2，加上合并所需要的时间度。以此类推，最终时间复杂度为 m(1) 乘以 n，再加上这过程的合并操作所需的时间复杂度。")]),s._v(" "),a("p",[s._v("每一层合并操作所需要的时间复杂度是 O(n)，m(1) 的时间复杂度为 O(1)。合并的次数为"),a("code",[s._v("高度")]),s._v("（从 0 开始算），那么最终时间复杂度为 "),a("code",[s._v("(高度+1)*O(n)")]),s._v("。从归并排序的原理和递归树来看，归并排序的递归树是一颗满二叉树。那么这颗数的高度为 log2n，因此最终时间复杂度为 O(nlogn)。")]),s._v(" "),a("h3",{attrs:{id:"快速排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[s._v("#")]),s._v(" 快速排序")]),s._v(" "),a("p",[s._v("快速排序在最好情况下，每次分区都能一分为二，那么此时快速排序的递归树和时间复杂度都和归并排序一样，都是 O(nlogn)。那么，针对不是一分为二的情况。比如很槽糕的情况，每次都是 1:9 的话。那么对应的递归树如图所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/22-12-57-d97e558e5d20dae92ad92b89e65a88e2-image-20221211221257740-65e0.png",alt:"image-20221211221257740"}})]),s._v(" "),a("p",[s._v("快速排序时，都需要先分区，然后再递归。在分区时，需要遍历区间内的所有数据。因此，每一层的分区操作所遍历的数据个数之和是 n。同样，我们需要求出树的高度，时间复杂度即为 "),a("code",[s._v("高度*O(n)")]),s._v("。由于每次分区并不是均匀地一分为二，因此此时的递归树不是满二叉树。但是此递归树最长高度可以求得，即最右边的那个分支，最短高度也可以求得，即最左边的那个分支。从根节点到 q(1)，最左边的的深度是 log10n；最右边的深度是 log109n。因此总体的时间复杂度应该位于 O(nlog10n) 和 O(nlog109n) 之间，由于对数复杂度不管底数是多少都可以统一成 logn，因此快速排序的时间仍然是 O(nlogn)。")]),s._v(" "),a("p",[s._v("假如上述比例变成 1:99，那么类似 1:9 的分析方法，最终的时间复杂度还是 O(nlogn)，只要比例是一个常量值之比，那么时间复杂度都是 O(nlogn)。那么平均时间复杂度也是 O(nlogn)。")]),s._v(" "),a("h3",{attrs:{id:"斐波那契"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契"}},[s._v("#")]),s._v(" 斐波那契")]),s._v(" "),a("p",[s._v("前文拿斐波那契数列举了个简单的例子，下面我们来完完整整地分析一下斐波那契数列的时间复杂度。斐波那契使用递归的方式实现如下所示")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("将整个递归的过程画成递归树，如图所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/22-13-25-a4118e5338ad126774b98665153e81cc-image-20221211221324957-d2f5.png",alt:"image-20221211221324957"}})]),s._v(" "),a("p",[s._v("f(n) 分解为 f(n-1) 和 f(n-2)，那么在得到 f(n-1)、f(n-2) 的时间复杂度之后还需要做一个加法操作，该加法操作的时间为 1。那么 f(n-1) 分解成为 f(n-2)、f(n-3) 之后进行加法操作的时间复杂度也是 O(1)，因此第二层所需的加法操作时间为 2。依次类推，第 k 层加法时间消耗需要 2^(k-1)。那么，整个算法的时间消耗就是每一层加法的时间消耗之和加上最后的 f(1)、f(2) 所需要的时间操作。")]),s._v(" "),a("p",[s._v("f(n) 分解为 f(n-1) 和 f(n-2)，数据规模减少的快慢不一样。最长路径的层次应该是 n 层，最短路径的层次差不多是 2/n 层。因此，最大的时间复杂度为 O(2^n-1)，最小的时间复杂度为 O(2^(n/2)-1)。那么，这个算法的时间复杂度介于两者之间，即时间复杂度是指数级的。虽然上述的计算过程不是特别精确，但是时间复杂度的数量级是没有变的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1 + 2 + ... + 2^(n-1) = 2^n-1\n\n1 + 2 + ... + 2^(n/2-1) = 2^(n/2)-1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"全排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全排列"}},[s._v("#")]),s._v(" 全排列")]),s._v(" "),a("p",[s._v("全排列的意思是指把 n 个数据的所有排列情况全都找出来。全排列可以采用递归的方式实现：对于 n 个数据的全排列问题，假如我们确定了第一位数据（或者最后一位数据），那么就变成了剩下的 n-1 个数据的排列问题了。并且，第一位数据可以是 n 个数据中的任意一个，即第一位数据有 n 种情况。因此，n 个数据的全排列问题就分解成了 n 个 n-1 个数据全排列的问题了。因此这就满足了递归的前两个条件，即原问题的求解可以分解对成 n 个子问题的求解，并且对于这 n 个子问题的求解方式与原问题的求解方式一模一样，只是数据规模不同。最后是否满足递归的最后一个条件呢？当只剩下 1 个数据的时候，递归可以终止，因此是存在递归终止条件的。")]),s._v(" "),a("p",[s._v("我们将上述的过程写成递归公式如下所示。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("f(1, 2, 3, ..., n) = {第一位为1， f(2, 3, ..., n)} + {第一位为2，f(1, 3, ..., n)} + {第一位为n，f(1, 2, ..., n-1)}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将上述的递归公式转化为 Java 代码如下所示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public void fullPermutation(char[] list, int start) {\n    if (list.length == start) {\n        System.out.println(list);\n    }\n\n    for (int i = start; i < list.length; i++) {\n        swap(list, i, start);\n        fullPermutation(list, start + 1);\n        swap(list, i, start);\n    }\n}\n\npublic void swap (char[] list, int i, int j) {\n    char temp;\n    temp = list[i];\n    list[i] = list[j];\n    list[j] = temp;\n    return;\n}\npublic static void main(String[] args) {\n    new FullPermutation().fullPermutation(new char[]{'1', '2', '3'}, 0);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("接下去我们使用递归树的方式来对这段代码的时间复杂度进行分析。上述的过程可以画出如下的递归树。第一层有 n 个交换操作，第二层有 n 个节点，每个节点分解需要 n-1 次交换，所以第二层所需要进行交换的次数是 n(n-1)。依次类推，第三层所需要的交换次数是 n(n-1)(n-2)，第 k 层所需要的交换次数是 n(n-1)...(n-k+1)，最后一层的交换次数是 n(n-1)...2。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/22-13-44-fd2f7cc59324d1748cd61eaac23a5df2-image-20221211221344818-a605.png",alt:"image-20221211221344818"}})]),s._v(" "),a("p",[s._v("最终每一层的交换次数之和就是总的交换次数之和。最后一层的交换次数是 n! 次，而其他层的交换次数肯定小于 n! 次，因此最终的时间复杂度肯定是大于 O(n!)，但小于 O(n*n!)。虽然具体的时间复杂度无法求出，但是通过这个范围也可以知道全排列的时间复杂度是很大的。")]),s._v(" "),a("blockquote",[a("p",[s._v("上述的三个例子，掌握递归树的求解方式才是最重要的，不要纠结于精确的时间复杂度是多少。")]),s._v(" "),a("p",[s._v("另外个人觉得，递归的时间复杂度分析方式只有一种，虽然专栏中说还有递归公式，但是递归公式其实最终也可以转换为递归树，因此最终还是递归树。")])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("首先需要知道可以使用递归的三个条件：")]),s._v(" "),a("ul",[a("li",[s._v("问题可以分解成子问题，")]),s._v(" "),a("li",[s._v("这些子问题的解法和原问题思路是一样，")]),s._v(" "),a("li",[s._v("最后还需要有终止条件。")])])]),s._v(" "),a("li",[a("p",[s._v("其次，在编写递归代码时，记得先找出递归公式以及终止条件，这是第一步。之后再根据递归公式和终止条件写出代码，此时很容易。")])]),s._v(" "),a("li",[a("p",[s._v("之后，在思考递归问题的时候。一定要注意不要将递归想下去，只考虑一层递归即可，即假设子问题都已经解决。这是我学习该篇内容中学到最为有用的一点，也将我之前的那些做法给抛弃掉了。")]),s._v(" "),a("p",[s._v("在刚接触递归的时候，脑子很容易跟着机器执行的顺序一层一层套用下去，就像 Debug 一个很深的函数调用链一样。这样往往只有递的过程，没有归的过程，然后在这个过程你也不知道你在哪了。所以，刚接触的时候递归往往让我觉得很难分析。可能你会觉得在纸上画图分析会好一点，其实也会很乱，因为一旦层次一深，你纸上也会很糊涂。所以，在处理递归问题时，不一定要 follow 机器的执行。在写递归函数时，可以假设下一层调用已经能够正确返回了，即子问题已经解决掉了。此时调用自身函数就像调用其他函数那样，我不管那个函数怎么执行，反正调用之后给我返回了正确的结果。然后基于这个正确的返回，我只需要考虑怎么将其组合获得最终问题的解即可。同时，还需要确保最深一层的逻辑，也就是递归的终止条件争取即可。而这样，中间的所有过程都可以不用考虑。因为不管在中间的哪一层，都是在执行同一份代码，只是数据状态不同。因此，只要保证了一层的结果正确性，那么整个递归过程就是正确的了。")]),s._v(" "),a("p",[s._v("因此，回到第二点。在写递归代码之前一定要先正确地写出递归条件和终止条件。根据写出来的递归公式和终止条件写出来的代码。那么就符合上段话中提到的，只思考第一层和最后一层的思想。")]),s._v(" "),a("p",[s._v("这句话是我从一位那边大佬借鉴来并结合了自己的理解。机器执行递归代码的过程对应的是深度优先的方式，而我们思考递归的过程应该采用广度优先的方式，个人理解也就是在第一层的时候，我先将其子问题都当做得到了正确的解，然后基于这个我解决第一层的问题。解决完之后，我再解决其中一个子问题的过程。其实，我们在画上面的递归树时，采用的比较 nice 的方式也是这样。")])]),s._v(" "),a("li",[a("p",[s._v("碎碎念，来自同一位大佬说的也结合了自己的理解。递归这种编程方式的背后，其实是树和堆栈这两种看似关联不大的数据结构。递归树相当于递归过程的完整示意图，也就是说当递归完成之后，将它的过程画出来之后是递归树那样子的形状。那么，递归树从根节点到树中任意节点的路径，都对应着某个时刻的函数调用链组成的堆栈。递归越深的节点月靠近栈顶，也就越早返回。因此可以说，递归的背后是一颗树，递归的执行过程其实是在这棵树上做深度遍历的过程，每次进入下一层就是压栈，每次退出当前层就是出栈。而所有入栈出栈的过程就形成了我们上面说的递归树的形态。递归树是递归的静态逻辑背景，而当前堆栈的内容是动态运行前景。")]),s._v(" "),a("blockquote",[a("p",[s._v("在计算某个长度为 n 的入栈序列可以有多少中出栈序列和包含 n 个节点的二叉树有多少形状时，这两道题的答案其实是相等就是卡特兰数。这是因为 n 个节点形成的一棵二叉树的后序遍历对应的就是这 n 个节点的出栈顺序（个人理解是后序遍历，不是这位大佬说的中序遍历）。进一步就是说 n 个节点形成的二叉树有 x 棵，那么这 x 棵的后序遍历就对应着 x 种出栈顺序。")])])]),s._v(" "),a("li",[a("p",[s._v("其他")]),s._v(" "),a("p",[s._v("对递归代码进行调试时，可以以下这几种方式：")]),s._v(" "),a("ol",[a("li",[s._v("打印日志发现，递归值；")]),s._v(" "),a("li",[s._v("结合条件断点进行调试。")])]),s._v(" "),a("p",[s._v("另外在数据规模大的情况下请使用非递归代码，使用递归代码很容易造成栈溢出。")])])]),s._v(" "),a("h2",{attrs:{id:"巨人的肩膀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#巨人的肩膀"}},[s._v("#")]),s._v(" 巨人的肩膀")]),s._v(" "),a("ol",[a("li",[s._v("极客时间专栏，王争老师的《数据结构与算法之美》")])])])}),[],!1,null,null,null);a.default=r.exports}}]);