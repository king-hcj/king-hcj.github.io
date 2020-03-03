---
layout: page
title: Links
description: 没有链接的博客是孤独的
keywords: 个人简历及链接
comments: true
menu: 链接
permalink: /links/
---

> Nothing is given, Everything is earned！

{% for link in site.data.links %}
  {% if link.src == 'www' %}
* [{{ link.name }}]({{ link.url }}){:target='_blank'}
  {% endif %}
{% endfor %}

> 个人简历

{% for link in site.data.links %}
  {% if link.src == 'life' %}
* [{{ link.name }}]({{ link.url }}){:target='_blank'}
  {% endif %}
{% endfor %}
