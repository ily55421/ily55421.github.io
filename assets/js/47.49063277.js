(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{445:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_14-java虚拟机是怎么实现synchronized的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-java虚拟机是怎么实现synchronized的"}},[s._v("#")]),s._v(" 14 | Java虚拟机是怎么实现synchronized的？")]),s._v(" "),a("p",[s._v("在 Java 程序中，我们可以利用 synchronized 关键字来对程序进行加锁。它既可以用来声明一个 synchronized 代码块，也可以直接标记静态方法或者实例方法。")]),s._v(" "),a("p",[s._v("当声明 synchronized 代码块时，编译而成的字节码将包含 monitorenter 和 monitorexit  指令。这两种指令均会消耗操作数栈上的一个引用类型的元素（也就是 synchronized 关键字括号里的引用），作为所要加锁解锁的锁对象。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n  public void foo(Object lock) {\n\n    synchronized (lock) {\n\n      lock.hashCode();\n\n    }\n\n  }\n\n  // 上面的 Java 代码将编译为下面的字节码\n\n  public void foo(java.lang.Object);\n\n    Code:\n\n       0: aload_1\n\n       1: dup\n\n       2: astore_2\n\n       3: monitorenter\n\n       4: aload_1\n\n       5: invokevirtual java/lang/Object.hashCode:()I\n\n       8: pop\n\n       9: aload_2\n\n      10: monitorexit\n\n      11: goto          19\n\n      14: astore_3\n\n      15: aload_2\n\n      16: monitorexit\n\n      17: aload_3\n\n      18: athrow\n\n      19: return\n\n    Exception table:\n\n       from    to  target type\n\n           4    11    14   any\n\n          14    17    14   any\n\n \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])]),a("p",[s._v("我在文稿中贴了一段包含 synchronized 代码块的 Java 代码，以及它所编译而成的字节码。你可能会留意到，上面的字节码中包含一个 monitorenter 指令以及多个 monitorexit 指令。这是因为 Java 虚拟机需要确保所获得的锁在正常执行路径，以及异常执行路径上都能够被解锁。")]),s._v(" "),a("p",[s._v("你可以根据我在介绍异常处理时介绍过的知识，对照字节码和异常处理表来构造所有可能的执行路径，看看在执行了 monitorenter 指令之后，是否都有执行 monitorexit 指令。")]),s._v(" "),a("p",[s._v("当用 synchronized 标记方法时，你会看到字节码中方法的访问标记包括  ACC_SYNCHRONIZED。该标记表示在进入该方法时，Java 虚拟机需要进行 monitorenter  操作。而在退出该方法时，不管是正常返回，还是向调用者抛异常，Java 虚拟机均需要进行 monitorexit 操作。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n  public synchronized void foo(Object lock) {\n\n    lock.hashCode();\n\n  }\n\n  // 上面的 Java 代码将编译为下面的字节码\n\n  public synchronized void foo(java.lang.Object);\n\n    descriptor: (Ljava/lang/Object;)V\n\n    flags: (0x0021) ACC_PUBLIC, ACC_SYNCHRONIZED\n\n    Code:\n\n      stack=1, locals=2, args_size=2\n\n         0: aload_1\n\n         1: invokevirtual java/lang/Object.hashCode:()I\n\n         4: pop\n\n         5: return\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("这里 monitorenter 和 monitorexit 操作所对应的锁对象是隐式的。对于实例方法来说，这两个操作对应的锁对象是 this；对于静态方法来说，这两个操作对应的锁对象则是所在类的 Class 实例。")]),s._v(" "),a("p",[s._v("关于 monitorenter 和 monitorexit 的作用，我们可以抽象地理解为每个锁对象拥有一个锁计数器和一个指向持有该锁的线程的指针。")]),s._v(" "),a("p",[s._v("当执行 monitorenter 时，如果目标锁对象的计数器为 0，那么说明它没有被其他线程所持有。在这个情况下，Java 虚拟机会将该锁对象的持有线程设置为当前线程，并且将其计数器加 1。")]),s._v(" "),a("p",[s._v("在目标锁对象的计数器不为 0 的情况下，如果锁对象的持有线程是当前线程，那么 Java 虚拟机可以将其计数器加 1，否则需要等待，直至持有线程释放该锁。")]),s._v(" "),a("p",[s._v("当执行 monitorexit 时，Java 虚拟机则需将锁对象的计数器减 1。当计数器减为 0 时，那便代表该锁已经被释放掉了。")]),s._v(" "),a("p",[s._v("之所以采用这种计数器的方式，是为了允许同一个线程重复获取同一把锁。举个例子，如果一个 Java 类中拥有多个 synchronized  方法，那么这些方法之间的相互调用，不管是直接的还是间接的，都会涉及对同一把锁的重复加锁操作。因此，我们需要设计这么一个可重入的特性，来避免编程里的隐式约束。")]),s._v(" "),a("p",[s._v("说完抽象的锁算法，下面我们便来介绍 HotSpot 虚拟机中具体的锁实现。")]),s._v(" "),a("h2",{attrs:{id:"重量级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重量级锁"}},[s._v("#")]),s._v(" 重量级锁")]),s._v(" "),a("p",[s._v("重量级锁是 Java 虚拟机中最为基础的锁实现。在这种状态下，Java 虚拟机会阻塞加锁失败的线程，并且在目标锁被释放的时候，唤醒这些线程。")]),s._v(" "),a("p",[s._v("Java 线程的阻塞以及唤醒，都是依靠操作系统来完成的。举例来说，对于符合 posix 接口的操作系统（如 macOS 和绝大部分的  Linux），上述操作是通过 pthread  的互斥锁（mutex）来实现的。此外，这些操作将涉及系统调用，需要从操作系统的用户态切换至内核态，其开销非常之大。")]),s._v(" "),a("p",[s._v("为了尽量避免昂贵的线程阻塞、唤醒操作，Java 虚拟机会在线程进入阻塞状态之前，以及被唤醒后竞争不到锁的情况下，进入自旋状态，在处理器上空跑并且轮询锁是否被释放。如果此时锁恰好被释放了，那么当前线程便无须进入阻塞状态，而是直接获得这把锁。")]),s._v(" "),a("p",[s._v("与线程阻塞相比，自旋状态可能会浪费大量的处理器资源。这是因为当前线程仍处于运行状况，只不过跑的是无用指令。它期望在运行无用指令的过程中，锁能够被释放出来。")]),s._v(" "),a("p",[s._v("我们可以用等红绿灯作为例子。Java  线程的阻塞相当于熄火停车，而自旋状态相当于怠速停车。如果红灯的等待时间非常长，那么熄火停车相对省油一些；如果红灯的等待时间非常短，比如说我们在  synchronized 代码块里只做了一个整型加法，那么在短时间内锁肯定会被释放出来，因此怠速停车更加合适。")]),s._v(" "),a("p",[s._v("然而，对于 Java 虚拟机来说，它并不能看到红灯的剩余时间，也就没办法根据等待时间的长短来选择自旋还是阻塞。Java 虚拟机给出的方案是自适应自旋，根据以往自旋等待时是否能够获得锁，来动态调整自旋的时间（循环数目）。")]),s._v(" "),a("p",[s._v("就我们的例子来说，如果之前不熄火等到了绿灯，那么这次不熄火的时间就长一点；如果之前不熄火没等到绿灯，那么这次不熄火的时间就短一点。")]),s._v(" "),a("p",[s._v("自旋状态还带来另外一个副作用，那便是不公平的锁机制。处于阻塞状态的线程，并没有办法立刻竞争被释放的锁。然而，处于自旋状态的线程，则很有可能优先获得这把锁。")]),s._v(" "),a("h2",{attrs:{id:"轻量级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量级锁"}},[s._v("#")]),s._v(" 轻量级锁")]),s._v(" "),a("p",[s._v("你可能见到过深夜的十字路口，四个方向都闪黄灯的情况。由于深夜十字路口的车辆来往可能比较少，如果还设置红绿灯交替，那么很有可能出现四个方向仅有一辆车在等红灯的情况。")]),s._v(" "),a("p",[s._v("因此，红绿灯可能被设置为闪黄灯的情况，代表车辆可以自由通过，但是司机需要注意观察（个人理解，实际意义请咨询交警部门）。")]),s._v(" "),a("p",[s._v("Java 虚拟机也存在着类似的情形：多个线程在不同的时间段请求同一把锁，也就是说没有锁竞争。针对这种情形，Java 虚拟机采用了轻量级锁，来避免重量级锁的阻塞以及唤醒。")]),s._v(" "),a("p",[s._v("在介绍轻量级锁的原理之前，我们先来了解一下 Java 虚拟机是怎么区分轻量级锁和重量级锁的。")]),s._v(" "),a("p",[s._v("（你可以参照"),a("a",{attrs:{href:"https://wiki.openjdk.java.net/display/HotSpot/Synchronization",target:"_blank",rel:"noopener noreferrer"}},[s._v("HotSpot Wiki"),a("OutboundLink")],1),s._v("里这张图阅读。）")]),s._v(" "),a("p",[s._v("在对象内存布局那一篇中我曾经介绍了对象头中的标记字段（mark word）。它的最后两位便被用来表示该对象的锁状态。其中，00 代表轻量级锁，01 代表无锁（或偏向锁），10 代表重量级锁，11 则跟垃圾回收算法的标记有关。")]),s._v(" "),a("p",[s._v("当进行加锁操作时，Java 虚拟机会判断是否已经是重量级锁。如果不是，它会在当前线程的当前栈桢中划出一块空间，作为该锁的锁记录，并且将锁对象的标记字段复制到该锁记录中。")]),s._v(" "),a("p",[s._v("然后，Java 虚拟机会尝试用 CAS（compare-and-swap）操作替换锁对象的标记字段。这里解释一下，CAS 是一个原子操作，它会比较目标地址的值是否和期望值相等，如果相等，则替换为一个新的值。")]),s._v(" "),a("p",[s._v("假设当前锁对象的标记字段为 X…XYZ，Java 虚拟机会比较该字段是否为 X…X01。如果是，则替换为刚才分配的锁记录的地址。由于内存对齐的缘故，它的最后两位为 00。此时，该线程已成功获得这把锁，可以继续执行了。")]),s._v(" "),a("p",[s._v("如果不是 X…X01，那么有两种可能。第一，该线程重复获取同一把锁。此时，Java 虚拟机会将锁记录清零，以代表该锁被重复获取。第二，其他线程持有该锁。此时，Java 虚拟机会将这把锁膨胀为重量级锁，并且阻塞当前线程。")]),s._v(" "),a("p",[s._v("当进行解锁操作时，如果当前锁记录（你可以将一个线程的所有锁记录想象成一个栈结构，每次加锁压入一条锁记录，解锁弹出一条锁记录，当前锁记录指的便是栈顶的锁记录）的值为 0，则代表重复进入同一把锁，直接返回即可。")]),s._v(" "),a("p",[s._v("否则，Java 虚拟机会尝试用 CAS 操作，比较锁对象的标记字段的值是否为当前锁记录的地址。如果是，则替换为锁记录中的值，也就是锁对象原本的标记字段。此时，该线程已经成功释放这把锁。")]),s._v(" "),a("p",[s._v("如果不是，则意味着这把锁已经被膨胀为重量级锁。此时，Java 虚拟机会进入重量级锁的释放过程，唤醒因竞争该锁而被阻塞了的线程。")]),s._v(" "),a("h2",{attrs:{id:"偏向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁"}},[s._v("#")]),s._v(" 偏向锁")]),s._v(" "),a("p",[s._v("如果说轻量级锁针对的情况很乐观，那么接下来的偏向锁针对的情况则更加乐观：从始至终只有一个线程请求某一把锁。")]),s._v(" "),a("p",[s._v("这就好比你在私家庄园里装了个红绿灯，并且庄园里只有你在开车。偏向锁的做法便是在红绿灯处识别来车的车牌号。如果匹配到你的车牌号，那么直接亮绿灯。")]),s._v(" "),a("p",[s._v("具体来说，在线程进行加锁时，如果该锁对象支持偏向锁，那么 Java 虚拟机会通过 CAS 操作，将当前线程的地址记录在锁对象的标记字段之中，并且将标记字段的最后三位设置为 101。")]),s._v(" "),a("p",[s._v("在接下来的运行过程中，每当有线程请求这把锁，Java 虚拟机只需判断锁对象标记字段中：最后三位是否为 101，是否包含当前线程的地址，以及 epoch 值是否和锁对象的类的 epoch 值相同。如果都满足，那么当前线程持有该偏向锁，可以直接返回。")]),s._v(" "),a("p",[s._v("这里的 epoch 值是一个什么概念呢？")]),s._v(" "),a("p",[s._v("我们先从偏向锁的撤销讲起。当请求加锁的线程和锁对象标记字段保持的线程地址不匹配时（而且 epoch  值相等，如若不等，那么当前线程可以将该锁重偏向至自己），Java  虚拟机需要撤销该偏向锁。这个撤销过程非常麻烦，它要求持有偏向锁的线程到达安全点，再将偏向锁替换成轻量级锁。")]),s._v(" "),a("p",[s._v("如果某一类锁对象的总撤销数超过了一个阈值（对应 Java 虚拟机参数 -XX:BiasedLockingBulkRebiasThreshold，默认为 20），那么 Java 虚拟机会宣布这个类的偏向锁失效。")]),s._v(" "),a("p",[s._v("具体的做法便是在每个类中维护一个 epoch 值，你可以理解为第几代偏向锁。当设置偏向锁时，Java 虚拟机需要将该 epoch 值复制到锁对象的标记字段中。")]),s._v(" "),a("p",[s._v("在宣布某个类的偏向锁失效时，Java 虚拟机实则将该类的 epoch 值加 1，表示之前那一代的偏向锁已经失效。而新设置的偏向锁则需要复制新的 epoch 值。")]),s._v(" "),a("p",[s._v("为了保证当前持有偏向锁并且已加锁的线程不至于因此丢锁，Java 虚拟机需要遍历所有线程的 Java 栈，找出该类已加锁的实例，并且将它们标记字段中的 epoch 值加 1。该操作需要所有线程处于安全点状态。")]),s._v(" "),a("p",[s._v("如果总撤销数超过另一个阈值（对应 Java 虚拟机参数 -XX:BiasedLockingBulkRevokeThreshold，默认值为 40），那么 Java 虚拟机会认为这个类已经不再适合偏向锁。此时，Java  虚拟机会撤销该类实例的偏向锁，并且在之后的加锁过程中直接为该类实例设置轻量级锁。")]),s._v(" "),a("h2",{attrs:{id:"总结与实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结与实践"}},[s._v("#")]),s._v(" 总结与实践")]),s._v(" "),a("p",[s._v("今天我介绍了 Java 虚拟机中 synchronized 关键字的实现，按照代价由高至低可分为重量级锁、轻量级锁和偏向锁三种。")]),s._v(" "),a("p",[s._v("重量级锁会阻塞、唤醒请求加锁的线程。它针对的是多个线程同时竞争同一把锁的情况。Java 虚拟机采取了自适应自旋，来避免线程在面对非常小的 synchronized 代码块时，仍会被阻塞、唤醒的情况。")]),s._v(" "),a("p",[s._v("轻量级锁采用 CAS 操作，将锁对象的标记字段替换为一个指针，指向当前线程栈上的一块空间，存储着锁对象原本的标记字段。它针对的是多个线程在不同时间段申请同一把锁的情况。")]),s._v(" "),a("p",[s._v("偏向锁只会在第一次请求时采用 CAS 操作，在锁对象的标记字段中记录下当前线程的地址。在之后的运行过程中，持有该偏向锁的线程的加锁操作将直接返回。它针对的是锁仅会被同一线程持有的情况。")]),s._v(" "),a("p",[s._v("今天的实践环节，我们来验证一个坊间传闻：调用 Object.hashCode() 会关闭该对象的偏向锁 [1]。")]),s._v(" "),a("p",[s._v("你可以采用参数 -XX:+PrintBiasedLockingStatistics 来打印各类锁的个数。由于 C2 使用的是另外一个参数  -XX:+PrintPreciseBiasedLockingStatistics，因此你可以限制 Java 虚拟机仅使用 C1  来即时编译（对应参数 -XX:TieredStopAtLevel=1）。")]),s._v(" "),a("ol",[a("li",[s._v("通过参数 -XX:+UseBiasedLocking，比较开关偏向锁时的输出结果。")]),s._v(" "),a("li",[s._v("在 main 方法的循环前添加 lock.hashCode 调用，并查看输出结果。")]),s._v(" "),a("li",[s._v("在 Lock 类中复写 hashCode 方法，并查看输出结果。")]),s._v(" "),a("li",[s._v("在 main 方法的循环前添加 System.identityHashCode 调用，并查看输出结果。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n// Run with -XX:+UnlockDiagnosticVMOptions -XX:+PrintBiasedLockingStatistics -XX:TieredStopAtLevel=1\n\npublic class SynchronizedTest {\n\n \n\n  static Lock lock = new Lock();\n\n  static int counter = 0;\n\n \n\n  public static void foo() {\n\n    synchronized (lock) {\n\n      counter++;\n\n    }\n\n  }\n\n \n\n  public static void main(String[] args) throws InterruptedException {\n\n    // lock.hashCode(); // Step 2\n\n    // System.identityHashCode(lock); // Step 4\n\n    for (int i = 0; i < 1_000_000; i++) {\n\n      foo();\n\n    }\n\n  }\n\n \n\n  static class Lock {\n\n    // @Override public int hashCode() { return 0; } // Step 3\n\n  }\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("p",[s._v("[1] https://blogs.oracle.com/dave/biased-locking-in-hotspot")]),s._v(" "),a("h2",{attrs:{id:"精选留言-35"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精选留言-35"}},[s._v("#")]),s._v(" 精选留言(35)")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("谢阳")]),s._v(" "),a("p",[s._v("2018-08-23")]),s._v(" "),a("p",[s._v("10")]),s._v(" "),a("p",[s._v("如果不是 X…X01，那么有两种可能。第一，该线程重复获取同一把锁。此时，Java 虚拟机会将锁记录清零，以代表该锁被重复获取。第二，其他线程持有该锁。此时，Java 虚拟机会将这把锁膨胀为重量级锁，并且阻塞当前线程。")]),s._v(" "),a("p",[s._v("老师这段不太明白。1 锁记录清零怎么理解？改变锁对象的标记字段吗？2 锁膨胀的时候其他线程还持有锁对象吧，这个时候膨胀会具体做什么操作？如果操作了锁对象的标记字段会影响稍后释放锁的cas吗")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("爪哇夜未眠")]),s._v(" "),a("p",[s._v("2018-08-22")]),s._v(" "),a("p",[s._v("10")]),s._v(" "),a("p",[s._v("太抽象了，老师能画点儿图吗……")]),s._v(" "),a("p",[s._v("作者回复: 不好意思哈，因为网上有很多图，忘了放个链接了。")]),s._v(" "),a("p",[s._v("你可以参考wiki.openjdk.java.net/display/HotSpot/Synchronization中的图。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("godtrue")]),s._v(" "),a("p",[s._v("2018-09-01")]),s._v(" "),a("p",[s._v("7")]),s._v(" "),a("p",[s._v("恩，今天才补上小结，因为听不明白了，后来反复听以及补上锁的相关知识才有点明白。\n我认为雨迪确实应该补上点图，这样才更容易理解，否则确实抽象，另外，我觉得讲解的次序有点小问题。\n如果这样讲就更容易理解了（个人见解）\n1:讲解一下锁的本质，锁到底是个什么东西？锁的特点容易理解，毕竟都见过摸过用过")]),s._v(" "),a("p",[s._v("2:讲解一下锁的分类和特点，什么表锁、行锁、自旋锁、可重用锁、轻量锁、重量锁、阻塞锁、线程锁、进程锁、分布式锁、偏向锁等等吧！都是站在不同的角度或层级根据锁的特点，为了好区分给锁起的名字")]),s._v(" "),a("p",[s._v("3:讲解一下JVM中的各种锁，讲解一下他们的特点和实现，然后讲解一下咱们本节的主角是属于哪一种或哪几种锁")]),s._v(" "),a("p",[s._v("4:我的理解，锁的本质-在程序世界里是一种保证资源正确竞争的机制，如果没有对同一资源竞争也就没有了锁存在的意义，在计算世界中资源引起竞争的核心基本是空间，有其是计算机的内存空间，当然数据肯定也是一种引起激烈竞争的资源，不过往往会体现到空间上去，因为计算机中的数据必定存于某空间地址之中的")]),s._v(" "),a("p",[s._v("5:感觉明白可重用锁的实现原理了，这个也是雨迪讲的最细致的一种实现方式，恩，非常感谢🙏")]),s._v(" "),a("p",[s._v("作者回复: 多谢建议！")]),s._v(" "),a("p",[s._v("本文的讲解流程是从通用锁算法到针对特殊情况的锁算法来的。一开始monitorenter是用重型锁的，然后为了针对没有竞争锁的情况有了轻型锁，再然后为了针对只有一个线程持有某个锁的情况有了偏向锁。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("QlDoors")]),s._v(" "),a("p",[s._v("2018-11-21")]),s._v(" "),a("p",[s._v("5")]),s._v(" "),a("p",[s._v("练习试了无数遍，都没有偏向锁，后来上网查才发现需要加-XX:BiasedLockingStartupDelay=0。")]),s._v(" "),a("p",[s._v("http://zhizus.com/2018-09-03-%E5%81%8F%E5%90%91%E9%94%81.html")]),s._v(" "),a("p",[s._v("注意：Hotspot虚拟机在开机启动后有个延迟（4s），经过延迟后才会对每个创建的对象开启偏向锁。我们可以通过设置下面的参数来修改这个延迟，或者直接sleep一段时间-XX:BiasedLockingStartupDelay=0")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("code-arti...")]),s._v(" "),a("p",[s._v("2018-08-26")]),s._v(" "),a("p",[s._v("4")]),s._v(" "),a("p",[s._v("“当进行解锁操作时，如果当前锁记录（你可以将一个线程的所有锁记录想象成一个栈结构，每次加锁压入一条锁记录，解锁弹出一条锁记录，当前锁记录指的便是栈顶的锁记录）的值为 0，则代表重复进入同一把锁，直接返回即可。”\n这种情况也需要弹出当前锁记录的吧？ 不然锁记录一直是0不变了。 如果是我这样理解的话，重复获取同一把锁的话，不是简单地清零，而应该是把0作为一条新的锁记录压入栈顶。\n不知道我这样理解对不？请老师指点")]),s._v(" "),a("p",[s._v("作者回复: 对的！赞")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("NEO🍋")]),s._v(" "),a("p",[s._v("2018-08-22")]),s._v(" "),a("p",[s._v("3")]),s._v(" "),a("p",[s._v("老师关于偏向锁有个疑问 “它针对的是锁仅会被同一线程持有的情况。” 如果只有一个线程持有锁 还有必要加锁吗？")]),s._v(" "),a("p",[s._v("作者回复: 哈，这个属于应用程序的问题，JVM只是观察到这种情况，并尝试做出优化。")]),s._v(" "),a("p",[s._v("有一种可能，就是很长一段时间内，只有一个线程频繁加锁，后面换成另外的线程，这样前面那段时间可以用偏向锁。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("贾智文")]),s._v(" "),a("p",[s._v("2018-08-22")]),s._v(" "),a("p",[s._v("2")]),s._v(" "),a("p",[s._v("文中说轻量级锁因为内存对齐所以标识位是00，那么为什么重量级锁的时候，存储内容也是指针，却没有内存对齐呢？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("何yuan")]),s._v(" "),a("p",[s._v("2018-08-22")]),s._v(" "),a("p",[s._v("2")]),s._v(" "),a("p",[s._v("一直认为synchronized是重量锁，是否也不一定？jvm处理的时候是先将当偏向锁处理，然后慢慢膨胀为重量级锁的是吗？")]),s._v(" "),a("p",[s._v("作者回复: 默认情况下是的。以前有个延缓毫秒数-XX:BiasedLockingStartupDelay，一开始用轻量级锁，在启动四秒之后才开始用偏向锁。我记得Java 9还是10默认值改为0了。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Geek_98716...")]),s._v(" "),a("p",[s._v("2018-10-18")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v('老师请教个问题：\n1：锁从偏向一直到重量级的过程是"单向不可逆"的，这个"单向不可逆"是限制在对象的整个生命周期，还是在对象到达了某个状态后再次有线程使用其作为锁对象还会继续重复这个过程？从每撤销一次对象的epoch值就会+1，而这个+1代表的就是偏向锁升级为轻量级锁，而每个对象又维护了一个epoch值代表对象撤销次数（偏向锁->轻量级锁次数），是不是就代表这个锁升级的过程会在不同的时间段重复发生n词？\n2：为什么要设置一个最大的撤销次数（epoch值），意义在哪里？')]),s._v(" "),a("p",[s._v("作者回复: 1. 单向不可逆 针对一个对象的整个生命周期。")]),s._v(" "),a("p",[s._v("epoch+1发生在多次同一类型的实例的偏向锁撤销之后，存放在类型(Class)那里的。")]),s._v(" "),a("p",[s._v("\\2. 当频繁检测到某个类的实例出现撤销偏向锁的，就代表这个类不适合用来搞偏向锁。")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("Scott")]),s._v(" "),a("p",[s._v("2018-08-22")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("请教一下，不是很明白epoch的作用，偏向锁默认被撤销20次使偏向锁失效才更新这个字段，没有想明白epoch的必要性")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("(^o^)")]),s._v(" "),a("p",[s._v("2018-08-22")]),s._v(" "),a("p",[s._v("1")]),s._v(" "),a("p",[s._v("“否则，Java 虚拟机会尝试用 CAS 操作，比较锁对象的标记字段的值是否为当前锁记录的地址。如果是，则替换为锁记录中的值，也就是锁对象原本的标记字段。此时，该线程已经成功释放这把锁。")]),s._v(" "),a("p",[s._v("如果不是，则意味着这把锁已经被膨胀为重量级锁。”升级为重量级锁的过程，会改变锁对象的什么信息呢？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("李亮亮")]),s._v(" "),a("p",[s._v("2019-04-10")]),s._v(" "),a("p",[s._v("一个撤销阀值为40，一个撤销阀值为20 ，20这个表示超过这个次数那个这个偏向锁就换代了。epoch的值加1，如果撤销次数超过40就证明这个类不适合使用偏向锁。照这个数据来讲是不是意味着差不多换2代就表示该类不适合偏向锁了，不知道我理解的对不？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("ゞ、今生绝...")]),s._v(" "),a("p",[s._v("2019-04-08")]),s._v(" "),a("p",[s._v("雨迪老师，我有个疑问：假设线程A加锁，CAS将锁对象对象头替换成指向线程A的Lock Record的地址，在这里，原值：对象mark word中的内容，也就是hashcode，期望值：本线程Lock  Record地址，对象：锁对象，在替换成功后我们说线程A获得了锁，OK，线程A开始执行同步代码块，在它执行完之前，线程B来获取锁，发现属于轻量级锁标志，于是CAS替换mark word，此时CAS的原值仍然为为锁对象的mark word吧，而此时锁对象mark  word中记录的不再是hashcode而是指向线程A的Lock  Record的地址，但是对于CAS它管你对象头存的是什么，现在获取到什么，什么就是原值，于是：原值：对象头中指向线程A中LR的地址，期望值：线程B中LR（目前对他来说，是将锁对象中指向线程A中LR的地址存入本线程LR）的地址，目标对象：锁对象，怎么会CAS不成功？于是现在线程B也获取到锁，两个线程都会在执行同步代码块！我觉得我理解的哪块不对？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("王肖武")]),s._v(" "),a("p",[s._v("2019-03-07")]),s._v(" "),a("p",[s._v("“当进行加锁操作时，Java 虚拟机会判断是否已经是重量级锁。如果不是，它会在当前线程的当前栈桢中划出一块空间，作为该锁的锁记录，并且将锁对象的标记字段复制到该锁记录中。”\n有个疑问麻烦老师帮解答一下：栈帧不是一遍连续的空间吗？大小不是固定的吗？划出的空间是从哪里分配出来的呢？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("lincoln���...")]),s._v(" "),a("p",[s._v("2019-02-26")]),s._v(" "),a("p",[s._v("您好，文章写的挺好，读完有个问题想请教下：\n当t1线程获取了某个对象锁（lock1）的偏向锁，还没执行完的时候，另外一个线程t2也尝试获取这个对象锁(lock1)，我看文章上说需要撤销偏向锁，等到达安全点的时候，再将偏向锁替换成轻量级锁。\n我有个问题：两个线程同时竞争同一把锁的情况，轻量级锁也解决不了吧，只能用重量级锁解决吧？为什么还要替换成轻量级锁呢？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("LINEZH")]),s._v(" "),a("p",[s._v("2019-02-15")]),s._v(" "),a("p",[s._v("有一个疑问, JVM是如何选择使用重量锁/轻量锁/自旋锁呢? 是在执行的时候根据锁和线程的情况决定吗, 能不能说的具体一点?")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("第9根烟")]),s._v(" "),a("p",[s._v("2019-01-08")]),s._v(" "),a("p",[s._v("这边验证了Object.hashCode() 不会关闭该对象的偏向锁。。不知道最后答案是什么？哪里有全篇的课后作业的答案？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("fangxuan")]),s._v(" "),a("p",[s._v("2019-01-05")]),s._v(" "),a("p",[s._v("单线程情况下，开启偏向锁和不开启偏向锁，性能上有什么差别吗？差别在哪儿？")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("yihang")]),s._v(" "),a("p",[s._v("2018-12-27")]),s._v(" "),a("p",[s._v("老师您好，我是这几天才开始学习这个专栏。有这么几个问题，觉得读完文章也未能找到答案，请老师解答：\n1） 如果轻量级锁已经发现有竞争，膨胀为重量级锁，那么之前拥有锁的线程，解锁时会唤醒该对象上的阻塞线程。这句话我理解了，但这时对象上的Mark  Word 还是重量级锁的指针（状态10）吗？直到最后一个线程释放了锁，对象上的Mark Word 仍然保持状态 10  还是会恢复到无锁的状态（01）？还是从这往后就始终保持重量级锁的状态了？")]),s._v(" "),a("p",[s._v("2）偏向锁中的 Rebias 和 revoke bias 应该是不同的概念吧，字面意思，后者应该是撤销偏向，而前者似乎是重用偏向。【如果某一类锁对象的总撤销数超过了一个阈值（对应 Java 虚拟机参数 -XX:BiasedLockingBulkRebiasThreshold，默认为 20），那么 Java  虚拟机会宣布这个类的偏向锁失效。】说实话这句话真没看懂，什么叫【这个类的偏向锁失效】，感觉这个参数是为了优化偏向锁，能够让偏向锁得以重用\n我在 stackoverflow上找了一篇解释：\nsubsequent bulk rebias is possible if and only if number of revokes more than  BiasedLockingBulkRebiasThreshold and less than  BiasedLockingBulkRevokeThreshold and the latest revoke was not later  than BiasedLockingDecayTime, where all escaped variables are JVM  properties.\n不知道他说的是否在理？请指教，地址：https://stackoverflow.com/questions/46312817/does-java-ever-rebias-an-individual-lock")]),s._v(" "),a("ul",[a("li")]),s._v(" "),a("p",[s._v("shawn")]),s._v(" "),a("p",[s._v("2018-12-26")]),s._v(" "),a("p",[s._v("老师对于轻量级锁可以这样理解么？如下：  “轻量级锁，b线程在锁竞争时，发现锁已经被a线程占用，则b线程不进入内核态，让b线程自旋，执行空循环，等待a线程释放锁。如果，完成自旋策略还是发现a线程没有释放锁，或者让c线程占用了。则b线程试图将轻量级锁升级为重量级锁。”")])])}),[],!1,null,null,null);a.default=t.exports}}]);