---
layout: post
title: template page
categories: [cate1, cate2]
description: some word here
keywords: keyword1, keyword2
---

Content here

**面向对象编程**

**
**

首先我们来看下面向对象编程的三大特性



- 封装
- 继承
- 多态



面向对象编程是一种具有对象概念的程序编程范型，它可能包含数据、属性、代码与方法。对象则指的是类的实例。它将对象作为程序的基本单元，将程序和数据封装其中，以提高软件的可重用性、灵活性和可扩展性，对象里的程序可以访问及修改对象相关联的数据。在面向对象编程里，计算机程序会被设计成彼此相关的对象。



对象按照执行角色，可以分为数据对象、行为对象。我们常理解的面向对象编程的模式，比如：y=f（x），其中x、y都是数据对象，通过行为对象F的方法运算得到了加工后的对象y。



**我们具体看个示例：**

**
**

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
/** * @Author onlyone * <p> * 活动模型 */public class Activity {
    private Long id; // 活动id    private String name; // 名称    private String desc;  // 描述    private Date time;  // 活动时间    private String publisher; // 发布人}
```



按活动id查找一个活动，代码一般会这么写



- 
- 
- 
- 
- 
- 
- 
- 

```
public Activity queryById(List<Activity> activityList, String id) {    for (Activity activity : activityList) {        if (id.equals(activity.getId())) {            return activity;        }    }    return null;}
```



如果此时业务提出了一个新的需求，按名称来查询活动，得嘞，又得重新造个轮子



- 
- 
- 
- 
- 
- 
- 
- 

```
public Activity queryByName(List<Activity> activityList, String name) {    for (Activity activity : activityList) {        if (name.equals(activity.getId())) {            return activity;        }    }    return null;}
```





过了几天，业务产品又来找你了，想根据时间来查询活动，此时，你是不是有种崩溃的感觉。



![图片](https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/06/28/640-9a295f.png)





重构是我们脑海闪现的第一念想，如何重构，却让我们陷入一脸懵逼的茫然状态。三个需求，处理逻辑各不相同，如何复用抽取？



我们需要改变我们的思维方式，谁规定调用方法传入的实参一定是数值型对象，如果传入一个函数表达式，能不能解决这个问题？

是不是有种豁然开朗的感觉。



![图片](https://linkeq.oss-cn-chengdu.aliyuncs.com/img/2022/06/28/640-0f2b57.png)





**函数式编程**



函数式编程第一个需要了解的概念就是函数：



- 函数可以按需创建
- 函数可以当作实参传给另一个方法
- 函数可以当作另一个方法的返回值



JDK 8 开始引入函数式编程，并提供了很多预定义接口类，如 Predicates 用于判断，函数 Functions，生产 Suppliers，消费 Consumers，比较 Comparators。



> 代码示例：https://github.com/aalansehaiyang/java8-tutorial



本文的重构思路就是采用Predicate接口，我们先来看些内部结构



- 
- 
- 
- 

```
@FunctionalInterfacepublic interface Predicate<T> {    boolean test(T t);}
```



- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
/** * @Author onlyone * 面向函数编程 */public class FuncitionProgram {
    private List<Activity> activityList;
    /**     * 基础查询骨架     */    Activity queryByPredicate(Predicate<Activity> predicate) {        for (Activity activity : activityList) {            if (predicate.test(activity)) {                return activity;            }        }        return null;    }}
```





按id查询活动，传入对应的Predicate表达式



- 
- 
- 

```
public Activity queryById(String id) {    return queryByPredicate(activity -> id.equals(activity.getId()));}
```



按名称查询活动，传入对应的Predicate表达式



- 
- 
- 

```
public Activity queryByName(String name) {    return queryByPredicate(activity -> name.equals(activity.getName()));}
```



是不是有种”牛逼“的感觉。低调，优化是永无止境，有没有更好的优化方式。



作为一名架构师，我们在做系统架构时，为了满足其高并发、扩展性，一般会讲究一个拆分原则，将一个复杂的业务域问题拆分成一个个业务子域，降低系统的复杂度，也能满足其后续的灵活扩展。按照这个思路，我们继续优化，将Predicate 函数独立出来。



- 
- 
- 
- 
- 
- 
- 
- 
- 

```
// id判断函数public Predicate<Activity> idPredicate(String id) {    return activity -> id.equals(activity.getId());}
// 名称判断函数public Predicate<Activity> namePredicate(String name) {    return activity -> name.equals(activity.getName());}
```



我们提供了`原子化`函数，具体怎么组装，由上层的调用方根据业务需要自己来拼接。



- 
- 
- 
- 
- 
- 

```
// 按id查询活动queryByPredicate(idPredicate(id));// 按名称查询活动queryByPredicate(namePredicate(name));// 按id、名称组合条件查询活动queryByPredicate(idPredicate(id).and(namePredicate(name)));
```



画外音：



万事万物，由于都有其个性化特征，如果按常规方式，穷举是很难满足所有业务需求。但如果我们能按其特征抽取，封装组件能力，由流程引擎根据业务诉求，自由组合，则能满足其最大灵活性，更像一个软件高手所为。
