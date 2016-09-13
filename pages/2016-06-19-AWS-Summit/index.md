---
title: 參加 AWS Hong Kong Enterprise Summit 2016 後感
date: "2016-06-19T00:00:00.000Z"
layout: post
readNext: "/Markdown/1"
path: "/AWS-Summit/1"
tag: "AWS"
language: Chinese
---

第一次參加這類大型活動，因為手上還有工作，只請了半天假。活動過後有點後悔下午才到現場，趕不上big data的talk，更後悔沒有多拍幾幅照片。

AWS technology track sessions 的題材全部圍繞現時最炙手可熱的IT技術，包括big data, cloud security, IoT, mobile 和DevOps。我參加了的後三場session幾乎每場都爆滿，有不少人在聽講時用紙筆記下筆記，又或者不時用手機相機記錄有用的ppt slides(當然包括我)。

AWS場內的氣氛與apple發佈會的氛圍有些許相似，但三個講者中有兩個講者demo時出錯了。雖然講者都能暫時將問題順利帶過，但這提醒我以後若有機會進行presentation/pitching時，現場的流程試演和是充 份的後備方案是必須的，要不然出bug的時候只有自己尷尬地站在台上什麼都做不了的可能。

在幾個新AWS feature中，最吸引我的是有關cloud infrastructure pipeline的service。AWS其中一個賣點當然是其包羅萬有的cloud computing services。

目的就是吸引你將全公司所有的能deploy上cloud的system都deploy上AWS的environment。(然後就脫離不了AWS的魔掌)

![AWS Code deploy process](https://lh3.googleusercontent.com/vxVCnhqdzbxcycEejDY6qhxTyfdEmVwLVHk65tAVxxFHKhAoo8NK65nVnlijSf6nGsqendPf=s480)

![AWS Code Pipeline](https://lh3.googleusercontent.com/bdE-xKx4cCPKzVigSSJ00yVVc5h3kek0Hjs1n_ApepnsfjFVU956WHM1BOghwqZFHx8cMTnM=s480)

新的CodePipeline能幫助Developers更迅速和簡便地commit changes，只要簡單一push，就可以從AWS提供的GUI中監察不同instance build和deploy的進程。雖然這些服務需要獨立收費，但價錢並不昂貴，對於「懶惰」的software engineer來說是一個不錯的選擇。

當日的投影片的連結: http://www.slideshare.net/AmazonWebServices/tag/2016hkgsummit?mkt_tok=eyJpIjoiWlRVMlpHSXlOREE1WVdGaCIsInQiOiJzbDdWQWhpeTQ0MTJVdEltV3JEblo3TStpSEJ1aWt4ZVV2XC80eFJQRkQrc0U0OUQxWUNzQ1RQOHFnZ2pwRE10b1wvbEtMaWhZeFdJOUlqXC9RWlQ5V3dJSWJ1M2xSSlBcL0o0Q0d1NnErV3NZNWM9In0%3D
