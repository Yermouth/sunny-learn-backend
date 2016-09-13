---
title: Rancher Exploration
date: "2016-08-07T00:00:00.000Z"
layout: post
readNext: "/"
path: "/Rancher/1"
tag: "Rancher"
---

![enter image description here](https://lh3.googleusercontent.com/mLSqHcxLSO6yxNeHxGAgjhbBv6ybHYJngcHPXuxxGf9BY04dbd9d_62McB6OEDfAu11wCI2B=s4800 "rancher.png")

最近有很多Docker-related的task要處理，所以經常要Google查看不同的Doc和Stack。

一次無意中google search `「Hong Kong Docker」` 和 `「香港 Docker」` 之下發現，docker在香港好像比台灣和其他地方Inactive，meetup group和討論區等好像一段時間沒有活動。

其實在香港的大學Computer Science學系中關於docker的course太少(CSCI4140 雖然沒有讀過，但看course outline好像只教到用dockerfile build image就完了)。雖然自己接觸docker的時間沒有多長，但已經充份感受到Docker的好處，包括其輕量、高度資源隔離和scalability。我有相信不久將來只會有更多公司採用docker在infrastructure中。

在網上有不少關於docker basics的tutorial，在此我便不作重覆，若你沒有接觸過docker，[這網][1]是一個很好的開始。

這帖介紹主要介紹的是[RANCHER][2]中的cattle，Rancher是一個可用作執行和管理container的開源平台。其整潔的UI和多平台整合(包括Cattle, Kubernetes, Docker swarm 和 Mesos)能方便devops們生常的工作。Cattle是Rancher預設中的orchestration platform，並由Rancher團隊主導開源開發。

----------
### 在Google cloud instance Deploy Rancher ####


> **先前準備：**

>  - Google Cloud Platform Account (現時[註冊][3]free trial有60日300美元)
>  - 開新專案

![enter image description here](https://lh3.googleusercontent.com/DpdymMWAGm-gQ0CW1zDuhAyjm77dNpkLP5V1Vx6ESI3uYi7F2KBq7X-clSwREigTSR0ugFnZ=s4800)

----------


###Deploy Rancher 步驟：###

簡略說明： 在google cloud instance啟用ubuntu來建Rancher Server

----------


1.在建立執行個體中，選擇以下設定

```
名稱： rancher
區域： asia-east1-b
機器類型： 2個vCPU (建議rancher的host每個最少有2個vCPU)
開機磁碟： Ubuntu 14.04 LTS
```
然後按 `建立`

![enter image description here](https://lh3.googleusercontent.com/2uCJUm3CUNYEEmWRvtB9BnFDsEc1-GJ6ZNhKLBQ41IFp6V46XIGpx4dOV4NGVrR7HA3hP7gW=s4800 "setup.png")


----------


2.等大約兩三分鐘，Rancher instance便會出現在console中，按 `SSH` 開啟SSH Console

![enter image description here](https://lh3.googleusercontent.com/hyVvfFTjzagHGap908NKBIBK4rzKd56XQZhO2fJbgFZnDaaaM-SntjAOyfgw_tHbL0zwphrZ=s4800 "rancher.png")


----------


3.開啟SSH Console後，在Console中鍵入：
```
$ sudo su
```
取得root's privileges後，根據Docker offical doc[下載][4]docker

下載成功後鍵入：
```
$ docker -v
> Docker version 1.12.0, build 8eab29e
```
確認docker下載成功


----------
4.運行Rancher Server 的container
```
$ #pull rancher/server image, name it as rancher-server and run it
$ sudo docker run -d --restart=always -p 8080:8080 --name=rancher-server rancher/server
> Unable to find image 'rancher/server:latest' locally
> latest: Pulling from rancher/server
> 5a132a7e7af1: Extracting [==>                                                ] 2.785 MB/65.69 MB
> fd2731e4c50c: Download complete
> 28a2f68d1120: Download complete
> a3ed95caeb02: Download complete
> ec0eccabc85c: Downloading [========>                                          ] 21.09 MB/126.7 MB
> ba5257ddca52: Download complete
> 06490d1f14ef: Waiting
> 8bdb5e2ee030: Waiting
> fbbc0b32f5ab: Waiting
> f850155f13f9: Waiting
> b372d6eab456: Waiting
> 2a9a243395a1: Waiting
> 169c9d056b3d: Waiting
> 7025c965e745: Waiting
```


----------


5.用你instance的public ip `(我的是104.199.132.123:8080)` access Rancher Server GUI interface：
![enter image description here](https://lh3.googleusercontent.com/9GmMb0JY86yYB0G_5nCt062TfUbAE2Eu12oZi7IQn-Ydrxi-GwYmuTT7bxvH0fTlfoBP3TJ2=s4800)

被Redirected到Default Cattle環境的setup page

![enter image description here](https://lh3.googleusercontent.com/6nbjZChF35KTb-T7AlLicrjPLpsgYn-UuHUZjseVjjbZ_gr-7P3kHfdJnBlcxIIH6sUh0h2K=s4800)

然後按 `Add Host`

![enter image description here](https://lh3.googleusercontent.com/uFyVKCtPbFtPcrmh80D8TDbCw1rws7JHjrjtZ9IepaCUD4tlRpkc_cN3TSDSiS-ZdOz5FRy1=s4800)

按`save`，後redirect到
![enter image description here](https://lh3.googleusercontent.com/G7NB11_XWL6owkdHSlxoNBfzHCkRMVT18kDS38Qoq726O0iQ4EX3DcLsv8kVPXWGPPJgyq3N=s4800)

----------

6.啟用另一個instance `名稱=rancher2` 重覆step 1至3

我們將 `rancher2` 加入到Rancher Cattle Default environment成為host
在 `rancher2` 中鍵入Rancher Web Interface 中 Step5 的command：
```
$ sudo docker run -d --privileged -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/rancher:/var/lib/rancher rancher/agent:v1.0.2 http://104.199.132.123:8080/v1/scripts/13E48BE5F92FF8040F19:1470556800000:KRRbPnWocWjt36jlwv5T9JOLJZA
> Unable to find image 'rancher/agent:v1.0.2' locally
> v1.0.2: Pulling from rancher/agent
> 5a132a7e7af1: Pull complete
> fd2731e4c50c: Pull complete
> 28a2f68d1120: Pull complete
> a3ed95caeb02: Pull complete
> 7fa4fac65171: Pull complete
> 33de63de5fdb: Pull complete
> d00b3b942272: Pull complete
> Digest: sha256:b0b532d1e891534779d0eb1a01a5717ebfff9ac024db4412ead87d834ba92544
> Status: Downloaded newer image for rancher/agent:v1.0.2
> fd9abc0171ff8105cc3afb51d1de582b885174cc1caa6c5786df0db7aa1bbb14
```

若成功add host，主頁將會顯示：
![enter image description here](https://lh3.googleusercontent.com/8DgcyrHTB4Hd250Pp_EStoQ-WmZUNl_RazjWUTewiJVpkHVJljuoqZFNfmOZ3Korra1Jrnqh=s4800)

可以在`INFRASTRUCTURE`下確認已經加入`rancher2`

-------------
成品：

> Rancher Server `rancher`:
>  
> - Default Rancher Cattle Environment
>  - host: `rancher2`

下次繼續


[1]: https://docs.docker.com/v1.10/windows/
[2]: http://rancher.com/
[3]: https://cloud.google.com/
[4]: https://docs.docker.com/engine/installation/linux/ubuntulinux/
