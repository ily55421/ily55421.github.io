(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{618:function(a,s,t){"use strict";t.r(s);var r=t(0),_=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"线性表-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性表-数组"}},[a._v("#")]),a._v(" 线性表_数组")]),a._v(" "),s("h2",{attrs:{id:"_1-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[a._v("#")]),a._v(" 1. 概念")]),a._v(" "),s("p",[s("strong",[a._v("数组（Array）是一种线性表数据结构，它用一组连续的内存空间来存储一组具有相同类型的数据。")]),a._v(" 这个定义中有两个关键词，一个是线性表，一个是连续的内存空间和相同类型的数据。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("线性表")]),a._v("。顾名思义是指数据排成一条线一样的。线性表上的数据最多只有前和后两个方向，除了数组之外，链表、队列、栈也都是线性表结构。与之相对的是非线性表，有二叉树、堆、图等。")]),a._v(" "),s("li",[s("strong",[a._v("连续的内存空间和相同类型的数据")]),a._v("。正是因为这个，所以数组支持随机访问。但是删除、插入等操作受到了限制，这些操作都需要做大量的数据搬移工作。")])]),a._v(" "),s("p",[a._v("需要注意的是，在说明数组查找时间复杂度为 O(1) 的时候，一定要说明根据下标随机访问的时间复杂度为 O(1)，因为针对数组查找可能还会有二分查找法，因此需要表达准确。")]),a._v(" "),s("h2",{attrs:{id:"_2-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作"}},[a._v("#")]),a._v(" 2. 操作")]),a._v(" "),s("h3",{attrs:{id:"_2-1-访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-访问"}},[a._v("#")]),a._v(" 2.1. 访问")]),a._v(" "),s("p",[a._v("数组根据下标随机访问数组元素，主要是用下面这个公式找到下标为 i 的数组元素存储的内存地址")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("a[i]_address = base_address + i * data_type_size\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("code",[a._v("base_address")]),a._v(" 是指数组的基地址，i 是相应的数组下标，"),s("code",[a._v("data_type_size")]),a._v(" 表示数组中每个元素的大小，那么按照公式计算出来之后就是下标为 i 的数据元素存储的内存地址了。在 C 语言中，访问数组的本质是访问一段连续内存，只要数组通过偏移计算得到内存地址是可用的，那么程序就可能不会报任何错误。因此 C 语言中存在数组访问越界的问题。")]),a._v(" "),s("p",[s("strong",[a._v("正确的表述应该是，数组支持随机访问，根据下标随机访问的时间复杂度为 O(1)")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/19-43-22-665afb55110c98757aae15569c9763f6-68747470733a2f2f696d672e6461776e67756f2e636e2f416c676f726974686d2f325f315f302e6a7067-bfe4.jpeg",alt:"img"}})]),a._v(" "),s("h3",{attrs:{id:"_2-2-增加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-增加"}},[a._v("#")]),a._v(" 2.2. 增加")]),a._v(" "),s("p",[a._v("如果数组中的数据是有序的，那么在这个数组中的末尾插入元素的话，不需要移动数组，时间复杂度是 O(1)，假如在数组开头插入数据的话，那么所有的数据都需要依次往后移动一位，所以时间复杂度是 O(n)。往数组第 k 个位置插入的话，那么 k~n 这部分的元素都需要往后移动一位。因此此时插入的平均时间复杂度是 O(n)")]),a._v(" "),s("p",[a._v("但是假如数组中的数据是无序的话，只是做为存储数据的集合的话。那么可以不用上面的方式。比如要将某个数据插入到第 k 个位置，那么可以将第 k 位的数据移到数组元素的最后，把新的元素直接放入到第 k 个位置。这样时间复杂度就被降到 O(1) 了。")]),a._v(" "),s("h3",{attrs:{id:"_2-3-删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-删除"}},[a._v("#")]),a._v(" 2.3. 删除")]),a._v(" "),s("p",[a._v("与插入类似，为了数组中数据的连续性，删除第 k 个位置的数据的话，也需要搬移数据。因此时间复杂度也是一样的。")]),a._v(" "),s("p",[a._v("但是在不一定要求数组中数据的连续性的情况下，可以将多个删除操作集中在一起执行，这样效果会更高一点。比如在下面例子中，数组 a 中存储了 8 个元素：a、b、c、d、e、f、g、h。假如依次要删除 a、b、c 这三个元素，为了避免数据被迁移 3 次，那么可以把要先删除的元素给记录下来，表示从记录上把这三个数据给删除了，但是实际上数据被没有被删除，那么当数组没有更多空间存储的时候。再执行一次总的删除操作，这样就减少了删除导致的数据搬移了。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/12/11/19-43-24-ff11f3cab47243fcc091574c6549aba3-68747470733a2f2f696d672e6461776e67756f2e636e2f416c676f726974686d2f325f315f312e6a7067-ff97.jpeg",alt:"img"}})]),a._v(" "),s("p",[s("strong",[a._v("很多时候我们并不是要去死记硬背某个数据结构或者算法，而是要学习它背后的思想和处理技巧，这些东西才是最有价值的")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"_2-4-数组越界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-数组越界"}},[a._v("#")]),a._v(" 2.4. 数组越界")]),a._v(" "),s("p",[a._v('在下面这段代码中，很明显发生了数组越界的情况。在 C 语言中，并不限制访问越界（C 语言中只要不是访问受限的内存，所有的内存空间都是可以自由访问的），而且也没有针对访问越界做进一步的处理，因此可能的执行结果不是只打印 4 次 "hello world"，而是死循环打印 “hello world”。')]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('int main(int argc, char* argv[]){\n    int i = 0;\n    int arr[3] = {0};\n    for(; i<=3; i++){\n        arr[i] = 0;\n        printf("hello world\\n");\n    }\n    return 0;\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("死循环打印的结果主要是因为栈是向下生长的（Linux 下是这样的），那么会先把 i 压入栈中，之后依次压入 a[2]、a[1]、a[0]，那么当 i=3 时，访问其实是 i 这个元素的内存空间，arr[i] = 0，其实就是将 i 设置为 0，因此进入了"),s("strong",[a._v("死循环")]),a._v("。"),s("strong",[a._v("因此需要特别注意数组越界问题！")])]),a._v(" "),s("blockquote",[s("p",[a._v("gcc 有一个编译选项是堆栈保护，默认情况下是启动了堆栈保护的，这种情况下，不管 i 声明在前还是在后，i 都会在数组之后压栈，因此不会出现死循环。如果使用（-fno-stack-protector）选项关闭了堆栈保护功能，那么会导致死循环。请参考：https://www.ibm.com/developerworks/cn/linux/l-cn-gccstack/index.html")])]),a._v(" "),s("h2",{attrs:{id:"_3-思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-思考"}},[a._v("#")]),a._v(" 3. 思考")]),a._v(" "),s("h3",{attrs:{id:"_3-1-容器和数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-容器和数组"}},[a._v("#")]),a._v(" 3.1. 容器和数组")]),a._v(" "),s("p",[a._v("针对数组类型，很多语言都提供了容器类，比如 Java 中的 ArrayList 和 C++ STL 中的 vector。那么这些容器相比数组有哪些优势呢？个人觉得**容器的最大优势是将很多数组操作的细节封装起来了，并且支持动态扩容。**在使用数组的时候，假如事先声明了大小为 10 的数组，那么当需要存储第 11 个数据的时候，就需要重新分配，将原来的数据拷贝过去，然后把新数据添加进去，而容器则自动封装了这个操作，在使用 ArrayList 的时候，如果存储空间不够，它会自动将空间扩容为 1.5 倍大小。（Hint：因此在使用 ArrayList 的时候最好事先指定数据大小）")]),a._v(" "),s("p",[a._v("那么数组和容器怎么选择呢？")]),a._v(" "),s("ul",[s("li",[a._v("Java ArrayList 无法存储基本类型，比如 int、long，需要将其封装成 Integer、Long 类才能存储。而 Autoboxing、Unboxing 具有一定的性能消耗，所以关注性能的话，或者希望使用基本类型的话，请使用数组。")]),a._v(" "),s("li",[a._v("如果数据大小事先已知，并且对数据的操作非常简单，那么可以直接使用数组。")]),a._v(" "),s("li",[a._v("多维数组时，看个人喜好。可以出于直观选择数组方式，比如 "),s("code",[a._v("Object[][]")]),a._v("，当然也可以选择容器，比如 "),s("code",[a._v("ArrayList<ArrayList<object>>")]),a._v(" array。")])]),a._v(" "),s("p",[a._v("总的来说，选择数组和容器主要看对性能要求。一般业务开发使用容器即可，因为性能只会损耗一点，但是做比较底层的开发，比如开发网络框架啥的，对性能有一定要求的话，可以使用数组。")]),a._v(" "),s("h3",{attrs:{id:"_3-2-数组的下标为什么从-0-开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数组的下标为什么从-0-开始"}},[a._v("#")]),a._v(" 3.2. 数组的下标为什么从 0 开始")]),a._v(" "),s("p",[s("strong",[a._v("数组中的下标更确切的定义是“偏移（offset）”,也就是说 0 代表的是偏移量")]),a._v("，就是数组中某个位置距离数组开始的地方偏移了多少，比如数组的第一个元素相比数组开始的地址的偏移为 0。")]),a._v(" "),s("p",[a._v("那么为什么用 0 而不用 1 呢？因为数组从1 开始编号的话，那么计算下标为 i 的数组元素的地址，会多做一次减法运算。作为基础的数据结构，从 0 开始可以让效率的优化做到极致，因此选择从 0 开始。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("a[i]_address = base_address + (i -1)*type_size\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("但是但是，这些都算是自己事后想的。真正的原因应该算是历史原因，C 语言的设计者用 0 开始计算数组下标，之后的 Java、JavaScript 等高级语言都效仿了 C 语言。因此继续沿用了从 0 开始计数的习惯。当然有些语言不是从 0 开始计数的，比如 matlab。")]),a._v(" "),s("h2",{attrs:{id:"_4-应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-应用场景"}},[a._v("#")]),a._v(" 4. 应用场景")]),a._v(" "),s("ol",[s("li",[a._v("JVM 标记清除垃圾回收算法的核心思想使用的就是上述提到的进阶版删除方法，先把要删除的内容标记下来，然后等空间不够了再统一删除。具体分别两个阶段，一是标记阶段：标记所有可达到对象，二是清除阶段：清除所有未被标记的对象。")])]),a._v(" "),s("h2",{attrs:{id:"数组内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组内存模型"}},[a._v("#")]),a._v(" 数组内存模型")]),a._v(" "),s("p",[a._v("**行优先（Row-Major Order）"),s("strong",[a._v("还是以")]),a._v("列优先（Column-Major Order）**存储的。")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("数组可以说是众多数据结构中最简单的一个数据结构了。很多语言在语法层面都支持数组。数组是一种线性表数据结构，内存布局是连续的。")]),a._v(" "),s("p",[a._v("常见的操作是增删改查，假如根据索引值进行改和查的话，那么时间复杂度是 O(1)。增删在默认情况下，即增加一个元素之后就移动元素、删除一个元素之后就移动元素的话，那么时间复杂是 O(n)（不考虑在数组最后增加/删除）。当然可以增删操作可以进行一定优化，比如增加元素时，假如不要求数组有序，那么可以进行采用交换的方式；删除元素时，可以先不把元素删除，而是给元素打上标签，从形式上表示这个元素被删除了，但是实际上，这个元素并没有删除。之后一次性在删除。")]),a._v(" "),s("p",[a._v("数组最需要注意的是数组越界的问题，因为数组访问的"),s("strong",[a._v("本质是一段连续内存的访问")]),a._v("。在 C 语言中不会进行越界检查，并且 C 语言能访问它可以访问的所有内存地址，所以需要特别注意。")]),a._v(" "),s("p",[a._v("数组应用的一个地方是JVM 标记清除垃圾回收算法的核心思想，采用的方式跟优化版的删除算法类似。先把要删除的内容都进行标记，之后等空间不够了，再统一删除。")]),a._v(" "),s("p",[s("strong",[a._v("数组用一块连续的内存空间，来存储相同类型的一组数据")]),a._v("，最大的特点就是"),s("strong",[a._v("支持随机访问")]),a._v("，但"),s("strong",[a._v("插入、删除操作也因此变得比较低效，平均情况时间复杂度为 O(n)")]),a._v("。在平时的业务开发中，我们可以直接使用编程语言提供的"),s("strong",[a._v("容器类")]),a._v("，但是，如果是"),s("strong",[a._v("特别底层的开发")]),a._v("，直接使用数组可能会更合适。")]),a._v(" "),s("p",[a._v("对于数组访问越界造成无限循环，我理解是编译器的问题，对于不同的编译器，在内存分配时，"),s("strong",[a._v("会按照内存地址递增或递减的方式进行分配")]),a._v("。老师的程序，如果是内存地址递减的方式，就会造成无限循环。")]),a._v(" "),s("p",[s("strong",[a._v("函数体内的局部变量存在栈上，且是连续压栈")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"巨人的肩膀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#巨人的肩膀"}},[a._v("#")]),a._v(" 巨人的肩膀")]),a._v(" "),s("ol",[s("li",[a._v("极客时间-《数据结构与算法》-王争老师")])])])}),[],!1,null,null,null);s.default=_.exports}}]);