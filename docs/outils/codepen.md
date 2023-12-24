# Codepen pour le développement Web


<iframe id="cp_embed_PNaGbb" src="https://codepen.io/anon/embed/EVdVpQ?height=450&amp;theme-id=1&amp;slug-hash=PNaGbb&amp;default-tab=result&amp;editable=true" scrolling="no" allowfullscreen="" allowpaymentrequest="" name="CodePen Embed PNaGbb" title="CodePen Embed PNaGbb" class="cp_embed_iframe" style="width:100%;overflow:hidden" height="450" frameborder="0">CodePen Embed Fallback</iframe>

https://flems.io

<div class="flems"></div>

<script src="https://flems.io/flems.html" type="text/javascript" charset="utf-8"></script>
<script>
const flems = Flems(document.querySelector('.flems'), {
    files: [{
        name: 'app.js',
        content: 'm.render(document.body, m("h1", "Hello world"))'
    }],
    links: [{
        name: 'mithril',
        type: 'script',
        url: 'https://unpkg.com/mithril'
    }]
})
</script>