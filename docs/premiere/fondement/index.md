# Les fondements de l'informatique



{% set parent_page = page.parent %}
{% set child_pages = parent_page.children if parent_page else [] %}
{% if child_pages %}
<div class="toc">
  <h2>Au programme</h2>
  <ul>
  {% for child_page in child_pages %}
    {% if child_page != page %}
    <li><a href="/{{ child_page.url }}">{{ child_page.title }}</a></li>
{% endif %}
  {% endfor %}
  </ul>
</div>
{% endif %}
