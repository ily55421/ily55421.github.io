(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{672:function(s,a,n){"use strict";n.r(a);var e=n(0),i=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_16-即时编译-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-即时编译-上"}},[s._v("#")]),s._v(" 16 | 即时编译（上）")]),s._v(" "),a("p",[s._v("在专栏的第一篇中，我曾经简单地介绍过即时编译。这是一项用来提升应用程序运行效率的技术。通常而言，代码会先被 Java 虚拟机解释执行，之后反复执行的热点代码则会被即时编译成为机器码，直接运行在底层硬件之上。")]),s._v(" "),a("p",[s._v("今天我们便来详细剖析一下 Java 虚拟机中的即时编译。")]),s._v(" "),a("h2",{attrs:{id:"分层编译模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分层编译模式"}},[s._v("#")]),s._v(" 分层编译模式")]),s._v(" "),a("p",[s._v("HotSpot 虚拟机包含多个即时编译器 C1、C2 和 Graal。")]),s._v(" "),a("p",[s._v("其中，Graal 是一个实验性质的即时编译器，可以通过参数 -XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler 启用，并且替换 C2。")]),s._v(" "),a("p",[s._v("在 Java 7 以前，我们需要根据程序的特性选择对应的即时编译器。对于执行时间较短的，或者对启动性能有要求的程序，我们采用编译效率较快的 C1，对应参数 -client。")]),s._v(" "),a("p",[s._v("对于执行时间较长的，或者对峰值性能有要求的程序，我们采用生成代码执行效率较快的 C2，对应参数 -server。")]),s._v(" "),a("p",[s._v("Java 7 引入了分层编译（对应参数 -XX:+TieredCompilation）的概念，综合了 C1 的启动性能优势和 C2 的峰值性能优势。")]),s._v(" "),a("p",[s._v("分层编译将 Java 虚拟机的执行状态分为了五个层次。为了方便阐述，我用“C1 代码”来指代由 C1 生成的机器码，“C2 代码”来指代由 C2 生成的机器码。五个层级分别是：")]),s._v(" "),a("ol",[a("li",[s._v("解释执行；")]),s._v(" "),a("li",[s._v("执行不带 profiling 的 C1 代码；")]),s._v(" "),a("li",[s._v("执行仅带方法调用次数以及循环回边执行次数 profiling 的 C1 代码；")]),s._v(" "),a("li",[s._v("执行带所有 profiling 的 C1 代码；")]),s._v(" "),a("li",[s._v("执行 C2 代码。")])]),s._v(" "),a("p",[s._v("通常情况下，C2 代码的执行效率要比 C1 代码的高出 30% 以上。然而，对于 C1 代码的三种状态，按执行效率从高至低则是 1 层 > 2 层 > 3 层。")]),s._v(" "),a("p",[s._v("其中 1 层的性能比 2 层的稍微高一些，而 2 层的性能又比 3 层高出 30%。这是因为 profiling 越多，其额外的性能开销越大。")]),s._v(" "),a("p",[s._v("这里解释一下，profiling 是指在程序执行过程中，收集能够反映程序执行状态的数据。这里所收集的数据我们称之为程序的 profile。")]),s._v(" "),a("p",[s._v("你可能已经接触过许许多多的 profiler，例如 JDK 附带的 hprof。这些 profiler  大多通过注入（instrumentation）或者 JVMTI 事件来实现的。Java 虚拟机也内置了  profiling。我会在下一篇中具体介绍 Java 虚拟机的 profiling 都在做些什么。")]),s._v(" "),a("p",[s._v("在 5 个层次的执行状态中，1 层和 4 层为终止状态。当一个方法被终止状态编译过后，如果编译后的代码并没有失效，那么 Java 虚拟机是不会再次发出该方法的编译请求的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531143921238-9807da.png",alt:"image-20220531143921238"}})]),s._v(" "),a("p",[s._v("不同的编译路径，图片来源于我之前一篇"),a("a",{attrs:{href:"https://zhengyudi.github.io/2018/03/20/graal-intro/",target:"_blank",rel:"noopener noreferrer"}},[s._v("介绍 Graal 的博客"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("这里我列举了 4 个不同的编译路径（"),a("a",{attrs:{href:"http://cr.openjdk.java.net/~iveresov/tiered/Tiered.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Igor 的演讲"),a("OutboundLink")],1),s._v("列举了更多的编译路径）。通常情况下，热点方法会被 3 层的 C1 编译，然后再被 4 层的 C2 编译。")]),s._v(" "),a("p",[s._v("如果方法的字节码数目比较少（如 getter/setter），而且 3 层的 profiling 没有可收集的数据。")]),s._v(" "),a("p",[s._v("那么，Java 虚拟机断定该方法对于 C1 代码和 C2 代码的执行效率相同。在这种情况下，Java 虚拟机会在 3 层编译之后，直接选择用 1 层的 C1 编译。由于这是一个终止状态，因此 Java 虚拟机不会继续用 4 层的 C2 编译。")]),s._v(" "),a("p",[s._v("在 C1 忙碌的情况下，Java 虚拟机在解释执行过程中对程序进行 profiling，而后直接由 4 层的 C2 编译。在 C2 忙碌的情况下，方法会被 2 层的 C1 编译，然后再被 3 层的 C1 编译，以减少方法在 3 层的执行时间。")]),s._v(" "),a("p",[s._v("Java 8 默认开启了分层编译。不管是开启还是关闭分层编译，原本用来选择即时编译器的参数 -client 和 -server 都是无效的。当关闭分层编译的情况下，Java 虚拟机将直接采用 C2。")]),s._v(" "),a("p",[s._v("如果你希望只是用 C1，那么你可以在打开分层编译的情况下使用参数 -XX:TieredStopAtLevel=1。在这种情况下，Java 虚拟机会在解释执行之后直接由 1 层的 C1 进行编译。")]),s._v(" "),a("h2",{attrs:{id:"即时编译的触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#即时编译的触发"}},[s._v("#")]),s._v(" 即时编译的触发")]),s._v(" "),a("p",[s._v("Java 虚拟机是根据方法的调用次数以及循环回边的执行次数来触发即时编译的。前面提到，Java 虚拟机在 0 层、2 层和 3 层执行状态时进行 profiling，其中就包含方法的调用次数和循环回边的执行次数。")]),s._v(" "),a("p",[s._v("这里的循环回边是一个控制流图中的概念。在字节码中，我们可以简单理解为往回跳转的指令。（注意，这并不一定符合循环回边的定义。）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npublic static void foo(Object obj) {\n\n  int sum = 0;\n\n  for (int i = 0; i < 200; i++) {\n\n    sum += i;\n\n  }\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("举例来说，上面这段代码将被编译为下面的字节码。其中，偏移量为 18 的字节码将往回跳至偏移量为 7 的字节码中。在解释执行时，每当运行一次该指令，Java 虚拟机便会将该方法的循环回边计数器加 1。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npublic static void foo(java.lang.Object);\n\n  Code:\n\n     0: iconst_0\n\n     1: istore_1\n\n     2: iconst_0\n\n     3: istore_2\n\n     4: goto 14\n\n     7: iload_1\n\n     8: iload_2\n\n     9: iadd\n\n    10: istore_1\n\n    11: iinc 2, 1\n\n    14: iload_2\n\n    15: sipush 200\n\n    18: if_icmplt 7\n\n    21: return\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("在即时编译过程中，我们会识别循环的头部和尾部。在上面这段字节码中，循环的头部是偏移量为 14 的字节码，尾部为偏移量为 11 的字节码。")]),s._v(" "),a("p",[s._v("循环尾部到循环头部的控制流边就是真正意义上的循环回边。也就是说，C1 将在这个位置插入增加循环回边计数器的代码。")]),s._v(" "),a("p",[s._v("解释执行和 C1 代码中增加循环回边计数器的位置并不相同，但这并不会对程序造成影响。")]),s._v(" "),a("p",[s._v("实际上，Java 虚拟机并不会对这些计数器进行同步操作，因此收集而来的执行次数也并非精确值。不管如何，即时编译的触发并不需要非常精确的数值。只要该数值足够大，就能说明对应的方法包含热点代码。")]),s._v(" "),a("p",[s._v("具体来说，在不启用分层编译的情况下，当方法的调用次数和循环回边的次数的和，超过由参数 -XX:CompileThreshold 指定的阈值时（使用 C1 时，该值为 1500；使用 C2 时，该值为 10000），便会触发即时编译。")]),s._v(" "),a("p",[s._v("当启用分层编译时，Java 虚拟机将不再采用由参数 -XX:CompileThreshold 指定的阈值（该参数失效），而是使用另一套阈值系统。在这套系统中，阈值的大小是动态调整的。")]),s._v(" "),a("p",[s._v("所谓的动态调整其实并不复杂：在比较阈值时，Java 虚拟机会将阈值与某个系数 s 相乘。该系数与当前待编译的方法数目成正相关，与编译线程的数目成负相关。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n系数的计算方法为：\n\ns = queue_size_X / (TierXLoadFeedback * compiler_count_X) + 1\n\n \n\n其中 X 是执行层次，可取 3 或者 4；\n\nqueue_size_X 是执行层次为 X 的待编译方法的数目；\n\nTierXLoadFeedback 是预设好的参数，其中 Tier3LoadFeedback 为 5，Tier4LoadFeedback 为 3；\n\ncompiler_count_X 是层次 X 的编译线程数目。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("在 64 位 Java 虚拟机中，默认情况下编译线程的总数目是根据处理器数量来调整的（对应参数  -XX:+CICompilerCountPerCPU，默认为 true；当通过参数 -XX:+CICompilerCount=N  强制设定总编译线程数目时，CICompilerCountPerCPU 将被设置为 false）。")]),s._v(" "),a("p",[s._v("Java 虚拟机会将这些编译线程按照 1:2 的比例分配给 C1 和 C2（至少各为 1 个）。举个例子，对于一个四核机器来说，总的编译线程数目为 3，其中包含一个 C1 编译线程和两个 C2 编译线程。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n对于四核及以上的机器，总的编译线程的数目为：\n\nn = log2(N) * log2(log2(N)) * 3 / 2\n\n其中 N 为 CPU 核心数目。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("当启用分层编译时，即时编译具体的触发条件如下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n当方法调用次数大于由参数 -XX:TierXInvocationThreshold 指定的阈值乘以系数，或者当方法调用次数大于由参数 -XX:TierXMINInvocationThreshold 指定的阈值乘以系数，并且方法调用次数和循环回边次数之和大于由参数 -XX:TierXCompileThreshold 指定的阈值乘以系数时，便会触发 X 层即时编译。\n\n \n\n触发条件为：\n\ni > TierXInvocationThreshold * s || (i > TierXMinInvocationThreshold * s  && i + b > TierXCompileThreshold * s)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("其中 i 为调用次数，b 为循环回边次数。")]),s._v(" "),a("h2",{attrs:{id:"osr-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osr-编译"}},[s._v("#")]),s._v(" OSR 编译")]),s._v(" "),a("p",[s._v("可以看到，决定一个方法是否为热点代码的因素有两个：方法的调用次数、循环回边的执行次数。即时编译便是根据这两个计数器的和来触发的。为什么 Java 虚拟机需要维护两个不同的计数器呢？")]),s._v(" "),a("p",[s._v("实际上，除了以方法为单位的即时编译之外，Java 虚拟机还存在着另一种以循环为单位的即时编译，叫做 On-Stack-Replacement（OSR）编译。循环回边计数器便是用来触发这种类型的编译的。")]),s._v(" "),a("p",[s._v("OSR 实际上是一种技术，它指的是在程序执行过程中，动态地替换掉 Java 方法栈桢，从而使得程序能够在非方法入口处进行解释执行和编译后的代码之间的切换。事实上，去优化（deoptimization）采用的技术也可以称之为 OSR。")]),s._v(" "),a("p",[s._v("在不启用分层编译的情况下，触发 OSR 编译的阈值是由参数 -XX:CompileThreshold 指定的阈值的倍数。")]),s._v(" "),a("p",[s._v("该倍数的计算方法为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n(OnStackReplacePercentage - InterpreterProfilePercentage)/100\n\n \n\n其中 -XX:InterpreterProfilePercentage 的默认值为 33，当使用 C1 时 -XX:OnStackReplacePercentage 为 933，当使用 C2 时为 140。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("也就是说，默认情况下，C1 的 OSR 编译的阈值为 13500，而 C2 的为 10700。")]),s._v(" "),a("p",[s._v("在启用分层编译的情况下，触发 OSR 编译的阈值则是由参数 -XX:TierXBackEdgeThreshold 指定的阈值乘以系数。")]),s._v(" "),a("p",[s._v("OSR 编译在正常的应用程序中并不多见。它只在基准测试时比较常见，因此并不需要过多了解。")]),s._v(" "),a("h2",{attrs:{id:"总结与实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结与实践"}},[s._v("#")]),s._v(" 总结与实践")]),s._v(" "),a("p",[s._v("今天我详细地介绍了 Java 虚拟机中的即时编译。")]),s._v(" "),a("p",[s._v("从 Java 8 开始，Java 虚拟机默认采用分层编译的方式。它将执行分为五个层次，分为为 0 层解释执行，1 层执行没有  profiling 的 C1 代码，2 层执行部分 profiling 的 C1 代码，3 层执行全部 profiling 的 C1 代码，和 4 层执行 C2 代码。")]),s._v(" "),a("p",[s._v("通常情况下，方法会首先被解释执行，然后被 3 层的 C1 编译，最后被 4 层的 C2 编译。")]),s._v(" "),a("p",[s._v("即时编译是由方法调用计数器和循环回边计数器触发的。在使用分层编译的情况下，触发编译的阈值是根据当前待编译的方法数目动态调整的。")]),s._v(" "),a("p",[s._v("OSR 是一种能够在非方法入口处进行解释执行和编译后代码之间切换的技术。OSR 编译可以用来解决单次调用方法包含热循环的性能优化问题。")]),s._v(" "),a("p",[s._v("今天的实践环节，你可以使用参数 -XX:+PrintCompilation 来打印你项目中的即时编译情况。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n     88   15       3       CompilationTest::foo (16 bytes)\n\n     88   16       3       java.lang.Integer::valueOf (32 bytes)\n\n     88   17       4       CompilationTest::foo (16 bytes)\n\n     88   18       4       java.lang.Integer::valueOf (32 bytes)\n\n     89   15       3       CompilationTest::foo (16 bytes)   made not entrant\n\n     89   16       3       java.lang.Integer::valueOf (32 bytes)   made not entrant\n\n     90   19 %     3       CompilationTest::main @ 5 (33 bytes)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("简单解释一下该参数的输出：第一列是时间，第二列是 Java 虚拟机维护的编译 ID。")]),s._v(" "),a("p",[s._v("接下来是一系列标识，包括 %（是否 OSR 编译），s（是否 synchronized  方法），！（是否包含异常处理器），b（是否阻塞了应用线程，可了解一下参数 -Xbatch），n（是否为 native  方法）。再接下来则是编译层次，以及方法名。如果是 OSR 编译，那么方法名后面还会跟着 @以及循环所在的字节码。")]),s._v(" "),a("p",[s._v('当发生去优化时，你将看到之前出现过的编译，不过被标记了“made not entrant"。它表示该方法不能再被进入。')]),s._v(" "),a("p",[s._v("当 Java 虚拟机检测到所有的线程都退出该编译后的“made not entrant”时，会将该方法标记为“made zombie”，此时可以回收这块代码所占据的空间了。")]),s._v(" "),a("h2",{attrs:{id:"信-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信-19"}},[s._v("#")]),s._v(" 信(19)")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("godtrue")]),s._v(" "),a("p",[s._v("2018-08-28")]),s._v(" "),a("p",[s._v("11")]),s._v(" "),a("p",[s._v("有点费解，不过还好又明白了一些东西，小结如下：\n1:即时编译-直接将Java字节码编译成机器码，运行在底层硬件之上，这么玩是为了提高代码的执行效率，通俗点就是能使代码跑的更快一些")]),s._v(" "),a("p",[s._v("2:即时编译的触发点是热点代码，即  即时编译仅针对热点代码来触发，热点代码是通过方法的调用次数或者回边循环的次数来标示的，这里也侧面反映出来即时编译是针对方法块的，有个疑问❓为什么不把所有代码都即时编译一下呢？这样程序的执行效率不是更快吗？为什么还分热点非热点呢？")]),s._v(" "),a("p",[s._v("3:分层编译的设计也有点奇怪，为什么要这样呢？使用最快的编译代码编译器编译的代码不是更好吗？")]),s._v(" "),a("p",[s._v("4:解释执行-将Java字节码一段一段的编译成机器码在底层硬件上运行，即时编译是一个相对解释执行而言的概念，它将热点代码先编译成机器码缓存起来，在解释执行字节码的时候判断出已经缓存起来了就不在编译直接获取执行就可以了")]),s._v(" "),a("p",[s._v("作者回复: 2. 即时编译是以方法为单位的。动态编译比较耗时，如果花了大量CPU资源编译出来的机器码运行不了几次，就很浪费了。")]),s._v(" "),a("p",[s._v("\\3. 机器码越快，需要的编译时间就越长。分层编译是一种折衷的方式，既能够满足部分不那么热的代码能够在短时间内编译完成，也能满足很热的代码能够拥有最好的优化。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("哇！怎么这...")]),s._v(" "),a("p",[s._v("2018-12-14")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("老师，-XX:+PrintCompilation看到的信息都是及时编译的结果吗，还是说包含了及时编译（C1 C2）和解释编译的结果，有没其他查看代码里即时编译的其他相关文档")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("逆流的鱼")]),s._v(" "),a("p",[s._v("2018-11-22")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("疑问:即时编译之后的机器码和 native 方法是不是可以等同，这样是不是他俩都是占用jvm的内存和线程资源，而具体的Java程序只是持有机器码方法和native方法的引用，具体Java程序的线程调用时也是再委托给JVM 执行")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("槛外人")]),s._v(" "),a("p",[s._v("2018-11-06")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("为什么一块代码会被2层编译后还会被3、4层编译？不能某一层编译就完了吗？")]),s._v(" "),a("p",[s._v("作者回复: 其中一个原因是快速地收集profile，所以会用2 3层编译后的代码，既能够高效运行，也能够收集最终用来4层编译的profile")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("大场镇车王")]),s._v(" "),a("p",[s._v("2018-08-27")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("请问带所有profiling是什么意思 所有是个什么概念")]),s._v(" "),a("p",[s._v("作者回复: 下篇会讲。主要有分支跳转指令的branch profile，和类型相关指令的type profile。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("郑杰")]),s._v(" "),a("p",[s._v("2018-08-27")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("能说下及时编译的结果是什么样的吗，然后他是怎么跟解释执行一起运行的")]),s._v(" "),a("p",[s._v("作者回复: 编译结果就是二进制码，下一篇有具体示例。解释执行遇到方法调用时，JVM会判断目标方法是否被编译。如果是，就跳转至编译好的二进制码中。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("泰格杨")]),s._v(" "),a("p",[s._v("2018-08-27")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("去优化是啥意思？")]),s._v(" "),a("p",[s._v("作者回复: 就是从执行机器码切换回解释执行，下一篇会详细介绍。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Geek_75b4c...")]),s._v(" "),a("p",[s._v("2019-04-11")]),s._v(" "),a("p",[s._v("还是有点不懂，即时编译是在程序运行的时候触发？解释编译是指我们普通的java文件被编译class文件的内容？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("未知")]),s._v(" "),a("p",[s._v("2019-03-23")]),s._v(" "),a("p",[s._v("每次看都有收获。第三遍。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Geek_98716...")]),s._v(" "),a("p",[s._v("2018-10-20")]),s._v(" "),a("p",[s._v("老师，问下，中止状态是什么意思？")]),s._v(" "),a("p",[s._v("作者回复: 这里的上下文是在讲编译层次吧？指的是到了1层或者4层之后，就不再就同一个方法触发新的编译请求，除非是OSR编译或者已被去优化")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("夜行观星")]),s._v(" "),a("p",[s._v("2018-10-01")]),s._v(" "),a("p",[s._v("看了分层，还看封面，老师真的用心")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("vick")]),s._v(" "),a("p",[s._v("2018-09-26")]),s._v(" "),a("p",[s._v("请教两个问题：\n\\1. 解释执行如果发现该方法还没有被编译，是否就是触发即时编译生成二进制码去执行？\n\\2. 一个方法被即时编译成二进制码后，程序运行期间是否就可以无限循环利用之前编译的机器码去执行了，会有需要再重新编译的情况吗？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Leon Wong")]),s._v(" "),a("p",[s._v("2018-09-18")]),s._v(" "),a("p",[s._v("小结一下：")]),s._v(" "),a("p",[s._v("分层编译的引入是为了让即时编译更具备灵性，使得虚拟机可以根据量化的实际情况以及相应的算法动态选择执行代码的编译路径。分层编译是否开启，决定了编译器的执行阈值是否动态化。")]),s._v(" "),a("p",[s._v("根据两种不同的计数器（方法调用计数器和循环回边的执行次数计数器），虚拟机有不同的考量，基于方法层面的优化，会使用方法调用计数器作为主要依据，而基于循环层面的，则使用循环回边计数器作为主要依据。")]),s._v(" "),a("p",[s._v("由此引入了OSR技术，即一种能够替换正在运行函数的栈帧的技术。其目的在于能让执行引擎能在不同的优化层次间来回切换，并以更细粒度（循环）的形式实现之。为了平衡启动性能与峰值性能，OSR可以实现低层次优化往高层次优化的迁移；为了去优化以及方便获取调试信息，OSR可以实现高层次优化往低层次迁移。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Leon Wong")]),s._v(" "),a("p",[s._v("2018-09-17")]),s._v(" "),a("p",[s._v("有个小问题，1、4层是终止（接受）状态的前提是，您的五层应该从0开始，到4层结束，但是您现在1层开始，5层结束，那么终止状态应该是2层和5层。")]),s._v(" "),a("p",[s._v("作者回复: 对的，我原稿里是从0开始，可能MD语法给识别错了。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("code-arti...")]),s._v(" "),a("p",[s._v("2018-08-30")]),s._v(" "),a("p",[s._v("”前面提到，Java 虚拟机在 0 层、2 层和 3 层执行状态时进行 profiling”\n第0层是解释执行，前面没说带profiling啊？ 前面只列出第2，3层带profiling. 这里会不会笔误？")]),s._v(" "),a("p",[s._v("作者回复: 多谢指出！")]),s._v(" "),a("p",[s._v("解释执行是带profiling的。最开始列2 3层时明确标注带profiling，是为了区分1，2，3层。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Desire")]),s._v(" "),a("p",[s._v("2018-08-28")]),s._v(" "),a("p",[s._v("请问打印出！表示什么意思  n表示native")]),s._v(" "),a("p",[s._v("作者回复: 是否包含异常处理器")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("魏春河")]),s._v(" "),a("p",[s._v("2018-08-28")]),s._v(" "),a("p",[s._v("我记得前面提到过CompileThreshold 默认是15，今天怎么成1500了？")]),s._v(" "),a("p",[s._v("作者回复: 15应该是反射调用从本地实现切换为动态实现吧。这里的1500是即时编译的。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("杨春鹏")]),s._v(" "),a("p",[s._v("2018-08-28")]),s._v(" "),a("p",[s._v("Java中的即时编译器，是不是重新将java代码编译成机器码，并没有使用class文件？")]),s._v(" "),a("p",[s._v("作者回复: 确切地说，即时编译器将加载进VM中的类的某个方法所对应的byte数组编译为机器码。你也可以理解为从class文件到机器码。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("公号-代码...")]),s._v(" "),a("p",[s._v("2018-08-27")]),s._v(" "),a("p",[s._v("请问即时编译的对象是方法级还是语句块级？")]),s._v(" "),a("p",[s._v("作者回复: 一般都是方法级。")]),s._v(" "),a("p",[s._v("OSR编译会拿热循环作为编译对象。")])])}),[],!1,null,null,null);a.default=i.exports}}]);