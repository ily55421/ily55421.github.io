(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{432:function(s,n,a){"use strict";a.r(n);var e=a(0),v=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_05-jvm是如何执行方法调用的-下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_05-jvm是如何执行方法调用的-下"}},[s._v("#")]),s._v(" 05 | JVM是如何执行方法调用的？（下）")]),s._v(" "),n("p",[s._v("我在读博士的时候，最怕的事情就是被问有没有新的 Idea。有一次我被老板问急了，就随口说了一个。")]),s._v(" "),n("p",[s._v("这个 Idea 究竟是什么呢，我们知道，设计模式大量使用了虚方法来实现多态。但是虚方法的性能效率并不高，所以我就说，是否能够在此基础上写篇文章，评估每一种设计模式因为虚方法调用而造成的性能开销，并且在文章中强烈谴责一下？")]),s._v(" "),n("p",[s._v("当时呢，我老板教的是一门高级程序设计的课，其中有好几节课刚好在讲设计模式的各种好处。所以，我说完这个 Idea，就看到老板的神色略有不悦了，脸上写满了“小郑啊，你这是舍本逐末啊”，于是，我就连忙挽尊，说我是开玩笑的。")]),s._v(" "),n("p",[s._v("在这里呢，我犯的错误其实有两个。第一，我不应该因为虚方法的性能效率，而放弃良好的设计。第二，通常来说，Java 虚拟机中虚方法调用的性能开销并不大，有些时候甚至可以完全消除。第一个错误是原则上的，这里就不展开了。至于第二个错误，我们今天便来聊一聊  Java 虚拟机中虚方法调用的具体实现。")]),s._v(" "),n("p",[s._v("首先，我们来看一个模拟出国边检的小例子。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nabstract class Passenger {\n\n  abstract void passThroughImmigration();\n\n  @Override\n\n  public String toString() { ... }\n\n}\n\nclass ForeignerPassenger extends Passenger {\n\n\t @Override\n\n \tvoid passThroughImmigration() { /* 进外国人通道 */ }\n\n}\n\nclass ChinesePassenger extends Passenger {\n\n  @Override\n\n  void passThroughImmigration() { /* 进中国人通道 */ }\n\n  void visitDutyFreeShops() { /* 逛免税店 */ }\n\n}\n\n \n\nPassenger passenger = ...\n\npassenger.passThroughImmigration();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("这里我定义了一个抽象类，叫做 Passenger，这个类中有一个名为 passThroughImmigration 的抽象方法，以及重写自 Object 类的 toString 方法。")]),s._v(" "),n("p",[s._v("然后，我将 Passenger 粗暴地分为两种：ChinesePassenger 和 ForeignerPassenger。")]),s._v(" "),n("p",[s._v("两个类分别实现了 passThroughImmigration 这个方法，具体来说，就是中国人走中国人通道，外国人走外国人通道。由于咱们储蓄较多，所以我在  ChinesePassenger 这个类中，还特意添加了一个叫做 visitDutyFreeShops 的方法。")]),s._v(" "),n("p",[s._v("那么在实际运行过程中，Java 虚拟机是如何高效地确定每个 Passenger 实例应该去哪条通道的呢？我们一起来看一下。")]),s._v(" "),n("h2",{attrs:{id:"_1-虚方法调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-虚方法调用"}},[s._v("#")]),s._v(" 1. 虚方法调用")]),s._v(" "),n("p",[s._v("在上一篇中我曾经提到，Java 里所有非私有实例方法调用都会被编译成 invokevirtual 指令，而接口方法调用都会被编译成 invokeinterface 指令。这两种指令，均属于 Java 虚拟机中的虚方法调用。")]),s._v(" "),n("p",[s._v("在绝大多数情况下，Java 虚拟机需要根据调用者的动态类型，来确定虚方法调用的目标方法。这个过程我们称之为动态绑定。那么，相对于静态绑定的非虚方法调用来说，虚方法调用更加耗时。")]),s._v(" "),n("p",[s._v("在 Java 虚拟机中，静态绑定包括用于调用静态方法的 invokestatic 指令，和用于调用构造器、私有实例方法以及超类非私有实例方法的  invokespecial 指令。如果虚方法调用指向一个标记为 final 的方法，那么 Java 虚拟机也可以静态绑定该虚方法调用的目标方法。")]),s._v(" "),n("p",[s._v("Java 虚拟机中采取了一种用空间换取时间的策略来实现动态绑定。它为每个类生成一张方法表，用以快速定位目标方法。那么方法表具体是怎样实现的呢？")]),s._v(" "),n("h2",{attrs:{id:"_2-方法表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法表"}},[s._v("#")]),s._v(" 2. 方法表")]),s._v(" "),n("p",[s._v("在介绍那篇类加载机制的链接部分中，我曾提到类加载的准备阶段，它除了为静态字段分配内存之外，还会构造与该类相关联的方法表。")]),s._v(" "),n("p",[s._v("这个数据结构，便是 Java 虚拟机实现动态绑定的关键所在。下面我将以 invokevirtual 所使用的虚方法表（virtual method  table，vtable）为例介绍方法表的用法。invokeinterface 所使用的接口方法表（interface method  table，itable）稍微复杂些，但是原理其实是类似的。")]),s._v(" "),n("p",[s._v("方法表本质上是一个数组，每个数组元素指向一个当前类及其祖先类中非私有的实例方法。")]),s._v(" "),n("p",[s._v("这些方法可能是具体的、可执行的方法，也可能是没有相应字节码的抽象方法。方法表满足两个特质：其一，子类方法表中包含父类方法表中的所有方法；其二，子类方法在方法表中的索引值，与它所重写的父类方法的索引值相同。")]),s._v(" "),n("p",[s._v("我们知道，方法调用指令中的符号引用会在执行之前解析成实际引用。对于静态绑定的方法调用而言，实际引用将指向具体的目标方法。对于动态绑定的方法调用而言，实际引用则是方法表的索引值（实际上并不仅是索引值）。")]),s._v(" "),n("p",[s._v("在执行过程中，Java 虚拟机将获取调用者的实际类型，并在该实际类型的虚方法表中，根据索引值获得目标方法。这个过程便是动态绑定。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/05/31/image-20220531133609724-5a54cd.png",alt:"image-20220531133609724"}})]),s._v(" "),n("p",[s._v("在我们的例子中，Passenger 类的方法表包括两个方法：")]),s._v(" "),n("ul",[n("li",[s._v("toString")]),s._v(" "),n("li",[s._v("passThroughImmigration，")])]),s._v(" "),n("p",[s._v("它们分别对应 0 号和 1 号。之所以方法表调换了 toString 方法和 passThroughImmigration  方法的位置，是因为 toString 方法的索引值需要与 Object 类中同名方法的索引值一致。为了保持简洁，这里我就不考虑 Object  类中的其他方法。")]),s._v(" "),n("p",[s._v("ForeignerPassenger 的方法表同样有两行。其中，0 号方法指向继承而来的 Passenger 类的 toString 方法。1 号方法则指向自己重写的 passThroughImmigration 方法。")]),s._v(" "),n("p",[s._v("ChinesePassenger 的方法表则包括三个方法，除了继承而来的 Passenger 类的 toString 方法，自己重写的 passThroughImmigration 方法之外，还包括独有的 visitDutyFreeShops 方法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nPassenger passenger = ...\n\npassenger.passThroughImmigration();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这里，Java 虚拟机的工作可以想象为导航员。每当来了一个乘客需要出境，导航员会先问是中国人还是外国人（获取动态类型），然后翻出中国人 /  外国人对应的小册子（获取动态类型的方法表），小册子的第 1 页便写着应该到哪条通道办理出境手续（用 1 作为索引来查找方法表所对应的目标方法）。")]),s._v(" "),n("p",[s._v("实际上，使用了方法表的动态绑定与静态绑定相比，仅仅多出几个内存解引用操作：访问栈上的调用者，读取调用者的动态类型，读取该类型的方法表，读取方法表中某个索引值所对应的目标方法。相对于创建并初始化 Java 栈帧来说，这几个内存解引用操作的开销简直可以忽略不计。")]),s._v(" "),n("p",[s._v("那么我们是否可以认为虚方法调用对性能没有太大影响呢？")]),s._v(" "),n("p",[s._v("其实是不能的，上述优化的效果看上去十分美好，但实际上仅存在于解释执行中，或者即时编译代码的最坏情况中。这是因为即时编译还拥有另外两种性能更好的优化手段：内联缓存（inlining cache）和方法内联（method inlining）。下面我便来介绍第一种内联缓存。")]),s._v(" "),n("h2",{attrs:{id:"_3-内联缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-内联缓存"}},[s._v("#")]),s._v(" 3. 内联缓存")]),s._v(" "),n("p",[s._v("内联缓存是一种加快动态绑定的优化技术。它能够缓存虚方法调用中调用者的动态类型，以及该类型所对应的目标方法。在之后的执行过程中，如果碰到已缓存的类型，内联缓存便会直接调用该类型所对应的目标方法。如果没有碰到已缓存的类型，内联缓存则会退化至使用基于方法表的动态绑定。")]),s._v(" "),n("p",[s._v("在我们的例子中，这相当于导航员记住了上一个出境乘客的国籍和对应的通道，例如中国人，走了左边通道出境。那么下一个乘客想要出境的时候，导航员会先问是不是中国人，是的话就走左边通道。如果不是的话，只好拿出外国人的小册子，翻到第 1 页，再告知查询结果：右边。")]),s._v(" "),n("p",[s._v("在针对多态的优化手段中，我们通常会提及以下三个术语。")]),s._v(" "),n("ol",[n("li",[s._v("单态（monomorphic）指的是仅有一种状态的情况。")]),s._v(" "),n("li",[s._v("多态（polymorphic）指的是有限数量种状态的情况。二态（bimorphic）是多态的其中一种。")]),s._v(" "),n("li",[s._v("超多态（megamorphic）指的是更多种状态的情况。通常我们用一个具体数值来区分多态和超多态。在这个数值之下，我们称之为多态。否则，我们称之为超多态。")])]),s._v(" "),n("p",[s._v("对于内联缓存来说，我们也有对应的单态内联缓存、多态内联缓存和超多态内联缓存。单态内联缓存，顾名思义，便是只缓存了一种动态类型以及它所对应的目标方法。它的实现非常简单：比较所缓存的动态类型，如果命中，则直接调用对应的目标方法。")]),s._v(" "),n("p",[s._v("多态内联缓存则缓存了多个动态类型及其目标方法。它需要逐个将所缓存的动态类型与当前动态类型进行比较，如果命中，则调用对应的目标方法。")]),s._v(" "),n("p",[s._v("一般来说，我们会将更加热门的动态类型放在前面。在实践中，大部分的虚方法调用均是单态的，也就是只有一种动态类型。为了节省内存空间，Java 虚拟机只采用单态内联缓存。")]),s._v(" "),n("p",[s._v("前面提到，当内联缓存没有命中的情况下，Java 虚拟机需要重新使用方法表进行动态绑定。对于内联缓存中的内容，我们有两种选择。一是替换单态内联缓存中的纪录。这种做法就好比 CPU  中的数据缓存，它对数据的局部性有要求，即在替换内联缓存之后的一段时间内，方法调用的调用者的动态类型应当保持一致，从而能够有效地利用内联缓存。")]),s._v(" "),n("p",[s._v("因此，在最坏情况下，我们用两种不同类型的调用者，轮流执行该方法调用，那么每次进行方法调用都将替换内联缓存。也就是说，只有写缓存的额外开销，而没有用缓存的性能提升。")]),s._v(" "),n("p",[s._v("另外一种选择则是劣化为超多态状态。这也是 Java 虚拟机的具体实现方式。处于这种状态下的内联缓存，实际上放弃了优化的机会。它将直接访问方法表，来动态绑定目标方法。与替换内联缓存纪录的做法相比，它牺牲了优化的机会，但是节省了写缓存的额外开销。")]),s._v(" "),n("p",[s._v("具体到我们的例子，如果来了一队乘客，其中外国人和中国人依次隔开，那么在重复使用的单态内联缓存中，导航员需要反复记住上个出境的乘客，而且记住的信息在处理下一乘客时又会被替换掉。因此，倒不如一直不记，以此来节省脑细胞。")]),s._v(" "),n("p",[s._v("虽然内联缓存附带内联二字，但是它并没有内联目标方法。这里需要明确的是，任何方法调用除非被内联，否则都会有固定开销。这些开销来源于保存程序在该方法中的执行位置，以及新建、压入和弹出新方法所使用的栈帧。")]),s._v(" "),n("p",[s._v("对于极其简单的方法而言，比如说 getter/setter，这部分固定开销占据的 CPU 时间甚至超过了方法本身。此外，在即时编译中，方法内联不仅仅能够消除方法调用的固定开销，而且还增加了进一步优化的可能性，我们会在专栏的第二部分详细介绍方法内联的内容。")]),s._v(" "),n("h2",{attrs:{id:"总结与实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结与实践"}},[s._v("#")]),s._v(" 总结与实践")]),s._v(" "),n("p",[s._v("今天我介绍了虚方法调用在 Java 虚拟机中的实现方式。")]),s._v(" "),n("p",[s._v("虚方法调用包括 invokevirtual 指令和 invokeinterface 指令。如果这两种指令所声明的目标方法被标记为 final，那么 Java 虚拟机会采用静态绑定。")]),s._v(" "),n("p",[s._v("否则，Java 虚拟机将采用动态绑定，在运行过程中根据调用者的动态类型，来决定具体的目标方法。")]),s._v(" "),n("p",[s._v("Java 虚拟机的动态绑定是通过方法表这一数据结构来实现的。方法表中每一个重写方法的索引值，与父类方法表中被重写的方法的索引值一致。")]),s._v(" "),n("p",[s._v("在解析虚方法调用时，Java 虚拟机会纪录下所声明的目标方法的索引值，并且在运行过程中根据这个索引值查找具体的目标方法。")]),s._v(" "),n("p",[s._v("Java 虚拟机中的即时编译器会使用内联缓存来加速动态绑定。Java 虚拟机所采用的单态内联缓存将纪录调用者的动态类型，以及它所对应的目标方法。")]),s._v(" "),n("p",[s._v("当碰到新的调用者时，如果其动态类型与缓存中的类型匹配，则直接调用缓存的目标方法。")]),s._v(" "),n("p",[s._v("否则，Java 虚拟机将该内联缓存劣化为超多态内联缓存，在今后的执行过程中直接使用方法表进行动态绑定。")]),s._v(" "),n("p",[s._v("在今天的实践环节，我们来观测一下单态内联缓存和超多态内联缓存的性能差距。为了消除方法内联的影响，请使用如下的命令。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n// Run with: java -XX:CompileCommand='dontinline,*.passThroughImmigration' Passenger\n\npublic abstract class Passenger {\n\n\t abstract void passThroughImmigration();\n\n  public static void main(String[] args) {\n\n  \tPassenger a = new ChinesePassenger();\n\n\tPassenger b = new ForeignerPassenger();\n\n    long current = System.currentTimeMillis();\n\n    for (int i = 1; i <= 2_000_000_000; i++) {\n\n      if (i % 100_000_000 == 0) {\n\n        long temp = System.currentTimeMillis();\n\n        System.out.println(temp - current);\n\n        current = temp;\n\n      }\n\n      Passenger c = (i < 1_000_000_000) ? a : b;\n\n      c.passThroughImmigration();\n\n\t}\n\n  }\n\n}\n\nclass ChinesePassenger extends Passenger {\n\n  @Override void passThroughImmigration() {} \n\n}\n\nclass ForeignerPassenger extends Passenger {\n\n  @Override void passThroughImmigration() {}\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h2",{attrs:{id:"精选留言-53"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#精选留言-53"}},[s._v("#")]),s._v(" 精选留言(53)")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("啊一大狗 置顶")]),s._v(" "),n("p",[s._v("2018-07-31")]),s._v(" "),n("p",[s._v("6")]),s._v(" "),n("p",[s._v("这套课很好，谢谢！")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("Tony")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("42")]),s._v(" "),n("p",[s._v("同提建议，代码使用英文。刚学java基础时，有老师为了便于理解用中文命名。现在都来学jvm，对java很熟悉了，看到中文不仅不会觉得通俗易懂，反而特别别扭。")]),s._v(" "),n("p",[s._v("作者回复: 多谢建议！")]),s._v(" "),n("p",[s._v("原本是英文的，录音的时候觉得老要切换，就给换了。。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("C_love")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("17")]),s._v(" "),n("p",[s._v("提个小建议，能否在代码中都使用英文？毕竟使用中文作对象名不值得提倡")]),s._v(" "),n("p",[s._v("作者回复: 谢谢建议！")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("杨军")]),s._v(" "),n("p",[s._v("2018-08-13")]),s._v(" "),n("p",[s._v("10")]),s._v(" "),n("p",[s._v("一直不太理解一个问题：“Java的动态类型运行期才可知”，在编译期代码写完之后应该就已经确定了吧，比如A是B的子类，“B b = new B();   b= new  A()”这种情况下b的动态类型是A，Java编译器在编译阶段就可以确定啊，为什么说动态类型直到运行期才可知?\n诚心求老师解惑，这个问题对我理解Java的动态绑定机制很关键-.-")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("lxz")]),s._v(" "),n("p",[s._v("2018-08-02")]),s._v(" "),n("p",[s._v("8")]),s._v(" "),n("p",[s._v("建议结合java代码及其对应的字节码来讲解，比如常量池，方法表在字节码中对应的位置，干讲一点印象也没有")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("CHEN")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("8")]),s._v(" "),n("p",[s._v("没用过中文写代码，居然认为中文会编译错误T﹏T\n老师是为了课件方便这样写，自己写作业就改下呗，又没规定要每个字照抄\n[root@localhost cqq]# javac Passenger.java\n[root@localhost cqq]# java Passenger\ncost time : 1167\ncost time : 3156\n[root@localhost cqq]# java -XX:CompileCommand='dontinline,*.exit' Passenger\nCompilerOracle: dontinline *.exit\ncost time : 3709\ncost time : 7557")]),s._v(" "),n("p",[s._v("作者回复: 哈，我以前也认为无法编译，直到有一次我看到一个俄语的方法名。。")]),s._v(" "),n("p",[s._v("另外，如果你用javap -v查看常量池的话，你会发现类名方法名以及方法描述符都是用UTF8来存的。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("godtrue")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("7")]),s._v(" "),n("p",[s._v("1:虚方法\n方法重写的方法，可认为就是虚方法")]),s._v(" "),n("p",[s._v("2:JVM怎么执行虚方法\n通过方法表，一个二维表结构，标示出类的类型、虚方法的序号。当调用虚方法的时候，先确定类型，再根据类型找方法")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("J")]),s._v(" "),n("p",[s._v("2018-12-28")]),s._v(" "),n("p",[s._v("5")]),s._v(" "),n("p",[s._v("win10:\njava -XX:CompileCommand=dontinline,"),n("em",[s._v(".exit Passenger     这样是对的\njava -XX:CompileCommand=‘dontinline,")]),s._v(".exit’ Passenger   这样是错的")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("杨春鹏")]),s._v(" "),n("p",[s._v("2018-07-31")]),s._v(" "),n("p",[s._v("4")]),s._v(" "),n("p",[s._v("关于单态内联缓存中的记录，hotspot采用了超多态。也就是如果该调用者的动态类型不是缓存中的类型的话，直接通过基于方法表来找到具体的目标方法。那么内联缓存中的类型是永久不变，一直是第一次缓存的那个调用者类型吗？")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("吾是锋子")]),s._v(" "),n("p",[s._v("2018-08-14")]),s._v(" "),n("p",[s._v("2")]),s._v(" "),n("p",[s._v("郑老师，您好。有个具体的问题想请教下，String类里面indexOf(String str)调用的是自己类里面indexOf(String str, int  fromIndex)方法，但我自己在测试的时候却发现两个方法的速度有很明显的差异，看字节码也没有发现什么特殊。\n不知道是不是我忽略了什么，希望您能抽空点拨下，感谢！")]),s._v(" "),n("p",[s._v("作者回复: HotSpot里有String.indexOf intrinsic，用了很多向量化指令，所以性能会快很多的。")]),s._v(" "),n("p",[s._v("关于intrinsic的概念，你可以理解为HotSpot识别指定方法后，将其替代为语意等价的高效实现。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("方枪枪")]),s._v(" "),n("p",[s._v("2018-08-01")]),s._v(" "),n("p",[s._v("2")]),s._v(" "),n("p",[s._v("一直不能明确一个问题，执行哪个方法，是不是都是在运行的时候确定的，如果是的话，coding的时候，写一个不存在的方法or传入不存在的参数，编译会报错，那这个合法性的检测，是一个什么逻辑？另外关于方法的确定，对于Java来说，是按照传入的形参确定执行哪个重写的方法，对于 groovy 是按照实际类型确定执行哪个方法，这两个区别在JVM层面是如何实现的？")]),s._v(" "),n("p",[s._v("作者回复: 合法性检测是根据编译器能找到的class文件来判定的。你可以在编译后，移除掉相应的class文件或者库文件，就会出现你所说的不存在的方法的情况了。")]),s._v(" "),n("p",[s._v("第二个问题，在各自的编译器中已经作出区分了。在Java字节码中就只是根据类名，方法名和方法描述符来定位方法的。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("和风暖林")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("2")]),s._v(" "),n("p",[s._v("代码用汉语也挺好的呀。来这都是学jvm的，没有来学编码规范的吧……")]),s._v(" "),n("p",[s._v("作者回复: 哈，多谢支持。不过汉语编程有个问题，没办法区分大小写，因此变量名和类名容易混淆")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("左岸🌸开")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("2")]),s._v(" "),n("p",[s._v("为什么调用超类非私有实例方法会属于静态绑定呢？")]),s._v(" "),n("p",[s._v("作者回复: 通过super关键字来调用父类方法，本意就是想要调用父类的特定方法，而不是根据具体类型决定目标方法。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("加久")]),s._v(" "),n("p",[s._v("2019-01-31")]),s._v(" "),n("p",[s._v("1")]),s._v(" "),n("p",[s._v("任何方法调用除非被内联，否则都会有固定开销。这些开销来源于保存程序在该方法中的执行位置，以及新建、压入和...")]),s._v(" "),n("p",[s._v("命中内联缓存后，不用开辟新的栈帧了？？")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("Rain")]),s._v(" "),n("p",[s._v("2019-01-14")]),s._v(" "),n("p",[s._v("1")]),s._v(" "),n("p",[s._v("一直不太理解一个问题：“Java的动态类型运行期才可知”，在编译期代码写完之后应该就已经确定了吧，比如A是B的子类，“B b = new B(); b= new  A()”这种情况下b的动态类型是A，Java编译器在编译阶段就可以确定啊，为什么说动态类型直到运行期才可知?\n诚心求老师解惑，这个问题对我理解Java的动态绑定机制很关键-.-")]),s._v(" "),n("p",[s._v("@杨军，我的理解是，假设C是B的另外一个子类，你的上述两句代码有可能运行在多线程环境中。假设第二行代码运行之后切换到了另外一个线程中，且b = new C()\n这个情况下，线程再切换到你的那两行代码后面的时候就不一定是A了，刘必须要在运行过程中才能确定了。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("godtrue")]),s._v(" "),n("p",[s._v("2018-08-01")]),s._v(" "),n("p",[s._v("1")]),s._v(" "),n("p",[s._v("3:缓存\n凡是需要提高性能的地方都需要使用，这个方法也是人类经常使用的方式，计算机中使用的也比较多，使用缓存的基本理念是，一将需要的东西提前加工好，二将加工好的东西放在获取速度更快更方便的地方")]),s._v(" "),n("p",[s._v("4:内联缓存\n是JVM为了提高动态绑定或者根据动态的类类型找目标方法的一种方式，这是以空间换时间的优化思路，需要权衡利弊，视场景使用")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("礼貌")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("1")]),s._v(" "),n("p",[s._v("汉语编程？")]),s._v(" "),n("p",[s._v("作者回复: 哈，这个对于VM实现者来说可是feature，毕竟要存储UTF8。不过以后的代码会换到英文的。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("王旭林")]),s._v(" "),n("p",[s._v("2018-07-30")]),s._v(" "),n("p",[s._v("1")]),s._v(" "),n("p",[s._v("老师，打印耗时的System.out.println 用的太多了吧？")]),s._v(" "),n("p",[s._v("作者回复: 你是指课后作业吗？")]),s._v(" "),n("p",[s._v("打印语句每一亿次循环只会运行一次，相对来说并不耗时。")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("Geek_8b249...")]),s._v(" "),n("p",[s._v("2019-05-07")]),s._v(" "),n("p",[s._v("结果：\ninline\n170 // a\n...\n170\n210 // b\n...\n210")]),s._v(" "),n("p",[s._v("dontinline\n360 // a\n...\n360\n420 // b\n...\n420")]),s._v(" "),n("p",[s._v("结果如上，有两个问题\n1、使用内联（inline），执行a的时候用了cache，所以比b快。那为什么不使用内联（dontinline）的时候a还是比b快，不是应该ab一样了吗？\n2、使用内联时候的b（已经退化为超多态）的时间，为什么和不使用内联的a或b时间都不相同？（如果我的问题1无误，则内联b与非内联ab三者时间相同）")]),s._v(" "),n("ul",[n("li")]),s._v(" "),n("p",[s._v("QQ怪")]),s._v(" "),n("p",[s._v("2019-03-16")]),s._v(" "),n("p",[s._v("简单通俗易懂，厉害厉害！")])])}),[],!1,null,null,null);n.default=v.exports}}]);