---
layout: page
title: Wiki
description: 人越学越觉得自己无知
keywords: 维基, Wiki
comments: false
menu: 维基
permalink: /wiki/
---

> 记多少命令和快捷键会让脑袋爆炸呢？

<ul class="listing">
<li class="listing-item"><a href="https://devhints.io/" target="_blank">Dev Hints</a></li>
{% for wiki in site.wiki %}
{% if wiki.title != "Wiki Template" %}
<li class="listing-item"><a href="{{ site.url }}{{ wiki.url }}" target="_blank">{{ wiki.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
