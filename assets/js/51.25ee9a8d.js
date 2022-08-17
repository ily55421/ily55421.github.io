(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{449:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_18-即时编译器的中间表达形式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_18-即时编译器的中间表达形式"}},[s._v("#")]),s._v(" 18 | 即时编译器的中间表达形式")]),s._v(" "),n("p",[s._v("在上一章中，我利用了程序控制流图以及伪代码，来展示即时编译器中基于 profile 的优化。不过，这并非实际的优化过程。")]),s._v(" "),n("h2",{attrs:{id:"_1-中间表达形式-ir"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-中间表达形式-ir"}},[s._v("#")]),s._v(" 1. 中间表达形式（IR）")]),s._v(" "),n("p",[s._v("在编译原理课程中，我们通常将编译器分为前端和后端。其中，前端会对所输入的程序进行词法分析、语法分析、语义分析，然后生成中间表达形式，也就是 IR（Intermediate Representation ）。后端会对 IR 进行优化，然后生成目标代码。")]),s._v(" "),n("p",[s._v("如果不考虑解释执行的话，从 Java 源代码到最终的机器码实际上经过了两轮编译：Java 编译器将 Java 源代码编译成 Java 字节码，而即时编译器则将 Java 字节码编译成机器码。")]),s._v(" "),n("p",[s._v("对于即时编译器来说，所输入的 Java 字节码剥离了很多高级的 Java 语法，而且其采用的基于栈的计算模型非常容易建模。因此，即时编译器并不需要重新进行词法分析、语法分析以及语义分析，而是直接将 Java 字节码作为一种 IR。")]),s._v(" "),n("p",[s._v("不过，Java 字节码本身并不适合直接作为可供优化的 IR。这是因为现代编译器一般采用静态单赋值（Static Single Assignment，SSA）IR。这种 IR 的特点是每个变量只能被赋值一次，而且只有当变量被赋值之后才能使用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\ny = 1;\n\ny = 2;\n\nx = y;\n\n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("举个例子（"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Static_single_assignment_form",target:"_blank",rel:"noopener noreferrer"}},[s._v("来源"),n("OutboundLink")],1),s._v("），上面这段代码所对应的 SSA 形式伪代码是下面这段：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\ny1 = 1;\n\ny2 = 2;\n\nx1 = y2;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("在源代码中，我们可以轻易地发现第一个对 y 的赋值是冗余的，但是编译器不能。传统的编译器需要借助数据流分析（具体的优化叫"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reaching_definition",target:"_blank",rel:"noopener noreferrer"}},[s._v("reaching definition"),n("OutboundLink")],1),s._v("），从后至前依次确认哪些变量的值被覆盖（kill）掉。")]),s._v(" "),n("p",[s._v("不过，如果借助了 SSA IR，编译器则可以通过查找赋值了但是没有使用的变量，来识别冗余赋值。")]),s._v(" "),n("p",[s._v("除此之外，SSA IR 对其他优化方式也有很大的帮助，例如常量折叠（constant folding）、常量传播（constant  propagation）、强度削减（strength reduction）以及死代码删除（dead code elimination）等。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n示例：\n\nx1=4*1024 经过常量折叠后变为 x1=4096\n\nx1=4; y1=x1 经过常量传播后变为 x1=4; y1=4\n\ny1=x1*3 经过强度削减后变为 y1=(x1<<1)+x1\n\nif(2>1){y1=1;}else{y2=1;}经过死代码删除后变为 y1=1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("部分同学可能会手动进行上述优化，以期望能够达到更高的运行效率。实际上，对于这些简单的优化，编译器会代为执行，以便程序员专注于代码的可读性。")]),s._v(" "),n("p",[s._v("SSA IR 会带来一个问题，那便是不同执行路径可能会对同一变量设置不同的值。例如下面这段代码 if 语句的两个分支中，变量 y 分别被赋值为 0 或 1，并且在接下来的代码中读取 y 的值。此时，根据不同的执行路径，所读取到的值也很有可能不同。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nx = ..;\n\nif (x > 0) {\n\n  y = 0;\n\n} else {\n\n  y = 1;\n\n}\n\nx = y;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("为了解决这个问题，我们需要引入一个 Phi 函数的概念，能够根据不同的执行路径选择不同的值。于是，上面这段代码便可以转换为下面这段 SSA 伪代码。这里的 Phi 函数将根据前面两个分支分别选择 y1、y2 的值，并赋值给 y3。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nx1 = ..;\n\nif (x1 > 0) {\n\n  y1 = 0;\n\n} else {\n\n  y2 = 1;\n\n}\n\ny3 = Phi(y1, y2);\n\nx2 = y3;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("总之，即时编译器会将 Java 字节码转换成 SSA IR。更确切的说，是一张包含控制流和数据流的 IR 图，每个字节码对应其中的若干个节点（注意，有些字节码并没有对应的 IR 节点）。然后，即时编译器在 IR 图上面进行优化。")]),s._v(" "),n("p",[s._v("我们可以将每一种优化看成一个独立的图算法，它接收一个 IR 图，并输出经过转换后的 IR 图。整个编译器优化过程便是一个个优化串联起来的。")]),s._v(" "),n("h2",{attrs:{id:"_2-sea-of-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-sea-of-nodes"}},[s._v("#")]),s._v(" 2. Sea-of-nodes")]),s._v(" "),n("p",[s._v("HotSpot 里的 C2 采用的是一种名为 Sea-of-Nodes 的 SSA IR。它的最大特点，便是去除了变量的概念，直接采用变量所指向的值，来进行运算。")]),s._v(" "),n("p",[s._v("在上面这段 SSA 伪代码中，我们使用了多个变量名 x1、x2、y1 和 y2。这在 Sea-of-Nodes 将不复存在。")]),s._v(" "),n("p",[s._v("取而代之的则是对应的值，比如说 Phi(y1, y2) 变成 Phi(0, 1)，后者本身也是一个值，被其他 IR 节点所依赖。正因如此，常量传播在 Sea-of-Nodes 中变成了一个 no-op。")]),s._v(" "),n("p",[s._v("Graal 的 IR 同样也是 Sea-of-Nodes 类型的，并且可以认为是 C2 IR 的精简版本。由于 Graal 的 IR 系统更加容易理解，而且工具支持相对来说也比较全、比较新，所以下面我将围绕着 Graal 的 IR 系统来讲解。")]),s._v(" "),n("p",[s._v("尽管 IR 系统不同，C2 和 Graal 所实现的优化大同小异。对于那小部分不同的地方，它们也在不停地相互“借鉴”。所以你无须担心不通用的问题。")]),s._v(" "),n("p",[s._v("为了方便你理解今天的内容，我将利用 IR 可视化工具"),n("a",{attrs:{href:"http://ssw.jku.at/General/Staff/TW/igv.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ideal Graph Visualizer"),n("OutboundLink")],1),s._v("（IGV），来展示具体的 IR 图。（这里 Ideal 是 C2 中 IR 的名字。）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\npublic static int foo(int count) {\n\n  int sum = 0;\n\n  for (int i = 0; i < count; i++) {\n\n    sum += i;\n\n  }\n\n  return sum;\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("上面这段代码所对应的 IR 图如下所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531144128774-a9c86e.png",alt:"image-20220531144128774"}})]),s._v(" "),n("p",[n("strong",[s._v("IR 图")])]),s._v(" "),n("p",[s._v("这里面，0 号 Start 节点是方法入口，21 号 Return  节点是方法出口。红色加粗线条为控制流，蓝色线条为数据流，而其他颜色的线条则是特殊的控制流或数据流。被控制流边所连接的是固定节点，其他的皆属于浮动节点。若干个顺序执行的节点将被包含在同一个基本块之中，如图中的 B0、B1 等。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531144135972-baaba0.png",alt:"image-20220531144135972"}})]),s._v(" "),n("p",[n("strong",[s._v("基本块直接的控制流关系")])]),s._v(" "),n("p",[s._v("基本块是仅有一个入口和一个出口的指令序列（IR 节点序列）。一个基本块的出口可以和若干个基本块的入口相连接，反之亦然。")]),s._v(" "),n("p",[s._v("在我们的例子中，B0 和 B2 的出口与 B1 的入口连接，代表在执行完 B0 或 B2 后可以跳转至 B1，并继续执行 B1 中的内容。而 B1 的出口则与 B2 和 B3 的入口连接。")]),s._v(" "),n("p",[s._v("可以看到，上面的 IR 图已经没有 sum 或者 i 这样的变量名了，取而代之的是一个个的值，例如源程序中的 i<count  被转换为 10 号 < 节点，其接收两个值，分别为代表 i 的 8 号 Phi 节点，以及代表输入第 0 个参数的 1 号 P(0)  节点。")]),s._v(" "),n("p",[s._v("关于 8 号 Phi 节点，前面讲过，它将根据不同的执行路径选择不同的值。如果是从 5 号 End 节点进入的，则选择常量 0；如果是从 20 号 LoopEnd 节点跳转进入的，则选择 19 号 + 节点。")]),s._v(" "),n("p",[s._v("你可以自己分析一下代表 sum 的 7 号 Phi 节点，根据不同的执行路径都选择了哪些值。")]),s._v(" "),n("p",[s._v("浮动节点的位置并不固定。在编译过程中，编译器需要（多次）计算浮动节点具体的排布位置。这个过程我们称之为节点调度（node scheduling）。")]),s._v(" "),n("p",[s._v("节点调度是根据节点之间的依赖关系来进行的。举个例子，在前面的 IR 图中，10 号 < 节点是 16 号 if  节点用来判断是否跳转的条件，因此它需要排布在 16 号 if 节点（注意这是一个固定节点）之前。同时它又依赖于 8 号 Phi 节点的值以及 1 号 P(0) 节点的值，因此它需要排布在这两个节点之后。")]),s._v(" "),n("p",[s._v("需要注意的是，C2 没有固定节点这一概念，所有的 IR 节点都是浮动节点。它将根据各个基本块头尾之间的控制依赖，以及数据依赖和内存依赖，来进行节点调度。")]),s._v(" "),n("p",[s._v("这里的内存依赖是什么一个概念呢？假设一段程序往内存中存储了一个值，而后又读取同一内存，那么显然程序希望读取到的是所存储的值。即时编译器不能任意调度对同一内存地址的读写，因为它们之间存在依赖关系。")]),s._v(" "),n("p",[s._v("C2 的做法便是将这种时序上的先后记录为内存依赖，并让节点调度算法在进行调度时考虑这些内存依赖关系。Graal 则将内存读写转换成固定节点。由于固定节点存在先后关系，因此无须额外记录内存依赖。")]),s._v(" "),n("h2",{attrs:{id:"_3-gloval-value-numbering"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-gloval-value-numbering"}},[s._v("#")]),s._v(" 3. Gloval Value Numbering")]),s._v(" "),n("p",[s._v("下面介绍一种因 Sea-of-Nodes 而变得非常容易的优化技术 —— Gloval Value Numbering（GVN）。")]),s._v(" "),n("p",[s._v("GVN 是一种发现并消除等价计算的优化技术。举例来说，如果一段程序中出现了多次操作数相同的乘法，那么即时编译器可以将这些乘法并为一个，从而降低输出机器码的大小。如果这些乘法出现在同一执行路径上，那么 GVN 还将省下冗余的乘法操作。")]),s._v(" "),n("p",[s._v("在 Sea-of-Nodes 中，由于只存在值的概念，因此 GVN 算法将非常简单：如果一个浮动节点本身不存在内存副作用（由于 GVN  可能影响节点调度，如果有内存副作用的话，那么将引发一些源代码中不可能出现的情况）  ，那么即时编译器只需判断该浮动节点是否与已存在的浮动节点的类型相同，所输入的 IR 节点是否一致，便可以将这两个浮动节点归并成一个。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\npublic static int foo(int a, int b) {\n\n    int sum = a * b;\n\n    if (a > 0) {\n\n        sum += a * b;\n\n    }\n\n    if (b > 0) {\n\n        sum += a * b;\n\n    }\n\n    return sum;\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("我们来看一个实际的案例。在上面这段代码中，如果 a 和 b 都大于 0，那么我们需要做三次乘法。通过 GVN 之后，我们只会在 B0 中做一次乘法，并且在接下来的代码中直接使用乘法的结果，也就是 4 号 * 节点所代表的值。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531144147285-128e57.png",alt:"image-20220531144147285"}})]),s._v(" "),n("p",[s._v("我们可以将 GVN 理解为在 IR 图上的公共子表达式消除（Common Subexpression Elimination，CSE）。")]),s._v(" "),n("p",[s._v("这两者的区别在于，GVN 直接比较值的相同与否，而 CSE 则是借助词法分析器来判断两个表达式相同与否。因此，在不少情况下，CSE 还需借助常量传播来达到消除的效果。")]),s._v(" "),n("h2",{attrs:{id:"总结与实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结与实践"}},[s._v("#")]),s._v(" 总结与实践")]),s._v(" "),n("p",[s._v("今天我介绍了即时编译器的内部构造。")]),s._v(" "),n("p",[s._v("即时编译器将所输入的 Java 字节码转换成 SSA IR，以便更好地进行优化。")]),s._v(" "),n("p",[s._v("具体来说，C2 和 Graal 采用的是一种名为 Sea-of-Nodes 的 IR，其特点用 IR 节点来代表程序中的值，并且将源程序中基于变量的计算转换为基于值的计算。")]),s._v(" "),n("p",[s._v("此外，我还介绍了 C2 和 Graal 的 IR 的可视化工具 IGV，以及基于 IR 的优化 GVN。")]),s._v(" "),n("p",[s._v("今天的实践环节，你可以尝试使用 IGV 来查看上一篇实践环节中的代码的具体编译过程。")]),s._v(" "),n("p",[s._v("你可以通过"),n("a",{attrs:{href:"https://github.com/oracle/graal/releases/tag/idealgraphvisualizer-543",target:"_blank",rel:"noopener noreferrer"}},[s._v("该页面"),n("OutboundLink")],1),s._v("下载当前版本的 IGV。解压后，可运行脚本位于 bin/idealgraphvisualizer 中。IGV 启动完成后，你可以通过下述指令将 IR 图打印至 IGV 中。（需附带 Graal 编译器的 Java 10 或以上版本。）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n// java -XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler -XX:CompileCommand='dontinline,CompilationTest::hash' -Dgraal.Dump=:3 -Dgraal.MethodFilter='CompilationTest.hash' -Dgraal.OptDeoptimizationGrouping=false CompilationTest\n\npublic class CompilationTest {\n\n  public static int hash(Object input) {\n\n    if (input instanceof Exception) {\n\n      return System.identityHashCode(input);\n\n    } else {\n\n      return input.hashCode();\n\n    }\n\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n\n    for (int i = 0; i < 500000; i++) {\n\n      hash(i);\n\n    }\n\n    Thread.sleep(2000);\n\n  }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h2",{attrs:{id:"精选留言-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#精选留言-4"}},[s._v("#")]),s._v(" 精选留言(4)")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("MissSunda...")]),s._v(" "),n("p",[s._v("2018-12-09")]),s._v(" "),n("p",[s._v("3")]),s._v(" "),n("p",[s._v("看不太懂。哈哈哈...可能基础还不到这个水平吧，多看多思考吧。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("ext4")]),s._v(" "),n("p",[s._v("2018-08-31")]),s._v(" "),n("p",[s._v("2")]),s._v(" "),n("p",[s._v("除了你上面提到的内存依赖，我看到C2的ideal graph里面还有一种依赖叫做I/O dependency，这个在Graal的graph里似乎也没有了。可以解释一下C2的这个I/O  dependency是做什么的，以及Graal是如何替代这种依赖的表示的么？")]),s._v(" "),n("p",[s._v("作者回复: 首先这些dependency都是为了scheduling服务的，也就是把图序列化为指令序列，图节点中的相互依赖会让它们拥有先后关系。")]),s._v(" "),n("p",[s._v("个人理解哈，原本的IO dependency就是IO顺序，Cliff Click大神的论文中说的是没有内存映射的IO访问。现在C2应该用来泛指非内存访问的JVM状态。")]),s._v(" "),n("p",[s._v("Graal里这种额外的依赖关系都是用控制流先后顺序来表达的。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("likun")]),s._v(" "),n("p",[s._v("2018-10-22")]),s._v(" "),n("p",[s._v("你好 我这边找不到bebug版本的jdk10，好像无法查看ir图")]),s._v(" "),n("p",[s._v("作者回复: 导出Graal IR不用debug版本的JDK")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("code-arti...")]),s._v(" "),n("p",[s._v("2018-09-03")]),s._v(" "),n("p",[s._v("IR图有点看不懂。基本块是根据什么原则划分的？ 有些块有start,begin, end等等，有些块却没有？ 为什么GVN代码中，都是判断a,b是否大于0，图中B3来了一个Merge节点?")]),s._v(" "),n("p",[s._v("作者回复: 先说一下，这个是Graal的IR。")]),s._v(" "),n("p",[s._v("基本块的划分规则是根据其定义来的，即最长的，顺序执行的节点集。")]),s._v(" "),n("p",[s._v("start begin end是为了标注基本块的起始和结尾，便于优化，没有其他实际意义。")]),s._v(" "),n("p",[s._v("merge节点可以看成控制流交汇的节点，在Graal里就是用来挂phi节点的。最后有两个return而没有merge，实际上是另外一个优化code duplicati，将原本的merge优化掉，生成两条独立程序路径。在这两条路径中，b的值是唯一的，而不是一个phi方法。")])])}),[],!1,null,null,null);n.default=t.exports}}]);