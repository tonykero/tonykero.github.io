const s2h = function(str) {
    const regex = /\s/gi;
    return str.replace(regex, '_')
}

Vue.component('Icon', {
    props: ['name'],
    data: function() {
        return {
            url: "https://github.global.ssl.fastly.net/images/icons/emoji/" + s2h(this.name) + ".png",
            styleObj: {
                width: '24px',
                height: '24px',
                'vertical-align': 'bottom'
            }
        }
    },
    template: '<img :style="styleObj" :src="url"></img>'
})