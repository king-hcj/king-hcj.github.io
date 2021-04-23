---
layout: page
title: About
description: 编码，是一种艺术
keywords: Cheney King, king-hcj
comments: true
menu: 关于
permalink: /about/
---

## 个人相关

> 邮箱：cheneyking23@gmail.com

{% for website in site.data.social %}
* {{ website.sitename }}：[@{{ website.name }}]({{ website.url }}){:target='_blank'}
{% endfor %}

## Skill Keywords

{% for category in site.data.skills %}
### {{ category.name }}
<div class="btn-inline">
{% for keyword in category.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
