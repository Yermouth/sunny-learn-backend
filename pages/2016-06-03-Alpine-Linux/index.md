---
title: Alpine Linux
date: "2016-06-03T23:46:37.121Z"
layout: post
readNext: "/AWS-Summit/1"
path: "/alpine-linux/1"
tag: "Alpine"
---

最近在公司要學習用Docker build LEMP stack，所以今天有機會接觸到我來說十分陌生的linux --Alpine Linux

之前我對Alpine Linux的認識為零，以為大部份linux已經預裝了nano editor。然而當我要在Alpine用command line修改一些文件的config時，卻發現Alpine竟然沒有預載nano。更令我驚訝的是Alpine是不support nano的，下載也下載不了，最後唯有用vi解決。

經過今天參考網上的資料，發現了也許是Apline沒有nano的原因 ----- 因為它是十分light weight的。Light weight的好處應該是scale up的時候更快更不佔空間，但也正因為它的設計特別，相對於熱門的ubuntu和centos可能只有較少use case，所以software engineer不一定有機會去接觸到它。

用Docker Alpine Linux也提醒我千萬要記得在docker file 裏 specify image的version，也就是:

>FROM alpine:3.2

而不是
>FROM alpine

要不然後人要找出是哪個Alpine來build image和debug時便會無從入手
