---
layout: default
permalink: index
---

<div markdown="1" align="center">

[:zap: My Projects]({% link _pages/projects.md %})

---
## Posts

{% for post in site.posts %}

### [{{post.title}}]({{post.url}})

{% endfor %}
</div>