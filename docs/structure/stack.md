---
title: 栈
date: 2022-04-14

---

# 栈
栈结构的特点非常地有特点：先进后出，后进先出(Last In First Out, LIFO)。可以把栈想象成一个羽毛球筒，而我们的数据就是一个个进出的羽毛球。

![](http://cdn.liwuhou.cn/tmp/20220415090905.png)

由于羽毛球筒只有一端是可以进出的，另一端是封闭的，这就导致羽毛球只有以一种方式进出，最外面的最先出去，最里面的最晚出来。

![](http://cdn.liwuhou.cn/tmp/20220415091454.png)

栈这种存取受限的数据结构，对数据的操作只有入栈和出栈（清空）两种方法。

**push**：进栈方法，向栈末尾添加元素

```ts
const stack = new Stack<number>()

stack.push(1)
```

**pop**: 出栈方法，弹出栈末尾的一个元素。

```ts
stack.pop() // 1
```

实现一个栈

@[code](@structure Stack)

可以利用栈进出只从一端的特点实现一些功能，比如实现一个十进制转为任意进制的方法

```ts
function converter(number: number, base: number): number {
  const stack = new Stack()
  const digits = '0123456789ABCDEF'
  let result = ''

  while (number > 0) {
    stack.push(number % base)
    number = Math.floor(number / bs)
  }

  while (!stack.isEmpty()) {
    result += stack.pop()
  }

  return result
}
```

也可以实现一个检验括号是否正确闭合的方法

@[code](@@20)