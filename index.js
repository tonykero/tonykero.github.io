const sourcePath = "https://tonykero-pages-cdn.surge.sh"
const config = { nav: null, sidebar: null }
Vue.http.get(sourcePath + '/config.json').then(res => {
    return res.json();
}).then(json => {
    config = json;
})

new Docute({
    target: '#docute',
    plugins: [
        docuteKatex(),
        docuteMermaid()
    ],
    sourcePath,
    nav: config.nav,
    sidebar: config.sidebar
})