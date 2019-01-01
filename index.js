const sourcePath = "https://raw.githubusercontent.com/tonykero/tonykero.github.io/pages-cdn"

Vue.http.get(sourcePath + '/config.json').then(res => {
    return res.json();
}).then(json => {
    new Docute({
        target: '#docute',
        plugins: [
            docuteKatex(),
            docuteMermaid()
        ],
        sourcePath,
        nav: json.nav,
        sidebar: json.sidebar
    })
})
