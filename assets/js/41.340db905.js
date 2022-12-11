(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{639:function(a,s,n){"use strict";n.r(s);var v=n(0),t=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_01-java代码是怎么运行的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-java代码是怎么运行的"}},[a._v("#")]),a._v(" 01 | Java代码是怎么运行的？")]),a._v(" "),s("p",[a._v("我们学院的一位教授之前去美国开会，入境的时候海关官员就问他：既然你会计算机，那你说说你用的都是什么语言吧？")]),a._v(" "),s("p",[a._v("教授随口就答了个 Java。海关一看是懂行的，也就放行了，边敲章还边说他们上学那会学的是 C+。我还特意去查了下，真有叫 C+ 的语言，但是这里海关官员应该指的是 C++。")]),a._v(" "),s("p",[a._v("事后教授告诉我们，他当时差点就问海关，是否知道 Java 和 C++ 在运行方式上的区别。但是又担心海关官员拿他的问题来考别人，也就没问出口。那么，下次你去美国，不幸地被海关官员问这个问题，你懂得如何回答吗？")]),a._v(" "),s("p",[a._v("作为一名 Java 程序员，你应该知道，Java 代码有很多种不同的运行方式。比如说可以在开发工具中运行，可以双击执行 jar 文件运行，也可以在命令行中运行，甚至可以在网页中运行。当然，这些执行方式都离不开 JRE，也就是 Java 运行时环境。")]),a._v(" "),s("p",[a._v("实际上，JRE 仅包含运行 Java 程序的必需组件，包括 Java 虚拟机以及 Java 核心类库等。我们 Java 程序员经常接触到的 JDK（Java 开发工具包）同样包含了 JRE，并且还附带了一系列开发、诊断工具。")]),a._v(" "),s("p",[a._v("然而，运行 C++ 代码则无需额外的运行时。我们往往把这些代码直接编译成 CPU 所能理解的代码格式，也就是机器码。")]),a._v(" "),s("p",[a._v("比如下图的中间列，就是用 C 语言写的 Helloworld 程序的编译结果。可以看到，C 程序编译而成的机器码就是一个个的字节，它们是给机器读的。那么为了让开发人员也能够理解，我们可以用反汇编器将其转换成汇编代码（如下图的最右列所示）。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('; 最左列是偏移；中间列是给机器读的机器码；最右列是给人读的汇编代码\n\n0x00:  55                    push   rbp\n\n0x01:  48 89 e5              mov    rbp,rsp\n\n0x04:  48 83 ec 10           sub    rsp,0x10\n\n0x08:  48 8d 3d 3b 00 00 00  lea    rdi,[rip+0x3b] \n\n                                    ; 加载 "Hello, World!\\n"\n\n0x0f:  c7 45 fc 00 00 00 00  mov    DWORD PTR [rbp-0x4],0x0\n\n0x16:  b0 00                 mov    al,0x0\n\n0x18:  e8 0d 00 00 00        call   0x12\n\n                                    ; 调用 printf 方法\n\n0x1d:  31 c9                 xor    ecx,ecx\n\n0x1f:  89 45 f8              mov    DWORD PTR [rbp-0x8],eax\n\n0x22:  89 c8                 mov    eax,ecx\n\n0x24:  48 83 c4 10           add    rsp,0x10\n\n0x28:  5d                    pop    rbp\n\n0x29:  c3                    ret\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br")])]),s("p",[a._v("既然 C++ 的运行方式如此成熟，那么你有没有想过，为什么 Java 要在虚拟机中运行呢，Java 虚拟机具体又是怎样运行 Java 代码的呢，它的运行效率又如何呢？")]),a._v(" "),s("p",[a._v("今天我便从这几个问题入手，和你探讨一下，Java 执行系统的主流实现以及设计决策。")]),a._v(" "),s("h2",{attrs:{id:"为什么-java-要在虚拟机里运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-java-要在虚拟机里运行"}},[a._v("#")]),a._v(" 为什么 Java 要在虚拟机里运行？")]),a._v(" "),s("p",[a._v("Java 作为一门高级程序语言，它的语法非常复杂，抽象程度也很高。因此，直接在硬件上运行这种复杂的程序并不现实。所以呢，在运行 Java 程序之前，我们需要对其进行一番转换。")]),a._v(" "),s("p",[a._v("这个转换具体是怎么操作的呢？当前的主流思路是这样子的，设计一个面向 Java 语言特性的虚拟机，并通过编译器将 Java  程序转换成该虚拟机所能识别的指令序列，也称 Java 字节码。这里顺便说一句，之所以这么取名，是因为 Java  字节码指令的操作码（opcode）被固定为一个字节。")]),a._v(" "),s("p",[a._v("举例来说，下图的中间列，正是用 Java 写的 Helloworld 程序编译而成的字节码。可以看到，它与 C 版本的编译结果一样，都是由一个个字节组成的。")]),a._v(" "),s("p",[a._v("并且，我们同样可以将其反汇编为人类可读的代码格式（如下图的最右列所示）。不同的是，Java 版本的编译结果相对精简一些。这是因为 Java 虚拟机相对于物理机而言，抽象程度更高。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# 最左列是偏移；中间列是给虚拟机读的机器码；最右列是给人读的代码\n\n0x00:  b2 00 02         getstatic java.lang.System.out\n\n0x03:  12 03            ldc "Hello, World!"\n\n0x05:  b6 00 04         invokevirtual java.io.PrintStream.println\n\n0x08:  b1               return\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("Java 虚拟机可以由硬件实现 [1]，但更为常见的是在各个现有平台（如  Windows_x64、Linux_aarch64）上提供软件实现。这么做的意义在于，一旦一个程序被转换成 Java  字节码，那么它便可以在不同平台上的虚拟机实现里运行。这也就是我们经常说的**“一次编写，到处运行”。**")]),a._v(" "),s("p",[a._v("虚拟机的另外一个好处是它带来了一个"),s("strong",[a._v("托管环境（Managed Runtime）")]),a._v("。这个托管环境能够代替我们处理一些代码中冗长而且容易出错的部分。其中最广为人知的当属自动内存管理与垃圾回收，这部分内容甚至催生了一波垃圾回收调优的业务。")]),a._v(" "),s("p",[a._v("除此之外，托管环境还提供了诸如"),s("strong",[a._v("数组越界、动态类型、安全权限等等的动态检测")]),a._v("，使我们免于书写这些无关业务逻辑的代码。")]),a._v(" "),s("h2",{attrs:{id:"java-虚拟机具体是怎样运行-java-字节码的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-虚拟机具体是怎样运行-java-字节码的"}},[a._v("#")]),a._v(" Java 虚拟机具体是怎样运行 Java 字节码的？")]),a._v(" "),s("p",[a._v("下面我将以标准 JDK 中的 HotSpot 虚拟机为例，从虚拟机以及底层硬件两个角度，给你讲一讲 Java 虚拟机具体是怎么运行 Java 字节码的。")]),a._v(" "),s("p",[a._v("从虚拟机视角来看，执行 Java 代码首先需要将它编译而成的 class 文件加载到 Java 虚拟机中。加载后的 Java 类会被存放于方法区（Method Area）中。实际运行时，虚拟机会执行方法区内的代码。")]),a._v(" "),s("p",[a._v("如果你熟悉 X86 的话，你会发现这和段式内存管理中的代码段类似。而且，Java 虚拟机同样也在内存中划分出堆和栈来存储运行时数据。")]),a._v(" "),s("p",[a._v("不同的是，Java 虚拟机会将栈细分为面向 Java 方法的 Java 方法栈，面向本地方法（用 C++ 写的 native 方法）的本地方法栈，以及存放各个线程执行位置的 PC 寄存器。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531132901706-fd99f2.png",alt:"image-20220531132901706"}})]),a._v(" "),s("p",[a._v("在运行过程中，每当调用进入一个 Java 方法，Java 虚拟机会在当前线程的 Java 方法栈中生成一个栈帧，用以存放局部变量以及字节码的操作数。这个栈帧的大小是提前计算好的，而且 Java 虚拟机不要求栈帧在内存空间里连续分布。")]),a._v(" "),s("p",[a._v("当退出当前执行的方法时，不管是正常返回还是异常返回，Java 虚拟机均会弹出当前线程的当前栈帧，并将之舍弃。")]),a._v(" "),s("p",[a._v("从硬件视角来看，Java 字节码无法直接执行。因此，Java 虚拟机需要将字节码翻译成机器码。")]),a._v(" "),s("p",[a._v("在 HotSpot 里面，上述翻译过程有两种形式：第一种是解释执行，即逐条将字节码翻译成机器码并执行；第二种是即时编译（Just-In-Time compilation，JIT），即将一个方法中包含的所有字节码编译成机器码后再执行。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531132908956-3823c1.png",alt:"image-20220531132908956"}})]),a._v(" "),s("p",[a._v("前者的优势在于无需等待编译，而后者的优势在于实际运行速度更快。HotSpot 默认采用混合模式，综合了解释执行和即时编译两者的优点。它会先解释执行字节码，而后将其中反复执行的热点代码，以方法为单位进行即时编译。")]),a._v(" "),s("h2",{attrs:{id:"java-虚拟机的运行效率究竟是怎么样的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-虚拟机的运行效率究竟是怎么样的"}},[a._v("#")]),a._v(" Java 虚拟机的运行效率究竟是怎么样的？")]),a._v(" "),s("p",[a._v("HotSpot 采用了多种技术来提升启动性能以及峰值性能，刚刚提到的即时编译便是其中最重要的技术之一。")]),a._v(" "),s("p",[a._v("即时编译建立在程序符合二八定律的假设上，也就是百分之二十的代码占据了百分之八十的计算资源。")]),a._v(" "),s("p",[a._v("对于占据大部分的不常用的代码，我们无需耗费时间将其编译成机器码，而是采取解释执行的方式运行；另一方面，对于仅占据小部分的热点代码，我们则可以将其编译成机器码，以达到理想的运行速度。")]),a._v(" "),s("p",[a._v("理论上讲，即时编译后的 Java 程序的执行效率，是可能超过 C++ 程序的。这是因为与静态编译相比，即时编译拥有程序的运行时信息，并且能够根据这个信息做出相应的优化。")]),a._v(" "),s("p",[a._v("举个例子，我们知道虚方法是用来实现面向对象语言多态性的。对于一个虚方法调用，尽管它有很多个目标方法，但在实际运行过程中它可能只调用其中的一个。")]),a._v(" "),s("p",[a._v("这个信息便可以被即时编译器所利用，来规避虚方法调用的开销，从而达到比静态编译的 C++ 程序更高的性能。")]),a._v(" "),s("p",[a._v("为了满足不同用户场景的需要，HotSpot 内置了多个即时编译器：C1、C2 和 Graal。Graal 是 Java 10 正式引入的实验性即时编译器，在专栏的第四部分我会详细介绍，这里暂不做讨论。")]),a._v(" "),s("p",[a._v("之所以引入多个即时编译器，是为了在编译时间和生成代码的执行效率之间进行取舍。C1 又叫做 Client 编译器，面向的是对启动性能有要求的客户端 GUI 程序，采用的优化手段相对简单，因此编译时间较短。")]),a._v(" "),s("p",[a._v("C2 又叫做 Server 编译器，面向的是对峰值性能有要求的服务器端程序，采用的优化手段相对复杂，因此编译时间较长，但同时生成代码的执行效率较高。")]),a._v(" "),s("p",[a._v("从 Java 7 开始，HotSpot 默认采用分层编译的方式：热点方法首先会被 C1 编译，而后热点方法中的热点会进一步被 C2 编译。")]),a._v(" "),s("p",[a._v("为了不干扰应用的正常运行，HotSpot 的即时编译是放在额外的编译线程中进行的。HotSpot 会根据 CPU 的数量设置编译线程的数目，并且按 1:2 的比例配置给 C1 及 C2 编译器。")]),a._v(" "),s("p",[a._v("在计算资源充足的情况下，字节码的解释执行和即时编译可同时进行。编译完成后的机器码会在下次调用该方法时启用，以替换原本的解释执行。")]),a._v(" "),s("h2",{attrs:{id:"总结与实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结与实践"}},[a._v("#")]),a._v(" 总结与实践")]),a._v(" "),s("p",[a._v("今天我简单介绍了 Java 代码为何在虚拟机中运行，以及如何在虚拟机中运行。")]),a._v(" "),s("p",[a._v("之所以要在虚拟机中运行，是因为它提供了可移植性。一旦 Java 代码被编译为 Java 字节码，便可以在不同平台上的 Java 虚拟机实现上运行。此外，虚拟机还提供了一个代码托管的环境，代替我们处理部分冗长而且容易出错的事务，例如内存管理。")]),a._v(" "),s("p",[a._v("Java 虚拟机将运行时内存区域划分为五个部分，分别为方法区、堆、PC 寄存器、Java 方法栈和本地方法栈。Java 程序编译而成的 class 文件，需要先加载至方法区中，方能在 Java 虚拟机中运行。")]),a._v(" "),s("p",[a._v("为了提高运行效率，标准 JDK 中的 HotSpot 虚拟机采用的是一种混合执行的策略。")]),a._v(" "),s("p",[a._v("它会解释执行 Java 字节码，然后会将其中反复执行的热点代码，以方法为单位进行即时编译，翻译成机器码后直接运行在底层硬件之上。")]),a._v(" "),s("p",[a._v("HotSpot 装载了多个不同的即时编译器，以便在编译时间和生成代码的执行效率之间做取舍。")]),a._v(" "),s("p",[a._v("下面我给你留一个小作业，通过观察两个条件判断语句的运行结果，来思考 Java 语言和 Java 虚拟机看待 boolean 类型的方式是否不同。")]),a._v(" "),s("p",[a._v("下载 asmtools.jar  "),s("a",{attrs:{href:"https://wiki.openjdk.java.net/display/CodeTools/asmtools",target:"_blank",rel:"noopener noreferrer"}},[a._v("2"),s("OutboundLink")],1),a._v("  ，并在命令行中运行下述指令（不包含提示符 $）：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ echo \'\n\npublic class Foo {\n\n public static void main(String[] args) {\n\n  boolean flag = true;\n\n  if (flag) System.out.println("Hello, Java!");\n\n  if (flag == true) System.out.println("Hello, JVM!");\n\n }\n\n}\' > Foo.java\n\n$ javac Foo.java\n\n$ java Foo\n\n$ java -cp /path/to/asmtools.jar org.openjdk.asmtools.jdis.Main Foo.class > Foo.jasm.1\n\n$ awk \'NR==1,/iconst_1/{sub(/iconst_1/, "iconst_2")} 1\' Foo.jasm.1 > Foo.jasm\n\n$ java -cp /path/to/asmtools.jar org.openjdk.asmtools.jasm.Main Foo.jasm\n\n$ java Foo\n\n \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br")])]),s("p",[a._v("[1] : https://en.wikipedia.org/wiki/Java_processor")]),a._v(" "),s("h2",{attrs:{id:"信-163"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信-163"}},[a._v("#")]),a._v(" 信(163)")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("jiaobuchon... 置顶")]),a._v(" "),s("p",[a._v("2018-10-14")]),a._v(" "),s("p",[a._v("37")]),a._v(" "),s("p",[a._v("对老师写的那段 awk 不懂得可参考：\nhttps://blog.csdn.net/jiaobuchong/article/details/83037467")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("小名叫大明 置顶")]),a._v(" "),s("p",[a._v("2018-07-26")]),a._v(" "),s("p",[a._v("20")]),a._v(" "),s("p",[a._v("受益匪浅，多谢老师。")]),a._v(" "),s("p",[a._v("请教老师一个问题，网上我没有搜到。")]),a._v(" "),s("p",[a._v("服务器线程数爆满，使用jstack打印线程堆栈信息，想知道是哪类线程数太多，但是堆栈里全是一样的信息且没有任何关键信息，是哪个方法创建的，以及哪个线程池的都看不到。")]),a._v(" "),s("p",[a._v("如何更改打印线程堆栈信息的代码（动态）让其打印线程池信息呢？")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("东方")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("269")]),a._v(" "),s("p",[a._v("jvm把boolean当做int来处理")]),a._v(" "),s("p",[a._v("flag = iconst_1 = true")]),a._v(" "),s("p",[a._v("awk把stackframe中的flag改为iconst_2")]),a._v(" "),s("p",[a._v("if（flag）比较时ifeq指令做是否为零判断，常数2仍为true，打印输出")]),a._v(" "),s("p",[a._v("if（true == flag）比较时if_cmpne做整数比较，iconst_1是否等于flag，比较失败，不再打印输出")]),a._v(" "),s("p",[a._v("作者回复: 字节码高手！")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("かっこいす...")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("64")]),a._v(" "),s("p",[a._v("我想问下，JVM是怎么区别出热点代码和非热点代码的？")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("醉人")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("61")]),a._v(" "),s("p",[a._v("解释执行 执行时才翻译成机器指令，无需保存不占内存。但即时编译类似预编译，编译之后的指令需要保存在内存中，这种方式吃内存，按照二八原则这种混合模式最恰当的，热点代码编译之后放入内存避免重复编译，而其他运行次数较少代码则解释执行，避免占用过多内存")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("CHEN")]),a._v(" "),s("p",[a._v("2018-07-25")]),a._v(" "),s("p",[a._v("57")]),a._v(" "),s("p",[a._v("作业终于做出来~(≧▽≦)/~喜大普奔\nasmtools下载地址：\nhttps://adopt-openjdk.ci.cloudbees.com/view/OpenJDK/job/asmtools/lastSuccessfulBuild/artifact/asmtools-6.0.tar.gz；\n先是在window环境里，awk不能使用，看https://zh.wikipedia.org/wiki/Awk，AWK是一种优良的文本处理工具，Linux及Unix环境中现有的功能最强大的数据处理引擎之一,于是转战Linux，\n[root@localhost cqq]# javac Foo.java\n[root@localhost cqq]# java Foo\nHello,Java\nHello,JVM\n[root@localhost cqq]# java -cp /cqq/asmtools.jar org.openjdk.asmtools.jdis.Main Foo.class>Foo.jasm.1\n[root@localhost cqq]# ls\nasmtools.jar  Foo.class  Foo.jasm.1  Foo.java\n[root@localhost cqq]# vi Foo.jasm.1\n[root@localhost cqq]# awk 'NR==1,/iconst_1/{sub(/iconst_1/,\"iconst_2\")} 1' Foo.jasm.1>Foo.jasm\n[root@localhost cqq]# java -cp /cqq/asmtools.jar org.openjdk.asmtools.jasm.Main Foo.jasm\n[root@localhost cqq]# java Foo\nHello,Java\n结果为啥是这个看点赞第一的高手；\n另外asmtools使用方式还可以这样子：\njava -jar asmtools.jar jdis Foo.class>Foo.jasm.1\njava -jar asmtools.jar jasm Foo.jasm")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("novembersk...")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("56")]),a._v(" "),s("p",[a._v("文中提到虚拟机会把部分热点代码编译成机器码，我有个疑问，为什么不把java代码全部编译成机器码？很多服务端应用发布频率不会太频繁，但是对运行时的性能和吞吐量要求较高。如果发布或启动时多花点时间编译，能够带来运行时的持久性能收益，不是很合适么？")]),a._v(" "),s("p",[a._v("作者回复: 问得好！事实上JVM确实有考虑做AOT (ahead of time compilation) 这种事情。AOT能够在线下将Java字节码编译成机器码，主要是用来解决启动性能不好的问题。")]),a._v(" "),s("p",[a._v("对于这种发布频率不频繁(也就是长时间运行吧？)的程序，其实选择线下编译和即时编译都一样，因为至多一两个小时后该即时编译的都已经编译完成了。另外，即时编译器因为有程序的运行时信息，优化效果更好，也就是说峰值性能更好。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("掌心童话")]),a._v(" "),s("p",[a._v("2018-07-21")]),a._v(" "),s("p",[a._v("31")]),a._v(" "),s("p",[a._v("我只想问，你就没有教授的担忧？万一我拿今天的知识点去问面试者，答不上来咋办？")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("Ryan-Hou")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("24")]),a._v(" "),s("p",[a._v("在为什么Java要在虚拟机里执行这一节您提到，java语法复杂，抽象度高，直接通过硬件来执行不现实，但是同样作为高级语言为什么C++就可以呢？这个理由作为引入虚拟机这个中间层的原因不是很充分吧")]),a._v(" "),s("p",[a._v("作者回复: 多谢指出！这里的直接运行指的是不经过任何转换(编译)，直接在硬件上跑。即便是C++，也不可以直接运行。")]),a._v(" "),s("p",[a._v("C++的策略是直接编译成目标架构的机器码，Java的策略是编译成一个虚拟架构的机器码。这个虚拟架构可以有物理实现(可以搜Java processor)，也可以是软件实现，也就是我们经常接触到的JRE。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("godtrue")]),a._v(" "),s("p",[a._v("2018-07-24")]),a._v(" "),s("p",[a._v("21")]),a._v(" "),s("p",[a._v("1:为什么使用JVM？\n1-1:可以轻松实现Java代码的跨平台执行\n1-2:JVM提供了一个托管平台，提供内存管理、垃圾回收、编译时动态校验等功能\n1-3:使用JVM能够让我们的编程工作更轻松、高效节省公司成本，提示社会化的整体快发效率，我们只关注和业务相关的程序逻辑的编写，其他业务无关但对于编程同样重要的事情交给JVM来处理")]),a._v(" "),s("p",[a._v("2:听完此节的课程的疑惑（之前就没太明白，原期待听完后不再疑惑的）\n2-1:Java源代码怎么就经过编译变成了Java字节码？\n2-2:JVM怎么就把Java字节码加载进JVM内了？先加载那个类的字节码？它怎么定位的？拿到后怎么解析的？不会整个文件放到一个地方吧？使用的时候又是怎么找到的呢？这些感觉还是黑盒\n2-3:JVM将内存区域分成堆和栈，然后又将栈分成pc寄存器、本地方法栈、Java方法栈，有些内存空间是线程可共享的，有些是线程私有的。现在也了解不同的内存区块有不同的用处，不过他们是怎么被划分的哪？为什么是他们，不能再多几种或少几种了吗？共享的内存区和私有的又是怎么控制的哪？")]),a._v(" "),s("p",[a._v("作者回复: 总结得非常细致！\n2-1 其实是这样的，JVM接收字节码，要运行在JVM上只能选择转化为字节码。要是不想在JVM上跑，可以选择直接转化为机器码。")]),a._v(" "),s("p",[a._v("2-2 类加载会在第三篇详细介绍。")]),a._v(" "),s("p",[a._v("2-3 具体的划分都是实现细节。你也可以选择全部冗杂在一起。但是这样子做性能较高，因为线程私有的可以不用同步。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("周仕林")]),a._v(" "),s("p",[a._v("2018-07-23")]),a._v(" "),s("p",[a._v("17")]),a._v(" "),s("p",[a._v("看到有人说热点代码的区别，在git里面涉及到的热点代码有两种算法，基于采样的热点探测和基于计数器的热点探测。一般采用的都是基于计数器的热点探测，两者的优缺点百度一下就知道了。基于计数器的热点探测又有两个计数器，方法调用计数器，回边计数器，他们在C1和C2又有不同的阈值。😂😂")]),a._v(" "),s("p",[a._v("作者回复: 谢谢！")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("尔东")]),a._v(" "),s("p",[a._v("2018-12-30")]),a._v(" "),s("p",[a._v("12")]),a._v(" "),s("p",[a._v("1.Java代码首先编译为class文件，然后通过java虚拟机加载到方法区。Java虚拟机是一个独立的进程，执行方法区的代码。\n2.Java虚拟机把内存分为堆栈两种形式来存储运行时数据，包括线程共有的方法区和堆，以及线程私有的pc计数器，方法栈，naive方法栈\n3.Java虚拟机将字节码翻译成机器码执行的方法有两种，一种是解释执行，即逐条将字节码翻译成机器码并执行；第二种是即时编译，即将一个方法包含的所有字节码编译成机器码后再执行\n4.解释执行的好处是无需等待编译，即时编译的好处是速度更快。这里编译的概念并不是代码编译为字节码，而是字节码编译为机器码，字节码编译为机器码是由java虚拟机在运行程序的时候才会去做的，所以是运行时的开销。热点代码会通过即时编译来执行。\n5.HotSpot内置了多个即时编译器，包括C1、C2和Graal。\n6.Asmtools.jar下载地址https://ci.adoptopenjdk.net/view/Dependencies/job/asmtools/lastSuccessfulBuild/\n7.JVM将Boolean类型看作是int类型，true就是1，false就是0，flag如果改成2第二个判1等式就不成立，所以只有第一个判0等式通过。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("陈树义")]),a._v(" "),s("p",[a._v("2018-07-21")]),a._v(" "),s("p",[a._v("12")]),a._v(" "),s("p",[a._v("asmtools.jar 是在哪里下载的，怎么在给的链接页面没找到。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("ace")]),a._v(" "),s("p",[a._v("2018-08-05")]),a._v(" "),s("p",[a._v("11")]),a._v(" "),s("p",[a._v("最后awk那段分析了下。希望分析正确 也对大家有帮助\n1、NR==1,/iconst_1/ 是用于匹配行 匹配第一行到第一个出现iconst_1的行\n2、{}进行脚本执行。针对第一步中匹配的行执行内置的字符串函数sub 做替换\n3、1 都会被执行。在awk 1被计算为true，表现为默认操作 print $0 也就是打印整行\n整体效果是打印所以文本行，但第一个出现iconst_1的做替换。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("志文")]),a._v(" "),s("p",[a._v("2018-07-22")]),a._v(" "),s("p",[a._v("10")]),a._v(" "),s("p",[a._v("Java 作为一门高级程序语言，它的语法非常复杂，抽象程度非常高，所以不能直接在硬件上执行。所以要引入JAVA虚拟机。\n我觉得理由不充分，JAVA为什么不能像c++一样直接转成机器码呢？从理论上是可以用编译器来实现这个的功能的。问题在于直接像c++那样编译成机器码，就实现不了跨平台了。那么是不是跨平台才是引入JAVA虚拟机的重要原因呢 。请老师解答")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("欲风")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("9")]),a._v(" "),s("p",[a._v("方法区和元空间是一个概念吧，能不能统一说法到jdk8之后的版本～")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("踏雪无痕")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("9")]),a._v(" "),s("p",[a._v("您好，我现在所在的项目经常堆外内存占用非常多，超过总内存的70%，请问一下有没有什么方法能观察一下堆外内存有什么内容？")]),a._v(" "),s("p",[a._v("作者回复: 堆外内存的话，就把JVM当成普通进程来查找内存泄漏。可以看下Google Performance Tools相关资料")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("J")]),a._v(" "),s("p",[a._v("2018-12-25")]),a._v(" "),s("p",[a._v("8")]),a._v(" "),s("p",[a._v("在Windows使用不了awk工具（貌似有代替方案），所以结合其他小伙伴的答案和自己的思考，答案整理如下：\n小作业的过程是：\n1、写Java代码，生成java文件\n2、将java文件编译成class文件(字节码)\n3、执行字节码，输出两个Hello,world!\n4、使用asmtool工具将class文件生成jasm文件\n5、使用awt工具将jasm文件stackframe的flag改为iconst_2\n6、再次使用asmtool工具将jasm文件恢复成class文件\n7、执行字节码，输出一个Hello, world！\n由于Java虚拟机将boolean类型看成0或者1，在步骤5中将源代码中的flag修改成2，于是在步骤7中的运行过程中，if(2)，true,执行输出；if(2 == 1)，结果为false，不执行输出。")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("xianhai")]),a._v(" "),s("p",[a._v("2018-07-21")]),a._v(" "),s("p",[a._v("7")]),a._v(" "),s("p",[a._v("即时编译生成的代码是只保存在内存中吗？会不会写到磁盘上？如果我怀疑优化后的代码有bug，有办法debug吗？")]),a._v(" "),s("ul",[s("li")]),a._v(" "),s("p",[a._v("临风")]),a._v(" "),s("p",[a._v("2018-07-20")]),a._v(" "),s("p",[a._v("7")]),a._v(" "),s("p",[a._v("我跟楼上的novembersky同学一样疑惑，对于性能要求高的web应用，为什么不直接使用即时编译器在启动时全部编译成机器码呢？虽然启动耗时，但是也是可以接受的")]),a._v(" "),s("p",[a._v("作者回复: 通常，对于长时间运行的程序来说，大部分即时编译就发生在前几个小时。")]),a._v(" "),s("p",[a._v("再之后的即时编译主要是一些非热点代码，以及即时编译器中的bug造成的反复去优化重新编译。")])])}),[],!1,null,null,null);s.default=t.exports}}]);