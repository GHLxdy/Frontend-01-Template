# 第二周总结
## 1. 编程语言通识笔记

### 语言按语法分类

- 非形式语言
  - 中文，英文
- 形式语言（乔姆斯基谱系）
  - 0 型 无限制文法
    - `?::=?` 等号左边不止一个中间符 `<a><b> ::= "c"`
  - 1 型 上下文相关文法
    - `?<A>?::=?<B>?` `"a"<b>"c"::="a""x""c"`
  - 2 型 上下文无关文法
    - `<A>::=?` js, 大部分情况是上下文无关
  - 3 型 正则文法
    - `<A>::=<A>?` 限制表达能力

### 形式语言产生式

#### BNF

- 语法结构 - 基础结构称终结符 - 引号和中间的字符表示终结符 - 复合结构称非终结符 - 用尖括号括起来的名称来表示非终结符
- 符号 - `()` 可以有括号 - `-`表示重复多次 - `|` 表示或 - `+` 表示至少一次

练习:

```
"a"
"b"
<Program>: = ("a"+ | <Program> "b"+)+

整数连加
"+"
<Number>: "0" | "1" ... "9"
<DecimalNumber>: "0" | (("1" | "2" | ...... | "9") <Number>+)
<Expression>: <DecimalNumber> | (<Expression> "+" <DecimalNumber>)

<PrimaryExpression> = <DecimalNumber> |
"(" <LogicalExpression> ")"

四则运算
1 + 1 - 3
<MultiplicativeExpression> = <PrimaryExpression> | <MultiplicativeExpression> "-" <PrimaryExpression> | <MultiplicativeExpression> "/" <PrimaryExpression>


<AdditiveExpression> = <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> | <AdditiveExpression> "-" <MultiplicativeExpression>

逻辑判断
<LogicalExpression> = <AdditiveExpression> |
<LogicalExpression> "||" <AdditiveExpression> |
<LogicalExpression> "&&" <AdditiveExpression>
```

#### EBNF

#### ABNF

### 图灵完备性

- 命令式——图灵机
  - 用 goto 实现
  - 用 if 和 while 实现
- 声明式 - lambda
  - 用递归实现

### 动态与静态

- 动态
  - 在用户的设备/在线服务器上运行
  - 产品实际运行时
  - Runtime
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

### 类型系统

- 按动静划分
  - 动态类型系统
  - 静态类型系统
- 按是否隐式转换划分
  - 强类型
  - 弱类型
- 按复合类型划分
  - 结构体
  - 函数签名
- 加入继承后
  - 逆变
  - 协变
- 一般命令式编程语言
  - Atom
    - Identifier
    - Literal
  - Expression
    - Atom
    - Operator
    - Punctuator
  - Statement
    - Expression
    - Keyworkd
    - Punctuator
  - Structure
    - Function
    - Class
    - Process
    - Namespace
  - Program
    - Program
    - Module
    - Package
    - Library

### 重学 JavaScript

- 语法
- 语义
- 运行时

## 2. JavaScript 词法，类型

### Atom

#### InputElement

- whiteSpace
  - Tab：制表符（打字机时代：制表时隔开数字很方便）
  - VT：纵向制表符
  - FF: FormFeed
  - SP: Space
  - NBSP: NO-BREAK SPACE（和 SP 的区别在于不会断开、不会合并）
- LineTerminator 换行符
  - LF
  - CR
- Comment
- Token: 一切有效的东西
  - Punctuator: `> = < }` 用于构成代码结构
  - Keywords：比如 `for`这一类不能用作变量名的。例外：getter 里的 `get`
  - IdentifierName: 标识符，可以以字母、\_ 或者 \$ 开头，代码中用来标识
- Type
  - Number: IEEE 754 Double Float
    - 浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
    - `97 .toString(2)`
  - String
    - USC: U+0000 ~ U+FFFF, unicode 的 BMP 范围
    - GB: 国标
    - 存储方式: UTF8/UTF16
      - UTF8 使用 8 位存储
      - UTF16 使用 18 位存储
    - 引号内的特殊字符 `\'"bfnrtv`
  - Boolean
  - Null
  - Undifined
  - Symbol

BOM bit order mask
