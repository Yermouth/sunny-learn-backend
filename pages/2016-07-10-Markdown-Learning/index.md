---
title: Markdown小記
date: "2016-07-10T00:00:00.000Z"
layout: post
readNext: "/Rancher/1"
path: "/Markdown/1"
tag: "Markdown"
---

programming和寫blog最大的動力莫過於嘗試新事物。

參考 [Bryan's Notes for Big Data Analysis and Career Life][1] 的SlackEdit的做法後，將StackEdit和google synchronize，以後寫blog便能直接打markdown，方便多了，網頁外觀也讓我更滿意。

<i class = "icon icon ion-happy-outline"></i>

[1]: http://bryannotes.blogspot.hk/2015/01/markdownblog-stackedit_37.html
如果要讓網頁顯示如StackEdit右方的template，則需在`<head>`的位置加以下兩句。
```
<link rel="stylesheet" href="https://stackedit.io/res-min/themes/base.css" />
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
```

在下面練習一下markdown的features:

## Heading是雙#
**Bold**是雙星**
>Note 是 >

> - 分句是 > - (要和 > 隔一行)

[[Link text](# Heading是雙# #)](#Heading是雙#)

[[URL text](URL Link)](https://www.google.com.hk/)

[ ]中間加^footnotename便是footnote[^footnote]
[^footnote]: 這是個footnote[^footnote]

<kbd>鍵盤按鈕</kbd>

###更多原有的例子:


<i class="icon-cog"></i><i class="icon-pencil"></i><i class="icon-trash"></i><i class="icon-hdd"></i><i class="icon-hdd"></i><i class="icon-upload"></i> <i class="icon-provider-gdrive"></i><i class="icon-provider-dropbox"></i><i class="icon-refresh"></i>
[Click here for more icons](http://www.tutorialspoint.com/ionic/ionic_icons.htm)


Item     | Value
-------- | ---
Computer | $1600
Phone    | $12
Pipe     | $1


| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |


### Definition Lists

**Markdown Extra** has a special syntax for definition lists too:

Term 1
Term 2
:   Definition A
:   Definition B

Term 3

:   Definition C

:   Definition D

	> part of definition D


### Fenced code blocks

GitHub's fenced code blocks are also supported with **Highlight.js** syntax highlighting:

```
// Foo
var bar = 0;
```
|                  | ASCII                        | HTML              |
 ----------------- | ---------------------------- | ------------------
| Single backticks | `'Isn't this fun?'`            | 'Isn't this fun?' |
| Quotes           | `"Isn't this fun?"`            | "Isn't this fun?" |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |


### Table of contents

You can insert a table of contents using the marker `[TOC]`:

[TOC]


### MathJax

You can render *LaTeX* mathematical expressions using **MathJax**, as on [math.stackexchange.com][1]:

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> **Tip:** To make sure mathematical expressions are rendered properly on your website, include **MathJax** into your template:

```
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
```

> **Note:** You can find more information about **LaTeX** mathematical expressions [here][4].


### UML diagrams

You can also render sequence diagrams like this:

```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

And flow charts like this:

```flow
st=>start: Start
e=>end
op=>operation: My Operation
cond=>condition: Yes or No?

st->op->cond
cond(yes)->e
cond(no)->op
```

> **Note:** You can find more information:

> - about **Sequence diagrams** syntax [here][7],
> - about **Flow charts** syntax [here][8].

### Support StackEdit


[![](https://cdn.monetizejs.com/resources/button-32.png)](https://monetizejs.com/authorize?client_id=ESTHdCYOi18iLhhO&summary=true)
